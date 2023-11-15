    let asideBtn=document.querySelector("#menuActive");
    let asideContent=document.querySelector("#menu");
    asideBtn.addEventListener("click",()=>{
    asideContent.classList.toggle("aside-active")
    if(!asideContent.classList.contains("aside-active")){
        asideBtn.style.left="-15px";
    }else{
        asideBtn.style.left="65px";
    }
})