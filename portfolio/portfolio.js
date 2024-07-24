const dropDown=document.querySelectorAll(".dropdown");
const closeIcon=document.getElementsByClassName("close");
const menuIcon=document.getElementsByClassName("menu");
function menubar(){
    
    dropDown.forEach(element=>{
        element.style.visibility = "visible";
    });
    closeIcon[0].style.display = "block";
    menuIcon[0].style.display = "none";

}
function closebar(){
    dropDown.forEach(element=>{
        element.style.visibility = "hidden";
    });
    closeIcon[0].style.display = "none";
    menuIcon[0].style.display = "block";
}
var typed=new Typed(".text", {
    strings :["Frontend Developer","Python Developer"],
    typespeed:150,
    backspeed:150,
    backDelay:1500,
    loop:true
});
function closed(){
    console.log("hello");
    dropDown.forEach(element=>{
        element.style.visibility = "hidden";
    });
    closeIcon[0].style.display = "none";
    menuIcon[0].style.display = "block";
}    