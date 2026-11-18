/* نسخهٔ ۹: جست‌وجو، سجده‌ها، حفظ، آزمون، قضا، روزه، جلسات، کارت‌ساز، چاپ، یادآور مناسبت، پس‌زمینه، پشتیبان خودکار */
const V9P={},V9B={};
const DAYMS=864e5,pad2=n=>String(n).padStart(2,"0");
const pgH=(t,s)=>`<h2 style="margin-top:12px">${t}</h2>${s?`<p class="muted">${s}</p>`:""}`;
const gdate=ms=>{const d=new Date(ms);return[d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate()]};
const jfull=(y,m,d)=>fa(d)+" "+MON[m-1]+" "+fa(y);
function v9go(s){more(s)}
ACT["v9-go"]=t=>{sub=t.dataset.p;cur="more";go("more")};
/* ---------- فهرست «بیشتر» ---------- */
const V9MENU=[["search","جست‌وجو در قرآن","search"],["hifz","حفظ و مرور","repeat"],["quiz","آزمون حفظ","check"],["saj","آیات سجده","moon"],["pray","اوقات شرعی و قبله","sun"],["fast","روزه‌های مستحب","moon"],["qaza","قضای نماز و روزه","list"],["meet","جلسات ختم","users"],["cards","کارت‌ساز (تبریک، تسلیت، دعوت)","share"],["occ","یادآور مناسبت‌ها","bell"],["print","چاپ ردیف‌ها (PDF)","text"],["look","پس‌زمینه، زبان و ظاهر","gear"],["xfer","انتقال به گوشی دیگر (QR)","link"],["abk","پشتیبان خودکار","cloud"]];
/* ---------- نرمال‌سازی و جست‌وجو (18) ---------- */
const nrmq=s=>String(s).replace(/[ً-ٰٟۖ-ۭ࣓-ࣿـ]/g,"").replace(/[أإآٱ]/g,"ا").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/[ةۀ]/g,"ه").replace(/ؤ/g,"و").replace(/ئ/g,"ی").replace(/[‌‍]/g," ").replace(/[٠-٩]/g,c=>c.charCodeAt(0)-1632).replace(/[۰-۹]/g,c=>c.charCodeAt(0)-1776).toLowerCase().replace(/\s+/g," ").trim();
let NQ=null,NT={};
function nq(){if(!NQ){NQ=[];for(let s=0;s<114;s++)for(let a=0;a<QURAN[s].length;a++)NQ.push(nrmq(QURAN[s][a]))}return NQ}
function ntr(){const T=window.TR&&TR[cfg.tr];if(!T)return null;if(!NT[cfg.tr]){const A=[];for(let s=0;s<114;s++)for(let a=0;a<T[s].length;a++)A.push(nrmq(T[s][a]));NT[cfg.tr]=A}return NT[cfg.tr]}
V9P.search=()=>`${pgH("جست‌وجو در قرآن","در متن عربی و ترجمهٔ فارسی؛ با یا بدون اعراب")}<div class="card"><input id="sq" class="inp" type="search" placeholder="کلمه یا عبارت، مثلاً: صبر یا الصابرین" autocomplete="off"><div class="row" style="margin-top:8px"><button class="chip on" data-act="sq-m" data-m="0">عربی و ترجمه</button><button class="chip" data-act="sq-m" data-m="1">فقط عربی</button><button class="chip" data-act="sq-m" data-m="2">فقط ترجمه</button></div><p class="muted" id="sqn" style="margin-top:8px"></p></div><div id="sqr"></div>`;
let SQM=0,SQT=0;
ACT["sq-m"]=t=>{SQM=+t.dataset.m;$$("[data-act=sq-m]").forEach(b=>b.classList.toggle("on",b===t));doSearch()};
function hl(txt,q){const n=nrmq(txt);let out="",i=0;const w=q.split(" ").filter(Boolean)[0]||"";if(!w)return txt;
 /* برجسته‌سازی ساده روی متن بدون اعراب با نگاشت کاراکتر به کاراکتر */
 const map=[];let plain="";for(let k=0;k<txt.length;k++){const c=nrmq(txt[k]);if(c.length&&c!==" "||txt[k]===" "){map.push(k);plain+=txt[k]===" "?" ":c}}
 const p=plain.indexOf(w);if(p<0)return txt;const a=map[p],b=(map[p+w.length-1]||txt.length-1)+1;let e=b;while(e<txt.length&&/[ً-ٰٟۖ-ۭ]/.test(txt[e]))e++;
 return txt.slice(0,a)+"<mark>"+txt.slice(a,e)+"</mark>"+txt.slice(e)}
function doSearch(){const q=nrmq(($("#sq")||{}).value||""),box=$("#sqr"),cn=$("#sqn");if(!box)return;
 if(q.length<2){box.innerHTML="";cn.textContent=q?"حداقل دو حرف بنویسید":"";return}
 const A=nq(),B=(SQM!==1&&ntr())||null;if(SQM!==1&&!window.TR||SQM!==1&&!TR[cfg.tr]){cn.textContent="در حال بارگیری ترجمه…";loadTR(cfg.tr).then(()=>doSearch());if(SQM===2)return}
 let R=[];for(let i=0;i<A.length;i++){const ia=SQM!==2&&A[i].includes(q),it=B&&SQM!==1&&B[i].includes(q);if(ia||it)R.push(i)}
 if(!R.length&&SQM!==2){const q2=q.replace(/ا/g,"");if(q2.length>=2)for(let i=0;i<A.length;i++)if(A[i].replace(/ا/g,"").includes(q2))R.push(i)}
 const T=window.TR&&TR[cfg.tr];cn.textContent=R.length?fa(R.length)+" آیه یافت شد"+(R.length>50?" (۵۰ مورد اول نمایش داده می‌شود)":""):"موردی پیدا نشد";
 box.innerHTML=R.slice(0,50).map(i=>{const[s,j]=F[i];return`<button class="card sres" data-act="sq-open" data-i="${i}"><b class="mon">${SURA_FA[s]} · ${fa(j+1)}</b><div class="ar" style="font-size:22px;line-height:2.1;margin-top:4px">${SQM!==2&&A[i].includes(q)?hl(QURAN[s][j],q):QURAN[s][j]}</div>${T&&SQM!==1?`<div class="fa muted" style="margin-top:4px">${hl(T[s][j],q)}</div>`:""}</button>`}).join("")}
ACT["sq-open"]=t=>ayahSheet(+t.dataset.i);
V9B.search=()=>{const i=$("#sq");let tm;i.oninput=()=>{clearTimeout(tm);tm=setTimeout(doSearch,250)};if(!window.TR||!TR[cfg.tr])loadTR(cfg.tr)};
/* ---------- آیات سجده (29) ---------- */
const SJD=[[7,206,0],[13,15,0],[16,50,0],[17,109,0],[19,58,0],[22,18,0],[22,77,0],[25,60,0],[27,26,0],[32,15,1],[38,24,0],[41,37,1],[53,62,1],[84,21,0],[96,19,1]];
const sjAt=i=>{const[s,j]=F[i];return SJD.find(x=>x[0]===s+1&&x[1]===j+1)};
V9P.saj=()=>`${pgH("آیات سجده","۱۵ آیهٔ سجده در قرآن؛ ۴ مورد واجب و ۱۱ مورد مستحب")}<div class="card"><p class="muted" style="line-height:2">در چهار سورهٔ «سجده، فصلت، نجم و علق» با خواندن یا شنیدن آیهٔ سجده، سجدهٔ فوری واجب است (و خواندن این سوره‌ها در نماز واجب جایز نیست). برای احکام دقیق به مرجع تقلید خود رجوع کنید.</p></div>${SJD.map(x=>`<button class="item" data-act="sj-go" data-i="${OFF[x[0]-1]+x[1]-1}"><div class="dot" style="background:${x[2]?"var(--gold);color:#1a1405":"linear-gradient(135deg,var(--a1),var(--a2));color:#fff"}">۩</div><div><div class="t1">سورهٔ ${SURA_FA[x[0]-1]} · آیهٔ ${fa(x[1])}</div><div class="t2">${x[2]?"سجدهٔ واجب":"سجدهٔ مستحب"}</div></div>${ic("prev")}</button>`).join("")}`;
ACT["sj-go"]=t=>ayahSheet(+t.dataset.i);
/* ---------- حالت حفظ و تکرار (20, 21) ---------- */
function hifzApply(){const el=$("#reader");if(!el)return;el.classList.toggle("hf1",cfg.hifz===1||cfg.hifz===2);el.classList.toggle("hf2",cfg.hifz===2);
 const b=$("[data-hifz]",el);if(b)b.classList.toggle("on",!!cfg.hifz)}
const _reader=reader;
reader=function(){const r=_reader.apply(this,arguments);try{const el=$("#reader");if(el&&!el.hidden){const rh=$(".rh",el);if(rh&&!$("[data-hifz]",rh)){const b=document.createElement("button");b.className="ib";b.dataset.hifz="1";b.setAttribute("aria-label","حالت حفظ");b.innerHTML=ic("repeat");rh.appendChild(b)}
 $$(".v[data-i]",el).forEach(v=>{const x=sjAt(+v.dataset.i);if(x&&!$(".sjt",v)){const d=document.createElement("div");d.className="sjt";d.textContent="۩ "+(x[2]?"سجدهٔ واجب":"سجدهٔ مستحب");v.appendChild(d)}});hifzApply()}}catch(e){}return r};
document.addEventListener("click",e=>{const el=$("#reader");if(!el||el.hidden||!el.contains(e.target))return;
 const hb=e.target.closest("[data-hifz]");if(hb){e.stopPropagation();e.preventDefault();hifzSheet();return}
 if(cfg.hifz&&!e.target.closest("button")){const v=e.target.closest(".v[data-i]");if(v){e.stopPropagation();e.preventDefault();v.classList.toggle("rev")}}},true);
const RPN=[1,3,5,7,10,20];
function hifzSheet(){const h=cfg.hifz|0,rn=cfg.repN||1;
 sheet(`<h2>حالت حفظ و تکرار</h2><p class="muted">برای حفظ آیه‌ها: متن را پنهان کنید، از حافظه بخوانید و با لمس هر آیه آن را ببینید.</p>
 <div class="field">پنهان‌سازی</div><div class="row"><button class="chip ${h===0?"on":""}" data-act="hf-set" data-v="0">خاموش</button><button class="chip ${h===1?"on":""}" data-act="hf-set" data-v="1">پنهان‌کردن عربی</button><button class="chip ${h===2?"on":""}" data-act="hf-set" data-v="2">عربی و ترجمه</button></div>
 <div class="field" style="margin-top:14px">تکرار هنگام پخش صوت</div><div class="row"><button class="chip ${(cfg.rep|0)===0?"on":""}" data-act="hf-rep" data-v="0">بدون تکرار</button><button class="chip ${cfg.rep===1?"on":""}" data-act="hf-rep" data-v="1">تکرار آیه</button><button class="chip ${cfg.rep===2?"on":""}" data-act="hf-rep" data-v="2">تکرار کل بخش</button></div>
 <div class="field" style="margin-top:14px">تعداد تکرار هر آیه</div><div class="row">${RPN.map(n=>`<button class="chip ${rn===n?"on":""}" data-act="hf-n" data-v="${n}">${fa(n)}×</button>`).join("")}</div>
 <p class="muted" style="margin-top:10px">در حالت «تکرار آیه»، هر آیه به تعداد انتخابی پخش می‌شود و بعد به آیهٔ بعد می‌رود. با «خاموش» همه‌چیز مثل قبل است.</p>`)}
ACT["hf-set"]=t=>{cfg.hifz=+t.dataset.v;save();$$("#reader .v.rev").forEach(v=>v.classList.remove("rev"));hifzApply();hifzSheet()};
ACT["hf-rep"]=t=>{cfg.rep=+t.dataset.v;save();hifzSheet();typeof renderBot==="function"&&renderBot()};
ACT["hf-n"]=t=>{cfg.repN=+t.dataset.v;save();hifzSheet()};
V9P.hifz=()=>`${pgH("حفظ و مرور","")}<div class="card"><b>چگونه حفظ کنیم؟</b><ol class="ul"><li>یک ردیف یا سوره را باز کنید و دکمهٔ <b>تکرار</b> (${ic("repeat")}) را در بالای صفحه بزنید.</li><li>«پنهان‌کردن عربی» را انتخاب کنید؛ متن تار می‌شود و با لمس هر آیه نمایان می‌شود.</li><li>تکرار آیه را روی ۳ تا ۲۰ بار بگذارید و پخش را بزنید تا قاری هر آیه را چند بار بخواند.</li><li>سپس در بخش «آزمون حفظ» خودتان را بسنجید.</li></ol></div><div class="card"><button class="btn g" data-act="v9-go" data-p="quiz">${ic("check")} رفتن به آزمون حفظ</button></div><div class="card"><button class="btn" data-act="hf-q">${ic("book")} باز کردن بخشی برای حفظ</button></div>`;
ACT["hf-q"]=()=>{const r=cfg.n?cfg.n-1:0;reader(r,null,null,false);setTimeout(hifzSheet,300)};
/* ---------- آزمون حفظ (22) ---------- */
let QZ=null;
V9P.quiz=()=>{if(QZ&&QZ.run)return quizQ();
 return `${pgH("آزمون حفظ","۱۰ پرسش؛ آیهٔ بعدی را پیدا کنید یا نام سوره را حدس بزنید")}<div class="card"><div class="field">محدودهٔ آیه‌ها</div><div class="row"><button class="chip on" data-act="qz-s" data-v="today">بخش امروز</button><button class="chip" data-act="qz-s" data-v="j30">جزء ۳۰</button><button class="chip" data-act="qz-s" data-v="all">کل قرآن</button></div><div class="field" style="margin-top:12px">نوع پرسش</div><div class="row"><button class="chip on" data-act="qz-k" data-v="mix">ترکیبی</button><button class="chip" data-act="qz-k" data-v="next">آیهٔ بعدی</button><button class="chip" data-act="qz-k" data-v="sura">نام سوره</button></div><button class="btn g" style="margin-top:14px" data-act="qz-go">شروع آزمون</button>${QZ&&QZ.score!=null?`<p class="muted" style="margin-top:10px">نتیجهٔ آخرین آزمون: ${fa(QZ.score)} از ${fa(QZ.q.length)}</p>`:""}</div>`};
let QZS="today",QZK="mix";
ACT["qz-s"]=t=>{QZS=t.dataset.v;$$("[data-act=qz-s]").forEach(b=>b.classList.toggle("on",b===t))};
ACT["qz-k"]=t=>{QZK=t.dataset.v;$$("[data-act=qz-k]").forEach(b=>b.classList.toggle("on",b===t))};
const rnd=n=>Math.floor(Math.random()*n),shuf=a=>{for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
ACT["qz-go"]=()=>{let lo=0,hi=6235;if(QZS==="today"&&cfg.n&&PARTS[cfg.n-1]){lo=PARTS[cfg.n-1][0];hi=PARTS[cfg.n-1][1]}else if(QZS==="j30"){lo=OFF[77];hi=6235}
 if(hi-lo<6){lo=0;hi=6235}
 const ok=i=>i<6235&&F[i][0]===F[i+1][0]&&QURAN[F[i][0]][F[i][1]].split(" ").length>=4&&QURAN[F[i+1][0]][F[i+1][1]].length>8,pool=[];for(let i=lo;i<=hi;i++)if(ok(i))pool.push(i);
 if(pool.length<4){toast("آیهٔ کافی در این محدوده نیست");return}
 const q=[];shuf(pool);
 for(let k=0;k<10&&k<pool.length;k++){const i=pool[k],kind=QZK==="mix"?(k%2?"sura":"next"):QZK;
  if(kind==="next"){const[s,j]=F[i],ans=i+1,ops=[ans];let g=0;while(ops.length<4&&g++<200){const x=lo+rnd(hi-lo+1);if(x!==ans&&x!==i&&x<6236&&!ops.includes(x)&&QURAN[F[x][0]][F[x][1]].length>6)ops.push(x)}q.push({k:"next",i,ans,ops:shuf(ops)})}
  else{const s=F[i][0],ops=[s];while(ops.length<4){const x=rnd(114);if(!ops.includes(x))ops.push(x)}q.push({k:"sura",i,ans:s,ops:shuf(ops)})}}
 QZ={run:1,q,n:0,sc:0,pick:null};more("quiz")};
function quizQ(){const z=QZ,q=z.q[z.n];if(!q){z.run=0;z.score=z.sc;return`${pgH("پایان آزمون","")}<div class="card" style="text-align:center"><div class="big" style="font-size:44px;font-weight:800;color:var(--gold)">${fa(z.sc)} از ${fa(z.q.length)}</div><p class="muted" style="margin:8px 0">${z.sc>=9?"آفرین! عالی بود":z.sc>=6?"خوب بود؛ کمی دیگر مرور کنید":"با مرور بیشتر بهتر می‌شود"}</p><button class="btn g" data-act="qz-again">آزمون جدید</button></div>`}
 const[s,j]=F[q.i],ayT=QURAN[s][j],pk=z.pick;
 const opt=q.ops.map(o=>{const txt=q.k==="next"?`<span class="ar" style="font-size:22px;line-height:2">${QURAN[F[o][0]][F[o][1]]}</span>`:"سورهٔ "+SURA_FA[o],cls=pk==null?"":o===q.ans?"ok":o===pk?"bad":"";return`<button class="item qzo ${cls}" data-act="qz-p" data-o="${o}" ${pk!=null?"disabled":""}><div style="flex:1;text-align:right">${txt}</div></button>`}).join("");
 return`${pgH("پرسش "+fa(z.n+1)+" از "+fa(z.q.length),"")}<div class="card"><p class="muted">${q.k==="next"?"آیهٔ بعد از این آیه کدام است؟":"این آیه از کدام سوره است؟"}</p><div class="ar" style="font-size:26px;line-height:2.2;margin-top:6px">${ayT}</div></div>${opt}${pk!=null?`<button class="btn g" style="margin-top:10px" data-act="qz-n">${z.n+1>=z.q.length?"دیدن نتیجه":"پرسش بعد"}</button>`:""}`}
ACT["qz-p"]=t=>{const z=QZ,q=z.q[z.n];if(z.pick!=null)return;z.pick=+t.dataset.o;if(z.pick===q.ans)z.sc++;more("quiz")};
ACT["qz-n"]=()=>{QZ.n++;QZ.pick=null;more("quiz")};
ACT["qz-again"]=()=>{QZ={score:QZ.score};more("quiz")};
/* ---------- قضای نماز و روزه (61) ---------- */
const QZN=[["fajr","نماز صبح"],["zuhr","نماز ظهر"],["asr","نماز عصر"],["maghrib","نماز مغرب"],["isha","نماز عشا"],["fast","روزه (روز)"]];
const qzd=()=>{if(!cfg.qz)cfg.qz={c:{},i:{}};return cfg.qz};
V9P.qaza=()=>{const q=qzd();return`${pgH("قضای نماز و روزه","شمارندهٔ باقی‌ماندهٔ قضاها؛ با هر ادا یکی کم کنید")}${QZN.map(([k,n])=>{const c=q.c[k]|0,i=q.i[k]|0,p=i>0?Math.max(0,Math.min(100,Math.round((i-c)/i*100))):0;return`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><b>${n}</b><span class="muted">${i?fa(p)+"٪ انجام شد":""}</span></div><div class="qzr"><button class="btn sq" data-act="qa" data-k="${k}" data-d="1" aria-label="یکی اضافه">+</button><div class="qzn">${fa(c)}</div><button class="btn sq g" data-act="qa" data-k="${k}" data-d="-1" aria-label="یکی کم">−</button></div><div class="row" style="margin-top:8px"><button class="chip" data-act="qa" data-k="${k}" data-d="-10">−۱۰</button><button class="chip" data-act="qa" data-k="${k}" data-d="10">+۱۰</button><button class="chip" data-act="qa" data-k="${k}" data-d="-100">−۱۰۰</button><button class="chip" data-act="qa" data-k="${k}" data-d="100">+۱۰۰</button><button class="chip" data-act="qa-set" data-k="${k}">مقدار اولیه</button></div>${i?`<div class="bar" style="margin-top:10px"><i style="width:${p}%"></i></div>`:""}</div>`}).join("")}<p class="muted" style="line-height:2">مقدار «اولیه» برای نمایش درصد پیشرفت است. این اطلاعات فقط روی همین دستگاه ذخیره می‌شود و در پشتیبان‌گیری هم می‌آید.</p>`};
ACT["qa"]=t=>{const q=qzd(),k=t.dataset.k;q.c[k]=Math.max(0,(q.c[k]|0)+ +t.dataset.d);if(!q.i[k]||q.c[k]>q.i[k])q.i[k]=q.c[k];save();more("qaza")};
ACT["qa-set"]=t=>{const q=qzd(),k=t.dataset.k;q.i[k]=q.c[k]|0;save();toast("مقدار اولیه ثبت شد");more("qaza")};
/* ---------- روزه‌های مستحب (60) ---------- */
function fastInfo(ms){const h=hij(ms,cfg.ho),m=h[1],d=h[2],wd=new Date(ms).getUTCDay(),L=[];let t="";
 if(m===9){t="w";L.push("روزهٔ واجب ماه رمضان")}
 else if(m===10&&d===1){t="h";L.push("عید فطر؛ روزه حرام است")}
 else if(m===12&&d===10){t="h";L.push("عید قربان؛ روزه حرام است")}
 else{
  if(m===1&&(d===9||d===10)){t="n";L.push("روز عزا؛ به نظر مشهور روزهٔ مستحب نیست")}
  if(m===7||m===8){t=t||"s";L.push(m===7?"ماه رجب؛ روزه‌داری در آن مستحب است":"ماه شعبان؛ روزه‌داری در آن مستحب است")}
  if(d>=13&&d<=15&&!(m===12&&d===13)){t=t||"s";L.push("ایام‌البیض (۱۳، ۱۴ و ۱۵ ماه)")}
  if(wd===4&&d<=7){t=t||"s";L.push("اولین پنجشنبهٔ ماه")}
  if(wd===3&&d>10&&d<=17){t=t||"s";L.push("اولین چهارشنبهٔ بعد از دهم ماه")}
  if(wd===4&&hij(ms+7*DAYMS,cfg.ho)[1]!==m){t=t||"s";L.push("آخرین پنجشنبهٔ ماه")}
  if(m===7&&d===27){t=t||"s";L.push("مبعث پیامبر (ص)")}
  if(m===8&&d===15){t=t||"s";L.push("ولادت امام زمان (عج)")}
  if(m===11&&d===25){t=t||"s";L.push("دحوالارض")}
  if(m===12&&d===18){t=t||"s";L.push("عید غدیر")}
  if(m===12&&d===9){t=t||"s";L.push("روز عرفه (در صورت نبودن ضعف)")}
  if(m===3&&d===17){t=t||"s";L.push("میلاد پیامبر (ص)")}}
 return{t,L}}
const FCOL={w:"var(--ok)",s:"var(--gold)",h:"#d9534f",n:"var(--tx3)"},FLAB={w:"واجب",s:"مستحب",h:"حرام",n:"توصیه نمی‌شود"};
V9P.fast=()=>{let h="",n=0;for(let k=0;k<60&&n<40;k++){const ms=TODAY+k*DAYMS,f=fastInfo(ms);if(!f.t)continue;n++;const hj=hij(ms,cfg.ho);h+=`<div class="item" style="cursor:default"><div class="dot" style="background:${FCOL[f.t]};color:#111">${ic(f.t==="h"?"x":"moon")}</div><div><div class="t1">${jfull(...jal(ms))} <span class="muted">· ${fa(hj[2])} ${HM[hj[1]-1]}</span></div><div class="t2">${FLAB[f.t]}: ${f.L.join("؛ ")}</div></div></div>`}
 return`${pgH("روزه‌های مستحب و ممنوع","فهرست ۶۰ روز آینده")}<div class="card"><p class="muted" style="line-height:2">این فهرست بر پایهٔ تقویم قمری و مشهور فقهای شیعه تنظیم شده و ممکن است با رؤیت هلال یک‌روز جابه‌جا شود (تنظیم «تصحیح تاریخ قمری» در تنظیمات). برای احکام دقیق و روزه‌های ایام خاص به رساله و مرجع تقلید خود مراجعه کنید.</p></div>${h||'<p class="muted">موردی در ۶۰ روز آینده نیست</p>'}`};
/* ---------- جلسات ختم (15) ---------- */
const mts=()=>cfg.meets||(cfg.meets=[]);
const mtKey=m=>m.y*10000+m.m*100+m.d;
const mtTodayKey=()=>{const j=jal(TODAY);return j[0]*10000+j[1]*100+j[2]};
V9P.meet=()=>{const L=mts().slice().sort((a,b)=>mtKey(a)-mtKey(b)||(a.t||"").localeCompare(b.t||"")),tk=mtTodayKey(),up=L.filter(m=>mtKey(m)>=tk),pa=L.filter(m=>mtKey(m)<tk).reverse();
 const row=m=>`<div class="card"><b>${jfull(m.y,m.m,m.d)}${m.t?" · ساعت "+fa(m.t):""}</b><p class="muted" style="margin:4px 0">${m.place?esc(m.place):"—"}${m.note?" · "+esc(m.note):""}</p><div class="row"><button class="chip" data-act="mt-card" data-id="${m.id}">${ic("share")} کارت دعوت</button><button class="chip" data-act="mt-ics" data-id="${m.id}">${ic("cal")} افزودن به تقویم</button><button class="chip" data-act="mt-del" data-id="${m.id}">${ic("trash")} حذف</button></div></div>`;
 const j=jal(TODAY);
 return`${pgH("جلسات ختم","ثبت زمان و مکان جلسه‌های ختم قرآن، با یادآوری و کارت دعوت")}<div class="card"><b>جلسهٔ جدید</b><div class="field" style="margin-top:8px">تاریخ</div>${dateFields("mt",j[0],j[1],j[2],{to:j[0]+2,from:j[0]})}<div class="field" style="margin-top:8px">ساعت</div><input id="mtt" class="inp" type="time" value="20:00"><div class="field" style="margin-top:8px">مکان</div><div class="row" style="margin-bottom:6px">${["منزل","مسجد","حسینیه","هیئت"].map(x=>`<button class="chip" data-act="mt-pl" data-v="${x}">${x}</button>`).join("")}</div><input id="mtp" class="inp" placeholder="مثلاً منزل آقای احمدی"><input id="mtn" class="inp" style="margin-top:8px" placeholder="توضیح (اختیاری)"><button class="btn g" style="margin-top:10px" data-act="mt-add">${ic("plus")} ثبت جلسه</button></div>
 ${up.length?`<h3 style="margin:14px 0 4px">جلسه‌های پیش‌رو</h3>${up.map(row).join("")}`:""}${pa.length?`<h3 style="margin:14px 0 4px">گذشته</h3>${pa.slice(0,8).map(row).join("")}`:""}`};
ACT["mt-pl"]=t=>{$("#mtp").value=t.dataset.v};
ACT["mt-add"]=()=>{const[y,m,d]=readDate("mt");if(!y||!m||!d)return toast("تاریخ را انتخاب کنید");mts().push({id:Date.now(),y,m,d,t:$("#mtt").value,place:$("#mtp").value.trim(),note:$("#mtn").value.trim()});save();toast("ثبت شد");more("meet")};
ACT["mt-del"]=t=>{cfg.meets=mts().filter(x=>x.id!=t.dataset.id);save();more("meet")};
ACT["mt-ics"]=t=>{const m=mts().find(x=>x.id==t.dataset.id);if(!m)return;icsDownload([meetEv(m)],"jalase-khatm.ics")};
ACT["mt-card"]=t=>{const m=mts().find(x=>x.id==t.dataset.id);if(m)cardMeet(m)};
const meetEv=m=>{const g=gdate(j2g(m.y,m.m,m.d));return{uid:"m"+m.id,title:"جلسهٔ ختم قرآن"+(m.place?" - "+m.place:""),date:g,time:m.t||"",desc:m.note||"",alarm:m.t?-60:540}};
/* ---------- ICS ---------- */
function icsDownload(evs,name){const z=d=>d[0]+pad2(d[1])+pad2(d[2]),st=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");let s="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Khatm//FA//\r\nCALSCALE:GREGORIAN\r\n";
 evs.forEach(e=>{s+="BEGIN:VEVENT\r\nUID:"+e.uid+"@khatm\r\nDTSTAMP:"+st+"\r\n";
  if(e.time){const[h,mi]=e.time.split(":");s+="DTSTART:"+z(e.date)+"T"+pad2(h)+pad2(mi)+"00\r\nDTEND:"+z(e.date)+"T"+pad2(Math.min(23,+h+2))+pad2(mi)+"00\r\n"}
  else{const n=gdate(Date.UTC(e.date[0],e.date[1]-1,e.date[2])+DAYMS);s+="DTSTART;VALUE=DATE:"+z(e.date)+"\r\nDTEND;VALUE=DATE:"+z(n)+"\r\n"}
  s+="SUMMARY:"+String(e.title).replace(/[,;\n]/g," ")+"\r\n"+(e.desc?"DESCRIPTION:"+String(e.desc).replace(/[,;\n]/g," ")+"\r\n":"")+(e.alarm!=null?"BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:"+String(e.title).replace(/[,;\n]/g," ")+"\r\nTRIGGER:"+(e.alarm<0?"-":"")+"PT"+Math.abs(e.alarm)+"M\r\nEND:VALARM\r\n":"")+"END:VEVENT\r\n"});
 s+="END:VCALENDAR";const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([s],{type:"text/calendar"}));a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500);toast("فایل تقویم ساخته شد؛ آن را باز کنید")}
/* ---------- کارت‌ساز (51, 52, 54, 55) ---------- */
Object.assign(KIND,{greet:"تبریک",condole:"تسلیت",memorial:"یادبود",invite:"دعوت به جلسه",custom:"کارت"});
let CT="greet";const CF={};
const GREET=EV.map((e,i)=>({e,i})).filter(x=>x.e[3]==="e");
const deadMemos=()=>cfg.memo.filter(m=>m.type==="death");
V9P.cards=()=>{const tabs=[["greet","تبریک مناسبت"],["condole","تسلیت"],["memorial","یادبود"],["invite","دعوت جلسه"],["custom","متن دلخواه"]];let f="";
 if(CT==="greet")f=`<div class="field">مناسبت</div><select id="cgE">${GREET.map(x=>`<option value="${x.i}">${x.e[2]}</option>`).join("")}<option value="-1">عید نوروز</option><option value="-2">تولد (متن عمومی)</option></select>`;
 else if(CT==="condole"||CT==="memorial"){const D=deadMemos();f=`<div class="field">نام درگذشته</div>${D.length?`<select id="cgD"><option value="">— انتخاب از فهرست درگذشتگان —</option>${D.map(m=>`<option value="${m.id}">${esc(m.name)}</option>`).join("")}</select>`:""}<input id="cgN" class="inp" style="margin-top:6px" placeholder="یا نام را بنویسید" value="${esc(CF.n||"")}">${CT==="condole"?`<div class="field" style="margin-top:8px">نام صاحبان عزا (اختیاری)</div><input id="cgF" class="inp" placeholder="مثلاً خانوادهٔ محترم احمدی">`:""}`}
 else if(CT==="invite"){const L=mts().filter(m=>mtKey(m)>=mtTodayKey());f=L.length?`<div class="field">جلسه</div><select id="cgM">${L.map(m=>`<option value="${m.id}">${jfull(m.y,m.m,m.d)}${m.t?" · "+fa(m.t):""}${m.place?" · "+esc(m.place):""}</option>`).join("")}</select>`:`<p class="muted">ابتدا در بخش «جلسات ختم» یک جلسه ثبت کنید.</p><button class="btn" data-act="v9-go" data-p="meet">رفتن به جلسات ختم</button>`}
 else f=`<div class="field">عنوان</div><input id="cgH" class="inp" placeholder="مثلاً: برای شادی روح پدرم"><div class="field" style="margin-top:8px">متن</div><textarea id="cgB" class="inp" rows="4" placeholder="متن کارت"></textarea><div class="field" style="margin-top:8px">متن عربی (اختیاری)</div><input id="cgA" class="inp" placeholder="مثلاً: اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ">`;
 return`${pgH("کارت‌ساز","کارت زیبای ۹:۱۶ برای استوری و ارسال در پیام‌رسان‌ها")}<div class="row" style="flex-wrap:wrap;margin-bottom:10px">${tabs.map(t=>`<button class="chip ${CT===t[0]?"on":""}" data-act="cg-t" data-v="${t[0]}">${t[1]}</button>`).join("")}</div><div class="card">${f}${CT==="invite"&&!mts().length?"":`<button class="btn g" style="margin-top:12px" data-act="cg-go">${ic("share")} ساخت کارت</button>`}</div>`};
ACT["cg-t"]=t=>{CT=t.dataset.v;more("cards")};
const faN=n=>String(n||"").trim();
ACT["cg-go"]=()=>{const sn=cfg.name?"\n— "+cfg.name:"";
 if(CT==="greet"){const v=+$("#cgE").value,e=v>=0?EV[v]:null,nm=e?e[2]:v===-1?"عید نوروز":"تولد";
  stOpen({kind:"greet",head:nm,sub:"تبریک",ar:v===-2?"":"تَقَبَّلَ اللهُ أَعْمالَكُمْ",fa:nm+(v===-1?" بر شما مبارک؛ سالی سرشار از سلامتی، آرامش و برکت برایتان آرزومندیم.":" را به شما و خانوادهٔ محترم تبریک عرض می‌کنم. ایام به کام و دل‌ها شاد.")+sn,src:""})}
 else if(CT==="condole"){const d=deadMemos().find(m=>m.id==($("#cgD")||{}).value),nm=faN($("#cgN").value)||(d?d.name:"");if(!nm)return toast("نام درگذشته را وارد کنید");const f=faN(($("#cgF")||{}).value);
  stOpen({kind:"condole",head:"تسلیت",sub:f||"",ar:"إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",fa:"درگذشت "+nm+" را به شما و بازماندگان تسلیت عرض می‌کنم. از خداوند برای ایشان رحمت و مغفرت و برای شما صبر و اجر مسئلت دارم."+sn,src:""})}
 else if(CT==="memorial"){const d=deadMemos().find(m=>m.id==($("#cgD")||{}).value),nm=faN($("#cgN").value)||(d?d.name:"");if(!nm)return toast("نام را وارد کنید");
  stOpen({kind:"memorial",head:"یاد و خاطرهٔ "+nm,sub:d?"درگذشت: "+jfull(d.y,d.m,d.d):"",ar:"اللَّهُمَّ ارْحَمْهُ وَاغْفِرْ لَهُ",fa:"برای شادی روح ایشان فاتحه‌ای همراه با صلوات بخوانید.",src:""})}
 else if(CT==="invite"){const m=mts().find(x=>x.id==($("#cgM")||{}).value);if(m)cardMeet(m)}
 else{const h=faN($("#cgH").value),b=faN($("#cgB").value),a=faN($("#cgA").value);if(!h&&!b&&!a)return toast("متنی بنویسید");stOpen({kind:"custom",head:h||"ختم قرآن",sub:"",ar:a,fa:b,src:""})}};
function cardMeet(m){stOpen({kind:"invite",head:"دعوت به جلسهٔ ختم قرآن",sub:jfull(m.y,m.m,m.d)+(m.t?" · ساعت "+fa(m.t):""),ar:"فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ",fa:(m.place?"مکان: "+m.place+"\n":"")+(m.note?m.note+"\n":"")+"حضور شما موجب خوشحالی است. از خداوند توفیق قرائت و قبولی می‌خواهیم.",src:""})}
/* پس‌زمینهٔ تصویر در استوری (48) */
const _stOpen=stOpen;
stOpen=function(o){_stOpen(o);try{const c=$("#stc");if(!c)return;const w=document.createElement("div");w.id="stbg";w.innerHTML=`<div class="field">تصویر پس‌زمینه</div><div class="row"><label class="btn" style="cursor:pointer">${ic("plus")} انتخاب عکس<input type="file" accept="image/*" id="stbgf" hidden></label>${SX.bg?`<button class="btn" data-act="stbg-x">حذف عکس</button>`:""}</div>${SX.bg?`<div class="field" style="margin-top:8px">تیرگی روی عکس</div><input type="range" id="stbgd" min="0" max="85" value="${Math.round((SX.bgd==null?.45:SX.bgd)*100)}" style="width:100%">`:""}`;c.parentNode.insertBefore(w,c);
 $("#stbgf").onchange=e=>{const f=e.target.files[0];if(!f)return;const im=new Image();im.onload=()=>{SX.bg=im;if(SX.bgd==null)SX.bgd=.45;stOpen(SX.o)};im.src=URL.createObjectURL(f)};
 const d=$("#stbgd");if(d)d.oninput=()=>{SX.bgd=d.value/100;drawCard($("#stc"),++SX.k)}}catch(e){}};
ACT["stbg-x"]=()=>{SX.bg=null;stOpen(SX.o)};
/* ---------- چاپ (11) ---------- */
let PRM="list";
V9P.print=()=>{const me=cfg.n||1;return`${pgH("چاپ ردیف‌ها","خروجی مرتب برای چاپ یا ذخیره به‌صورت PDF")}<div class="card"><div class="row"><button class="chip ${PRM==="list"?"on":""}" data-act="pr-m" data-v="list">فهرست ردیف‌ها</button><button class="chip ${PRM==="text"?"on":""}" data-act="pr-m" data-v="text">متن ردیف‌ها (جزوه)</button></div>${PRM==="text"?`<div class="grid3" style="margin-top:10px"><div><div class="field">از ردیف</div><select id="prA">${PARTS.map((_,i)=>`<option value="${i}" ${i===me-1?"selected":""}>${fa(i+1)}</option>`).join("")}</select></div><div><div class="field">تا ردیف</div><select id="prB">${PARTS.map((_,i)=>`<option value="${i}" ${i===me-1?"selected":""}>${fa(i+1)}</option>`).join("")}</select></div></div><div class="sr"><span>همراه با ترجمهٔ فارسی</span><input type="checkbox" class="sw2" id="prT"></div><p class="muted">حداکثر ۳۰ ردیف در یک جزوه.</p>`:`<p class="muted" style="margin-top:8px;line-height:2">جدول همهٔ ردیف‌ها با محدودهٔ آیات و ستون نام برای یادداشت و تیک خواندن.</p>`}<button class="btn g" style="margin-top:12px" data-act="pr-go">${ic("down")} چاپ / ذخیره PDF</button></div><p class="muted">در پنجرهٔ چاپ، «ذخیره به‌صورت PDF» را بزنید.</p>`};
ACT["pr-m"]=t=>{PRM=t.dataset.v;more("print")};
function prBox(h){let p=$("#pr");if(!p){p=document.createElement("div");p.id="pr";document.body.appendChild(p)}p.innerHTML=h;return p}
ACT["pr-go"]=async()=>{let h=`<div class="prh"><h1>ختم قرآن${cfg.grp?" — "+esc(cfg.grp):""}</h1><p>${cfg.name?esc(cfg.name)+" · ":""}${jstr(TODAY)}</p></div>`;
 if(PRM==="list"){h+=`<table><thead><tr><th>ردیف</th><th>از</th><th>تا</th><th>نام</th><th>✓</th></tr></thead><tbody>${PARTS.map((r,i)=>{const x=F[r[0]],y=F[r[1]];return`<tr><td>${fa(i+1)}</td><td>${SURA_FA[x[0]]} ${fa(x[1]+1)}</td><td>${SURA_FA[y[0]]} ${fa(y[1]+1)}</td><td></td><td></td></tr>`}).join("")}</tbody></table>`}
 else{let a=+$("#prA").value,b=+$("#prB").value;if(b<a)[a,b]=[b,a];if(b-a>29)b=a+29;const wt=$("#prT").checked;if(wt&&(!window.TR||!TR[cfg.tr]))await loadTR(cfg.tr);const T=window.TR&&TR[cfg.tr];
  for(let r=a;r<=b;r++){h+=`<h2 class="prr">ردیف ${fa(r+1)} · ${lab(r)}</h2><div class="prt">`;for(let i=PARTS[r][0];i<=PARTS[r][1];i++){const[s,j]=F[i];if(j===0)h+=`<div class="prs">سورهٔ ${SURA_FA[s]}</div>`;h+=`<span class="pra">${QURAN[s][j]} <b>﴿${fa(j+1)}﴾</b></span> `;if(wt&&T)h+=`<div class="prf">${T[s][j]}</div>`}h+=`</div>`}}
 prBox(h);document.body.classList.add("printing");setTimeout(()=>{window.print();setTimeout(()=>document.body.classList.remove("printing"),500)},100)};
/* ---------- یادآور مناسبت‌ها (56) ---------- */
function occList(from,days){const out=[];for(let k=0;k<=days;k++){const ms=from+k*DAYMS,j=jal(ms),g=gdate(ms);
  occOn(ms,cfg.ho).forEach(e=>out.push({k,ms,title:e[2],type:e[3],g}));
  cfg.memo.forEach(m=>{if(m.m===j[1]&&m.d===j[2])out.push({k,ms,title:(MT[m.type]?MT[m.type][1]:"مناسبت")+" "+m.name,type:"p",g})});
  mts().forEach(m=>{if(m.y===j[0]&&m.m===j[1]&&m.d===j[2])out.push({k,ms,title:"جلسهٔ ختم"+(m.t?" ساعت "+fa(m.t):"")+(m.place?" - "+m.place:""),type:"j",g})})}return out}
V9P.occ=()=>{const ok=typeof Notification!=="undefined",st=ok?Notification.permission:"none";
 return`${pgH("یادآور مناسبت‌ها","اعلان مناسبت‌های مذهبی، سالگرد درگذشتگان و جلسه‌های ختم")}<div class="card"><div class="sr"><span>اعلان هنگام باز کردن برنامه</span><input type="checkbox" class="sw2" id="occN" ${cfg.occN?"checked":""}></div><p class="muted" style="line-height:2;margin-top:6px">${!ok?"مرورگر شما اعلان را پشتیبانی نمی‌کند.":st==="denied"?"اعلان برای این برنامه مسدود است؛ از تنظیمات مرورگر آن را باز کنید.":"وقتی برنامه را باز می‌کنید، اگر امروز یا فردا مناسبتی باشد اعلان نشان داده می‌شود (روزی یک‌بار)."}</p></div>
 <div class="card"><b>یادآور واقعی روی گوشی (پیشنهادی)</b><p class="muted" style="line-height:2;margin:6px 0">برنامه روی سرور نیست و نمی‌تواند وقتی بسته است اعلان بفرستد. برای یادآوری مطمئن، فایل تقویم همهٔ مناسبت‌ها و سالگردهای ۱۴ ماه آینده را به تقویم گوشی اضافه کنید؛ تقویم گوشی ساعت ۹ صبح همان روز خبر می‌دهد.</p><button class="btn g" data-act="occ-ics">${ic("cal")} دریافت فایل تقویم</button></div><div class="card"><b>۱۴ روز آینده</b>${occList(TODAY,14).map(o=>`<div class="t2" style="margin-top:6px">${o.k===0?"امروز":o.k===1?"فردا":fa(o.k)+" روز دیگر"}: ${o.title}</div>`).join("")||'<p class="muted">مناسبتی نیست</p>'}</div>`};
V9B.occ=()=>{$("#occN").onchange=async e=>{if(e.target.checked){if(typeof Notification==="undefined"){e.target.checked=false;return toast("اعلان پشتیبانی نمی‌شود")}let p=Notification.permission;if(p==="default")p=await Notification.requestPermission();if(p!=="granted"){e.target.checked=false;cfg.occN=false;save();return toast("اجازهٔ اعلان داده نشد")}cfg.occN=true;save();occCheck(true)}else{cfg.occN=false;save()}}};
ACT["occ-ics"]=()=>{const L=occList(TODAY,430).map((o,i)=>({uid:"o"+o.ms+"-"+i,title:o.title,date:o.g,time:"",alarm:540}));icsDownload(L,"monasebat.ics")};
function occCheck(force){try{if(!cfg.occN||typeof Notification==="undefined"||Notification.permission!=="granted")return;const k=String(TODAY);if(!force&&cfg.occLast===k)return;const L=occList(TODAY,1);if(!L.length)return;cfg.occLast=k;save();
 const body=L.map(o=>(o.k?"فردا: ":"امروز: ")+o.title).join("\n");const o={body,icon:"icons/icon-192.png",lang:"fa",dir:"rtl",tag:"occ"+k};
 if(navigator.serviceWorker&&navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(r=>r.showNotification("یادآور مناسبت",o)).catch(()=>new Notification("یادآور مناسبت",o));else new Notification("یادآور مناسبت",o)}catch(e){}}
document.addEventListener("visibilitychange",()=>{if(!document.hidden)occCheck()});
/* ---------- پس‌زمینه و ظاهر (67) ---------- */
function bgApply(){let s=$("#bgs");const d=ls.get("khatm-bg",null);if(!d||!cfg.bgOn){document.documentElement.removeAttribute("data-bgi");if(s)s.textContent="";return}
 if(!s){s=document.createElement("style");s.id="bgs";document.head.appendChild(s)}const k=cfg.bgd==null?72:cfg.bgd;
 s.textContent=`html[data-bgi] body{background:transparent!important}html[data-bgi]{background:var(--bg)}html[data-bgi] body::before{content:"";position:fixed;inset:0;z-index:-1;background:linear-gradient(color-mix(in srgb,var(--bg) ${k}%,transparent),color-mix(in srgb,var(--bg) ${k}%,transparent)),url(${d}) center/cover no-repeat}`;
 document.documentElement.setAttribute("data-bgi","1")}
function lookPage(){const has=!!ls.get("khatm-bg",null),L=cfg.lang||"fa";
 return`${pgH("ظاهر و زبان","")}<div class="card"><b>زبان برنامه</b><div class="row" style="margin-top:8px"><button class="chip ${L==="fa"?"on":""}" data-act="lg-set" data-v="fa">فارسی</button><button class="chip ${L==="en"?"on":""}" data-act="lg-set" data-v="en">English</button><button class="chip ${L==="ar"?"on":""}" data-act="lg-set" data-v="ar">العربية</button></div><p class="muted" style="margin-top:8px;line-height:2">ترجمهٔ بخش‌های اصلی برنامه (صفحه‌ها، دکمه‌ها و منوها). متن قرآن، احادیث و دعاها همان عربی/فارسی می‌ماند.</p></div>
 <div class="card"><b>تصویر پس‌زمینهٔ برنامه</b><p class="muted" style="margin:6px 0">یک عکس دلخواه از گالری انتخاب کنید؛ روی رنگ زمینهٔ برنامه با شفافیت قابل تنظیم قرار می‌گیرد.</p><div class="row"><label class="btn g" style="cursor:pointer">${ic("plus")} انتخاب عکس<input type="file" accept="image/*" id="bgf" hidden></label>${has?`<button class="btn" data-act="bg-x">حذف</button>`:""}</div>${has?`<div class="sr" style="margin-top:10px"><span>نمایش پس‌زمینه</span><input type="checkbox" class="sw2" id="bgon" ${cfg.bgOn?"checked":""}></div><div class="field" style="margin-top:8px">میزان پوشش رنگ (برای خوانایی)</div><input type="range" id="bgd" min="35" max="95" value="${cfg.bgd==null?72:cfg.bgd}" style="width:100%">`:""}</div>
 <div class="card"><b>رنگ‌بندی</b><p class="muted" style="margin:6px 0">${Object.keys(STY).length} طرح رنگی آماده است:</p>${themeGrid()}</div>`}
V9P.look=lookPage;
V9B.look=()=>{const f=$("#bgf");if(f)f.onchange=e=>{const file=e.target.files[0];if(!file)return;const im=new Image();im.onload=()=>{const k=Math.min(1,1280/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*k;c.height=im.height*k;c.getContext("2d").drawImage(im,0,0,c.width,c.height);let q=.8,u=c.toDataURL("image/jpeg",q);while(u.length>1.4e6&&q>.3){q-=.1;u=c.toDataURL("image/jpeg",q)}try{localStorage.setItem("khatm-bg",JSON.stringify(u))}catch(x){return toast("حافظه پر است؛ عکس کوچک‌تری انتخاب کنید")}cfg.bgOn=true;save();bgApply();more("look")};im.src=URL.createObjectURL(file)};
 const on=$("#bgon");if(on)on.onchange=()=>{cfg.bgOn=on.checked;save();bgApply()};const d=$("#bgd");if(d)d.oninput=()=>{cfg.bgd=+d.value;save();bgApply()}};
ACT["bg-x"]=()=>{try{localStorage.removeItem("khatm-bg")}catch(e){}cfg.bgOn=false;save();bgApply();more("look")};
/* ---------- پشتیبان خودکار هفتگی (75) ---------- */
const ABK="khatm-autobk";
function abkList(){return ls.get(ABK,[])}
function abkRun(force){try{const L=abkList(),last=L.length?L[0].t:0;if(!force&&Date.now()-last<7*DAYMS)return;const o=bkAllData(),s=JSON.stringify(o);L.unshift({t:Date.now(),d:s});while(L.length>4)L.pop();ls.set(ABK,L);return true}catch(e){return false}}
V9P.abk=()=>{const L=abkList();return`${pgH("پشتیبان خودکار","هر هفته یک نسخه از اطلاعات همهٔ کاربران در همین دستگاه ذخیره می‌شود (۴ نسخهٔ آخر)")}<div class="card"><p class="muted" style="line-height:2">این نسخه‌ها در حافظهٔ برنامه روی همین گوشی هستند و برای بازگشت از اشتباه (مثل پاک‌شدن پیشرفت) مفیدند. اگر داده‌های مرورگر پاک شود یا برنامه حذف شود، آن‌ها هم از بین می‌روند؛ پس گاهی «پشتیبان‌گیری از همه» را هم به‌صورت فایل ذخیره کنید.</p><button class="btn g" data-act="abk-now">همین حالا یک نسخه بگیر</button></div>${L.map((x,i)=>`<div class="card"><b>${jfull(...jal(Date.UTC(...gdate(x.t).map((v,k)=>k===1?v-1:v))))} · ${new Date(x.t).toTimeString().slice(0,5)}</b><div class="row" style="margin-top:8px"><button class="chip" data-act="abk-dl" data-i="${i}">${ic("down")} دریافت فایل</button><button class="chip" data-act="abk-rs" data-i="${i}">بازگردانی</button></div></div>`).join("")||'<p class="muted">هنوز نسخه‌ای ثبت نشده است</p>'}`};
ACT["abk-now"]=()=>{abkRun(true);toast("نسخه ذخیره شد");more("abk")};
ACT["abk-dl"]=t=>{const x=abkList()[+t.dataset.i];if(x)bkSaveFile(JSON.parse(x.d),"khatm-auto-backup-"+new Date(x.t).toISOString().slice(0,10)+".json")};
ACT["abk-rs"]=t=>{const x=abkList()[+t.dataset.i];if(!x)return;sheet(`<h2>بازگردانی این نسخه؟</h2><p class="muted" style="line-height:2">اطلاعات فعلی همهٔ کاربران با این نسخه جایگزین می‌شود. پیش از آن یک نسخه از وضعیت فعلی ذخیره می‌شود.</p><div class="row"><button class="btn g" data-act="abk-ok" data-i="${t.dataset.i}">بله، بازگردان</button><button class="btn" data-close>انصراف</button></div>`)};
ACT["abk-ok"]=t=>{const x=abkList()[+t.dataset.i];if(!x)return;abkRun(true);try{bkApplyAll(JSON.parse(x.d))}catch(e){toast("بازگردانی ناموفق بود")}};
/* ---------- اتصال به صفحه‌ها ---------- */
document.addEventListener("click",e=>{const b=e.target.closest(".item[data-p]");if(b&&b.closest("#v-more")){sub=b.dataset.p;more(sub)}});
if(typeof boot9==="undefined"){window.boot9=1;setTimeout(()=>{bgApply();abkRun(false);occCheck()},1500)}
/* ---------- تقویم و صفحهٔ اصلی ---------- */
const _cal=cal;cal=function(){_cal.apply(this,arguments);try{const c=$("#v-cal .card");if(!c)return;const ms=j2g(cY,cM,cS),f=fastInfo(ms),M=mts().filter(m=>m.y===cY&&m.m===cM&&m.d===cS);let h="";
 if(f.t)h+=`<div class="t2" style="margin-top:8px;color:${FCOL[f.t]}">${FLAB[f.t]}: ${f.L.join("؛ ")}</div>`;
 M.forEach(m=>h+=`<div class="t2" style="margin-top:8px">${ic("users")} جلسهٔ ختم${m.t?" · ساعت "+fa(m.t):""}${m.place?" · "+esc(m.place):""}</div>`);
 if(h)c.insertAdjacentHTML("beforeend",h)}catch(e){}};
V.cal=()=>cal();
const _home=home;home=function(){_home.apply(this,arguments);try{const el=$("#v-home"),L=mts().filter(m=>{const k=mtKey(m),t=mtTodayKey();return k>=t}).sort((a,b)=>mtKey(a)-mtKey(b));const m=L[0];if(m&&el&&!$("#mbn")){const j=jal(TODAY),dd=Math.round((j2g(m.y,m.m,m.d)-TODAY)/DAYMS);if(dd<=14){const d=document.createElement("button");d.id="mbn";d.className="item";d.dataset.act="v9-go";d.dataset.p="meet";d.innerHTML=`<div class="dot">${ic("users")}</div><div><div class="t1">جلسهٔ ختم ${dd===0?"امروز":dd===1?"فردا":fa(dd)+" روز دیگر"}</div><div class="t2">${jfull(m.y,m.m,m.d)}${m.t?" · "+fa(m.t):""}${m.place?" · "+esc(m.place):""}</div></div>${ic("prev")}`;const first=el.firstElementChild;first?first.after(d):el.appendChild(d)}}}catch(e){}};
V.home=home;
/* ---------- پخش با قفل صفحه (97): کنترل‌های قفل‌صفحه/اعلان و وضعیت پخش ---------- */
(function(){if(!("mediaSession"in navigator))return;const m=navigator.mediaSession,st=s=>{try{m.playbackState=s}catch(e){}};
 const art=[{src:"icons/icon-192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-512.png",sizes:"512x512",type:"image/png"}];
 const hs=(n,f)=>{try{m.setActionHandler(n,f)}catch(e){}};
 hs("seekbackward",()=>{if(ap.a)ap.a.currentTime=Math.max(0,ap.a.currentTime-5)});hs("seekforward",()=>{if(ap.a)ap.a.currentTime=Math.min(ap.a.duration||1e9,ap.a.currentTime+5)});
 hs("stop",()=>{apPause()});
 const _p=apPlay,_pa=apPause,_r=apResume;
 apPlay=async function(){const r=await _p.apply(this,arguments);try{st("playing");if(window.MediaMetadata&&m.metadata){m.metadata=new MediaMetadata({title:m.metadata.title,artist:m.metadata.artist,album:"ختم قرآن",artwork:art})}}catch(e){}return r};
 apPause=function(){const r=_pa.apply(this,arguments);st("paused");return r};
 apResume=function(){const r=_r.apply(this,arguments);st("playing");return r};
})();
