function DataShow() {
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const numberOfRows = jsonData.length; //excel satur uzunluğu

    let wordsContainer=document.querySelector(".words-container");

    for (let index = 0; index < numberOfRows; index++) {
      let wordsContent = document.createElement("div");
      wordsContent.classList.add("words-content");
      wordsContent.classList.add("slideID" + index);
      wordsContent.innerHTML = `
          <div class="words-content-info">
          <table>
          <thead>
              <tr>
                  <th><h1>V1</h1></th>
                  <th><h1>V2</h1></th>
                  <th><h1>V3</h1></th>
                  <th>TRANSLATION</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][0]}</p></td>
                  <td><p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][1]} </p></td>
                  <td><p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][2]} </p></td>
                  <td><p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][3]}</p></td>
              </tr>
          </tbody>
          </table>
          </div>
          <form id="word-status">
              <input type="button" value="Öğrendim" class="btns" id="yes">
              <input type="button" value="Tekrarlamam Lazım" class="btns" id="maybe">
              <input type="button" value="Hiç Bilmiyorum" class="btns" id="no">
          </form>
          `;
          wordsContainer.appendChild(wordsContent);
    }
    MAIN_CONTENT.appendChild(wordsContainer);

    // let mainMenu = document.querySelector("#main-menu");
    // mainMenu.addEventListener("click", () => {
    //   MAIN_CONTENT.innerHTML="";
    // });
}

        //   <h1>V1</h1>
        //   <p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][0]}</p><br>
        //   <h1>V2</h1>
        //   <p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][1]} </p><br>
        //   <h1>V3</h1>
        //   <p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][2]} </p><br>
        //   </div>
        //   <h1>Türkçe Anlamı</h1>
        //   <p>${XLSX.utils.sheet_to_json(sheet, { header: 1 })[index][3]}</p><br>