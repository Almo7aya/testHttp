var io = io();

var from = document.forms[0],
    ul   = document.getElementById('ul');


from.btn.addEventListener('click', function (e) {
    
    io.emit('new message',{msg: from.msg.value, user: 'Ali'});
    from.msg.value = '';

    e.preventDefault();
});



io.on('new message', function (e) {
    
    $('#ul').append($('<li></li>').text(e.msg));

    Push.create(e.msg, e.msg);

    // new Notification('test3');
    
});