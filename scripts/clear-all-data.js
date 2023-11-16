let clearLocalStorage = document.querySelector("#clear-localstorage");

clearLocalStorage.addEventListener("click", () => 
{
    document.body.style.overflow = "hidden";
    openModal();
    const removeButton = document.querySelector(".remove-list");
    removeButton.addEventListener("click", clearData);
    const closeButton = document.querySelector(".close-modal");
    closeButton.addEventListener("click", closeModal);
});

const openModal=()=> {
    
    document.querySelector("#clear-modal").style.display = "flex";
}
const closeModal=()=> {
    document.querySelector("#clear-modal").style.display = "none";
    document.body.style.overflow = "auto";
    ShowAlert("İşlem","İptal","Edildi.","yellow");
}
const clearData=()=>{
   localStorage.clear();
   location.reload();
}
