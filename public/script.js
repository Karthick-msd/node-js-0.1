
$(document).ready(function(){

    function submit(){
        document.getElementById("myform").reset();
        }

    const socket=io.connect('http://localhost:3000')

    var container=$("#message-container");
    var message=$("#message-input");
    var send=$("#send-button");

//     send.click(function(){

//         socket.emit('new_message',{message:message.val()})
//     });
    
//     socket.on('new_message',(data)=>{
//         message.val('');
//         container.append("<p>"+data.message+"</p>")});
 

});
