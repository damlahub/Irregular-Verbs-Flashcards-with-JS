
/*
 Ekrana random 5 kelime gelir
 Kartlar doğru eşleşene kadar devam eder. => puan sistemi olacak
 En çok yanlış yapılan kelimeler databasede tutulur. İstedikleri zaman bu kelimeler ile oynayabilirler => bu veriler için başka bir script yaz.
 
 Oyunun ana sayfasında olacak butonlar;
 BASLA butonundan sonra.
 V1 = v1 ve türkçe anlamları
 v2 = v1 , v2 ve türkçe anlamları anlamları
 v3 = v1, v2 ve türkçe anlamları
 En çok yanlış yapılan kelimeler butonu

 süre sistemi olsun localstorage'te tut en son yazdır. her girdiğinde değişecek.
*/
let gameBtn=document.querySelector("#gameBtn");
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const clearMain = () => MAIN_CONTENT.innerHTML = '';
const showIncompleteWords = () => {
    const incompleteWordsArray = JSON.parse(localStorage.getItem('allNoWords')) || [];
  
    MAIN_CONTENT.innerHTML = '';
  
    if (incompleteWordsArray.length === 0) {
      MAIN_CONTENT.style.height = '100vh';
      MAIN_CONTENT.style.justifyContent = 'center';
      MAIN_CONTENT.style.alignItems = 'center';
      let counterWarning = document.createElement("h1");
      counterWarning.style.opacity = ".5";
      counterWarning.innerHTML = 'Havuzda kelime bulunamadı. Lütfen havuza kelime ekleyin.';
      MAIN_CONTENT.appendChild(counterWarning);
    } else {
      const sectionTitle = document.createElement("h1");
      sectionTitle.classList.add("section-title");
      sectionTitle.innerHTML = 'PUAN GELECEK';
      const completeSection = document.createElement('section');
      completeSection.classList.add('complete-section');
  
      const table = document.createElement('table');
      table.classList.add('complete-table');
  
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      incompleteWordsArray.forEach((word, index) => {
        const dataRow = document.createElement('tr');
        dataRow.innerHTML = `
          <td>${word.v1}</td>
          <td>${word.v2}</td>
          <td>${word.v3}</td>
          <td>${word.turkishMeaning}</td>
        `;
   
        tbody.appendChild(dataRow);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      completeSection.appendChild(table);
      MAIN_CONTENT.appendChild(sectionTitle);
      MAIN_CONTENT.appendChild(completeSection);
    }
};
const gameButtons=()=>{
  const gameTitle=document.createElement("h1");
  gameTitle.textContent="IrregularVerbs";
  buttonContainer.appendChild(gameTitle);

  const startButton = document.createElement('button');
  startButton.textContent = 'Başla';

  startButton.addEventListener('click', levelDesign);
  // startButton.addEventListener('click', startGame);

  buttonContainer.appendChild(startButton);
  MAIN_CONTENT.appendChild(buttonContainer);
}
const levelDesign=()=>{
  buttonContainer
  const v1Btn=document.createElement('button');
  v1Btn.textContent="V1";
  v1Btn.id="v1BTN";

  const v2Btn=document.createElement('button');
  v2Btn.textContent="V2";
  v1Btn.id="v2BTN";

  const v3Btn=document.createElement('button');
  v3Btn.textContent="V3";
  v1Btn.id="v3BTN";

  buttonContainer.appendChild(v1Btn);
  buttonContainer.appendChild(v2Btn);
  buttonContainer.appendChild(v3Btn);

  MAIN_CONTENT.appendChild(buttonContainer);

}
const startGame=()=>{
  showIncompleteWords();
}
const game = () => {
    clearMain();      
    gameButtons();
}

gameBtn.addEventListener("click",game);
