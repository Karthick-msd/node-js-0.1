const express=require('express');
const app=express()
const path=require('path');
const bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended:true}))

const url='mongodb://localhost:27017/chatdb'


const server=app.listen(3000,()=>{
    console.log("listening");
})


app.set("view engine","ejs")

app.use(express.static('public'))

app.get('/',(req,res)=>{
res.render('index')

})

const io=require('socket.io')(server)

io.on('connection',(socket) => {

  console.log("hello world");

    socket.on("new_message",(data)=>{
        io.sockets.emit('new_message',{message:data.message});

    });
});


app.post('/send',function(req,res){
    var text=req.body.message;
   console.log(text);
});

// MongoClient.connect(url,{useUnifiedTopology: true},function(err,client){

    
//     if(err) throw err;
//     var db=client.db('chatdb');
//    var obj={chat:"text"};
//    db.collection('chatdb').insertOne(obj,function(err,res){

//         if(err) throw err;
//         console.log(obj);
//         client.close();
//     })
// })
