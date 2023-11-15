let _completeIncomplete = document.querySelector("#incomplete");
let _completeIncompleteWords = JSON.parse(localStorage.getItem('allNoWords'));


_completeIncomplete.addEventListener("click", () => {
    MAIN_CONTENT.innerHTML = "";
    if (!_completeIncompleteWords) {
        _completeIncompleteWords = []; 
    }
    let completeSection=document.createElement("section");
    completeSection.classList.add("complete-section");

    let table = document.createElement("table");
    table.classList.add("complete-table");

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>V1</th>
        <th>V2</th>
        <th>V3</th>
        <th>Türkçe Anlamı</th>
    `;
    thead.appendChild(headerRow);
    if(_completeIncompleteWords.length > 0){
    for (let j = 0; j < _completeIncompleteWords.length; j++) {
        const word = _completeIncompleteWords[j];

        let dataRow = document.createElement("tr");

        dataRow.innerHTML = `
            <td>${word.v1}</td>
            <td>${word.v2}</td>
            <td>${word.v3}</td>
            <td>${word.turkishMeaning}</td>
        `;

        if (j % 2 === 0) {
            dataRow.style.backgroundColor = "#f2f2f2"; // Gri rengi
        }

        tbody.appendChild(dataRow);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    completeSection.appendChild(table);
    MAIN_CONTENT.appendChild(completeSection);
}

    //  Complete Counter
 let completePointContent = document.createElement("section"); 
 completePointContent.classList.add("complete-point");

 let completePoint = document.createElement("h1"); 
 completePoint.innerHTML =  _completeIncompleteWords.length +  " <br> KELİME"; 

 completePointContent.appendChild(completePoint); 
 MAIN_CONTENT.appendChild(completePointContent);
});
