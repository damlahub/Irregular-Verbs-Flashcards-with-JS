let gameBtn=document.querySelector("#gameBtn");

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
      counterWarning.innerHTML = 'Kayıtlı kelime bulunmamaktadır.';
      MAIN_CONTENT.appendChild(counterWarning);
    } else {
      MAIN_CONTENT.style.height = '';
      MAIN_CONTENT.style.justifyContent = '';
      MAIN_CONTENT.style.alignItems = '';
      const sectionTitle = document.createElement("h1");
      sectionTitle.classList.add("section-title");
      sectionTitle.innerHTML = 'Bilmediğim Kelimeler';
      const completeSection = document.createElement('section');
      completeSection.classList.add('complete-section');
  
      const table = document.createElement('table');
      table.classList.add('complete-table');
  
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `
        <th>V1</th>
        <th>V2</th>
        <th>V3</th>
        <th>Türkçe Anlamı</th>
      `;
      thead.appendChild(headerRow);
  
      incompleteWordsArray.forEach((word, index) => {
        const dataRow = document.createElement('tr');
        dataRow.innerHTML = `
          <td>${word.v1}</td>
          <td>${word.v2}</td>
          <td>${word.v3}</td>
          <td>${word.turkishMeaning}</td>
        `;
  
        if (index % 2 === 0) {
          dataRow.style.backgroundColor = '#f2f2f2'; // Gri rengi
        }
  
        tbody.appendChild(dataRow);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      completeSection.appendChild(table);
      MAIN_CONTENT.appendChild(sectionTitle);
      MAIN_CONTENT.appendChild(completeSection);
    }
  };
const game = () => {
    clearMain();      
    showIncompleteWords();
}

gameBtn.addEventListener("click",game);
