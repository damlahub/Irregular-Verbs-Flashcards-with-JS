let sheet;

function DataInit() {
  // Sabit bir XLSX dosyasının yolu
  const xlsxFilePath = '../database.xlsx';

  // XLSX dosyasını okuma işlemi
  const oReq = new XMLHttpRequest();
  oReq.open('GET', xlsxFilePath, true);
  oReq.responseType = 'arraybuffer';

  oReq.onload = function (e) {
    const arraybuffer = oReq.response;

    // Veriyi XLSX olarak işleme
    const data = new Uint8Array(arraybuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // İlk sayfadaki (sheet) veriyi alma
    const sheetName = workbook.SheetNames[0];
    sheet = workbook.Sheets[sheetName];

    DataShow();
  };
  oReq.send();
}
DataInit();


document.addEventListener("click", (event) => {
  let btnID = event.target.id;
  const slide = event.target.closest('.words-content');

  if (slide) {
    const index = slide.classList[1].replace('slideID', '');
    const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    if (btnID === "yes") {
      console.log("yes");
      const [v1, v2, v3, turkishMeaning] = sheetData[index];

      const existingYesData = JSON.parse(localStorage.getItem("allYesWords")) || [];

      const yesNewData = { v1, v2, v3, turkishMeaning };
      existingYesData.push(yesNewData);
      localStorage.setItem("allYesWords", JSON.stringify(existingYesData));
    }
    /* ------------------------------------------------------ */
    if (btnID === "maybe") {
      console.log("maybe");
      const [v1, v2, v3, turkishMeaning] = sheetData[index];

      const existingMaybeData = JSON.parse(localStorage.getItem("allMaybeWords")) || [];

      const yesNewData = { v1, v2, v3, turkishMeaning };
      existingMaybeData.push(yesNewData);

      localStorage.setItem("allMaybeWords", JSON.stringify(existingMaybeData));
    }
    /* ------------------------------------------------------ */

    if (btnID === "no") {
      console.log("no");
      const [v1, v2, v3, turkishMeaning] = sheetData[index];

      const existingNoData = JSON.parse(localStorage.getItem("allNoWords")) || [];

      const noNewData = { v1, v2, v3, turkishMeaning };
      existingNoData.push(noNewData);

      localStorage.setItem("allNoWords", JSON.stringify(existingNoData));
    }
  }
});

// localStorage.clear();
