var socket = io.connect("http://192.168.1.32:4001"); 

// query DOM

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var button = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

// emit events

button.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    }) 
})

// listen for events

socket.on('chat', (data) => { 
    output.innerHTML += '<p><strong>'+data.handle+': </strong>'+data.message+'</p>'
    feedback.innerHTML = ''
})

socket.on('typing', data => {
    console.log('typing received')
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'
})

// handle the feedback

message.addEventListener('keypress', () => {
    console.log('typing')
    socket.emit('typing', handle.value)
})

