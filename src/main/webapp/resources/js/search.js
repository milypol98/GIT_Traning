const buttonSearch =document.querySelector("#search");
const searchInput = document.querySelector("#search-input")

buttonSearch.addEventListener("click" , function (){
    window.location.href = "/searchicd9?search="+searchInput.value;
})

searchInput.addEventListener("keypress" , function (event){
    if (event.key === "Enter"){
        window.location.href = "/searchicd9?search="+searchInput.value;
    }
})

const button = document.querySelector("#icd9Table");
button.addEventListener("click",function (event){
    window.location.href ="/about"
})


// function searchIcd9(searchValue) {
//     fetch("/searchicd9?search=" + searchValue)
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log('milosz')
//             console.log(data)
//             document.querySelector(".codesIcd9").innerHTML ='';
//             for (var i=0; i < data.length; i++){
//                 document.querySelector(".codesIcd9").innerHTML +=`
//          <tr class="pokemonInfos">
//         <td>${data[i].kod}</td>
//         <td>${data[i].opis}</td>
//         <td><button id="add"  value="${data[i].kod}">wstaw</button> </td>
//       </tr>`;
//             }
//         })
//         .catch((err)=>{
//             console.log("Not Found si",err)
//         })
// }