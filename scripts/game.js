let gameBtn=document.querySelector("#gameBtn");

const clearMain = () => MAIN_CONTENT.innerHTML = '';
gameBtn.addEventListener("click",clearMain);
