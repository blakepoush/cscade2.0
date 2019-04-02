setInterval(servertime,500);
function servertime(){
    var time;
    var d = new Date();
    time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(time);
    document.getElementById("serverTime").html = time;
}
