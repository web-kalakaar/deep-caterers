(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const U=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=60`;
const FB=U('1555244162-803834f70033',420);
const PHONE='919319640305';

/* ---------- DATA ---------- */
const CATS=[['drinks','Welcome Drinks'],['starters','Starters'],['main','Main Course'],['breads','Roti & Rice'],['live','Live Counters'],['sweets','Mithai & Sweets']];
// [category, name, (unused), image id, tag]
const D=[
 ['drinks','Kesar Thandai','','1544145945-f90425340c7e','Chilled'],
 ['drinks','Jaljeera','','1497534446932-c925b458314e','Tangy'],
 ['drinks','Rose Sharbat','','1513558161293-cdaf765ed2fd','Floral'],
 ['drinks','Masala Chaas','','1556679343-c7306c1976bc','Cooling'],
 ['drinks','Sweet Lassi','','1556679343-c7306c1976bc','Creamy'],
 ['drinks','Fresh Lime Soda','','1497534446932-c925b458314e','Fizzy'],
 ['drinks','Aam Panna','','1544145945-f90425340c7e','Summer'],
 ['drinks','Mint Mojito','','1513558161293-cdaf765ed2fd','Mocktail'],
 ['starters','Paneer Tikka','','1599487488170-d11ec9c172f0','Veg'],
 ['starters','Galouti Kebab','','1603360946369-dc9bb6258143','Bulandshahri'],
 ['starters','Hara Bhara Kebab','','1630409351217-bc4fa6422075','Veg'],
 ['starters','Dahi Ke Sholey','','1567188040759-fb8a883dc6d8','Veg'],
 ['starters','Tunday Style Kebab','','1529042410759-befb1204b468','Non-veg'],
 ['starters','Veg Spring Roll','','1544025162-d76694265947','Veg'],
 ['starters','Chilli Paneer','','1599487488170-d11ec9c172f0','Indo-Chinese'],
 ['starters','Chicken Tikka','','1529042410759-befb1204b468','Non-veg'],
 ['main','Shahi Paneer','','1631452180519-c014fe946bc7','Veg'],
 ['main','Dal Makhani','','1585937421612-70a008356fbe','Veg'],
 ['main','Awadhi Dum Biryani','','1589302168068-964664d93dc0','Signature'],
 ['main','Mutton Korma','','1565557623262-b51c2513a641','Non-veg'],
 ['main','Kadhai Paneer','','1596797038530-2c107229654b','Veg'],
 ['main','Mix Veg Handi','','1546069901-ba9599a7e63c','Veg'],
 ['main','Palak Paneer','','1596797038530-2c107229654b','Veg'],
 ['main','Chicken Curry','','1565557623262-b51c2513a641','Non-veg'],
 ['breads','Sheermal','','1626074353765-517a681e40be','Awadhi'],
 ['breads','Butter Naan','','1601050690597-df0568f70950','Tandoor'],
 ['breads','Lachha Paratha','','1626074353765-517a681e40be','Tandoor'],
 ['breads','Jeera Pulao','','1512058564366-18510be2db19','Rice'],
 ['breads','Tandoori Roti','','1601050690597-df0568f70950','Tandoor'],
 ['breads','Garlic Naan','','1626074353765-517a681e40be','Tandoor'],
 ['breads','Veg Biryani','','1589302168068-964664d93dc0','Rice'],
 ['breads','Steamed Rice','','1512058564366-18510be2db19','Rice'],
 ['live','Tokri Chaat','','1606491956689-2ea866880c84','Live'],
 ['live','Aloo Tikki','','1601050690117-94f5f6fa8bd7','Live'],
 ['live','Hot Jalebi','','1589301760014-d929f3979dbc','Live'],
 ['live','Dosa Counter','','1668236543090-82eba5ee5976','Live'],
 ['live','Pasta Counter','','1621996346565-e3dbc646d9a9','Live'],
 ['live','Pani Puri','','1601050690117-94f5f6fa8bd7','Live'],
 ['live','Pav Bhaji','','1606491956689-2ea866880c84','Live'],
 ['live','Hakka Noodles','','1621996346565-e3dbc646d9a9','Live'],
 ['sweets','Gulab Jamun','','1606471191009-63994c53433b','Classic'],
 ['sweets','Rasmalai','','1666190094762-2f6a1d9b6b3e','Bengali'],
 ['sweets','Kesar Rabri','','1631292784640-2b24be784d5d','Bulandshahri'],
 ['sweets','Moong Dal Halwa','','1601303516534-bf4d5f5a9d3a','Winter'],
 ['sweets','Malai Gilauri','','1589301760014-d929f3979dbc','Awadhi'],
 ['sweets','Kaju Katli','','1599599810769-bcde5a160d32','Dry fruit'],
 ['sweets','Jalebi Rabri','','1589301760014-d929f3979dbc','Combo'],
 ['sweets','Sandesh','','1606471191009-63994c53433b','Bengali']
];
const G=[['Weddings','1519225421980-715cb0215aed'],['Weddings','1519741497674-611481863552'],['Weddings','1583939003579-730e3918a45a'],['Weddings','1465495976277-4387d4b0b4c6'],
 ['Receptions','1464366400600-7168b8af9bc3'],['Receptions','1511795409834-ef04bbd61622'],['Receptions','1478146896981-b80fe463b330'],['Receptions','1519167758481-83f550bb49b3'],
 ['Parties','1527529482837-4698179dc6ce'],['Parties','1530103862676-de8c9debad1d'],['Parties','1533174072545-7a4b6ad7a6c3'],['Corporate','1511578314322-379afb476865'],
 ['Corporate','1414235077428-338989a2e8c0'],['Food','1555244162-803834f70033'],['Food','1504674900247-0877df9cc836'],['Food','1540189549336-e6e99c3679fe']];

/* ---------- FADE-IN IMAGES ---------- */
const imgOK=i=>i.classList.add('ld');
function watchImgs(root=document){$$('img',root).forEach(i=>{if(i.complete&&i.naturalWidth)imgOK(i);else{i.addEventListener('load',()=>imgOK(i),{once:true});i.addEventListener('error',()=>imgOK(i),{once:true})}})}
const IMG=(src,alt,extra='')=>`<img loading="lazy" src="${src}" alt="${alt}" ${extra} onload="this.classList.add('ld')" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${FB}'}">`;

/* ---------- SMOOTH FOLD (see more with blur) ---------- */
const label=el=>{const b=$(`[data-target="${el.id}"]`);if(b)b.textContent=el.classList.contains('folded')?b.dataset.more:b.dataset.less};
function setupFold(el){
  const b=$(`[data-target="${el.id}"]`);clearTimeout(el._t);
  el.classList.remove('folded');el.style.maxHeight='none';
  const k=el.firstElementChild;if(!k){if(b)b.hidden=true;return}
  const rows=+el.dataset.rows||1.5,gap=parseFloat(getComputedStyle(el).rowGap)||0;
  const h=el.dataset.h?+el.dataset.h:Math.round(k.offsetHeight*rows+gap*Math.floor(rows));
  el._h=h;
  const need=el.scrollHeight>h+60;
  if(b)b.hidden=!need;
  if(need){el.style.maxHeight=h+'px';el.classList.add('folded')}
  label(el);
}
function toggleFold(el){
  clearTimeout(el._t);
  if(el.classList.contains('folded')){
    el.style.maxHeight=el.scrollHeight+'px';el.classList.remove('folded');
    el._t=setTimeout(()=>{if(!el.classList.contains('folded'))el.style.maxHeight='none'},1200);
  }else{
    el.style.maxHeight=el.scrollHeight+'px';void el.offsetHeight;
    el.style.maxHeight=el._h+'px';el.classList.add('folded');
    const s=el.closest('section'),y=s.getBoundingClientRect().top;
    if(y<0)scrollTo({top:scrollY+y-70,behavior:'smooth'});
  }
  label(el);
}
$$('.toggle').forEach(b=>b.onclick=()=>toggleFold(document.getElementById(b.dataset.target)));
let rz;addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(()=>$$('.fold.folded').forEach(setupFold),250)});

/* ---------- MENU ---------- */
let cat='drinks';
function swap(el,fn){el.classList.add('swap');setTimeout(()=>{fn();requestAnimationFrame(()=>el.classList.remove('swap'))},350)}
function renderTabs(){
  $('#tabs').innerHTML=CATS.map(c=>`<button class="tab ${c[0]===cat?'on':''}" role="tab" data-k="${c[0]}">${c[1]}</button>`).join('');
  $$('#tabs .tab').forEach(t=>t.onclick=()=>{if(t.dataset.k===cat)return;cat=t.dataset.k;renderTabs();swap($('#dishes'),renderDishes)});
}
function renderDishes(){
  const el=$('#dishes');
  el.innerHTML=D.filter(d=>d[0]===cat).map((d,i)=>`<article class="dish" style="animation-delay:${i*60}ms">${IMG(U(d[3],420),d[1]+' - '+d[4])}<div><h3>${d[1]}</h3><small>${d[4]}</small></div></article>`).join('');
  setupFold(el);
}

/* ---------- GALLERY ---------- */
let gcat='All';
const GC=['All',...new Set(G.map(g=>g[0]))];
function renderGalTabs(){
  $('#galTabs').innerHTML=GC.map(c=>`<button class="tab ${c===gcat?'on':''}" data-c="${c}">${c}</button>`).join('');
  $$('#galTabs .tab').forEach(t=>t.onclick=()=>{if(t.dataset.c===gcat)return;gcat=t.dataset.c;renderGalTabs();swap($('#galGrid'),renderGal)});
}
function renderGal(){
  const el=$('#galGrid');
  el.innerHTML=G.filter(g=>gcat==='All'||g[0]===gcat).map(g=>IMG(U(g[1],600),'Deep Caterers '+g[0]+' event',`data-full="${U(g[1],1400)}"`)).join('');
  $$('img',el).forEach(i=>i.onclick=()=>{$('#lb img').src=i.dataset.full;$('#lb').classList.add('show')});
  setupFold(el);
}
$('#lb').onclick=()=>$('#lb').classList.remove('show');
addEventListener('keydown',e=>{if(e.key==='Escape')$('#lb').classList.remove('show')});

/* ---------- HEADER ---------- */
const hdr=$('#hdr'),nav=$('#nav'),burger=$('#burger'),topBtn=$('#top');
let tick=false;
function onScroll(){topBtn.classList.toggle('show',scrollY>700);tick=false}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
$$('#nav a').forEach((a,i)=>{a.style.setProperty('--i',i);a.onclick=()=>{burger.classList.remove('open');nav.classList.remove('open')}});
burger.onclick=()=>{burger.classList.toggle('open');nav.classList.toggle('open')};
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});

/* ---------- FAQ: one open at a time ---------- */
$$('#faqList details').forEach(d=>d.addEventListener('toggle',()=>{
  if(!d.open)return;
  $$('#faqList details').forEach(o=>{if(o!==d)o.open=false});
  const f=$('#faqList');if(f.classList.contains('folded'))toggleFold(f);
}));

/* ---------- SERVICE -> FORM PREFILL ---------- */
$$('.svc').forEach(s=>s.addEventListener('click',()=>{$('#evSel').value=s.dataset.event}));

/* ---------- FORM (opens WhatsApp, no fake submit) ---------- */
$('#quote').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target,m=$('#fmsg');let ok=true;
  $$('input,select',f).forEach(i=>i.classList.remove('err'));
  ['name','phone','event','date','loc','guests'].forEach(n=>{const i=f.elements[n];if(!i.checkValidity()||!i.value.trim()){i.classList.add('err');ok=false}});
  if(!ok){m.style.color='#b3261e';m.textContent='Please correct the highlighted fields (phone number must be 10 digits).';return}
  const v=n=>encodeURIComponent(f.elements[n].value.trim());
  const msg=`New enquiry - Deep Caterers%0AName: ${v('name')}%0APhone: ${v('phone')}%0AEvent: ${v('event')}%0ADate: ${v('date')}%0ALocation: ${v('loc')}%0AGuests: ${v('guests')}%0AFood: ${v('food')}%0ANotes: ${v('note')}`;
  m.style.color='#1f7a4d';m.textContent='Opening WhatsApp. Send the message there to complete your enquiry.';
  open(`https://wa.me/${PHONE}?text=${msg}`,'_blank','noopener');
});

/* ---------- SCROLL ANIMATIONS ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
$$('.head,.about-tx,.about-img,.svc,.why-grid>div,.exp figure,.steps li,.rev-grid article,.c-info,form,.faq-list details').forEach((el,i)=>{el.classList.add('reveal');io.observe(el)});
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;co.unobserve(e.target);
  const b=$('b',e.target),n=+b.dataset.count,t0=performance.now();
  (function step(t){const p=Math.min((t-t0)/1800,1);b.textContent=Math.round(n*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step)})(t0);
}),{threshold:.5});
$$('.stats div').forEach(d=>co.observe(d));
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>spy.observe(s));

/* ---------- INIT ---------- */
renderTabs();renderDishes();renderGalTabs();renderGal();
watchImgs();
$$('#svcGrid,#aboutMore,#faqList').forEach(setupFold);
addEventListener('load',()=>$$('.fold.folded').forEach(setupFold));
if(document.fonts)document.fonts.ready.then(()=>$$('.fold.folded').forEach(setupFold));
})();
