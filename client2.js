
let socket= new WebSocket("ws://chatserver-pzz9.onrender.com");
let myClientId="1102";
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    
    
        let input=document.getElementsByTagName("input")[0];
        let text=input.value;
        input.value="";
        socket.send(JSON.stringify({
          type:"message",
          clientId:myClientId,
          msg:text
        }));
    
      
});
socket.addEventListener("message", ({ data }) => {
    const packet = JSON.parse(data);
  
    console.log(packet.msg);
    let id=packet.clientId;
    let config="left";
    if(id==myClientId){
       config="right";
    }
    displayMessage(packet.msg,config);
});
function displayMessage(msg,config){
    var msgbox=document.createElement("div");
    var txtbox=document.getElementsByClassName("textBox")[0];
    
    msgbox.innerHTML=msg;
    msgbox.setAttribute("class","msgbox");
    msgbox.style.float=config;
    txtbox.appendChild(msgbox);

}

// receive a message from the server
