let panels=document.querySelectorAll(".panel")

function toggleOpen(){
    this.classList.toggle("active");

}
function toggleOpenActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes("flex-grow")){
        this.classList.toggle("open-active");
    }
   
    
}

panels.forEach(panel=>panel.addEventListener("click",toggleOpen));
panels.forEach(panel=>panel.addEventListener("transitionend",toggleOpenActive));