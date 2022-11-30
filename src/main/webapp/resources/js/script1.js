// const url1 ="/icd9Table";
// const url2="/icd9More?code=";
// const url3 ="icd9Detalis?code=";
//
//
// icd9(url1,""){
// }
//
//
//
// function buttonNext(url) {
//     const button = document.querySelectorAll("#next");
//     button.forEach(btn =>{
//         btn.addEventListener("click",evt => {
//             console.log(evt.target.value);
//             icd9(url + evt.target.value);
//         })
//     })
// }
//
//
// function icd9(url, searchValue) {
//     fetch(url + searchValue)
//         .then((response) => response.json())
//         .then((data) => {
//             document.querySelector(".codesIcd9").innerHTML='';
//             for (let i = 0; i < data.length; i++) {
//                 document.querySelector(".codesIcd9").innerHTML += `
//                     <tr class="pokemonInfos">
//                         <td>${data[i].kod}</td>
//                         <td>${data[i].opis}</td>
//                         <td><button id="next"  value="${data[i].kod}">Wiecej</button> </td>
//                      </tr>`;
//             }
//         }).catch((err) => {
//         console.log("Not Found si", err)
//     })
// }