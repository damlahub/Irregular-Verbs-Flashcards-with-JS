const ShowAlert=(message, data, sentence,boxBg)=> {
    let alertContainer = document.querySelector(".alert-container");
    let alertBox = document.createElement("span");
    alertBox.className = "alert-box";
    alertBox.style.backgroundColor= boxBg;
    alertBox.innerHTML = message+"<br>"+data+" "+sentence;
    alertContainer.appendChild(alertBox);
    
  setTimeout(() => {
    alertBox.style.opacity = '1';
    alertBox.style.transform = 'translateY(0)';
  }, 10);

  setTimeout(() => {
    alertBox.style.opacity = '0';
    alertBox.style.transform = 'translateX(-20px)';
    setTimeout(() => {
      alertBox.remove();
    }, 300);
  }, 3000);
  };