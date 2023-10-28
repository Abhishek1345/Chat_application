# Real time chat app

# Tech Stack: Node js for backend

The project sets up two clients that intend to communicate with each other and a server written in nodejs is hosted which is responsible for sending the messages from one client to the other.

It uses the WebSocket protocol for the real time data transfer from one client to the server and then from the server to the other client.

each client has been given an ID to identify which message was sent by whom.
On clicking the send button a JSON object is sent to the server which contains the message and the clientID of the client which sent the message.

The server then sends the recieved data to both the clients .

On recieving the data the client would check the clientID sent through the JSON object.if the clientID is the same as it's own ID the message is displayed on the right , signifying that it was sent by them. If not then the message is displayed on the left , signifying that is was sent by the other client.

