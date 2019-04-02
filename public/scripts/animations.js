setInterval(function(){},500);
function openNav() {
    if(document.documentElement.clientWidth > 450){
        document.getElementById("Sidenav").style.width = "250px";
    }
    else{
        document.getElementById("Sidenav").style.width = "100%";
    }
    
}
 

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}
