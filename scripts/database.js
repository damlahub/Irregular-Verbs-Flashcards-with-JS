// let sheet;

// function DataInit() {
//   // Sabit bir XLSX dosyasının yolu
//   const xlsxFilePath = '../database.xlsx';

//   // XLSX dosyasını okuma işlemi
//   const oReq = new XMLHttpRequest();
//   oReq.open('GET', xlsxFilePath, true);
//   oReq.responseType = 'arraybuffer';

//   oReq.onload = function (e) {
//     const arraybuffer = oReq.response;

//     // Veriyi XLSX olarak işleme
//     const data = new Uint8Array(arraybuffer);
//     const workbook = XLSX.read(data, { type: 'array' });

//     // İlk sayfadaki (sheet) veriyi alma
//     const sheetName = workbook.SheetNames[0];
//     sheet = workbook.Sheets[sheetName];
//     DataShow();
//   };
//   oReq.send();
// }
// DataInit();

// // function displayData() {
// //   JSON.parse(localStorage.getItem("allYesWords")) || [];
// //   JSON.parse(localStorage.getItem("allMaybeWords")) || [];
// //   JSON.parse(localStorage.getItem("allNoWords")) || [];
// // }

// document.addEventListener("click", (event) => {
//   let btnID = event.target.id;
//   const slide = event.target.closest('.words-content');

//   if (slide) {
//     const index = slide.classList[1].replace('slideID', '');
//     const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//     let [v1, v2, v3, turkishMeaning] = sheetData[index];
//     let newData = { v1, v2, v3, turkishMeaning };

//     if (btnID === "yes") {
//       console.log("yes");
//       let existingYesData = JSON.parse(localStorage.getItem("allYesWords")) || [];
      
//       let isDuplicate = existingYesData.some(item =>  // 'some' ile dizideki her ögeyi kontrol ediyor.
//         item.v1 === newData.v1 && 
//         item.v2 === newData.v2 && 
//         item.v3 === newData.v3 && 
//         item.turkishMeaning === newData.turkishMeaning
//     );

//     if (!isDuplicate) { //Yeni kelime dizide yok ise verimiz eklensin.
//       alert("Biliyorum: \n"+JSON.stringify(newData.v1) + " kelimesi eklendi.");  
//         existingYesData.push(newData);
//         localStorage.setItem("allYesWords", JSON.stringify(existingYesData));
//         displayUpdate();
//     } else { //Yeni kelime dizide var ise uyarı versin.
//         alert("Bu veri zaten LocalStorage'da mevcut.");
//     }
    
//     }
//     /* ------------------------------------------------------ */
//     if (btnID === "maybe") {
//       console.log("maybe");
//       let existingMaybeData = JSON.parse(localStorage.getItem("allMaybeWords")) || [];
//       let newData = { v1, v2, v3, turkishMeaning };

//       let isDuplicate = existingMaybeData.some(item => 
//       item.v1 === newData.v1 && 
//       item.v2 === newData.v2 && 
//       item.v3 === newData.v3 && 
//       item.turkishMeaning === newData.turkishMeaning
//   );

//   if (!isDuplicate) { 
//     alert("Tekrarlamam Lazım: \n"+JSON.stringify(newData.v1) + " kelimesi eklendi.");  
//       existingMaybeData.push(newData);
//       localStorage.setItem("allMaybeWords", JSON.stringify(existingMaybeData));
//         displayUpdate();
//     } else { 
//       alert("Bu veri zaten LocalStorage'da mevcut.");
//   }
//     }
//     /* ------------------------------------------------------ */

//     if (btnID === "no") {
//       console.log("no");
//       let existingNoData = JSON.parse(localStorage.getItem("allNoWords")) || [];
//       let newData = { v1, v2, v3, turkishMeaning };

//       let isDuplicate = existingNoData.some(item => 
//         item.v1 === newData.v1 && 
//         item.v2 === newData.v2 && 
//         item.v3 === newData.v3 && 
//         item.turkishMeaning === newData.turkishMeaning
//     );
  
//     if (!isDuplicate) { 
//       alert("Hiç Bilmiyorum: \n"+JSON.stringify(newData.v1) + " kelimesi eklendi.");  
//         existingNoData.push(newData);
//         localStorage.setItem("allNoWords", JSON.stringify(existingNoData));
//         displayUpdate();
//       } else { 
//         alert("Bu veri zaten LocalStorage'da mevcut.");
//     }
//     }
//   }
// });

// // localStorage.clear();

document.addEventListener('DOMContentLoaded', function () {
  let sheet;

  function fetchData() {
    const xlsxFilePath = '../database.xlsx';

    fetch(xlsxFilePath)
      .then(response => response.arrayBuffer())
      .then(data => {
        const arraybuffer = data;
        const workbook = XLSX.read(new Uint8Array(arraybuffer), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        sheet = workbook.Sheets[sheetName];
        DataShow(sheet);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  function handleButtonClick(storageKey, message) {
    const newData = { v1, v2, v3, turkishMeaning };
  
    try {
      const existingData = JSON.parse(localStorage.getItem(storageKey)) || [];
  
      const isDuplicate = existingData.some(item =>
        item.v1 === newData.v1 &&
        item.v2 === newData.v2 &&
        item.v3 === newData.v3 &&
        item.turkishMeaning === newData.turkishMeaning
      );
  
      if (isDuplicate) {
        throw new Error();
      }
     ShowAlert(message, JSON.stringify(newData.v1),"kelimesi eklendi.","green");
      existingData.push(newData);
      localStorage.setItem(storageKey, JSON.stringify(existingData));
    } catch (error) {
     ShowAlert(message, JSON.stringify(newData.v1),"kelimesi daha öncesinde eklenmiş." ,"red");

    }
  }
  document.addEventListener('click', function (event) {
    const slide = event.target.closest('.words-content');
  
    if (slide) {
      const index = slide.classList[1].replace('slideID', '');
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      [v1, v2, v3, turkishMeaning] = sheetData[index];
  
      if (event.target.id === 'yes') {
        handleButtonClick('allYesWords', 'Biliyorum: \n');
      } else if (event.target.id === 'maybe') {
        handleButtonClick('allMaybeWords', 'Tekrarlamam Lazım: \n');
      } else if (event.target.id === 'no') {
        handleButtonClick('allNoWords', 'Hiç Bilmiyorum: \n');
      }
    }
  });
  
fetchData();

});