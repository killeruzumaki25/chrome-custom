@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Bebas+Neue&family=Black+Ops+One&family=Fuggles&family=Martian+Mono:wght@200&family=Noto+Sans&family=Sometype+Mono&display=swap');

body{ 
  scroll-behavior: smooth;
}
*{
  outline:0px solid red;
}
.mainCon > * {
  color: orange; /* replace "orange" with your desired color */
  font-family: 'Black Ops One';
  outline:0px solid red;
  z-index:9999;
}

.con >* {
  color: orange; /* replace "orange" with your desired color */
  font-family: 'Black Ops One';
  outline:0px solid red;
  z-index:9999;
}

.topCon{
  width:200px;
  background-color:white;
  position:absolute;
  height:6vh;
}
.backBtn{
  border:none;
}

.con{
  background:rgba(0, 0, 255, 0.1);
  border:2px solid blue;
  width: 30%; /* changed width */
  height: 50vh;
  position: fixed;
  left: 65%;
  display: flex;
  z-index: 9999;
  top: 0;
  border-radius: 2%;
  overflow: auto;
  color: black;
  flex-direction: row;
}


.mainCon{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items:center;
  justify-content:center;
  margin-left:5%;
  margin-top:10%;
  
}

.closeBtn{
  position:absolute;
  width:10%;
  display:flex;
  align-items:center;
  justify-content:center;
  left:90%;
}
.expandBtn{
  position:absolute;
  width:10%;
  height:5vh;
  display:flex;
  align-items:center;
  justify-content:center;
  left:70%;
}

.mainCon button{
  width: 80px;
  height: 80px;
}
.conUp{
  animation:conUp 0.3s linear;
animation-fill-mode:both;
}
@keyframes conUp{
100%{height:5vh}
}
.conFull{
  left:0;
  top:0;
  position:absolute;
  z-index:999;
  width:100%;
  height:100%;
}

.wallBtn{
 background:url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwcvQsM8-g8UhqIkYhqovspXo29w2py-MZLaIBlHXL9w6X15KhrwmQrEplNiMeVNnrkZsYznXjYFlLXwJ0a-cEI5OQv7_MUv1MF5xc434aM88hZZ-JnU-Id8EGWHOcAXCBAkEZL3VKjCWE-BtfLP7p8UoO50SZ0rOGd2OtV1gz2hDOfxd3UP6AG3TViQ/w640-h360/4k-pc-wallpaper-ai-art.webp') ;
  background-size:cover;
}

.colorTheme{
  background:linear-gradient(90deg,black,white 50%)
}
.aiBtn{
  background:url('https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png');
  background-size:cover;
}
.adRemove{
  background:url('https://static.vecteezy.com/system/resources/previews/009/636/794/original/no-ads-icons-3d-illustration-icon-png.png');
  background-size:cover;
}
.inspectBtn{
  background:url('https://static.thenounproject.com/png/4199164-200.png');
  background-size:cover;
}
.projectBtn{
  background:url('https://pngimg.com/d/github_PNG19.png');
  background-size:cover;
}
.topCon h2{
  position:absolute;
  top:-3vh;
  margin-left:22%;
}

.wallDis{
  height:30vh;
  width:100%;
  display:flex;
  flex-direction:column;
  margin:15% 0%;
  
/*  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items:center;
  justify-content:center;
  margin-left:5%;
  margin-top:10%;*/
}

.aiCon{
  width:100%;
  height:90%;
  margin-top:10%;
}

.aiCon iframe{
  height:100%;
  width:100%;
}



