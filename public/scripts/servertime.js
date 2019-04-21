setInterval(servertime,500);
function servertime(){
    var d = new Date();
    var date = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    var hours = d.getHours() % 12;
    var time = "";
    time += (hours > 0) ? hours : d.getHours();
    time += ":" + d.getMinutes() + ":" + d.getSeconds()
    time += (hours > 0) ? " PM" : " AM";
    document.getElementById("serverTime").textContent = date + " - " + time;
}
