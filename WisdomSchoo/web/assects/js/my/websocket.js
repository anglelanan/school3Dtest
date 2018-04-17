var websocket = null;
//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
    websocket = new WebSocket("ws://10.12.12.184:8080/websocket");
}
else {
    alert('当前浏览器 Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function () {
    setMessageInnerHTML("WebSocket连接发生错误");
};

//连接成功建立的回调方法
websocket.onopen = function () {
    setMessageInnerHTML();
}

//接收到消息的回调方法
websocket.onmessage = function (event) {
    var T = event.data.split(",")
    var lat;
    var long;
    var height;
    for (var i = 0; i< T.length; i++) {
        lat=T[0];
        long=T[1];
        height=T[2];
    }
    console.log(lat);
    console.log(long);
    console.log(height);
    setMessageInnerHTML(lat,long,height);
}

//连接关闭的回调方法
websocket.onclose = function () {
    setMessageInnerHTML("WebSocket连接关闭");
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    closeWebSocket();
}
/* function setMessageInnerHTML(long) {
     document.getElementById('message').long += long + '<br/>';*/
//将消息显示在网页上
function setMessageInnerHTML(lat,long,height){
    document.getElementById('lat').innerHTML = lat;
    document.getElementById('long').innerHTML = long;
    document.getElementById('height').innerHTML = height;

}
/*function setMessageInnerHTML(long,lat,height) {
   document.getElementById('lat').lat = lat + '<br/>';
   document.getElementById('long').long =long  + '<br/>';
   document.getElementById('height').height = height + '<br/>'
}*/
//关闭WebSocket连接
function closeWebSocket() {
    websocket.close();
}

//发送消息
function send() {
    console.log("pp")
    var message = document.getElementById('text').value;
    /* var message1 = document.getElementById('text1').value;
     var message2 = document.getElementById('text2').value;*/
    websocket.send(message);
    /*websocket.send(message1);
     websocket.send(message2);*/
    console.log("message")
}