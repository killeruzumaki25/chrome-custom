let oldBody = document.querySelector("body");

let newHead = document.createElement('head');
oldBody.appendChild(newHead);

let icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

//span

let closeBtn = document.createElement("button");
closeBtn.classList.add("closeBtn");
closeBtn.innerHTML='<span class="material-symbols-outlined">arrow_upward</span>'
con.appendChild(closeBtn);

closeBtn.addEventListener('click',()=>{
  con.classList.toggle('conUp')
})

const topCon = document.createElement('div');
topCon.classList.add('topCon');
con.appendChild(topCon);

//titles
let wallTitle = document.createElement('h2');
wallTitle.innerText="Wallpaper";

let colorThemeTitle = document.createElement('h2');
colorThemeTitle.innerText="Themes";

let gadgetTitle = document.createElement('h2');
gadgetTitle.innerText="Gadget";

let adRemoveTitle = document.createElement('h2');
adRemoveTitle.innerText="Anti-ads";

let inspectTitle = document.createElement('h2');
inspectTitle.innerText="Inspect";

let projectTitle = document.createElement('h2');
projectTitle.innerText="project";

let backBtn = document.createElement("button");
backBtn.classList.add("backBtn");
backBtn.innerHTML='<span class="material-symbols-outlined">arrow_back</span>';
topCon.appendChild(backBtn);

backBtn.addEventListener('click',()=>{
  if(topCon.contains(wallTitle)){
    wallTitle.remove();
    con.appendChild(mainCon);
    wallDis.remove();
  }else if(topCon.contains(colorThemeTitle)){
    colorThemeTitle.remove();
    con.appendChild(mainCon)
  }
})

const mainCon = document.createElement('div');
mainCon.classList.add('mainCon');
con.appendChild(mainCon);

let wallBtn = document.createElement('button');
wallBtn.innerText="Wallpaper";
wallBtn.classList.add('wallBtn');
mainCon.appendChild(wallBtn);

let wallDis = document.createElement('div');
wallDis.classList.add('wallDis');

let wallpapers = ['https://download.asrock.com/Wallpaper/2020_Wallpaper_AQUA-logo_3840x2160.jpg','https://helmpaint.com/wp-content/uploads/2020/01/3-D-wallpaper.jpg','https://t3.ftcdn.net/jpg/05/64/82/08/360_F_564820811_n9WP1mM43pLiQwLkIA07KF9Hat5vkX2v.jpg']

wallBtn.addEventListener('click',()=>{
  mainCon.remove();
  topCon.appendChild(wallTitle);
  con.appendChild(wallDis);
 for (let i = 0; i < wallpapers.length; i++) {
   const wallpaper = wallpapers[i];
   const wallpaperImg = document.createElement('img');
   wallpaperImg.src=wallpaper;
   wallpaperImg.style.height="20vh";
   wallpaperImg.style.width="100%";
   const wallpaperBtn = document.createElement("button");
   wallpaperBtn.appendChild(wallpaperImg);
   wallDis.appendChild(wallpaperBtn);
   wallpaperBtn.addEventListener('click',()=>{
     oldBody.style.background=`url('${wallpaper}')`;
     oldBody.style.backgroundSize="cover";
   })
   
}
})


let colorTheme = document.createElement("button");
colorTheme.innerText="Theme"
colorTheme.classList.add("colorTheme")
mainCon.appendChild(colorTheme);

colorTheme.addEventListener('click',()=>{
  mainCon.remove();
  topCon.appendChild(colorThemeTitle)
})

let gadgetBtn= document.createElement("button");
gadgetBtn.innerText="Gadget"
gadgetBtn.classList.add("gadgetBtn")
mainCon.appendChild(gadgetBtn);

let adRemove = document.createElement("button");
adRemove.innerText="Anti-ads"
adRemove.classList.add("adRemove")
mainCon.appendChild(adRemove);

adRemove.addEventListener('click', () => {
  let selectors = [
    /* By ID: */
    '#sidebar-wrap', '#advert', '#xrail', '#middle-article-advert-container',
    '#sponsored-recommendations', '#around-the-web', '#sponsored-recommendations',
    '#taboola-content', '#taboola-below-taboola-native-thumbnails', '#inarticle_wrapper_div',
    '#rc-row-container', '#ads', '#at-share-dock', '#at4-share', '#at4-follow', '#right-ads-rail',
    'div#ad-interstitial', 'div#advert-article', 'div#ac-lre-player-ph',
    /* By Class: */
    '.ad', '.avert', '.avert__wrapper', '.middle-banner-ad', '.advertisement',
    '.GoogleActiveViewClass', '.advert', '.cns-ads-stage', '.teads-inread', '.ad-banner',
    '.ad-anchored', '.js_shelf_ads', '.ad-slot', '.antenna', '.xrail-content',
    '.advertisement__leaderboard', '.ad-leaderboard', '.trc_rbox_outer', '.ks-recommended',
    '.article-da', 'div.sponsored-stories-component', 'div.addthis-smartlayers',
    'div.article-adsponsor', 'div.signin-prompt', 'div.article-bumper', 'div.video-placeholder',
    'div.top-ad-container', 'div.header-ad', 'div.ad-unit', 'div.demo-block', 'div.OUTBRAIN',
    'div.ob-widget', 'div.nwsrm-wrapper', 'div.announcementBar', 'div.partner-resources-block',
    'div.arrow-down', 'div.m-ad', 'div.story-interrupt', 'div.taboola-recommended',
    'div.ad-cluster-container', 'div.ctx-sidebar', 'div.incognito-modal', '.OUTBRAIN', '.subscribe-button',
    '.ads9', '.leaderboards', '.GoogleActiveViewElement', '.mpu-container', '.ad-300x600', '.tf-ad-block',
    '.sidebar-ads-holder-top', '.ads-one', '.FullPageModal__scroller',
    '.content-ads-holder', '.widget-area', '.social-buttons', '.ac-player-ph',
    /* Other: */
    'script', 'iframe', 'video', 'aside#sponsored-recommendations', 'aside[role="banner"]', 'aside',
    'amp-ad', 'span[id^=ad_is_]', 'div[class*="indianapolis-optin"]', 'div[id^=google_ads_iframe]',
    'div[data-google-query-id]', 'section[data-response]', 'ins.adsbygoogle', 'div[data-google-query-id]',
    'div[data-test-id="fullPageSignupModal"]', 'div[data-test-id="giftWrap"]'
  ];
  
  for (let i = 0; i < selectors.length; i++) {
    let elements = document.querySelectorAll(selectors[i]);
    for (let j = 0; j < elements.length; j++) {
      let el = elements[j];
      if (el && el.parentNode)
        el.parentNode.removeChild(el);
    }
  }
});

let inspectBtn = document.createElement("button");
inspectBtn.innerText="Inspect"
inspectBtn.classList.add("inspectBtn")
mainCon.appendChild(inspectBtn);

let projectBtn = document.createElement("button");
projectBtn.innerText="Project"
projectBtn.classList.add("projectBtn")
mainCon.appendChild(projectBtn);

