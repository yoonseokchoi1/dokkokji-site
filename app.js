document.getElementById('copy-address').addEventListener('click',async()=>{
  const address='서울 송파구 잠실로 209 KT송파타워 2층';
  const status=document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(address); status.textContent=({ko:'주소를 복사했습니다.',en:'Korean address copied.',ja:'韓国語の住所をコピーしました。',zh:'已复制韩文地址。',es:'Dirección en coreano copiada.'})[window.siteLanguage||'ko']; }
  catch { status.textContent=address+' — '+({ko:'길게 눌러 복사해 주세요.',en:'Select and copy this address.',ja:'住所を選択してコピーしてください。',zh:'请选择并复制地址。',es:'Seleccione y copie esta dirección.'})[window.siteLanguage||'ko']; }
});
document.querySelectorAll('.menu-shortcuts a').forEach(link=>link.addEventListener('click',()=>{
  const section=document.getElementById(link.hash.slice(1));
  if(section) section.open=true;
}));

