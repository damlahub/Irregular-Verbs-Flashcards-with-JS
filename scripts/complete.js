const updateIntervalTime = 1000;
const updateInterval = () => {
  const updateWordList= (buttonId, wordArrayKey,title)=>{  
    const buttonElement = document.querySelector(buttonId);
    let wordArray = JSON.parse(localStorage.getItem(wordArrayKey));

    buttonElement.addEventListener('click', () => {
      MAIN_CONTENT.innerHTML = '';

      if (!wordArray) {
        wordArray = [];
      }
      const sectionTitle=document.createElement("h1");
      sectionTitle.classList.add("section-title");
      sectionTitle.innerHTML= title;
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

      if (wordArray.length > 0) {
        for (let j = 0; j < wordArray.length; j++) {
          const word = wordArray[j];

          const dataRow = document.createElement('tr');
          dataRow.innerHTML = `
            <td>${word.v1}</td>
            <td>${word.v2}</td>
            <td>${word.v3}</td>
            <td>${word.turkishMeaning}</td>
          `;

          if (j % 2 === 0) {
            dataRow.style.backgroundColor = '#f2f2f2'; // Gri rengi
          }

          tbody.appendChild(dataRow);
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        completeSection.appendChild(table);
        MAIN_CONTENT.appendChild(sectionTitle);
        MAIN_CONTENT.appendChild(completeSection);
      }

      // Complete Counter
      if(wordArray.length==0) {
        MAIN_CONTENT.style.height = '100vh';
        MAIN_CONTENT.style.justifyContent = 'center';
        MAIN_CONTENT.style.alignItems  = 'center';
        let counterWarning = document.createElement("h1");
        counterWarning.style.opacity=".5"
        counterWarning.innerHTML = 'Kayıtlı kelime bulunmamaktadır.';
        MAIN_CONTENT.appendChild(counterWarning);
      }else{
        MAIN_CONTENT.style.height = '';
        MAIN_CONTENT.style.justifyContent = '';
        MAIN_CONTENT.style.alignItems  = '';
        const completePointContent = document.createElement('section');
        completePointContent.classList.add('complete-point');
  
        let completePoint = document.createElement('h1');
        completePoint.innerHTML = wordArray.length + ' <br> KELİME';
  
        completePointContent.appendChild(completePoint);
        MAIN_CONTENT.appendChild(completePointContent);
      }

    });
  }

  updateWordList('#complete', 'allYesWords','Bildiğim Kelimeler');
  updateWordList('#repeat', 'allMaybeWords','Tekrar Etmem Gereken Kelimeler ');
  updateWordList('#incomplete', 'allNoWords','Bilmediğim Kelimeler');
}


setInterval(updateInterval, updateInterval);