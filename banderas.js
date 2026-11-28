/* Base 24 — Bandera de la jurisdicción junto al título (círculo). Archivos: banderas/<codigo>.webp. Si falta alguno, no se muestra nada. */
(function(){
  const t=document.getElementById('titulo'),m=document.getElementById('meta');
  if(!t||!m||!t.parentNode)return;
  const css=document.createElement('style');
  css.textContent='.cab{display:flex;align-items:center;gap:12px;margin-bottom:12px}.cab>div{min-width:0}.cab .meta{margin-bottom:0}.cab-flag{width:40px;height:40px;border-radius:50%;object-fit:cover;border:1px solid var(--border);background:#fff;flex-shrink:0}.cab-flag[hidden]{display:none}';
  document.head.appendChild(css);
  const cab=document.createElement('div'),txt=document.createElement('div'),img=document.createElement('img');
  cab.className='cab';img.className='cab-flag';img.alt='';img.hidden=true;
  img.onerror=()=>{img.hidden=true};
  img.onload=()=>{img.hidden=false};
  t.parentNode.insertBefore(cab,t);
  cab.appendChild(img);cab.appendChild(txt);txt.appendChild(t);txt.appendChild(m);
  let ultimo='';
  function poner(){
    const j=(typeof jurActiva!=='undefined'&&jurActiva)?String(jurActiva.id):'';
    const cod=j.replace(/^JUR-/i,'').toLowerCase();
    if(!cod||cod===ultimo)return;
    ultimo=cod;img.hidden=true;img.src='banderas/'+cod+'.webp';
  }
  new MutationObserver(poner).observe(t,{childList:true,characterData:true,subtree:true});
  poner();
})();
