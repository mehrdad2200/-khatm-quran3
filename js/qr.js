/* انتقال اطلاعات به گوشی دیگر با QR (تولید QR داخلی، بدون کتابخانه و بدون اینترنت) */
const QRT={ecc:[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28]],
 blk:[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49]]};
function qrRaw(v){let r=(16*v+128)*v+64;if(v>=2){const a=Math.floor(v/7)+2;r-=(25*a-10)*a-55;if(v>=7)r-=36}return r}
function gfMul(x,y){let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z&255}
function rsDiv(deg){const r=new Array(deg).fill(0);r[deg-1]=1;let root=1;for(let i=0;i<deg;i++){for(let j=0;j<r.length;j++){r[j]=gfMul(r[j],root);if(j+1<r.length)r[j]^=r[j+1]}root=gfMul(root,2)}return r}
function rsRem(data,div){const r=div.map(()=>0);for(const b of data){const f=b^r.shift();r.push(0);div.forEach((c,i)=>r[i]^=gfMul(c,f))}return r}
function qrMake(bytes,ecl){ecl=ecl|0;let v,cap;
 for(v=1;v<=40;v++){cap=(qrRaw(v)>>3)-QRT.ecc[ecl][v]*QRT.blk[ecl][v];if(4+(v<=9?8:16)+bytes.length*8<=cap*8)break}
 if(v>40)return null;const size=v*4+17;
 let bits=[];const put=(val,n)=>{for(let i=n-1;i>=0;i--)bits.push((val>>>i)&1)};
 put(4,4);put(bytes.length,v<=9?8:16);bytes.forEach(b=>put(b,8));put(0,Math.min(4,cap*8-bits.length));put(0,(8-bits.length%8)%8);
 for(let p=0xEC;bits.length<cap*8;p^=0xEC^0x11)put(p,8);
 const dc=[];for(let i=0;i<bits.length;i+=8){let x=0;for(let k=0;k<8;k++)x=x<<1|bits[i+k];dc.push(x)}
 const nb=QRT.blk[ecl][v],eb=QRT.ecc[ecl][v],raw=qrRaw(v)>>3,ns=nb-raw%nb,sl=Math.floor(raw/nb),div=rsDiv(eb),blocks=[];
 for(let i=0,k=0;i<nb;i++){const l=sl-eb+(i<ns?0:1),d=dc.slice(k,k+l);k+=l;const e=rsRem(d,div);if(i<ns)d.push(0);blocks.push(d.concat(e))}
 const all=[];for(let i=0;i<blocks[0].length;i++)blocks.forEach((b,j)=>{if(i!==sl-eb||j>=ns)all.push(b[i])});
 const M=Array.from({length:size},()=>new Array(size).fill(false)),Fn=Array.from({length:size},()=>new Array(size).fill(false));
 const sf=(x,y,d)=>{M[y][x]=d;Fn[y][x]=true};
 for(let i=0;i<size;i++){sf(6,i,i%2===0);sf(i,6,i%2===0)}
 const fnd=(x,y)=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const d=Math.max(Math.abs(dx),Math.abs(dy)),xx=x+dx,yy=y+dy;if(xx>=0&&xx<size&&yy>=0&&yy<size)sf(xx,yy,d!==2&&d!==4)}};
 fnd(3,3);fnd(size-4,3);fnd(3,size-4);
 const al=[];if(v>1){const na=Math.floor(v/7)+2,st=v===32?26:Math.ceil((v*4+4)/(na*2-2))*2;al.push(6);for(let p=size-7;al.length<na;p-=st)al.splice(1,0,p)}
 al.forEach((x,i)=>al.forEach((y,j)=>{if(!((i===0&&j===0)||(i===0&&j===al.length-1)||(i===al.length-1&&j===0)))for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)sf(x+dx,y+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)}));
 const bit=(x,i)=>((x>>>i)&1)!==0;
 const fmt=m=>{const d=(ecl===0?1:0)<<3|m;let r=d;for(let i=0;i<10;i++)r=(r<<1)^((r>>>9)*0x537);const b=(d<<10|r)^0x5412;
  for(let i=0;i<=5;i++)sf(8,i,bit(b,i));sf(8,7,bit(b,6));sf(8,8,bit(b,7));sf(7,8,bit(b,8));for(let i=9;i<15;i++)sf(14-i,8,bit(b,i));
  for(let i=0;i<8;i++)sf(size-1-i,8,bit(b,i));for(let i=8;i<15;i++)sf(8,size-15+i,bit(b,i));sf(8,size-8,true)};
 fmt(0);
 if(v>=7){let r=v;for(let i=0;i<12;i++)r=(r<<1)^((r>>>11)*0x1F25);const b=v<<12|r;for(let i=0;i<18;i++){const c=bit(b,i),a=size-11+i%3,q=Math.floor(i/3);sf(a,q,c);sf(q,a,c)}}
 let i=0;for(let right=size-1;right>=1;right-=2){if(right===6)right=5;for(let vert=0;vert<size;vert++)for(let j=0;j<2;j++){const x=right-j,up=((right+1)&2)===0,y=up?size-1-vert:vert;if(!Fn[y][x]&&i<all.length*8){M[y][x]=bit(all[i>>>3],7-(i&7));i++}}}
 const mk=[(x,y)=>(x+y)%2===0,(x,y)=>y%2===0,(x,y)=>x%3===0,(x,y)=>(x+y)%3===0,(x,y)=>(Math.floor(x/3)+Math.floor(y/2))%2===0,(x,y)=>x*y%2+x*y%3===0,(x,y)=>(x*y%2+x*y%3)%2===0,(x,y)=>((x+y)%2+x*y%3)%2===0];
 const app=m=>{for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(!Fn[y][x]&&mk[m](x,y))M[y][x]=!M[y][x]};
 const pen=()=>{let r=0;const line=g=>{let run=1;for(let k=1;k<=size;k++){if(k<size&&g(k)===g(k-1))run++;else{if(run>=5)r+=3+run-5;run=1}}};
  for(let y=0;y<size;y++)line(k=>M[y][k]);for(let x=0;x<size;x++)line(k=>M[k][x]);
  for(let y=0;y<size-1;y++)for(let x=0;x<size-1;x++){const c=M[y][x];if(c===M[y][x+1]&&c===M[y+1][x]&&c===M[y+1][x+1])r+=3}
  const pt=[1,0,1,1,1,0,1],chk=(g0)=>{const g=i=>i<size&&g0(i);for(let k=0;k+10<=size;k++){let a=true,b=true;for(let q=0;q<7;q++){if((g(k+q)?1:0)!==pt[q])a=false;if((g(k+4+q)?1:0)!==pt[q])b=false}
    if(a){let w=true;for(let q=7;q<11;q++)if(g(k+q))w=false;if(w)r+=40}if(b){let w=true;for(let q=0;q<4;q++)if(g(k+q))w=false;if(w)r+=40}}};
  for(let y=0;y<size;y++)chk(k=>M[y][k]);for(let x=0;x<size;x++)chk(k=>M[k][x]);
  let dk=0;M.forEach(row=>row.forEach(c=>{if(c)dk++}));r+=Math.floor(Math.abs(dk*20-size*size*10)/(size*size))*10;return r};
 let best=0,bp=1e9;for(let m=0;m<8;m++){app(m);fmt(m);const p=pen();if(p<bp){bp=p;best=m}app(m)}
 app(best);fmt(best);return{M,size,v}}
function qrDraw(cv,q,px){const z=4,n=q.size+z*2;cv.width=cv.height=n*px;const c=cv.getContext("2d");c.fillStyle="#fff";c.fillRect(0,0,cv.width,cv.height);c.fillStyle="#000";q.M.forEach((r,y)=>r.forEach((d,x)=>{if(d)c.fillRect((x+z)*px,(y+z)*px,px,px)}))}
/* ---- فشرده‌سازی و بسته‌بندی ---- */
const b64u=u=>{let s="";u.forEach(b=>s+=String.fromCharCode(b));return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};
const unb64u=s=>{s=s.replace(/-/g,"+").replace(/_/g,"/");while(s.length%4)s+="=";const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u};
async function zipB(u8,mode){const S=mode==="c"?CompressionStream:DecompressionStream,st=new S("deflate-raw"),w=st.writable.getWriter();w.write(u8);w.close();return new Uint8Array(await new Response(st.readable).arrayBuffer())}
async function xferPayload(){const s=uSnap(),o={cfg:s.cfg,done:s.done};
 /* حذف بخش‌های سنگین و غیرضروری */
 delete o.cfg.dl;delete o.cfg.seen;const raw=new TextEncoder().encode(JSON.stringify(o));
 const z=typeof CompressionStream!=="undefined"?await zipB(raw,"c"):raw;return"tr="+(typeof CompressionStream!=="undefined"?"z":"r")+b64u(z)}
async function xferParse(h){const m=/tr=([zr])([A-Za-z0-9_-]+)/.exec(h);if(!m)return null;let u=unb64u(m[2]);if(m[1]==="z")u=await zipB(u,"d");return JSON.parse(new TextDecoder().decode(u))}
V9P.xfer=()=>`${pgH("انتقال به گوشی دیگر","اطلاعات کاربر فعال را با یک QR به گوشی دیگر ببرید")}<div class="card"><p class="muted" style="line-height:2">روی گوشی مقصد، برنامه را باز کنید و دوربین را روی QR بگیرید (یا از دکمهٔ اسکن همین صفحه استفاده کنید). اطلاعات (ردیف، تنظیمات و پیشرفت) منتقل می‌شود و می‌توانید آن را به‌عنوان کاربر جدید اضافه یا جایگزین کنید.</p><button class="btn g" data-act="xf-make">${ic("link")} ساخت QR از اطلاعات من</button></div><div id="xfo"></div><div class="card"><button class="btn" data-act="xf-scan">${ic("search")} اسکن QR (روی گوشی مقصد)</button><div id="xfv"></div></div>`;
ACT["xf-make"]=async()=>{const o=$("#xfo");o.innerHTML='<p class="muted">در حال ساخت…</p>';const pl=await xferPayload(),url=appUrl()+"#"+pl;
 const q=url.length<=2300?qrMake(new TextEncoder().encode(url),0):null;
 o.innerHTML=q?`<div class="card" style="text-align:center"><canvas id="xfc" style="width:min(100%,320px);background:#fff;border-radius:12px"></canvas><p class="muted" style="margin-top:8px">حجم: ${fa(url.length)} نویسه${url.length>1200?" — QR بزرگ است؛ گوشی را نزدیک و ثابت نگه دارید":""}</p><div class="row"><button class="btn" data-act="xf-copy">${ic("copy")} کپی پیوند</button></div></div>`:`<div class="card"><p class="muted" style="line-height:2">اطلاعات برای یک QR زیاد است (${fa(url.length)} نویسه). از «کپی پیوند» استفاده کنید و آن را در پیام‌رسان بفرستید، یا از «پشتیبان‌گیری» فایلی بسازید.</p><button class="btn g" data-act="xf-copy">${ic("copy")} کپی پیوند</button></div>`;
 window._xfu=url;if(q)qrDraw($("#xfc"),q,8)};
ACT["xf-copy"]=async()=>{try{await navigator.clipboard.writeText(window._xfu);toast("پیوند کپی شد")}catch(e){prompt("پیوند را کپی کنید",window._xfu)}};
ACT["xf-scan"]=async()=>{const box=$("#xfv");if(!("BarcodeDetector"in window)||!navigator.mediaDevices){box.innerHTML='<p class="muted" style="margin-top:8px;line-height:2">اسکن داخلی در این مرورگر پشتیبانی نمی‌شود. دوربین پیش‌فرض گوشی را روی QR بگیرید و پیوند را باز کنید.</p>';return}
 try{const st=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),v=document.createElement("video");v.setAttribute("playsinline","");v.muted=true;v.srcObject=st;v.style.cssText="width:100%;border-radius:12px;margin-top:8px";box.innerHTML="";box.appendChild(v);await v.play();const det=new BarcodeDetector({formats:["qr_code"]});let on=true;const stop=()=>{on=false;st.getTracks().forEach(t=>t.stop())};window._xfstop=stop;
  const tick=async()=>{if(!on)return;try{const r=await det.detect(v);if(r.length&&/tr=[zr]/.test(r[0].rawValue)){stop();const d=await xferParse(r[0].rawValue.split("#")[1]||r[0].rawValue);box.innerHTML="";return xferAsk(d)}}catch(e){}setTimeout(tick,250)};tick()}catch(e){box.innerHTML='<p class="muted" style="margin-top:8px">اجازهٔ دوربین داده نشد</p>'}};
let XD=null;
function xferAsk(d){if(!d||!d.cfg)return toast("اطلاعات معتبر نیست");XD=d;const nm=esc(d.cfg.name||"کاربر");
 sheet(`<h2>دریافت اطلاعات</h2><p class="muted" style="line-height:2">اطلاعات «${nm}» (ردیف ${fa(d.cfg.n||"؟")}) دریافت شد. چه کنیم؟</p><div class="row"><button class="btn g" data-act="xf-new">افزودن به‌عنوان کاربر جدید</button></div><div class="row" style="margin-top:8px"><button class="btn" data-act="xf-rep">جایگزین کاربر فعلی</button><button class="btn" data-close>انصراف</button></div><p class="muted" style="margin-top:8px">«جایگزین» اطلاعات کاربر فعلی را عوض می‌کند (یک نسخهٔ پشتیبان خودکار پیش از آن ذخیره می‌شود).</p>`)}
ACT["xf-new"]=()=>{const d=XD;if(!d)return;const r=uFlush(),id="u"+Date.now().toString(36);d.cfg.ob=1;d.cfg.remAsk=1;ls.set("khatm-u-"+id,{cfg:d.cfg,done:d.done||{},tasbih:null});r.list.push({id,name:d.cfg.name||"کاربر"});ls.set(UK,r);uSwitch(id)};
ACT["xf-rep"]=()=>{const d=XD;if(!d)return;try{abkRun(true)}catch(e){}const keep={};["dl","seen"].forEach(k=>keep[k]=cfg[k]);d.cfg.ob=1;Object.assign(d.cfg,keep);ls.set("khatm-cfg",d.cfg);ls.set("khatm-done",d.done||{});const r=uReg();const me=r.list.find(x=>x.id===r.act);if(me)me.name=d.cfg.name;ls.set(UK,r);ls.set("khatm-u-"+r.act,{cfg:d.cfg,done:d.done||{},tasbih:null});location.reload()};
/* دریافت هنگام باز شدن پیوند */
(function(){const h=location.hash;if(/tr=[zr]/.test(h)){const hh=h.slice(1);history.replaceState(null,"",location.pathname);setTimeout(async()=>{try{xferAsk(await xferParse(hh))}catch(e){toast("پیوند انتقال معتبر نیست")}},1800)}})();
