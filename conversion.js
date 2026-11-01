/* Booking intent, never booking completion. No names, phones or reservation IDs. */
(()=>{
  'use strict';
  const ID='G-5VKB8G4B0R', KEY='dokkokji-analytics-choice-v1';
  const live=['dokkokji.com','www.dokkokji.com'].includes(location.hostname);
  const qa=new URLSearchParams(location.search).get('measurement_test')==='1';
  const language=()=>document.documentElement.lang.split('-')[0];
  const copy={
    ko:['방문 경로와 예약·카카오채널 버튼 이용 분석에 Google Analytics 쿠키를 사용해도 될까요? 거절해도 예약할 수 있습니다.','허용','거절','분석 쿠키 설정','개인정보·분석 안내'],
    en:['Allow Google Analytics cookies to measure visits and booking/Kakao channel clicks? You can book without accepting.','Allow','Decline','Analytics cookies','Privacy & analytics'],
    es:['¿Permitir cookies de Google Analytics para medir visitas y clics de reserva? Puede reservar sin aceptarlas.','Permitir','Rechazar','Cookies de análisis','Privacidad y análisis'],
    fr:['Autoriser les cookies Google Analytics pour mesurer les visites et clics de réservation ? Vous pouvez réserver sans accepter.','Autoriser','Refuser','Cookies de mesure','Confidentialité'],
    ja:['訪問元と予約ボタンの利用分析にGoogle AnalyticsのCookieを許可しますか？拒否しても予約できます。','許可','拒否','分析Cookie設定','プライバシー'],
    zh:['允许使用Google Analytics Cookie分析访问来源和预约按钮点击吗？拒绝也可预约。','允许','拒绝','分析Cookie设置','隐私说明']
  };
  const storage={get(k){try{return sessionStorage.getItem(k)}catch{return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch{}}};
  function choice(){try{const v=JSON.parse(localStorage.getItem(KEY));return v&&Date.now()-v.at<180*864e5?v.value:null}catch{return null}}
  function host(ref){try{return new URL(ref).hostname.toLowerCase()}catch{return ''}}
  function classify(ref){
    const h=host(ref);
    if(/(^|\.)chatgpt\.com$/.test(h)||h==='chat.openai.com')return 'chatgpt';
    if(h==='gemini.google.com')return 'gemini';
    if(/(^|\.)naver\.com$/.test(h))return /(^|\.)search\.naver\.com$/.test(h)?'naver_search':/(^|\.)(place|map)\.naver\.com$/.test(h)?'naver_place':'naver_other';
    if(/(^|\.)google\.(com|co\.kr|co\.jp|fr|es|de|co\.uk)$/.test(h))return 'google';
    return !h||['dokkokji.com','www.dokkokji.com'].includes(h)?'direct_unknown':'other';
  }
  let source=classify(document.referrer);
  let sourceRef=host(document.referrer);
  // Only recognize known public source labels; never forward arbitrary query data.
  const taggedSource=(new URLSearchParams(location.search).get('utm_source')||'').toLowerCase();
  if(['chatgpt.com','chatgpt'].includes(taggedSource))source='chatgpt';
  if(['gemini.google.com','gemini'].includes(taggedSource))source='gemini';
  if(/^community_[a-f0-9]{12}$/.test(taggedSource))source=taggedSource;
  try{const previous=JSON.parse(storage.get('dokkokji-source-v1'));if(source==='direct_unknown'&&previous&&Date.now()-previous.at<30*60e3){source=previous.source;sourceRef=previous.ref}}
  catch{}
  let active=false,started=false;
  window.dataLayer=window.dataLayer||[];
  function gtag(){window.dataLayer.push(arguments)}
  const campaign=()=>/^community_[a-f0-9]{12}$/.test(source)?{campaign_source:source,campaign_medium:'community',campaign_name:'dinner_community'}:['chatgpt','gemini'].includes(source)?{campaign_source:source==='chatgpt'?'chatgpt.com':'gemini.google.com',campaign_medium:'referral'}:{};
  function event(name,params={}){if(!active)return;gtag('event',name,{send_to:ID,acquisition_source:source,site_language:language(),page_location:location.origin+location.pathname,page_referrer:sourceRef?'https://'+sourceRef+'/':'',page_title:document.title,...campaign(),...(qa?{debug_mode:true,traffic_type:'internal'}:{}),...params})}
  function start(){
    if(!live||active)return;
    active=true;window['ga-disable-'+ID]=false;
    storage.set('dokkokji-source-v1',JSON.stringify({source,ref:sourceRef,at:Date.now()}));
    if(!started){
      started=true;
      gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('js',new Date());
      gtag('config',ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:60*86400,cookie_update:false,page_location:location.origin+location.pathname,page_referrer:sourceRef?'https://'+sourceRef+'/':'',...campaign()});
      const tag=document.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.append(tag);
    }else gtag('consent','update',{analytics_storage:'granted'});
    event('page_view');
  }
  function save(value){
    try{localStorage.setItem(KEY,JSON.stringify({value,at:Date.now()}))}catch{}
    if(value==='yes')start();else{
      active=false;window['ga-disable-'+ID]=true;
      try{sessionStorage.removeItem('dokkokji-source-v1')}catch{}
      for(const cookie of document.cookie.split(';')){const name=cookie.split('=')[0].trim();if(!/^_ga(?:_|$)/.test(name))continue;for(const domain of ['', '; domain='+location.hostname,'; domain=.dokkokji.com'])document.cookie=name+'=; max-age=0; path=/'+domain;}
    }
    document.getElementById('analytics-choice')?.remove();
  }
  function show(){
    if(document.getElementById('analytics-choice'))return;
    const t=copy[language()]||copy.en,panel=document.createElement('section');
    panel.id='analytics-choice';panel.setAttribute('aria-label',t[3]);
    const p=document.createElement('p');p.textContent=t[0];panel.append(p);
    const actions=document.createElement('div');
    for(const [label,value]of [[t[1],'yes'],[t[2],'no']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=()=>save(value);actions.append(b)}
    const a=document.createElement('a');a.href='/privacy';a.textContent=t[4];actions.append(a);panel.append(actions);document.body.append(panel);
  }
  const settings=document.createElement('button');settings.type='button';settings.className='analytics-settings';settings.textContent=(copy[language()]||copy.en)[3];settings.onclick=show;document.querySelector('footer')?.append(settings);
  if(choice()==='yes')start();else if(choice()!=='no')show();
  document.addEventListener('click',e=>{
    const link=e.target.closest?.('a[href]');if(!link)return;
    let u;try{u=new URL(link.href,location.href)}catch{return}
    if(u.protocol==='https:'&&u.hostname==='pf.kakao.com'&&/^\/_xhxnsNG\/?$/.test(u.pathname)){
      const placement=link.closest('.hero-channel')?'hero':link.closest('#membership')?'membership':link.closest('#reservation')?'reservation':document.body.dataset.page==='family-guide'?'family':'other';
      // One event per click. Position is encoded in the name so reports need no custom dimension.
      event('kakao_click_'+placement+(qa?'_test':''),{destination:'kakao_channel',placement,transport_type:'beacon'});
      if(qa){
        let panel=document.getElementById('channel-measurement-test');
        if(!panel){panel=document.createElement('output');panel.id='channel-measurement-test';panel.setAttribute('role','status');panel.style.cssText='position:fixed;bottom:12px;left:12px;right:12px;z-index:99999;background:white;color:#222;padding:16px;border:2px solid #265a3e;font:14px/1.6 sans-serif';document.body.append(panel)}
        panel.textContent=active?'측정 시험: kakao_click_'+placement+'_test 전송 대기열 등록 (친구 추가 완료 아님)':'측정 시험: 분석 동의 없음 — 전송하지 않음';
      }
      return;
    }
    const bookingArea=link.closest('.booking-actions, #booking, #reservation');
    const destination=u.protocol==='tel:'?'phone':bookingArea&&(u.hostname==='m.place.naver.com'&&u.pathname.endsWith('/booking')||u.hostname==='booking.naver.com')?'naver':bookingArea&&/(^|\.)catchtable\.co\.kr$/.test(u.hostname)?'catchtable':null;
    if(!destination)return;
    const detail={destination,placement:link.closest('section')?.id||'footer'};
    window.dispatchEvent(new CustomEvent('dokkokji:reservation-intent',{detail}));
    event(destination==='phone'?'phone_click':'booking_click',detail);
  });
})();
