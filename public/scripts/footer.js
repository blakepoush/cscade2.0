window.onload = () => {setFooter()};
setInterval(setFooter,500);

function setFooter(){
    //var body = document.getElementsByTagName("body")[0];
    if(document.body.scrollHeight < window.innerHeight){
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = "5px";
    }
    else{
        document.getElementById("footer").style.position = "block";
    }
}