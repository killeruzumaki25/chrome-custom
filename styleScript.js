body{ 
  scroll-behavior: smooth;
}
*{
  outline:0px solid red;
  z-index:9999;
}
.con{
  background-color: grey;
  width: 320px; /* changed width */
  height: 50vh;
  position: fixed;
  left: 65%;
  display: flex;
  z-index: 9999;
  top: 0;
  border-radius: 2%;
  overflow: hidden;
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
}

.closeBtn{
  position:absolute;
  width:10%;
  display:flex;
  align-items:center;
  justify-content:center;
  left:90%;
}

.mainCon button{
  width: 80px;
  height: 80px;
}
