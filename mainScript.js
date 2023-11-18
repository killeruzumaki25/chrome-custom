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

const mainCon = document.createElement('div');
mainCon.classList.add('mainCon');
con.appendChild(mainCon);

let wallBtn = document.createElement('button');
wallBtn.innerText="Wallpaper";
wallBtn.classList.add('wallBtn');
mainCon.appendChild(wallBtn);

let colorTheme = document.createElement("button");
colorTheme.innerText="Theme"
colorTheme.classList.add("colorTheme")
mainCon.appendChild(colorTheme);

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

closeBtn.addEventListener('click',()=>{
  con.classList.toggle('conUp')
})


