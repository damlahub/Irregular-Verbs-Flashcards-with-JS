const updateIntervalTime = 1000;
const updateInterval = () => {
  const updateWordList= (buttonId, wordArrayKey)=>{  
    const buttonElement = document.querySelector(buttonId);
    const wordArray = JSON.parse(localStorage.getItem(wordArrayKey));

    buttonElement.addEventListener('click', () => {
      MAIN_CONTENT.innerHTML = '';

      if (!wordArray) {
        wordArray = [];
      }

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
        MAIN_CONTENT.appendChild(completeSection);
      }

      // Complete Counter
      const completePointContent = document.createElement('section');
      completePointContent.classList.add('complete-point');

      const completePoint = document.createElement('h1');
      completePoint.innerHTML = wordArray.length + ' <br> KELİME';

      completePointContent.appendChild(completePoint);
      MAIN_CONTENT.appendChild(completePointContent);
    });
  }

  updateWordList('#complete', 'allYesWords');
  updateWordList('#repeat', 'allMaybeWords');
  updateWordList('#incomplete', 'allNoWords');
}


setInterval(updateInterval, updateInterval);
