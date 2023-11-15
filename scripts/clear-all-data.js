let clearLocalStorage=document.querySelector("#clear-localstorage");

clearLocalStorage.addEventListener("click",()=>{
    let confirmStatus= confirm("Tüm veriler silinsin mi?");
    if(confirmStatus){
    localStorage.clear();
        alert("Tüm veriler silindi!");
    }else{
        alert("Tüm veriler silinmedi!");        
    }
});