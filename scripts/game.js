let gameBtn=document.querySelector("#gameBtn");

const clearMain = () => MAIN_CONTENT.innerHTML = '';

const game = () => {
    clearMain();
}

gameBtn.addEventListener("click",game);
