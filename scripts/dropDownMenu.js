    let asideBtn=document.querySelector("#menuActive");
    let asideContent=document.querySelector("#menu");
    asideBtn.addEventListener("click",()=>{
    asideContent.classList.toggle("aside-active")
    if(!asideContent.classList.contains("aside-active")){
        asideBtn.style.left="-15px";
    }else{
        asideBtn.style.display="none";
        let span = document.querySelector("#menu-close");

        span.addEventListener("click",()=>{
            asideContent.classList.remove("aside-active");
            asideBtn.style.display="block";
        });
    }
});