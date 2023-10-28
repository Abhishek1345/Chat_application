import { WebSocketServer } from "ws";
const port=process.env.PORT || 3000
const server = new WebSocketServer({ port: port});

server.on("connection", (socket) => {
  


  let sendMessage=function(pkt){
    server.clients.forEach((client)=>{
      client.send(JSON.stringify({
        type:"message",
        clientId:pkt.clientId,
        msg:pkt.msg
      }));
    
   
  });
}
  
  socket.on("message", (data) => {
    
    const packet = JSON.parse(data);
    console.log("message recieved");
    sendMessage(packet);
    console.log("message sent");
  });
});