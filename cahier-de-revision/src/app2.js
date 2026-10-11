
function vtab(names,rows){const P=["je","tu","il / elle","nous","vous","ils / elles"];
  return `<div class="tbl"><table><tr><th></th>${names.map(n=>`<th>${n}</th>`).join("")}</tr>${P.map((p,i)=>`<tr><td>${p}</td>${rows.map(r=>`<td>${F(r[i])}</td>`).join("")}</tr>`).join("")}</table></div>`;}
function G3(){const h=t=>`<h4 class="sub-h">${t}</h4>`;
 return `<p class="tip" style="margin-top:0">Nhóm 3 phải học thuộc, nhưng các động từ cùng đuôi thường chia giống nhau. Đây là các động từ đã học, xếp theo đuôi.</p>`+
 h("Đuôi -ir (không có -iss-)")+`<p>Số ít bỏ 3 chữ cuối, thêm <b>-s, -s, -t</b>. Số nhiều giữ phụ âm trước -ir.</p>`+
 vtab(["dormir","partir","sortir"],[["dors","dors","dort","dormons","dormez","dorment"],["pars","pars","part","partons","partez","partent"],["sors","sors","sort","sortons","sortez","sortent"]])+
 `<p>Kiểu riêng: <b>venir</b> (và tenir) đổi e → ie, ils gấp đôi n.</p>`+vtab(["venir"],[["viens","viens","vient","venons","venez","viennent"]])+
 `<p class="tip">Không chia như nhóm 2: <s>nous partissons</s> → ${F("nous partons")}.</p>`+
 h("Đuôi -oir")+vtab(["avoir","vouloir","pouvoir"],[["ai","as","a","avons","avez","ont"],["veux","veux","veut","voulons","voulez","veulent"],["peux","peux","peut","pouvons","pouvez","peuvent"]])+
 `<p class="tip">vouloir, pouvoir: je / tu đuôi <b>-x</b>, ils đổi nguyên âm (veulent, peuvent). Sau hai động từ này là động từ nguyên thể: ${F("Je veux partir.")}</p>`+
 h("Đuôi -re")+`<p><b>-dre</b>: bỏ -re, thêm <b>-s, -s, (không thêm gì), -ons, -ez, -ent</b>.</p>`+
 vtab(["descendre","prendre"],[["descends","descends","descend","descendons","descendez","descendent"],["prends","prends","prend","prenons","prenez","prennent"]])+
 `<p class="tip">Cùng kiểu descendre: attendre, vendre, répondre. Cùng kiểu prendre (mất d ở số nhiều, ils gấp đôi n): apprendre, comprendre.</p>`+
 vtab(["être","faire"],[["suis","es","est","sommes","êtes","sont"],["fais","fais","fait","faisons","faites","font"]])+
 vtab(["lire","boire","rire"],[["lis","lis","lit","lisons","lisez","lisent"],["bois","bois","boit","buvons","buvez","boivent"],["ris","ris","rit","rions","riez","rient"]])+
 `<p class="tip">vous không đuôi -ez: ${F("vous êtes")}, ${F("vous faites")}, ${F("vous dites")}.</p>`+
 h("Đuôi -er nhưng bất quy tắc")+`<p>Chỉ có một động từ: <b>aller</b>.</p>`+vtab(["aller"],[["vais","vas","va","allons","allez","vont"]]);}

/* ================= gom chia động từ vào một bài ================= */
(function(){
  const src=UNITS.find(u=>u.id==="b8h");if(!src||UNITS.some(u=>u.id==="verbs"))return;
  const isConj=x=>!/→/.test(x.q)&&(/^Chia/i.test(x.q)||/\((?:se |s'|s’)?[a-zéèêç]+(?:er|ir|re|oir)\)/i.test(x.q));
  const take=(id,heads)=>{const u=UNITS.find(v=>v.id===id);if(!u)return [];const out=[];u.notes=u.notes.filter(n=>{const h=n.h.replace(/^\d+\s*·\s*/,"");if(heads.some(r=>r.test(h))){out.push(Object.assign({},n,{h}));return false;}return true;});return out;};
  const b2=take("b2",[/^3 nhóm/,/^Biến đổi/,/phản thân/]);
  take("b2",[/^Chia động từ -er/,/^être & avoir/]);take("t6",[/^Động từ nhóm 2/,/^prendre & descendre/]);take("t5",[/^aller & faire/]);take("b7",[/^dormir/]);take("b8",[/pouvoir/]);
  const sn=src.notes,find=r=>sn.find(n=>r.test(n.h));
  const hw=find(/^Bài nghe/);if(hw){const b8=UNITS.find(u=>u.id==="b8");if(b8)b8.notes.push(Object.assign({},hw,{h:"BTVN sau buổi 8: nghe, đọc, xem video"}));}
  const pick=r=>{const n=find(r);return n?[n]:[];};
  const sec=(t,n)=>n?`<h4 class="sub-h">${t}</h4>${n.html}`:"";
  const g=r=>find(r),bb=r=>b2.find(n=>r.test(n.h));
  const notes=[
    {k:1,h:"Nhóm 1 · động từ đuôi -er",html:sec("Cách chia",g(/^Nhóm 1/))+sec("Các biến đổi đặc biệt",bb(/^Biến đổi/))+sec("Động từ phản thân",bb(/phản thân/))},
    {k:1,h:"Nhóm 2 · đuôi -ir, số nhiều có -iss-",html:sec("Cách chia",g(/^Nhóm 2/))},
    {k:1,h:"Nhóm 3 · động từ bất quy tắc",html:G3()}
  ];
  const ex=[];
  UNITS.forEach(u=>{if(u===src)return;const keep=[];u.ex.forEach(x=>{if(isConj(x))ex.push(Object.assign({},x,{q:x.q+` <span class="muted small">· ${u.src.split(" +")[0]}</span>`}));else keep.push(x);});u.ex=keep;});
  const verbs={id:"verbs",pin:true,date:"Ngữ pháp",name:"Chia động từ · Nhóm 1, 2, 3",src:"Tổng hợp từ các buổi",
    links:[...src.links,["Buổi 2","https://www.canva.com/d/kvH6x57dx1-_ghM"],["Tuần 6","https://www.canva.com/d/wWfIFwXHHFqApMq"]],
    notes,fixes:src.fixes.concat([["je mange · nous mangons","nous mangeons","giữ âm /ʒ/ nên thêm e"],["j'achete","j'achète","acheter: e → è (trừ nous, vous)"]]),
    ex:[...src.ex,...ex]};
  UNITS.splice(UNITS.indexOf(src),1);UNITS.unshift(verbs);
})();

/* ================= bài riêng: động từ bất quy tắc ================= */
(function(){
  if(UNITS.some(u=>u.id==="irregular"))return;
  const h=t=>`<h4 class="sub-h">${t}</h4>`;
  const notes=[
    {k:1,h:"Bốn động từ phải thuộc: être · avoir · aller · faire",html:
      vtab(["être","avoir","aller","faire"],[["suis","es","est","sommes","êtes","sont"],["ai","as","a","avons","avez","ont"],["vais","vas","va","allons","allez","vont"],["fais","fais","fait","faisons","faites","font"]])+
      `<p class="tip">Chỉ có ba động từ có <b>vous</b> không đuôi -ez: ${F("vous êtes")}, ${F("vous faites")}, ${F("vous dites")}. Ba động từ có <b>ils</b> đuôi -ont: ${F("ils ont")}, ${F("ils vont")}, ${F("ils font")}.</p>
      <p>${F("Je suis étudiant.")} ${F("Elle a vingt ans.")} ${F("Nous allons au marché.")} ${F("Ils font la cuisine.")}</p>`},
    {k:1,h:"dire · lire · écrire · rire",html:
      `<p>Số ít bỏ -re, thêm <b>-s, -s, -t</b>. Số nhiều có thêm âm: -s- hoặc -v-.</p>`+
      vtab(["dire","lire","écrire","rire"],[["dis","dis","dit","disons","dites","disent"],["lis","lis","lit","lisons","lisez","lisent"],["écris","écris","écrit","écrivons","écrivez","écrivent"],["ris","ris","rit","rions","riez","rient"]])+
      `<p class="tip">${F("vous dites")} là ngoại lệ (không phải <s>vous disez</s>). ${F("Tu lis un livre.")} ${F("J'écris un e-mail.")}</p>`},
    {k:1,h:"voir · croire · boire",html:
      `<p>Số nhiều (nous, vous) đổi <b>-i-</b> thành <b>-y-</b> hoặc <b>-v-</b>; ngôi ils đổi trở lại.</p>`+
      vtab(["voir","croire","boire"],[["vois","vois","voit","voyons","voyez","voient"],["crois","crois","croit","croyons","croyez","croient"],["bois","bois","boit","buvons","buvez","boivent"]])+
      `<p class="tip">${F("Je vois un chat.")} ${F("Nous buvons du thé.")} Cùng kiểu voir: revoir, prévoir.</p>`},
    {k:1,h:"savoir · devoir · pouvoir · vouloir",html:
      `<p>Bốn động từ hay đi trước một động từ nguyên thể.</p>`+
      vtab(["savoir","devoir","pouvoir","vouloir"],[["sais","sais","sait","savons","savez","savent"],["dois","dois","doit","devons","devez","doivent"],["peux","peux","peut","pouvons","pouvez","peuvent"],["veux","veux","veut","voulons","voulez","veulent"]])+
      `<p class="tip">pouvoir, vouloir: je / tu đuôi <b>-x</b>. ${F("Je sais nager.")} ${F("Tu dois partir.")} ${F("Je veux réserver une table.")}</p>`},
    {k:1,h:"venir · tenir · prendre · mettre",html:
      `<p>venir, tenir: e → <b>ie</b> ở số ít và ngôi ils (gấp đôi n). prendre, mettre: số ít bỏ -dre / -ttre đuôi một t / d.</p>`+
      vtab(["venir","tenir","prendre","mettre"],[["viens","viens","vient","venons","venez","viennent"],["tiens","tiens","tient","tenons","tenez","tiennent"],["prends","prends","prend","prenons","prenez","prennent"],["mets","mets","met","mettons","mettez","mettent"]])+
      `<p class="tip">Cùng kiểu prendre: apprendre, comprendre. Cùng kiểu mettre: permettre, promettre. ${F("Il met du sucre dans son café.")}</p>`},
    {h:"connaître · ouvrir",html:
      vtab(["connaître","ouvrir"],[["connais","connais","connaît","connaissons","connaissez","connaissent"],["ouvre","ouvres","ouvre","ouvrons","ouvrez","ouvrent"]])+
      `<p class="tip">ouvrir chia như động từ -er: ${F("j'ouvre")}, ${F("tu ouvres")}. connaître có <b>î</b> ở ngôi il: ${F("il connaît")}.</p>`},
    {h:"Mẹo nhớ nhanh",html:`<ul><li>Hầu hết bất quy tắc: <b>je / tu giống nhau</b> (dis, dis; vois, vois; mets, mets).</li>
      <li>Ngôi <b>nous</b> luôn kết thúc bằng <b>-ons</b> (trừ <i>nous sommes</i>) và <b>vous</b> bằng <b>-ez</b> (trừ <i>êtes, faites, dites</i>).</li>
      <li>Ngôi <b>ils</b> thường kết thúc bằng <b>-ent</b>. Ngoại lệ phải thuộc: <i>ils sont, ont, vont, font</i>.</li></ul>`}
  ];
  const fixes=[
    ["vous disez","vous dites","dire: vous dites"],
    ["vous êtez","vous êtes","être: vous êtes"],
    ["ils avent · ils sontent","ils ont · ils sont","ils ont, ils sont, ils vont, ils font"],
    ["nous boivons · ils buvent","nous buvons · ils boivent","boire: nous buvons, ils boivent (đảo v / b)"],
    ["je voie · tu voies","je vois · tu vois","voir: je / tu đuôi -s"],
    ["je peux · il peux","je peux · il peut","pouvoir: il peut (đuôi -t)"],
    ["il connait","il connaît","connaître: î ở ngôi il"]
  ];
  const q=(s,a)=>({t:"f",q:s,a:Array.isArray(a)?a:[a]});
  const ex=[
    q("Vous (être) ___ français ?","êtes"),q("Elles (avoir) ___ deux chats.","ont"),q("Je (aller) ___ au travail en bus.","vais"),
    q("Ils (aller) ___ au marché le samedi.","vont"),q("Vous (faire) ___ du sport ?","faites"),q("Ils (faire) ___ une promenade.","font"),
    q("Tu (dire) ___ la vérité.","dis"),q("Vous (dire) ___ bonjour à tout le monde.","dites"),q("Ils (dire) ___ merci.","disent"),
    q("Tu (lire) ___ un livre ou un journal ?","lis"),q("Nous (écrire) ___ une carte postale.","écrivons"),q("J'(écrire) ___ à ma famille.","écris"),
    q("Je (voir) ___ mes amis ce soir.","vois"),q("Nous (voir) ___ la mer depuis la fenêtre.","voyons"),q("Ils (voir) ___ un film.","voient"),
    q("Je (croire) ___ que c'est possible.","crois"),q("Vous (croire) ___ cette histoire ?","croyez"),
    q("Nous (boire) ___ du thé le matin.","buvons"),q("Ils (boire) ___ de l'eau.","boivent"),q("Tu (boire) ___ un café ?","bois"),
    q("Je (savoir) ___ nager.","sais"),q("Elle (savoir) ___ parler trois langues.","sait"),q("Vous (savoir) ___ où est la gare ?","savez"),
    q("Tu (devoir) ___ partir à huit heures.","dois"),q("Nous (devoir) ___ prendre le métro.","devons"),q("Ils (devoir) ___ travailler.","doivent"),
    q("Elle (pouvoir) ___ venir demain.","peut"),q("Nous (vouloir) ___ un thé, s'il vous plaît.","voulons"),
    q("Il (venir) ___ de Hanoï.","vient"),q("Vous (venir) ___ à la fête ?","venez"),q("Elles (tenir) ___ leur sac à la main.","tiennent"),
    q("Je (prendre) ___ le bus.","prends"),q("Ils (prendre) ___ un taxi.","prennent"),q("Nous (comprendre) ___ la leçon.","comprenons"),
    q("Je (mettre) ___ la table.","mets"),q("Nous (mettre) ___ un manteau quand il fait froid.","mettons"),
    q("Tu (connaître) ___ ce restaurant ?","connais"),q("Il (connaître) ___ bien la ville.","connaît"),
    q("J'(ouvrir) ___ la fenêtre.","ouvre"),q("Vous (ouvrir) ___ la porte.","ouvrez")
  ];
  const irr={id:"irregular",pin:true,date:"Ngữ pháp",name:"Động từ bất quy tắc · hiện tại",src:"Ôn tập riêng",links:[],notes,fixes,ex};
  UNITS.splice(1,0,irr);
})();

/* ================= dữ liệu ================= */
const TOPICS=LEX.groups.map(g=>({id:g.id,title:g.title,caption:g.caption,
  entries:g.entries.map(e=>({fr:e[0],vi:e[1],en:e[2],nt:e[3]||"",sub:e[4]||"",key:(e[5]||g.id)+"|"+e[0],topic:g.id}))}));
TOPICS.forEach(t=>t.subs=[...new Set(t.entries.map(e=>e.sub).filter(Boolean))]);
const WORDS=TOPICS.flatMap(t=>t.entries);
const WBYKEY=Object.fromEntries(WORDS.map(e=>[e.key,e]));
const SITS=LEX.convs.map(c=>({id:c.id,title:c.sub,items:c.items}));
const EXS=UNITS.flatMap(u=>u.ex.map((x,i)=>({key:"ex|"+u.id+":"+i,u,x,i})));
const EXBYKEY=Object.fromEntries(EXS.map(e=>[e.key,e]));

/* ================= tiện ích ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const pad=n=>String(n).padStart(2,"0");
const dn=(d=new Date())=>Math.floor((d.getTime()-d.getTimezoneOffset()*60000)/86400000);
const norm=s=>String(s).normalize("NFC").toLowerCase().replace(/[’`´]/g,"'").replace(/[-–]/g," ").replace(/[.!?¿,;:«»"…]/g," ").replace(/\s*'\s*/g,"'").replace(/\s+/g," ").trim();
const ACCBAR=`<div class="accbar" role="group" aria-label="Chữ tiếng Pháp">${["é","è","ê","ë","à","â","ç","î","ï","ô","û","ù","ü","œ","æ","’"].map(c=>`<button type="button" class="acc" data-ch="${c}" tabindex="-1">${c}</button>`).join("")}<button type="button" class="acc caps" data-caps="1" tabindex="-1" aria-pressed="false" title="Viết hoa">⇧</button></div>`;
const strip=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d");
const VI=/[ăâđơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i;
const ART=/^(le |la |les |l'|l’|un |une |des |du |de la |de l'|de l’)/i;
const head=fr=>fr.split(/\s+\/\s+/)[0].replace(/\s*\(.*?\)\s*/g," ").replace(ART,"").trim();
function example(e){
  if(!e.nt)return "";
  const parts=e.nt.split(/\s+·\s+/).map(s=>s.trim()).filter(s=>s&&!VI.test(s)&&/\s/.test(s)&&!/^=|≠|^\(|→/.test(s));
  const h=strip(head(e.fr).toLowerCase());
  return parts.find(p=>strip(p.toLowerCase()).includes(h.split(" ")[0]))||parts.find(p=>/[.!?]$/.test(p))||"";
}
function cloze(e){
  const ex=example(e);if(!ex)return null;
  const h=head(e.fr);if(h.length<3)return null;
  const i=ex.toLowerCase().indexOf(h.toLowerCase());if(i<0)return null;
  return {before:ex.slice(0,i),after:ex.slice(i+h.length),ans:h};
}
function accepted(src,lang){
  const base=src.replace(/\[.*?\]/g,"").trim();
  let parts=[base,...base.split(/\s*\/\s*/)];
  if(lang!=="fr")parts=parts.flatMap(p=>[p,...p.split(/\s*[,;]\s*/)]);
  parts=parts.flatMap(p=>[p,p.replace(/\(e\)/g,""),p.replace(/\(e\)/g,"e"),p.replace(/\s*\(.*?\)\s*/g," ")]);
  if(lang==="fr")parts=parts.flatMap(p=>[p,p.replace(ART,"")]);
  if(lang==="en")parts=parts.flatMap(p=>[p,p.replace(/^to\s+/i,"")]);
  return [...new Set(parts.map(norm).filter(Boolean))];
}
function judge(input,answers){
  const lig=x=>x.replace(/œ/g,"oe").replace(/æ/g,"ae");
  const v=lig(norm(input));answers=answers.map(lig);if(!v)return null;
  const a=answers.map(norm);
  if(a.includes(v))return "ok";
  if(a.map(strip).includes(strip(v)))return "accent";
  return "no";
}
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const ICON_SAY=`<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>`;
const sayBtn=t=>`<button class="say" data-say="${esc(t)}" aria-label="Nghe đọc">${ICON_SAY}</button>`;

/* ================= lưu trữ ================= */
const KEY="fr-carnet-v2";
let S={srs:{},done:{},seen:{},log:{},prefs:{min:15,dir:"fr-vi"},view:"today",lesson:null,stage:"learn",ci:0,qi:0,topic:null,open:{},sit:null,di:0,showAll:false,wm:null};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s)S=Object.assign(S,s);
  else{const o=JSON.parse(localStorage.getItem("fr-revision-v1")||"null");if(o){const t=dn();
    S.done=o.done||{};Object.keys(o.known||{}).forEach(k=>S.srs[k]={b:3,due:t+3});Object.keys(o.review||{}).forEach(k=>S.srs[k]={b:1,due:t});}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}

/* ================= lặp lại ngắt quãng ================= */
const INT=[0,0,1,3,7,14,30];
let AC=null;
function chime(ok){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime;(ok?[660,880]:[300,220]).forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain();o.type=ok?"sine":"triangle";o.frequency.value=f;g.gain.setValueAtTime(0.0001,t+i*.09);g.gain.exponentialRampToValueAtTime(.12,t+i*.09+.02);g.gain.exponentialRampToValueAtTime(.0001,t+i*.09+.22);o.connect(g).connect(AC.destination);o.start(t+i*.09);o.stop(t+i*.09+.25);});}catch(e){}}
function grade(key,q){ // q: 0 quên, 1 nhớ, 2 dễ
  const t=dn(),r=S.srs[key]||{b:0};
  let b=q===0?1:Math.min(6,(r.b||0)+(q===2?2:1));
  S.srs[key]={b,due:t+(q===0?0:INT[b]),last:t};
  S.log[t]=(S.log[t]||0)+1;
}
const lvl=k=>{const r=S.srs[k];if(!r)return 0;return r.b<=2?1:r.b<=4?2:3;};
const LVN=["Mới","Đang học","Nhớ","Thuộc"];
const isDue=k=>{const r=S.srs[k];return r&&r.due<=dn();};
function dist(list){const c=[0,0,0,0];list.forEach(e=>c[lvl(e.key)]++);return c;}
function mbar(c){const n=c.reduce((a,b)=>a+b,0)||1;return `<div class="mbar" role="img" aria-label="${c.map((x,i)=>LVN[i]+" "+x).join(", ")}">${[3,2,1].map(i=>`<i class="l${i}" style="width:${c[i]/n*100}%"></i>`).join("")}</div>`;}
function legend(c){return `<div class="legend">${[0,1,2,3].map(i=>`<span><i class="dot l${i}"></i>${LVN[i]} <b>${c[i]}</b></span>`).join("")}</div>`;}
function streak(){let t=dn(),n=0;if(!S.log[t])t--;while(S.log[t]){n++;t--;}return n;}

/* ================= giọng đọc ================= */
let frVoice=null,frVoices=[];
const VOICE_RANK=[/natural|neural|online/i,/google/i,/am[ée]lie|thomas|audrey|aur[ée]lie|marie|daniel|denise|henri|eloise|vivienne|remy|r[ée]my|jacqueline|yannick/i,/premium|enhanced|am[ée]lior/i];
function voiceScore(v){let s=0;if(/^fr[-_]FR/i.test(v.lang))s+=20;else if(/^fr/i.test(v.lang))s+=8;VOICE_RANK.forEach((r,i)=>{if(r.test(v.name))s+=12-i*2;});if(/compact|eloquence|grandma|grandpa|shelley|sandy|flo|rocko|reed|eddy/i.test(v.name))s-=15;if(!v.localService)s+=3;return s;}
function pickVoice(){try{frVoices=speechSynthesis.getVoices().filter(x=>/^fr/i.test(x.lang)).sort((a,b)=>voiceScore(b)-voiceScore(a));
  frVoice=(S.prefs.voice&&frVoices.find(v=>v.name===S.prefs.voice))||frVoices[0]||null;const vp=document.getElementById("voice-sel");if(vp)fillVoices(vp);}catch(e){}}
try{pickVoice();speechSynthesis.onvoiceschanged=pickVoice;}catch(e){}
function cleanSay(t){return String(t).replace(/\((?:m|f|fam|e)\.?\)/gi,"").replace(/\((e)\)/g,"$1").replace(/\(.*?\)|\[.*?\]/g,"").replace(/\s*≠.*$/,"").replace(/\s*=\s*/g,", ").replace(/\s+\/\s+/g,", ").replace(/\+/g,"").replace(/…/g,"").replace(/___+/g,", ").replace(/\s+/g," ").trim();}
function speak(t,rate){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(cleanSay(t));u.lang=frVoice?frVoice.lang:"fr-FR";if(frVoice)u.voice=frVoice;u.rate=rate||S.prefs.rate||.9;u.pitch=1;speechSynthesis.speak(u);}catch(e){}}
function fillVoices(sel){sel.innerHTML=frVoices.length?frVoices.map((v,i)=>`<option value="${esc(v.name)}" ${frVoice&&v.name===frVoice.name?"selected":""}>${esc(v.name)} · ${v.lang}${i===0?" (gợi ý)":""}</option>`).join(""):`<option>Máy này chưa có giọng tiếng Pháp</option>`;}
function voicePanel(){return `<section class="paper voice-panel"><p class="eyebrow">Giọng đọc tiếng Pháp</p>
  <p class="small muted" style="margin:6px 0 10px">Chọn giọng nghe tự nhiên nhất trên máy em. Giọng có chữ Natural, Online, Google, Amélie hoặc Thomas thường chuẩn nhất.</p>
  <select id="voice-sel" class="vsel"></select>
  <div class="vrow"><label class="small">Tốc độ <input type="range" id="voice-rate" min="0.6" max="1.2" step="0.05" value="${S.prefs.rate||.9}"></label><button class="btn ghost" id="voice-test" style="padding:8px 14px">▶ Nghe thử</button></div></section>`;}
function bindVoicePanel(){const sel=$("#voice-sel");if(!sel)return;fillVoices(sel);
  sel.onchange=()=>{S.prefs.voice=sel.value;save();pickVoice();speak("Bonjour Loan, on révise le français ensemble ?");};
  $("#voice-rate").oninput=e=>{S.prefs.rate=+e.target.value;save();};
  $("#voice-test").onclick=()=>speak("Bonjour Loan ! Il est neuf heures et demie. Je voudrais un croissant, s'il vous plaît.");}
document.addEventListener("click",e=>{const b=e.target.closest("[data-say]");if(b){e.stopPropagation();speak(b.dataset.say);return;}const f=e.target.closest(".fr");if(f)speak(f.textContent);});

/* ================= giao diện sáng / tối ================= */
const SUN=`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const MOON=`<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>`;
function isDark(){const a=document.documentElement.getAttribute("data-theme");if(a)return a==="dark";try{return matchMedia("(prefers-color-scheme: dark)").matches;}catch(e){return false;}}
function applyTheme(){if(S.prefs.theme)document.documentElement.setAttribute("data-theme",S.prefs.theme);
  const d=isDark(),b=document.getElementById("theme-btn");if(b)b.innerHTML=`${d?SUN:MOON}<span><span class="lg">Chế độ </span>${d?"sáng":"tối"}<span class="fr-l">${d?"Mode clair":"Mode sombre"}</span></span>`;}
document.getElementById("theme-btn").onclick=()=>{S.prefs.theme=isDark()?"light":"dark";save();applyTheme();};
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",applyTheme);}catch(e){}
applyTheme();

/* ================= bàn phím chữ Pháp ================= */
let accCaps=false;
document.addEventListener("mousedown",e=>{if(e.target.closest(".acc"))e.preventDefault();});
document.addEventListener("click",e=>{const b=e.target.closest(".acc");if(!b)return;
  if(b.dataset.caps){accCaps=!accCaps;document.querySelectorAll(".acc").forEach(x=>{if(x.dataset.ch)x.textContent=accCaps?x.dataset.ch.toUpperCase():x.dataset.ch;});b.setAttribute("aria-pressed",accCaps);return;}
  const inp=document.getElementById("a-in");if(!inp||inp.disabled)return;
  const ch=accCaps?b.dataset.ch.toUpperCase():b.dataset.ch,st=inp.selectionStart??inp.value.length,en=inp.selectionEnd??st;
  inp.value=inp.value.slice(0,st)+ch+inp.value.slice(en);inp.focus();inp.setSelectionRange(st+ch.length,st+ch.length);
  if(accCaps){accCaps=false;document.querySelectorAll(".acc").forEach(x=>{if(x.dataset.ch)x.textContent=x.dataset.ch;else x.setAttribute("aria-pressed","false");});}});

/* ================= điều hướng ================= */
const main=$("#main");
function go(v){S.view=v;if(v!=="session")sess=null;save();render();window.scrollTo({top:0});}
document.querySelectorAll(".nav[data-v]").forEach(b=>b.onclick=()=>{if(b.dataset.v==="lessons")S.lesson=null;if(b.dataset.v==="lex"){S.topic=null;lexQ="";}go(b.dataset.v);});
function chrome(){
  const v=S.view==="session"?(sess&&sess.from||"today"):S.view;
  document.querySelectorAll(".nav[data-v]").forEach(b=>b.setAttribute("aria-current",b.dataset.v===v?"page":"false"));
  const d=WORDS.filter(e=>isDue(e.key)).length+EXS.filter(e=>isDue(e.key)).length;
  const bd=$("#due-badge");bd.hidden=!d;bd.textContent=d;
  const st=streak();$("#rail-foot").innerHTML=`<b>${st}</b>ngày liên tiếp<br><span>${WORDS.filter(e=>lvl(e.key)>=2).length} từ đã nhớ</span>`;
}
function render(){chrome();({today:viewToday,lessons:viewLessons,lex:viewLex,dlg:viewDlg,wr:viewWrite,session:viewSession}[S.view]||viewToday)();}

/* ================= phiên ôn ================= */
const CAPS={5:{due:10,nw:4,ex:2},15:{due:25,nw:8,ex:5},30:{due:50,nw:15,ex:10}};
let sess=null;
function planFor(scope){
  const cap=CAPS[S.prefs.min]||CAPS[15];
  let pool=WORDS;if(scope&&scope.topic){pool=pool.filter(e=>e.topic===scope.topic&&(!scope.sub||e.sub===scope.sub));}
  const due=pool.filter(e=>isDue(e.key)).sort((a,b)=>S.srs[a.key].due-S.srs[b.key].due).slice(0,cap.due);
  const nw=pool.filter(e=>!S.srs[e.key]).slice(0,cap.nw);
  let ex=[];
  if(!scope){
    const exDue=EXS.filter(e=>isDue(e.key));
    const exNew=UNITS.flatMap(u=>u.ex.map((x,i)=>EXBYKEY["ex|"+u.id+":"+i])).filter(e=>!S.srs[e.key]&&!S.done[e.u.id+":"+e.i]);
    ex=[...exDue,...exNew].slice(0,cap.ex);
  }
  return {due,nw,ex};
}
function wordItem(e){
  const L=lvl(e.key),c=cloze(e),dir=S.prefs.dir==="mix"?(Math.random()<.5?"fr-vi":"vi-fr"):S.prefs.dir;
  if(L>=2&&c&&Math.random()<.6)return {k:"cloze",e,c};
  if(L>=2&&dir==="vi-fr")return {k:"type",e};
  return {k:"recall",e,dir};
}
const TCAP={5:12,15:30,30:60};
function hintOf(fr){const f=fr.split(/\s+\/\s+/)[0].replace(/\s*\(.*?\)\s*/g," ").trim();const m=f.match(ART);const art=m?m[0]:"";const rest=f.slice(art.length);
  return art+rest.split(" ").map((w,i)=>i===0?w.slice(0,Math.min(2,w.length))+"_".repeat(Math.max(0,w.length-2)):w[0]+"_".repeat(Math.max(0,w.length-1))).join(" ");}
function startTyping(scope,from){
  let pool=WORDS.filter(e=>e.topic===scope.topic&&(!scope.sub||e.sub===scope.sub));
  const due=shuffle(pool.filter(e=>isDue(e.key))),nw=pool.filter(e=>!S.srs[e.key]),rest=shuffle(pool.filter(e=>S.srs[e.key]&&!isDue(e.key)));
  const pick=[...due,...shuffle(nw.slice(0,Math.ceil((TCAP[S.prefs.min]||30)*.6))),...rest].slice(0,TCAP[S.prefs.min]||30);
  const items=shuffle(pick).map(e=>({k:"type",e,lang:S.prefs.tlang||"vi"}));
  sess={items,i:0,res:[],from:from||"lex",scope,typing:true,state:null,requeue:{}};
  S.view="session";save();render();window.scrollTo({top:0});
}
function startSession(scope,from){
  const p=planFor(scope);
  const items=[];
  const dueItems=shuffle(p.due).map(wordItem);
  const exItems=p.ex.map(x=>({k:"ex",ex:x}));
  // từ mới: giới thiệu trước, 2-3 lượt sau hỏi lại ngay
  const newSeq=[];p.nw.forEach(e=>{newSeq.push({k:"intro",e});});
  let d=0,x=0;
  newSeq.forEach((it,i)=>{items.push(it);if(dueItems[d])items.push(dueItems[d++]);if(i%2===1&&exItems[x])items.push(exItems[x++]);items.push({k:"recall",e:it.e,dir:"fr-vi",after:true});});
  while(d<dueItems.length||x<exItems.length){if(dueItems[d])items.push(dueItems[d++]);if(d%4===0&&exItems[x])items.push(exItems[x++]);if(d>=dueItems.length)while(x<exItems.length)items.push(exItems[x++]);}
  // tách các thẻ "hỏi lại" khỏi ngay sau thẻ giới thiệu
  for(let i=0;i<items.length-1;i++){if(items[i].k==="intro"&&items[i+1].after&&i+2<items.length){[items[i+1],items[i+2]]=[items[i+2],items[i+1]];}}
  if(!items.length){sess={items:[],i:0,res:[],from:from||"today",scope};S.view="session";render();return;}
  sess={items,i:0,res:[],from:from||"today",scope,state:null,requeue:{}};
  S.view="session";save();render();window.scrollTo({top:0});
}
function sessNext(){sess.i++;sess.state=null;render();}
function sessResult(item,ok){
  sess.res.push({item,ok});
  if(!ok){const id=(item.e&&item.e.key)||(item.ex&&item.ex.key);sess.requeue[id]=(sess.requeue[id]||0)+1;
    if(sess.requeue[id]<=1){const again=item.e?(sess.typing?{k:"type",e:item.e,lang:item.lang}:{k:"recall",e:item.e,dir:"fr-vi"}):item;sess.items.splice(Math.min(sess.items.length,sess.i+4),0,again);}}
  save();chrome();
}
function sessSide(it,st){
  if(it.k==="type"||it.k==="cloze")return sideHTML(st,it.k==="cloze"?it.c.ans:it.e.fr,"","Thử nhớ lại từ trong đầu trước, rồi gõ đáp án và nhấn Enter.",true);
  if(it.k==="ex"){const x=it.ex.x;return sideHTML(st,x.t==="m"?untag(x.o[x.a]):x.a[0],x.w||"",x.t==="m"?"Chọn một đáp án, hoặc bấm phím 1, 2, 3.":"Gõ đáp án rồi nhấn Enter.",x.t!=="m");}
  if(it.k==="intro")return `<aside class="fbside"><span class="tape">từ mới</span><p>Nghe phát âm, đọc to 2 lần. Vài lượt nữa carnet sẽ hỏi lại từ này.</p></aside>`;
  return `<aside class="fbside"><span class="tape">tự chấm</span><p>Nhớ ra ngay: bấm 3. Nhớ chậm: bấm 2. Quên: bấm 1, từ sẽ quay lại sớm.</p></aside>`;
}
function viewSession(){
  if(!sess){go("today");return;}
  const n=sess.items.length;
  if(sess.i>=n){viewSummary();return;}
  const it=sess.items[sess.i],st=sess.state||{};
  let body="",acts="",label="";
  if(it.k==="intro"){
    const e=it.e,ex=example(e);label=`Từ mới · ${esc(e.sub||"")}`;
    body=`<div class="prompt" lang="fr">${esc(e.fr)} ${sayBtn(e.fr)}</div>
    <div class="ans"><div class="main">${esc(e.vi)}</div><div class="en">${esc(e.en)}</div>
    ${ex?`<p class="q" style="margin:14px 0 0">Trong câu: <span class="fr" lang="fr">${esc(ex)}</span></p>`:""}
    ${e.nt&&e.nt!==ex?`<div class="nt">${esc(e.nt)}</div>`:""}</div>
    <p class="muted small" style="margin:0">Đọc to từ này 2 lần. Lát nữa carnet sẽ hỏi lại em.</p>`;
    acts=`<button class="btn big" id="a-next">Đã đọc, tiếp tục <kbd>Enter</kbd></button>`;
  }else if(it.k==="recall"){
    const e=it.e,fr2vi=it.dir!=="vi-fr";label=fr2vi?"Nghĩa của từ này là gì?":"Nói từ này bằng tiếng Pháp";
    body=`<div class="prompt" ${fr2vi?'lang="fr"':""}>${esc(fr2vi?e.fr:e.vi)} ${fr2vi?sayBtn(e.fr):""}</div>`;
    if(st.shown){body+=`<div class="ans"><div class="main" ${fr2vi?"":'lang="fr"'}>${esc(fr2vi?e.vi:e.fr)} ${fr2vi?"":sayBtn(e.fr)}</div><div class="en">${esc(e.en)}</div>${e.nt?`<div class="nt">${esc(e.nt)}</div>`:""}</div>`;
      acts=`<button class="btn bad" data-g="0">Chưa nhớ <kbd>1</kbd></button><button class="btn mid" data-g="1">Nhớ, hơi chậm <kbd>2</kbd></button><button class="btn good" data-g="2">Nhớ ngay <kbd>3</kbd></button>`;}
    else{body+=`<p class="muted" style="margin:0">Tự nhớ lại trong đầu trước, rồi mới lật đáp án.</p>`;acts=`<button class="btn big" id="a-show">Lật đáp án <kbd>Space</kbd></button>`;}
  }else if(it.k==="type"||it.k==="cloze"){
    const e=it.e,isC=it.k==="cloze";label=isC?"Điền từ còn thiếu vào câu":"Gõ từ này bằng tiếng Pháp";
    body=isC?`<p class="q" lang="fr">${esc(it.c.before)}<b style="border-bottom:2px solid var(--mustard);padding:0 30px">&nbsp;</b>${esc(it.c.after)}</p><p class="muted" style="margin:0">Gợi ý: ${esc(e.vi)}</p>`
      :`<div class="prompt tp">${esc(it.lang==="en"?e.en:e.vi)}</div><p class="muted" style="margin:0">${esc(it.lang==="en"?e.vi:e.en)}${e.sub?` · ${esc(e.sub)}`:""}</p>${st.hint&&!st.res?`<p class="q" lang="fr" style="margin:0;letter-spacing:.12em;font-family:var(--display)">${esc(hintOf(e.fr))}</p>`:""}`;
    body+=`<label class="ans-field" for="a-in"><span>Nhập từ tiếng Pháp</span><input type="text" id="a-in" lang="fr" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ từ tiếng Pháp…" class="${st.res?"is-"+st.res:""}" ${st.res?"disabled":""} value="${esc(st.val||"")}"></label>${st.res?"":ACCBAR}`;
    if(st.res){acts=`<button class="btn big" id="a-next">Tiếp tục <kbd>Enter</kbd></button>`;}
    else acts=`<button class="btn big" id="a-check">Kiểm tra <kbd>Enter</kbd></button>${isC||st.hint?"":`<button class="btn mid" id="a-hint">Gợi ý chữ đầu</button>`}<button class="btn ghost" id="a-idk">Em không nhớ</button><span class="kbd-hint">Nhấn Enter để chấm</span>`;
  }else if(it.k==="ex"){
    const {u,x}=it.ex;label=`Ngữ pháp · ${esc(u.src.split(" +")[0])}`;
    [body,acts]=exHTML(x,st);
  }
  const stamp="";const okN=sess.res.filter(r=>r.ok).length,noN=sess.res.length-okN;
  main.innerHTML=`<div class="qtop"><button class="back" id="q-close" style="margin:0">✕ Dừng</button><div class="bar"><i style="width:${sess.i/n*100}%"></i></div><span class="tally"><span class="t-ok">✓ ${okN}</span><span class="t-no">✗ ${noN}</span></span><span class="n">${sess.i+1} / ${n}</span></div>
  <div class="qwrap"><section class="qcard ${st.res?"r-"+(st.res==="no"?"no":"ok"):""}">${stamp}<div class="kind"><span class="lab">${label}</span>${it.e?`<span class="tape ${lvl(it.e.key)>=2?"sage":""}" style="transform:none">${LVN[lvl(it.e.key)]}</span>`:""}</div>${body}<div class="qacts">${acts}</div></section>${sessSide(it,st)}</div>
  <p class="keys">Phím tắt: Space lật thẻ · 1 2 3 chấm điểm · Enter tiếp tục · bấm chữ gạch chân để nghe</p>`;
  bindSession(it);
}
const untag=h=>String(h).replace(/<[^>]*>/g,"");
function sideHTML(st,ans,note,tip,typedOK){
  if(!st.res)return `<aside class="fbside" aria-live="polite"><span class="tape">phản hồi</span><p>${tip}</p>${typedOK?`<small>Không gõ dấu vẫn được chấp nhận, trang sẽ nhắc dấu đúng.</small>`:""}</aside>`;
  const ok=st.res!=="no",cls=st.res==="ok"?"ok":st.res==="accent"?"warn":"no";
  const lab=st.res==="ok"?"Đúng":st.res==="accent"?"Sai dấu":"Cần ôn";
  return `<aside class="fbside r-${cls}" aria-live="polite"><span class="tape">phản hồi</span>
   <div class="stampc ${cls}"><b>${ok?"✓":"✗"}</b><span>${lab}</span></div>${memeHTML(st)}
   ${st.res==="ok"?`<p class="ok-line">${ok?"Chính xác!":""}</p>`:""}
   ${st.res!=="ok"&&st.val?`<p class="typed">Em gõ: <s>${esc(st.val)}</s></p>`:""}
   <p class="ansl">${st.res==="ok"?"":"Đáp án: "}<span class="fr" lang="fr">${esc(ans)}</span></p>
   ${note?`<small>${note}</small>`:""}
   ${st.res==="no"?`<small>${S.view==="session"?"Câu này sẽ quay lại sau vài lượt.":"Câu này sẽ quay lại trong phiên ôn hằng ngày."}</small>`:""}</aside>`;
}
function fbHTML(res,ans,typed){
  const later=S.view==="session"?"Câu này sẽ quay lại sau vài lượt.":"Câu này sẽ quay lại trong phiên ôn hằng ngày.";
  if(res==="ok")return `<div class="verdict ok" role="status"><span class="ic" aria-hidden="true">✓</span><div><b>Chính xác!</b><span class="fr" lang="fr">${esc(ans)}</span></div></div>`;
  if(res==="accent")return `<div class="verdict warn" role="status"><span class="ic" aria-hidden="true">✓</span><div><b>Đúng, nhưng sai dấu</b><span>Em gõ: ${esc(typed||"")}</span><span>Viết đúng: <span class="fr" lang="fr">${esc(ans)}</span></span></div></div>`;
  return `<div class="verdict no" role="status"><span class="ic" aria-hidden="true">✗</span><div><b>Chưa đúng</b>${typed?`<span>Em gõ: <s>${esc(typed)}</s></span>`:""}<span>Đáp án: <span class="fr" lang="fr">${esc(ans)}</span></span><small>${later}</small></div></div>`;
}
function exHTML(x,st){
  let body=`<p class="q">${x.q}</p>`,acts="";
  if(x.t==="m"){
    body+=`<div class="opts">${x.o.map((o,j)=>`<button class="opt ${st.pick!=null?(j===x.a?"ok":j===st.pick?"no":""):""}" data-j="${j}" ${st.res?"disabled":""}><kbd>${j+1}</kbd><span>${o}</span></button>`).join("")}</div>`;
    if(st.res){acts=`<button class="btn big" id="a-next">Tiếp tục <kbd>Enter</kbd></button>`;}
  }else{
    body+=`<label class="ans-field" for="a-in"><span>Nhập từ tiếng Pháp</span><input type="text" id="a-in" lang="fr" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ đáp án…" class="${st.res?"is-"+st.res:""}" ${st.res?"disabled":""} value="${esc(st.val||"")}"></label>${st.res?"":ACCBAR}`;
    if(st.res){acts=`<button class="btn big" id="a-next">Tiếp tục <kbd>Enter</kbd></button>`;}
    else acts=`<button class="btn big" id="a-check">Kiểm tra <kbd>Enter</kbd></button><button class="btn ghost" id="a-idk">Xem đáp án</button>`;
  }
  return [body,acts];
}
function bindSession(it){
  const st=sess.state=sess.state||{};
  $("#q-close").onclick=()=>{const f=sess.from;sess=null;go(f);};
  const nx=$("#a-next");if(nx)nx.onclick=()=>sessNext();
  const sh=$("#a-show");if(sh)sh.onclick=()=>{st.shown=1;if(it.dir==="vi-fr")speak(it.e.fr);render();};
  main.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{const q=+b.dataset.g;grade(it.e.key,q);sessResult(it,q>0);sessNext();});
  const inp=$("#a-in");
  const check=give=>{
    if(it.k==="ex"){const r=give?"no":judge(inp.value,it.ex.x.a);if(!r){inp.focus();return;}st.val=inp.value;st.res=r;markVerdict();chime(r!=="no");grade(it.ex.key,r==="no"?0:1);if(r!=="no")S.done[it.ex.u.id+":"+it.ex.i]=1;sessResult(it,r!=="no");}
    else{const ans=it.k==="cloze"?[it.c.ans,...accepted(it.e.fr,"fr")]:accepted(it.e.fr,"fr");const r=give?"no":judge(inp.value,ans);if(!r){inp.focus();return;}st.val=inp.value;st.res=r;markVerdict();chime(r!=="no");grade(it.e.key,r==="no"?0:1);sessResult(it,r!=="no");if(r!=="no")speak(it.e.fr);}
    render();
  };
  const ck=$("#a-check");if(ck)ck.onclick=()=>check(false);
  const idk=$("#a-idk");if(idk)idk.onclick=()=>check(true);
  const hb=$("#a-hint");if(hb)hb.onclick=()=>{st.hint=1;st.val=inp.value;render();};
  if(inp&&!st.res){setTimeout(()=>{try{inp.focus({preventScroll:true});}catch(e){}},0);}
  main.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(st.res)return;const j=+b.dataset.j,x=it.ex.x;st.pick=j;st.res=j===x.a?"ok":"no";markVerdict();chime(st.res==="ok");grade(it.ex.key,st.res==="no"?0:1);if(st.res==="ok")S.done[it.ex.u.id+":"+it.ex.i]=1;sessResult(it,st.res==="ok");render();});
  if(it.k==="intro"&&!st.spoke){st.spoke=1;speak(it.e.fr);}
}
function viewSummary(){
  const r=sess.res,ok=r.filter(x=>x.ok).length,bad=r.filter(x=>!x.ok);
  const missed=[...new Map(bad.filter(x=>x.item.e).map(x=>[x.item.e.key,x.item.e])).values()];
  if(!sess.items.length){
    main.innerHTML=`<section class="sheet fold summary"><span class="tape sage">tout est fait</span><h1 style="margin-top:14px">Hôm nay em đã ôn xong.</h1><p class="lede" style="margin:10px auto 24px">Không còn từ nào đến hạn trong phạm vi này. Em có thể học thêm từ mới ở mục Từ vựng, hoặc làm một bài học.</p><button class="btn" id="s-home">Về trang Hôm nay</button></section>`;
    $("#s-home").onclick=()=>go("today");return;
  }
  main.innerHTML=`<section class="sheet fold summary"><span class="tape sage">séance terminée</span>
  <div class="big" style="margin-top:18px">${r.length?Math.round(ok/r.length*100):0}%</div><p class="muted" style="margin:6px 0 0">câu trả lời đúng ngay lần đầu</p>
  <div class="sum-row"><div><b>${r.length}</b><span>lượt</span></div><div><b>${ok}</b><span>đúng</span></div><div><b>${bad.length}</b><span>cần ôn lại</span></div><div><b>${streak()}</b><span>ngày liên tiếp</span></div></div>
  ${missed.length?`<div style="text-align:left;max-width:640px;margin:0 auto 26px"><p class="eyebrow" style="margin-bottom:8px">Những từ sẽ quay lại sớm</p><div class="words">${missed.map(wordHTML).join("")}</div></div>`:""}
  <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><button class="btn" id="s-home">Về trang Hôm nay</button><button class="btn ghost" id="s-more">Ôn thêm một phiên</button></div></section>`;
  $("#s-home").onclick=()=>go(sess.from==="lex"?"lex":"today");
  $("#s-more").onclick=()=>sess.typing?startTyping(sess.scope,sess.from):startSession(sess.scope,sess.from);
}
let lastVerdict=0;
function markVerdict(){lastVerdict=Date.now();}
document.addEventListener("keydown",e=>{
  if(e.key!=="Enter")return;
  const inSession=S.view==="session"&&sess,inLesson=S.view==="lessons"&&S.lesson&&S.stage==="practice";
  if(!inSession&&!inLesson)return;
  if(e.isComposing||e.keyCode===229)return; // bàn phím tiếng Việt đang ghép chữ: chờ lần Enter sau
  e.preventDefault();e.stopImmediatePropagation();
  if(e.repeat)return;
  const ck=$("#a-check"),nx=$("#a-next");
  if(ck){ck.click();return;}
  if(nx&&Date.now()-lastVerdict>450)nx.click();
},true);
document.addEventListener("keydown",e=>{
  if(S.view!=="session"||!sess)return;
  const typing=e.target.matches&&e.target.matches("input");
  if(e.key==="Escape"){$("#q-close")&&$("#q-close").click();return;}
  if(typing)return;
  if(e.key===" "&&$("#a-show")){e.preventDefault();$("#a-show").click();}
  else if(e.key==="Enter"&&$("#a-next")){e.preventDefault();$("#a-next").click();}
  else if(/^[123]$/.test(e.key)&&main.querySelector(`[data-g="${+e.key-1}"]`)){main.querySelector(`[data-g="${+e.key-1}"]`).click();}
  else if(/^[1-4]$/.test(e.key)&&main.querySelector(`.opt[data-j="${+e.key-1}"]`)){main.querySelector(`.opt[data-j="${+e.key-1}"]`).click();}
});


/* ================= sticker & meme ================= */
const EYE=(x,y)=>`<circle cx="${x}" cy="${y}" r="4.2" fill="#1b2430"/><circle cx="${x+1.4}" cy="${y-1.4}" r="1.3" fill="#fff"/>`;
const STICKERS={
 ok:[
  {cap:"Nice !",svg:`<svg viewBox="0 0 120 120"><path d="M14 74c6-26 24-44 46-44s40 18 46 44c-10 12-30 18-46 18S24 86 14 74z" fill="#e7a53b" stroke="#8a5a14" stroke-width="3"/><path d="M34 52c4 10 6 22 4 34M60 34v52M86 52c-4 10-6 22-4 34" stroke="#b9781f" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="30" y="56" width="26" height="12" rx="5" fill="#1b2430"/><rect x="64" y="56" width="26" height="12" rx="5" fill="#1b2430"/><path d="M56 61h8" stroke="#1b2430" stroke-width="3"/><path d="M48 78q12 9 24 0" stroke="#1b2430" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M100 30l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#f6d36b"/></svg>`},
  {cap:"Très bien !",svg:`<svg viewBox="0 0 120 120"><rect x="44" y="8" width="32" height="104" rx="16" fill="#d99a45" stroke="#8a5a14" stroke-width="3" transform="rotate(18 60 60)"/><path d="M52 26l14 6M47 44l14 6M42 62l14 6M37 80l14 6" stroke="#f3d39a" stroke-width="4" stroke-linecap="round" transform="rotate(18 60 60)"/>${EYE(54,50)}${EYE(70,55)}<path d="M52 64q9 8 18 4" stroke="#1b2430" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="96" cy="74" r="13" fill="#f6d36b" stroke="#8a5a14" stroke-width="3"/><path d="M92 74l3 4 7-8" stroke="#8a5a14" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`},
  {cap:"Magnifique !",svg:`<svg viewBox="0 0 120 120"><ellipse cx="60" cy="44" rx="40" ry="20" fill="#f2a7b8" stroke="#9c4b5e" stroke-width="3"/><rect x="22" y="56" width="76" height="12" rx="6" fill="#fff4e4" stroke="#9c4b5e" stroke-width="3"/><ellipse cx="60" cy="82" rx="40" ry="20" fill="#f2a7b8" stroke="#9c4b5e" stroke-width="3"/><path d="M42 40c0-5 7-5 7 0 0-5 7-5 7 0 0 5-7 9-7 9s-7-4-7-9zM64 40c0-5 7-5 7 0 0-5 7-5 7 0 0 5-7 9-7 9s-7-4-7-9z" fill="#c2324e"/><path d="M50 82q10 8 20 0" stroke="#1b2430" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`},
  {cap:"Bravo !",svg:`<svg viewBox="0 0 120 120"><path d="M16 88L96 30l8 58z" fill="#f6cf5a" stroke="#9a7516" stroke-width="3" stroke-linejoin="round"/><circle cx="74" cy="70" r="6" fill="#e6b53d"/><circle cx="90" cy="56" r="4" fill="#e6b53d"/><circle cx="52" cy="80" r="4" fill="#e6b53d"/>${EYE(62,62)}${EYE(80,52)}<path d="M64 76q10 2 16-6" stroke="#1b2430" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M18 40l4-10M30 32l8-6M12 56l-8-2" stroke="#d6a22a" stroke-width="4" stroke-linecap="round"/></svg>`}
 ],
 no:[
  {cap:"Oups…",svg:`<svg viewBox="0 0 120 120"><path d="M14 78c6-26 24-44 46-44s40 18 46 44c-10 12-30 18-46 18S24 90 14 78z" fill="#e7a53b" stroke="#8a5a14" stroke-width="3"/><path d="M34 56c4 10 6 22 4 34M60 38v52M86 56c-4 10-6 22-4 34" stroke="#b9781f" stroke-width="3" fill="none" stroke-linecap="round"/>${EYE(46,64)}${EYE(72,64)}<path d="M50 84q10-7 20 0" stroke="#1b2430" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M40 72q-3 8 0 12q3-4 0-12" fill="#6ab0e8"/></svg>`},
  {cap:"Doucement…",svg:`<svg viewBox="0 0 120 120"><path d="M10 92h86q12 0 12-10" stroke="#6b8f6f" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="54" cy="64" r="28" fill="#c98b5a" stroke="#7a4a26" stroke-width="3"/><path d="M54 64m-6 0a6 6 0 1 1 12 0a14 14 0 1 1-28 0a22 22 0 1 1 44 0" stroke="#7a4a26" stroke-width="3" fill="none"/><path d="M96 82V54M104 82V58" stroke="#6b8f6f" stroke-width="4" stroke-linecap="round"/><circle cx="96" cy="52" r="4" fill="#1b2430"/><circle cx="104" cy="56" r="4" fill="#1b2430"/></svg>`},
  {cap:"Pas grave !",svg:`<svg viewBox="0 0 120 120"><ellipse cx="60" cy="52" rx="42" ry="16" fill="#26324a" stroke="#0f1726" stroke-width="3"/><path d="M58 36q2-8 6-8" stroke="#0f1726" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="78" r="26" fill="#f4d9bd" stroke="#8a5a3a" stroke-width="3"/>${EYE(50,76)}${EYE(70,76)}<path d="M52 92q8 4 16 0" stroke="#1b2430" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M40 70l8-3M80 70l-8-3" stroke="#1b2430" stroke-width="2.5" stroke-linecap="round"/></svg>`},
  {cap:"On réessaie !",svg:`<svg viewBox="0 0 120 120"><path d="M24 92l12-60h48l12 60z" fill="#fff4dc" stroke="#9a7516" stroke-width="3" stroke-linejoin="round"/><path d="M30 64h60" stroke="#e7c27a" stroke-width="3"/><circle cx="48" cy="46" r="5" fill="#e7c27a"/><circle cx="72" cy="80" r="6" fill="#e7c27a"/>${EYE(50,62)}${EYE(70,62)}<path d="M52 78q8-5 16 0" stroke="#1b2430" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M96 30a14 14 0 1 1-6-10" stroke="#3d614e" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M86 14l6 6-8 3" stroke="#3d614e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`}
 ]
};
const CAPS_M={ok:["Nice !","Très bien !","Magnifique !","Bravo !","Parfait !","Génial !","Super !","Chapeau !","Excellent !","C'est ça !"],no:["Oups…","Pas grave !","On réessaie !","Presque !","Courage !","Doucement…","Allez, encore !","Ça arrive !"]};
const MKEY="fr-carnet-memes";
let MEMES={ok:[],no:[]};
try{const m=JSON.parse(localStorage.getItem(MKEY)||"null");if(m)MEMES=Object.assign(MEMES,m);}catch(e){}
function saveMemes(){try{localStorage.setItem(MKEY,JSON.stringify(MEMES));return true;}catch(e){return false;}}
function pickMeme(kind){
  const own=MEMES[kind]||[],st=STICKERS[kind];
  if(own.length&&(S.prefs.memeMode==="own"||Math.random()<.7)){const src=own[Math.floor(Math.random()*own.length)];return {img:src,cap:""};}
  const s=st[Math.floor(Math.random()*st.length)];const caps=CAPS_M[kind];return {svg:s.svg,cap:Math.random()<.5?s.cap:caps[Math.floor(Math.random()*caps.length)]};
}
function memeHTML(st){
  if(S.prefs.memeOff||!st.res)return "";
  if(!st.meme)st.meme=pickMeme(st.res==="no"?"no":"ok");
  const m=st.meme;
  return `<figure class="meme ${st.res==="no"?"no":"ok"}">${m.img?`<img src="${m.img}" alt="Meme của em">`:m.svg}${m.cap?`<figcaption>${m.cap}</figcaption>`:""}</figure>`;
}
function shrinkImage(file){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,320/Math.max(im.width,im.height));const c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.82));};im.onerror=rej;im.src=fr.result;};fr.onerror=rej;fr.readAsDataURL(file);});}
function memePanel(){
  const th=k=>(MEMES[k]||[]).map((src,i)=>`<span class="mthumb"><img src="${src}" alt=""><button data-del="${k}:${i}" aria-label="Xóa meme">×</button></span>`).join("");
  return `<section class="paper memes-panel"><p class="eyebrow">Meme khi chấm điểm</p>
   <p class="small muted" style="margin:6px 0 10px">Carnet có sẵn sticker vui. Em có thể thêm ảnh meme của riêng mình (lưu trên trình duyệt này).</p>
   <div class="mrow"><b>Khi đúng</b><div class="mthumbs">${th("ok")}<label class="madd">+ Thêm<input type="file" accept="image/*" multiple data-add="ok" hidden></label></div></div>
   <div class="mrow"><b>Khi sai</b><div class="mthumbs">${th("no")}<label class="madd">+ Thêm<input type="file" accept="image/*" multiple data-add="no" hidden></label></div></div>
   <label class="mtoggle"><input type="checkbox" id="meme-off" ${S.prefs.memeOff?"checked":""}> Tắt meme</label>
   <p class="small" id="meme-msg" style="margin:6px 0 0;color:var(--coral)"></p></section>`;
}
function bindMemePanel(){
  main.querySelectorAll("[data-add]").forEach(inp=>inp.onchange=async()=>{
    const k=inp.dataset.add;for(const f of inp.files){try{MEMES[k].push(await shrinkImage(f));}catch(e){}}
    if(!saveMemes()){MEMES[k].splice(-inp.files.length);$("#meme-msg").textContent="Bộ nhớ trình duyệt đã đầy, hãy xóa bớt meme cũ.";return;}
    render();});
  main.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{const [k,i]=b.dataset.del.split(":");MEMES[k].splice(+i,1);saveMemes();render();});
  const off=$("#meme-off");if(off)off.onchange=()=>{S.prefs.memeOff=off.checked;save();};
}

/* ================= Hôm nay ================= */
function viewToday(){
  const p=planFor(null),total=p.due.length+p.nw.length*2+p.ex.length,c=dist(WORDS),fresh=!Object.keys(S.srs).length;
  const d=new Date(),dstr=d.toLocaleDateString("vi-VN",{weekday:"long",day:"numeric",month:"long"});
  const t=dn(),start=t-34-((d.getDay()+6)%7)+((d.getDay()+6)%7);
  const first=t-((d.getDay()+6)%7)-28;
  let cal="";for(let i=0;i<35;i++){const x=first+i,n=S.log[x]||0;cal+=`<i class="${n>=20?"on":n?"on2":""} ${x===t?"today":""}" title="${n} lượt"></i>`;}
  const nextU=UNITS.find(u=>u.ex.some((_,i)=>!S.done[u.id+":"+i]))||UNITS[0];
  const ud=nextU.ex.filter((_,i)=>S.done[nextU.id+":"+i]).length;
  main.innerHTML=`<header class="head"><div><p class="eyebrow">${esc(dstr)}</p><h1>Bonjour, <em>Loan.</em></h1></div></header>
  <div class="today-grid">
   <div class="main-stack">
   <section class="sheet fold start" aria-labelledby="st-h">
    <span class="tape">séance du jour</span>
    <h2 id="st-h">${total?`Phiên ôn hôm nay: ${total} lượt`:"Hôm nay không còn gì đến hạn"}</h2>
    <p class="muted" style="margin:0">${fresh?"Lần đầu dùng carnet: phiên đầu tiên sẽ giới thiệu từ mới theo thứ tự dễ trước, khó sau.":"Carnet tự chọn từ sắp quên, từ mới và câu ngữ pháp em từng sai."}</p>
    <ul class="plan">
     <li><b>${p.due.length}</b><span>Từ đến hạn ôn<small>Những từ em sắp quên, gặp lại đúng lúc để nhớ lâu.</small></span></li>
     <li><b>${p.nw.length}</b><span>Từ mới<small>${p.nw.length?"Bắt đầu với: "+p.nw.slice(0,3).map(e=>esc(e.fr)).join(", ")+"…":"Đã học hết từ mới trong kho."}</small></span></li>
     <li><b>${p.ex.length}</b><span>Câu ngữ pháp<small>Câu em từng sai và câu chưa làm từ các buổi học.</small></span></li>
    </ul>
    <div class="opt-row">
     <div><label>Thời lượng</label><div class="seg" role="group" aria-label="Thời lượng">${[5,15,30].map(m=>`<button data-min="${m}" aria-pressed="${S.prefs.min===m}">${m} phút</button>`).join("")}</div></div>
     <div><label>Hỏi theo chiều</label><div class="seg" role="group" aria-label="Chiều hỏi">${[["fr-vi","Pháp → Việt"],["vi-fr","Việt → Pháp"],["mix","Trộn"]].map(o=>`<button data-dir="${o[0]}" aria-pressed="${S.prefs.dir===o[0]}">${o[1]}</button>`).join("")}</div></div>
    </div>
    <div style="margin-top:26px"><button class="btn big" id="t-start" ${total?"":"disabled"}>Bắt đầu phiên ôn →</button></div>
   </section>
   <div class="settings-row">${voicePanel()}${memePanel()}</div>
   </div>
   <div class="side-stack">
    ${fresh?`<section class="paper"><p class="eyebrow">Carnet giúp em nhớ thế nào</p>
      <ol style="margin:10px 0 0;padding-left:20px;display:grid;gap:8px">
      <li><b>Gặp từ trong câu.</b> Mỗi từ mới đi kèm phát âm và một câu ví dụ, vì não nhớ từ qua ngữ cảnh.</li>
      <li><b>Tự nhớ lại.</b> Thẻ hỏi trước, đáp án sau. Cố nhớ (kể cả nhớ sai) giúp nhớ lâu hơn đọc lại.</li>
      <li><b>Gặp lại đúng lúc.</b> Từ khó quay lại sau 1 ngày, từ thuộc sau 1–4 tuần.</li></ol></section>`:""}
    <section class="paper"><div class="streak"><b>${streak()}</b><span class="muted">ngày học liên tiếp</span></div>
      <div class="cal-h">${["T2","T3","T4","T5","T6","T7","CN"].map(x=>`<span>${x}</span>`).join("")}</div><div class="cal">${cal}</div>
      <p class="small muted" style="margin:10px 0 0">Ô xanh đậm: ôn từ 20 lượt trở lên trong ngày.</p></section>
    <section class="paper"><p class="eyebrow">Kho từ của em · ${WORDS.length} từ</p><div style="margin:12px 0 10px">${mbar(c)}</div>${legend(c)}</section>
    <section class="paper cont"><span class="tape navy" style="transform:none">bài học tiếp theo</span><div><h3>${esc(nextU.name)}</h3><p class="small muted" style="margin:2px 0 0">${esc(nextU.src)} · ${ud}/${nextU.ex.length} câu đã làm</p></div><button class="btn ghost" id="t-lesson">Mở</button></section>
   </div>
  </div>`;
  main.querySelectorAll("[data-min]").forEach(b=>b.onclick=()=>{S.prefs.min=+b.dataset.min;save();viewToday();});
  main.querySelectorAll("[data-dir]").forEach(b=>b.onclick=()=>{S.prefs.dir=b.dataset.dir;save();viewToday();});
  $("#t-start").onclick=()=>startSession(null,"today");
  $("#t-lesson").onclick=()=>{S.lesson=nextU.id;S.stage="learn";S.ci=0;go("lessons");};
  bindMemePanel();bindVoicePanel();
}

/* ================= Bài học ================= */
let lessonF="all",lessonQ2="";
function lessonStats(u){const d=u.ex.filter((_,j)=>S.done[u.id+":"+j]).length;const wrong=u.ex.filter((_,j)=>{const r=S.srs["ex|"+u.id+":"+j];return r&&r.b===1;}).length;return {d,wrong,full:d===u.ex.length};}
const LFILTERS=[["all","Tất cả"],["todo","Chưa làm xong"],["done","Đã xong"],["wrong","Có câu sai cần ôn"]];
function viewLessons(){
  if(S.lesson){viewLesson(UNITS.find(u=>u.id===S.lesson)||UNITS[0]);return;}
  main.innerHTML=`<header class="head"><div><p class="eyebrow">Leçons · ${UNITS.length} buổi</p><h1>Bài học</h1><p class="lede">Mỗi buổi đi theo 3 bước: hiểu từng điểm ngữ pháp, luyện ngay, rồi xem lại lỗi em hay mắc.</p></div>
  <label class="search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" id="ls-q" placeholder="Tìm bài: giờ, futur proche, buổi 5…" value="${esc(lessonQ2)}"></label></header>
  <div class="filters" role="group" aria-label="Lọc bài học">${LFILTERS.map(f=>`<button class="chipf" data-f="${f[0]}" aria-pressed="${lessonF===f[0]}">${f[1]} <small id="fc-${f[0]}"></small></button>`).join("")}</div>
  <div id="ls-body"></div>`;
  const body=$("#ls-body"),q=$("#ls-q");
  const match=(u,f)=>{const st=lessonStats(u);return f==="all"||(f==="todo"&&!st.full)||(f==="done"&&st.full)||(f==="wrong"&&st.wrong>0);};
  const draw=()=>{
    const s=strip(norm(lessonQ2));
    const byQ=UNITS.filter(u=>!s||strip(norm(u.name+" "+u.src+" "+u.date+" "+u.notes.map(n=>n.h).join(" "))).includes(s));
    LFILTERS.forEach(f=>{$("#fc-"+f[0]).textContent=byQ.filter(u=>match(u,f[0])).length;});
    const list=byQ.filter(u=>match(u,lessonF));
    body.innerHTML=list.length?`<div class="lessons">${list.map(u=>{const st=lessonStats(u),i=UNITS.indexOf(u);
      return `<button class="lcard" data-u="${u.id}"><div class="top"><span>${u.date} · ${esc(u.src.split(" +")[0])}</span>${u.pin?'<span class="pill done">ghim</span>':u===UNITS.find(x=>!x.pin)?'<span class="pill new">mới</span>':st.full?'<span class="pill done">xong</span>':""}</div>
      <h3>${esc(u.name)}</h3><p class="meta" style="margin:0">${u.notes.length} điểm cần nhớ · ${u.ex.length} câu luyện${st.wrong?` · <b style="color:var(--coral)">${st.wrong} câu sai</b>`:` · ${u.fixes.length} lỗi hay gặp`}</p>
      <div class="prog" aria-label="${st.d}/${u.ex.length} câu"><i style="width:${st.d/u.ex.length*100}%"></i></div></button>`}).join("")}</div>`
      :`<div class="empty"><b>Không có bài nào khớp.</b>Thử bỏ bộ lọc hoặc gõ từ khác.</div>`;
    body.querySelectorAll(".lcard").forEach(b=>b.onclick=()=>{S.lesson=b.dataset.u;S.stage="learn";S.ci=0;S.qi=0;save();render();window.scrollTo({top:0});});
  };
  main.querySelectorAll(".chipf").forEach(b=>b.onclick=()=>{lessonF=b.dataset.f;main.querySelectorAll(".chipf").forEach(x=>x.setAttribute("aria-pressed",x===b));draw();});
  q.oninput=()=>{lessonQ2=q.value;draw();};draw();
}
function viewLesson(u){
  if(S.stage==="learn"){S.seen[u.id]=Object.assign({},S.seen[u.id],{[Math.min(S.ci,u.notes.length-1)]:1});save();}
  const seen=S.seen[u.id]||{},d=u.ex.filter((_,j)=>S.done[u.id+":"+j]).length;
  const stages=[["learn","Hiểu",`${Object.keys(seen).length}/${u.notes.length}`],["practice","Luyện",`${d}/${u.ex.length}`],["fixes","Lỗi hay gặp",u.fixes.length]];
  let body="";
  if(S.stage==="learn"){
    const ci=Math.min(S.ci,u.notes.length-1),n=u.notes[ci];
    body=`<div class="learn"><nav class="toc" aria-label="Các điểm cần nhớ">${u.notes.map((x,i)=>`<button data-ci="${i}" aria-current="${i===ci}" class="${(S.seen[u.id]||{})[i]?"seen":""}"><span class="n">${pad(i+1)}</span><span class="t">${esc(x.h.replace(/^\d+\s*·\s*/,""))}</span></button>`).join("")}</nav>
    <article class="sheet concept"><span class="count">${pad(ci+1)} / ${pad(u.notes.length)}</span>${n.k?' <span class="tape" style="margin-left:10px">à retenir</span>':""}
      <h2>${n.h.replace(/^\d+\s*·\s*/,"")}</h2><div class="body">${n.html}</div>
      <div class="pager"><button class="btn ghost" id="l-prev" ${ci===0?"disabled":""}>← Trước</button>${ci<u.notes.length-1?`<button class="btn" id="l-next">Điểm tiếp theo →</button>`:`<button class="btn" id="l-go">Sang phần Luyện →</button>`}</div></article></div>`;
  }else if(S.stage==="practice"){
    const qi=Math.min(S.qi,u.ex.length-1),x=u.ex[qi],k=u.id+":"+qi,st=(lessonQ&&lessonQ.k===k)?lessonQ:(lessonQ={k});
    if(S.done[k]&&!st.res){st.res="ok";st.val=x.t==="m"?null:x.a[0];if(x.t==="m")st.pick=x.a;}
    const [qb,qa]=exHTML(x,st);
    const stamp="";
    body=`<div class="qtop"><div class="bar"><i style="width:${d/u.ex.length*100}%"></i></div><span class="n">${pad(qi+1)} / ${pad(u.ex.length)}</span></div>
    <div class="qwrap"><section class="qcard ${st.res?"r-"+(st.res==="no"?"no":"ok"):""}" style="min-height:300px">${stamp}<div class="kind"><span class="lab">Câu ${qi+1}</span></div>${qb}<div class="qacts">${st.res?`<button class="btn big" id="a-next">${qi<u.ex.length-1?"Câu tiếp theo":"Xem lỗi hay gặp"} <kbd>Enter</kbd></button>`:qa}</div></section>${sideHTML(st,x.t==="m"?untag(x.o[x.a]):x.a[0],x.w||"",x.t==="m"?"Chọn một đáp án, hoặc bấm phím 1, 2, 3.":"Gõ đáp án rồi nhấn Enter.",x.t!=="m")}</div>
    <div class="qdots" aria-label="Chọn câu">${u.ex.map((_,i)=>`<button data-qi="${i}" class="${S.done[u.id+":"+i]?"ok":(S.srs["ex|"+u.id+":"+i]&&S.srs["ex|"+u.id+":"+i].b===1?"no":"")}" aria-current="${i===qi}">${i+1}</button>`).join("")}</div>
    <p class="keys">Câu sai sẽ tự quay lại trong phiên ôn hằng ngày. <button class="back" id="l-reset" style="margin:0 0 0 8px">Làm lại từ đầu</button></p>`;
  }else{
    body=`<p class="muted" style="margin-top:0">Lỗi lấy từ bài em làm và ghi chú của cô. Đọc to câu đúng 2–3 lần.</p><div class="fixes">${u.fixes.map(f=>`<div class="fix"><span class="w">${f[0]}</span><span class="arrow">→</span><span>${F(f[1])}</span><span class="why">${f[2]}</span></div>`).join("")}</div>`;
  }
  main.innerHTML=`<div class="lnav"><button class="back" id="l-back" style="margin:0">← Tất cả bài học</button>
  <label class="pick"><span class="eyebrow">Chuyển bài</span><select id="l-pick">${UNITS.map(x=>`<option value="${x.id}" ${x.id===u.id?"selected":""}>${x.date} · ${esc(x.src.split(" +")[0])} — ${esc(x.name)}</option>`).join("")}</select></label></div>
  <header class="head" style="margin-bottom:0"><div><p class="eyebrow">${u.date} · ${esc(u.src)}</p><h1>${esc(u.name)}</h1></div>
  <p class="small muted" style="margin:0">Nguồn: ${u.links.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener" style="color:inherit">${l[0]}</a>`).join(", ")}</p></header>
  <div class="steps" role="tablist">${stages.map((s,i)=>`<button class="step" role="tab" data-st="${s[0]}" aria-selected="${S.stage===s[0]}"><b>${i+1}</b>${s[1]} <small>${s[2]}</small></button>`).join("")}</div>${body}`;
  $("#l-back").onclick=()=>{S.lesson=null;save();render();};
  $("#l-pick").onchange=e=>{S.lesson=e.target.value;S.stage="learn";S.ci=0;S.qi=0;lessonQ=null;save();render();window.scrollTo({top:0});};
  main.querySelectorAll(".step").forEach(b=>b.onclick=()=>{S.stage=b.dataset.st;save();render();});
  main.querySelectorAll("[data-ci]").forEach(b=>b.onclick=()=>{S.ci=+b.dataset.ci;save();render();});
  const pv=$("#l-prev");if(pv)pv.onclick=()=>{S.ci=Math.max(0,S.ci-1);save();render();window.scrollTo({top:0});};
  const nx=$("#l-next");if(nx)nx.onclick=()=>{S.ci++;save();render();window.scrollTo({top:0});};
  const lg=$("#l-go");if(lg)lg.onclick=()=>{S.stage="practice";S.qi=u.ex.findIndex((_,i)=>!S.done[u.id+":"+i]);if(S.qi<0)S.qi=0;save();render();};
  if(S.stage==="practice")bindLessonQ(u);
}
let lessonQ=null;
function bindLessonQ(u){
  const qi=Math.min(S.qi,u.ex.length-1),x=u.ex[qi],k=u.id+":"+qi,st=lessonQ;
  const fin=r=>{st.res=r;markVerdict();chime(r!=="no");grade("ex|"+k,r==="no"?0:1);if(r!=="no")S.done[k]=1;save();chrome();render();};
  const inp=$("#a-in");
  const check=give=>{const r=give?"no":judge(inp.value,x.a);if(!r){inp.focus();return;}st.val=inp.value;fin(r);};
  const ck=$("#a-check");if(ck)ck.onclick=()=>check(false);
  const idk=$("#a-idk");if(idk)idk.onclick=()=>check(true);
  if(inp&&!st.res){setTimeout(()=>{try{inp.focus({preventScroll:true});}catch(e){}},0);}
  main.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(st.res)return;st.pick=+b.dataset.j;fin(st.pick===x.a?"ok":"no");});
  const nx=$("#a-next");if(nx)nx.onclick=()=>{if(qi<u.ex.length-1){S.qi=qi+1;lessonQ=null;}else S.stage="fixes";save();render();};
  main.querySelectorAll("[data-qi]").forEach(b=>b.onclick=()=>{S.qi=+b.dataset.qi;lessonQ=null;save();render();});
  $("#l-reset").onclick=()=>{u.ex.forEach((_,i)=>delete S.done[u.id+":"+i]);S.qi=0;lessonQ=null;save();render();};
}
document.addEventListener("keydown",e=>{
  if(S.view!=="lessons"||!S.lesson||e.target.matches&&e.target.matches("input"))return;
  if(S.stage==="practice"){
    if(e.key==="Enter"&&$("#a-next")){e.preventDefault();$("#a-next").click();}
    else if(/^[1-4]$/.test(e.key)&&main.querySelector(`.opt[data-j="${+e.key-1}"]`))main.querySelector(`.opt[data-j="${+e.key-1}"]`).click();
  }else if(S.stage==="learn"){
    if(e.key==="ArrowRight"){($("#l-next")||$("#l-go"))&&($("#l-next")||$("#l-go")).click();}
    else if(e.key==="ArrowLeft"&&$("#l-prev")&&!$("#l-prev").disabled)$("#l-prev").click();
  }
});

/* ================= Từ vựng ================= */
let lexQ="";
function wordHTML(e){return `<div class="w"><i class="dot l${lvl(e.key)}" title="${LVN[lvl(e.key)]}"></i><span class="fr" lang="fr">${esc(e.fr)}</span><span class="vi">${esc(e.vi)}</span><span class="en">${esc(e.en)}</span>${e.nt?`<span class="nt">${esc(e.nt)}</span>`:""}</div>`;}
function viewLex(){
  if(S.topic){viewTopic(TOPICS.find(t=>t.id===S.topic)||TOPICS[0]);return;}
  const c=dist(WORDS);
  main.innerHTML=`<header class="head"><div><p class="eyebrow">Lexique · ${WORDS.length} từ trong ${TOPICS.length} chủ điểm</p><h1>Từ vựng</h1><p class="lede">Mỗi chủ điểm là một cuốn sổ nhỏ. Thanh màu cho biết em đã thuộc tới đâu.</p></div>
  <label class="search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" id="lx-q" placeholder="Tìm từ (Pháp, Việt hoặc Anh)" value="${esc(lexQ)}"></label></header>
  <div id="lx-body"></div>`;
  const body=$("#lx-body"),q=$("#lx-q");
  const draw=()=>{
    const s=strip(norm(lexQ));
    if(s){const r=WORDS.filter(e=>strip(norm(e.fr+" "+e.vi+" "+e.en)).includes(s)).slice(0,120);
      body.innerHTML=r.length?`<p class="small muted">${r.length} kết quả</p><div class="words">${r.map(wordHTML).join("")}</div>`:`<div class="empty"><b>Không tìm thấy “${esc(lexQ)}”.</b>Thử gõ ngắn hơn hoặc gõ không dấu.</div>`;return;}
    body.innerHTML=`<div class="paper" style="margin-bottom:22px;display:grid;gap:10px"><div>${mbar(c)}</div>${legend(c)}</div>
    <div class="topics">${TOPICS.map(t=>{const tc=dist(t.entries),due=t.entries.filter(e=>isDue(e.key)).length;
      return `<button class="tcard" data-t="${t.id}"><h3>${esc(t.title)}</h3><p class="small muted" style="margin:0">${esc(t.caption)}</p>${mbar(tc)}<div class="meta"><span>${t.entries.length} từ · ${t.subs.length} nhóm</span>${due?`<span class="due">${due} đến hạn</span>`:`<span>${tc[2]+tc[3]} đã nhớ</span>`}</div></button>`}).join("")}</div>`;
    body.querySelectorAll(".tcard").forEach(b=>b.onclick=()=>{S.topic=b.dataset.t;save();render();window.scrollTo({top:0});});
  };
  q.oninput=()=>{lexQ=q.value;draw();};draw();
}
function viewTopic(t){
  const c=dist(t.entries),open=S.open[t.id]||"";
  main.innerHTML=`<button class="back" id="t-back">← Tất cả chủ điểm</button>
  <header class="head"><div><p class="eyebrow">Lexique · ${t.entries.length} từ</p><h1>${esc(t.title)}</h1><p class="lede">${esc(t.caption)}</p></div>
  <div style="display:grid;gap:12px;justify-items:end">
  <div style="display:flex;gap:10px;align-items:center"><span class="eyebrow">Hỏi bằng</span><div class="seg" role="group" aria-label="Ngôn ngữ câu hỏi"><button data-tl="vi" aria-pressed="${(S.prefs.tlang||"vi")==="vi"}">Tiếng Việt</button><button data-tl="en" aria-pressed="${S.prefs.tlang==="en"}">Tiếng Anh</button></div></div></div></header>
  <div class="paper" style="margin-bottom:24px;display:grid;gap:10px">${mbar(c)}${legend(c)}</div>
  <div class="chapters">${t.subs.map(s=>{const es=t.entries.filter(e=>e.sub===s),sc=dist(es);return `<div class="chap"><div><h3>${esc(s)}</h3><span class="meta">${es.length} từ · ${sc[2]+sc[3]} đã nhớ</span></div>${mbar(sc)}
    <div class="acts"><button class="btn ghost" data-open="${esc(s)}" aria-expanded="${open===s}">${open===s?"Ẩn từ":"Xem từ"}</button><button class="btn ghost" data-learn="${esc(s)}">Thẻ lật</button><button class="btn" data-type="${esc(s)}">Gõ từ</button></div>
    ${open===s?`<div class="words">${es.map(wordHTML).join("")}</div>`:""}</div>`}).join("")}</div>
  <p class="foot">Chấm màu trước mỗi từ: xám Mới · vàng Đang học · xanh nhạt Nhớ · xanh đậm Thuộc. Bấm từ tiếng Pháp để nghe.</p>`;
  $("#t-back").onclick=()=>{S.topic=null;save();render();};
  main.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{S.open[t.id]=open===b.dataset.open?"":b.dataset.open;save();render();});
  main.querySelectorAll("[data-learn]").forEach(b=>b.onclick=()=>startSession({topic:t.id,sub:b.dataset.learn},"lex"));
  main.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>startTyping({topic:t.id,sub:b.dataset.type},"lex"));
  main.querySelectorAll("[data-tl]").forEach(b=>b.onclick=()=>{S.prefs.tlang=b.dataset.tl;save();render();});
}

/* ================= Hội thoại ================= */
function viewDlg(){
  const sit=SITS.find(s=>s.id===S.sit)||SITS[0];S.sit=sit.id;
  const n=sit.items.length,di=Math.min(S.di,n-1),it=sit.items[di];
  const rev=dlgRev[sit.id+":"+di];
  const one=`<div class="bubbles"><div class="bub"><span class="who">A</span><div class="txt"><span class="fr" lang="fr">${esc(it.q)}</span></div>${sayBtn(it.q)}</div>
    <div class="bub b"><span class="who">B</span>${rev?`<div class="txt"><span class="fr" lang="fr">${esc(it.a)}</span></div>${sayBtn(it.a)}`:`<button class="hidden" id="d-rev">Em sẽ trả lời thế nào? Nói to, rồi bấm để xem (Space)</button><span></span>`}</div></div>
    ${it.n&&rev?`<p class="dlg-note">${esc(it.n)}</p>`:""}`;
  const all=`<div style="display:grid;gap:28px">${sit.items.map(x=>`<div><p class="eyebrow" style="margin-bottom:8px">${esc(x.t)}</p><div class="bubbles"><div class="bub"><span class="who">A</span><div class="txt"><span class="fr" lang="fr">${esc(x.q)}</span></div>${sayBtn(x.q)}</div><div class="bub b"><span class="who">B</span><div class="txt"><span class="fr" lang="fr">${esc(x.a)}</span></div>${sayBtn(x.a)}</div></div>${x.n?`<p class="dlg-note" style="margin-top:10px">${esc(x.n)}</p>`:""}</div>`).join("")}</div>`;
  main.innerHTML=`<header class="head"><div><p class="eyebrow">Dialogues · ${SITS.reduce((a,s)=>a+s.items.length,0)} tình huống</p><h1>Hội thoại</h1><p class="lede">Nhập vai B: nghe câu của A, tự trả lời thành tiếng, rồi lật ra so.</p></div>
  <div class="seg" role="group" aria-label="Chế độ"><button id="d-m1" aria-pressed="${!S.showAll}">Nhập vai</button><button id="d-m2" aria-pressed="${S.showAll}">Đọc cả bài</button></div></header>
  <div class="dlg"><nav class="mini-list" aria-label="Tình huống">${SITS.map(s=>`<button data-sit="${s.id}" aria-current="${s.id===sit.id}">${esc(s.title)}<small>${s.items.length}</small></button>`).join("")}</nav>
  <section class="sheet" style="min-width:0">${S.showAll?all:`<div class="qtop" style="margin-bottom:18px"><span class="tape navy" style="transform:none">${esc(it.t)}</span><div class="bar"><i style="width:${(di+1)/n*100}%"></i></div><span class="n">${di+1} / ${n}</span></div>${one}
    <div class="pager"><button class="btn ghost" id="d-prev" ${di===0?"disabled":""}>← Trước</button><button class="btn" id="d-next" ${di===n-1?"disabled":""}>Câu tiếp theo →</button></div>`}</section></div>`;
  main.querySelectorAll("[data-sit]").forEach(b=>b.onclick=()=>{S.sit=b.dataset.sit;S.di=0;save();render();});
  $("#d-m1").onclick=()=>{S.showAll=false;save();render();};$("#d-m2").onclick=()=>{S.showAll=true;save();render();};
  if(!S.showAll){
    const r=$("#d-rev");if(r)r.onclick=()=>{dlgRev[sit.id+":"+di]=1;speak(it.a);render();};
    $("#d-prev").onclick=()=>{S.di=di-1;save();render();};$("#d-next").onclick=()=>{S.di=di+1;save();render();speak(sit.items[di+1].q);};
  }
}
const dlgRev={};
document.addEventListener("keydown",e=>{
  if(S.view!=="dlg"||S.showAll||e.target.matches&&e.target.matches("input"))return;
  if(e.key===" "&&$("#d-rev")){e.preventDefault();$("#d-rev").click();}
  else if(e.key==="ArrowRight"&&$("#d-next")&&!$("#d-next").disabled)$("#d-next").click();
  else if(e.key==="ArrowLeft"&&$("#d-prev")&&!$("#d-prev").disabled)$("#d-prev").click();
});

/* ================= xưởng viết: dùng từ thật ================= */
const WKEY="fr-writing-v1";
let WR={};try{WR=JSON.parse(localStorage.getItem(WKEY)||"{}")||{};}catch(e){}
function saveWR(){try{localStorage.setItem(WKEY,JSON.stringify(WR));}catch(e){}}
const wfold=s=>s.normalize("NFC").replace(/[À-ſ]/g,c=>strip(c)).toLowerCase().replace(/[’`´]/g,"'").replace(/-/g," ");
const T=(fr,r,key)=>({fr,r,key});
const WMISSIONS=[
 {id:"cuisine",n:"1",title:"Căn bếp của tôi",min:35,need:6,
  scene:"Bạn gọi video cho một người bạn Pháp và dẫn họ đi xem căn bếp (thật hoặc tưởng tượng).",
  task:"Viết ít nhất 35 từ. Mỗi thiết bị một câu: nó ở đâu, và bạn dùng nó để làm gì.",
  frame:["Dans ma cuisine, il y a …","À côté de …, il y a …","Je mets … dans …","Je prends … dans …"],
  targets:[T("un réfrigérateur","refrigerateur|frigo","maison|un réfrigérateur"),T("un congélateur","congelateur","maison|un congélateur"),T("un four à micro-ondes","micro ondes","maison|un four à micro-ondes"),T("un évier","evier","maison|un évier"),T("une cuisinière","cuisiniere","maison|une cuisinière"),T("un lave-vaisselle","lave vaisselle","maison|le lave-vaisselle"),T("une machine à laver","machine a laver|lave linge","maison|la machine à laver"),T("un placard","placard","maison|un placard")],
  model:"Dans ma cuisine, il y a un réfrigérateur et un congélateur près de la porte. Je mets le lait dans le réfrigérateur. À côté de l'évier, il y a un lave-vaisselle. Je prends les assiettes dans le placard. Pour faire la cuisine, j'utilise la cuisinière et le four à micro-ondes."},
 {id:"mail",n:"2",title:"Email cho chủ nhà",min:50,need:5,
  scene:"Bạn vừa thuê căn hộ và có vài sự cố. Bạn viết email cho chủ nhà.",
  task:"Viết ít nhất 50 từ: chào hỏi, nêu 2 đến 3 sự cố, nhờ sửa, hỏi khi nào họ đến.",
  frame:["Bonjour Madame / Monsieur,","J'ai un problème : … ne marche pas.","… est cassé(e).","Pouvez-vous venir … ?","Merci beaucoup, …"],
  hints:["ne marche pas = không chạy","est cassé(e) = bị hỏng","est bouché(e) = bị tắc","cette semaine = tuần này"],
  targets:[T("un lave-vaisselle","lave vaisselle","maison|le lave-vaisselle"),T("un évier","evier","maison|un évier"),T("une machine à laver","machine a laver|lave linge","maison|la machine à laver"),T("une douche","douche","maison|une douche"),T("un lavabo","lavabo","maison|le lavabo"),T("une baignoire","baignoire","maison|la baignoire"),T("les toilettes","toilettes|w c","maison|les toilettes"),T("pouvoir (pouvez / peux)","pouvez|peux|peut|pouvons"),T("venir (venir / venez)","venir|venez|viens|vient")],
  model:"Bonjour Monsieur, J'habite dans l'appartement du deuxième étage. J'ai un problème : le lave-vaisselle ne marche pas et l'évier est bouché. Dans la salle de bains, la douche fait du bruit et le lavabo est cassé. Pouvez-vous venir cette semaine ? Je suis à la maison le soir. Merci beaucoup, Loan"},
 {id:"matin",n:"3",title:"Buổi sáng của tôi",min:70,need:7,
  scene:"Bạn kể cho giáo viên nghe một buổi sáng bình thường, từ phòng tắm đến bếp rồi ra cửa.",
  task:"Viết ít nhất 70 từ. Dùng ngôi je và ít nhất 3 động từ bất quy tắc (prendre, mettre, ouvrir, faire, aller, boire…).",
  frame:["Le matin, je me réveille à …","Je vais dans … et je prends …","Ensuite, je mets … / j'ouvre …","Après, je fais … et je bois …"],
  targets:[T("une douche","douche","maison|une douche"),T("un miroir","miroir|glace"),T("un placard","placard","maison|un placard"),T("un lave-vaisselle","lave vaisselle","maison|le lave-vaisselle"),T("une machine à laver","machine a laver|lave linge","maison|la machine à laver"),T("prendre","prends|prend|prenons|prennent"),T("mettre","mets|met|mettons|mettent"),T("ouvrir","ouvre|ouvres|ouvrons"),T("faire","fais|fait|faisons|font"),T("aller","vais|vas|va |allons|vont"),T("boire","bois|boit|buvons|boivent")],
  model:"Le matin, je me réveille à six heures. Je vais dans la salle de bains et je prends une douche. Je me regarde dans le miroir et je me brosse les dents. Ensuite, je mets mes vêtements et j'ouvre le placard pour prendre mon sac. Dans la cuisine, je fais du thé et je bois un café. Je mets la tasse dans le lave-vaisselle. À sept heures et demie, je vais au travail. Le soir, je mets le linge dans la machine à laver."},
 {id:"visite",n:"4",title:"Giới thiệu nhà cho bạn",min:90,need:8,
  scene:"Một người bạn Pháp sắp đến chơi. Bạn viết tin nhắn dài dẫn họ đi một vòng quanh nhà.",
  task:"Viết ít nhất 90 từ, đi qua ít nhất 3 phòng. Không nhìn bài mẫu của các bài trước.",
  frame:["Quand tu entres, il y a …","À gauche, tu vois …","Dans la salle de bains, il y a …","Tu peux … / Tu veux … ?"],
  targets:[T("le salon / le séjour","salon|sejour"),T("la cuisine","cuisine"),T("la salle de bains","salle de bain"),T("la chambre","chambre"),T("le couloir","couloir"),T("un placard","placard","maison|un placard"),T("un miroir","miroir|glace"),T("une baignoire","baignoire","maison|la baignoire"),T("un lavabo","lavabo","maison|le lavabo"),T("un réfrigérateur","refrigerateur|frigo","maison|un réfrigérateur"),T("pouvoir (peux / pouvez)","peux|pouvez|peut"),T("vouloir (veux / voulez)","veux|voulez|veut")],
  model:"Quand tu entres, il y a un petit couloir avec un placard pour les manteaux. À gauche, tu vois le salon, avec un grand canapé. À droite, c'est la cuisine : il y a un réfrigérateur, un lave-vaisselle et une cuisinière. Dans la salle de bains, il y a une baignoire, un lavabo et un grand miroir. Ma chambre est au fond du couloir. Tu peux poser ton sac dans le salon. Tu veux un café ou un thé ? Je fais le café tout de suite !"}
,
 {id:"hier",n:"5",title:"Chuyện hôm qua",min:60,need:6,
  scene:"Bạn kể cho một người bạn Pháp nghe chuyện sáng nay và tối qua của bạn.",
  task:"Viết ít nhất 60 chữ bằng passé composé: ít nhất 3 động từ dạng trợ động từ + phân từ (j'ai mangé, je me suis levé(e)…).",
  frame:["Ce matin, je me suis levé(e) à …","J'ai mangé … / J'ai travaillé … / J'ai cherché …","Hier soir, j'ai … pendant …","Je n'ai pas …"],
  hints:["hier = hôm qua","ce matin = sáng nay","pendant = trong khoảng","phân từ: -er → -é, -ir → -i","động từ đi với être: je suis rentré(e), je suis allé(e)…"],
  targets:[T("j'ai + phân từ","j'ai (mange|etudie|travaille|cherche|parle|rencontre|regarde|prepare|ecoute|fini|choisi|oublie|demenage|trouve)"),T("nous avons + phân từ","nous avons (mange|etudie|travaille|cherche|parle|rencontre|regarde|prepare|ecoute|fini|choisi|trouve)"),T("il / elle a + phân từ","a (mange|etudie|travaille|cherche|parle|rencontre|regarde|prepare|ecoute|fini|choisi|oublie|demenage|trouve)"),T("je me suis levé(e)","me suis leve(e|s|es)?"),T("je n'ai pas + phân từ","n'ai pas (mange|etudie|travaille|cherche|parle|rencontre|regarde|fini|oublie|choisi|trouve)"),T("je suis + phân từ (rentré(e), allé(e)…)","je suis (alle|arrive|parti|sorti|rentre|reste|venu|tombe|monte|descendu|entre|ne)(e|s|es)?"),T("hier","hier"),T("ce matin","ce matin"),T("pendant","pendant"),T("parce que","parce (que|qu')")],
  model:"Ce matin, je me suis levée à six heures. J'ai mangé du pain et j'ai travaillé pendant quatre heures. J'ai cherché mon livre, mais je n'ai pas trouvé mon livre. Hier soir, je suis rentrée à sept heures. Ma mère a préparé le repas et nous avons mangé ensemble. Ensuite, j'ai étudié le français parce que je veux parler avec un Français. Je me suis couchée à onze heures."}
];
function wcount(t){return (t.trim().match(/[\p{L}'’-]+/gu)||[]).length;}
function wscan(m,text){
  const f=wfold(text),ranges=[],used=m.targets.map(tg=>{
    const re=new RegExp("(?<![a-z])(?:"+tg.r+")(?![a-z])","g");let ok=false,x;
    while((x=re.exec(f))){ok=true;ranges.push([x.index,x.index+x[0].length]);if(x[0].length===0)re.lastIndex++;}
    return ok;});
  return {used,ranges};
}
function whtml(m,text){
  const {ranges}=wscan(m,text);ranges.sort((a,b)=>a[0]-b[0]);
  let out="",pos=0;for(const [s,e] of ranges){if(s<pos)continue;out+=esc(text.slice(pos,s))+`<mark class="wr-hit">${esc(text.slice(s,e))}</mark>`;pos=e;}
  return (out+esc(text.slice(pos))).replace(/\n/g,"<br>");
}
function wState(id){return WR[id]||(WR[id]={text:"",att:[],done:false});}
function viewWrite(){
  if(S.wm){const m=WMISSIONS.find(x=>x.id===S.wm);if(m){wrMission(m);return;}}
  main.innerHTML=`<header class="head"><div><p class="eyebrow">Écrire · dùng từ thật</p><h1>Xưởng viết</h1><p class="lede">Đọc chỉ giúp bạn nhận ra từ. Viết buộc bạn tự lôi từ ra khỏi trí nhớ, và đó là lúc từ bắt đầu ở lại. Mỗi bài là một tình huống thật, dài dần: bài sau yêu cầu nhiều chữ hơn bài trước.</p></div></header>
  <div class="lessons">${WMISSIONS.map(m=>{const st=WR[m.id]||{att:[]};const best=st.att.reduce((a,b)=>Math.max(a,b.words),0);
    return `<button class="lcard" data-wm="${m.id}"><div class="top"><span>Bài ${m.n} · từ ${m.min} chữ</span>${st.done?'<span class="pill done">đã nộp</span>':st.text?'<span class="pill new">đang viết</span>':""}</div>
    <h3>${esc(m.title)}</h3><p class="small muted" style="margin:0">${esc(m.scene)}</p>
    <div class="meta"><span>${m.need}/${m.targets.length} từ khóa tối thiểu</span><span>${st.att.length?`viết ${st.att.length} lần · tối đa ${best} chữ`:"chưa viết"}</span></div></button>`;}).join("")}</div>
  <p class="tip small" style="margin-top:22px;max-width:70ch">Cách tốt nhất: viết bài 1, nộp, rồi quay lại sau 1 đến 2 ngày và viết lại <b>không nhìn bài mẫu</b>. Từ nào bạn quên sẽ tự được đưa vào phiên ôn hằng ngày.</p>`;
  main.querySelectorAll("[data-wm]").forEach(b=>b.onclick=()=>{S.wm=b.dataset.wm;save();render();window.scrollTo({top:0});});
}
function wrMission(m){
  const st=wState(m.id);
  const draw=()=>{
  if(st.done){
    const last=st.att[st.att.length-1],{used}=wscan(m,st.text),miss=m.targets.filter((_,i)=>!used[i]);
    main.innerHTML=`<button class="topic-back btn ghost" id="wr-back">← Xưởng viết</button><header class="head" style="margin-top:14px"><div><p class="eyebrow">Bài ${m.n} · lần viết thứ ${st.att.length}</p><h1>${esc(m.title)}</h1></div></header>
    <div class="wr-cmp"><section class="wr-box"><h3>Bài của bạn <small>${last.words} chữ · ${last.used}/${m.targets.length} từ khóa</small></h3><p class="wr-text">${whtml(m,st.text)}</p></section>
    <section class="wr-box wr-model"><h3>Bài mẫu <small>chỉ để so, không phải đáp án duy nhất</small></h3><p class="wr-text">${esc(m.model)}</p></section></div>
    ${miss.length?`<div class="tip wr-miss"><b>Từ còn quên (${miss.length}):</b> ${miss.map(t=>esc(t.fr)).join(" · ")}<br><small>Những từ này đã được đưa vào phiên ôn hôm nay.</small></div>`:`<div class="tip wr-miss"><b>Bạn đã dùng hết các từ khóa.</b> Lần sau thử viết lại mà không nhìn bài mẫu.</div>`}
    <p class="small muted" style="max-width:70ch">Tự đọc lại: (1) mỗi động từ đã chia đúng với je / il / ils chưa? (2) un / une / le / la đã đúng giống chưa? (3) dấu é è à ô có đủ chưa?</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px"><button class="btn" id="wr-redo">Viết lại không nhìn mẫu</button><button class="btn ghost" id="wr-copy">Sao chép để nhờ Claude sửa</button><span class="small muted" id="wr-copied"></span></div>`;
    $("#wr-redo").onclick=()=>{st.text="";st.done=false;saveWR();draw();window.scrollTo({top:0});};
    $("#wr-copy").onclick=()=>{const txt=`Hãy sửa bài viết tiếng Pháp của tôi (trình độ A1). Chỉ ra lỗi, giải thích ngắn bằng tiếng Việt, rồi viết lại câu đúng.\nĐề: ${m.title}. ${m.scene}\n\n${st.text}`;
      const ok=()=>{$("#wr-copied").textContent="Đã sao chép. Dán vào chat với Claude.";};
      try{navigator.clipboard.writeText(txt).then(ok,()=>{$("#wr-copied").textContent="Không sao chép được, hãy bôi đen và copy bài viết ở trên.";});}catch(e){$("#wr-copied").textContent="Không sao chép được, hãy bôi đen và copy bài viết ở trên.";}};
    $("#wr-back").onclick=()=>{S.wm=null;save();render();};
    return;
  }
  main.innerHTML=`<button class="topic-back btn ghost" id="wr-back">← Xưởng viết</button><header class="head" style="margin-top:14px"><div><p class="eyebrow">Bài ${m.n} · viết ít nhất ${m.min} chữ</p><h1>${esc(m.title)}</h1><p class="lede">${esc(m.scene)}</p></div></header>
  <p style="max-width:70ch"><b>Việc cần làm:</b> ${esc(m.task)}</p>
  <div class="wr-chips" id="wr-chips" aria-label="Từ khóa nên dùng">${m.targets.map((t,i)=>`<span class="wr-chip" data-i="${i}">${esc(t.fr)}</span>`).join("")}</div>
  <p class="small muted" style="margin:6px 0 14px">Cần dùng ít nhất <b>${m.need}</b> từ khóa. Từ nào bạn dùng sẽ sáng lên.</p>
  <details class="wr-frame"><summary>Khung câu gợi ý${m.hints?" và từ cần thiết":""}</summary><ul>${m.frame.map(f=>`<li class="fr-line">${esc(f)}</li>`).join("")}</ul>${m.hints?`<p class="small muted">${m.hints.map(esc).join(" · ")}</p>`:""}</details>
  <label for="wr-ta" class="eyebrow" style="display:block;margin:16px 0 6px">Bài viết của bạn (tiếng Pháp)</label>
  <textarea id="wr-ta" class="wr-ta" rows="9" lang="fr" spellcheck="false" placeholder="Bắt đầu viết ở đây. Sai cũng được, cứ viết."></textarea>
  <div class="wr-meter"><span id="wr-w"></span><span id="wr-k"></span></div>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px"><button class="btn big" id="wr-sub" disabled>Nộp và xem bài mẫu</button></div>
  <p class="small muted" id="wr-why" style="margin-top:8px"></p>`;
  const ta=$("#wr-ta");ta.value=st.text;
  const upd=()=>{const w=wcount(ta.value),{used}=wscan(m,ta.value),k=used.filter(Boolean).length;
    main.querySelectorAll(".wr-chip").forEach(c=>c.classList.toggle("on",!!used[+c.dataset.i]));
    $("#wr-w").textContent=`${w}/${m.min} chữ`;$("#wr-k").textContent=`${k}/${m.need} từ khóa`;
    $("#wr-w").classList.toggle("ok",w>=m.min);$("#wr-k").classList.toggle("ok",k>=m.need);
    const ready=w>=m.min&&k>=m.need;$("#wr-sub").disabled=!ready;
    $("#wr-why").textContent=ready?"":(w<m.min?`Còn thiếu ${m.min-w} chữ.`:`Dùng thêm ${m.need-k} từ khóa nữa.`);};
  ta.oninput=()=>{st.text=ta.value;saveWR();upd();};upd();
  $("#wr-sub").onclick=()=>{const {used}=wscan(m,ta.value),w=wcount(ta.value),t=dn();
    st.text=ta.value;st.done=true;st.att.push({ts:t,words:w,used:used.filter(Boolean).length});
    m.targets.forEach((tg,i)=>{if(used[i]||!tg.key)return;const c=S.srs[tg.key];if(!c)S.srs[tg.key]={b:1,due:t};else{c.b=Math.min(c.b,1);c.due=Math.min(c.due,t);}});
    saveWR();save();draw();window.scrollTo({top:0});};
  $("#wr-back").onclick=()=>{S.wm=null;save();render();};
  };
  draw();
}

if(S.view==="session")S.view="today";
render();
