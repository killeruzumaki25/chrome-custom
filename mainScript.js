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

let inspectBtn = document.createElement("button");
inspectBtn.innerText="Inspect"
inspectBtn.classList.add("inspectBtn")
mainCon.appendChild(inspectBtn);

let projectBtn = document.createElement("button");
projectBtn.innerText="Project"
projectBtn.classList.add("projectBtn")
mainCon.appendChild(projectBtn);

