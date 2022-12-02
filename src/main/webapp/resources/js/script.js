const button = document.querySelectorAll("#next");
button.forEach(btn =>{
    btn.addEventListener("click",evt => {
        moreIcd9(evt.target.value);
    });
})
function notNull(searchValue) {
    fetch("icd9NextElement?code=" + searchValue)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            if(data.length === 0){
                const nextButton = document.querySelectorAll("#next");
                nextButton.forEach(btn=>{
                    if (btn.value === searchValue){
                        btn.parentElement.innerText= "";
                    }
                })

            }
        })
        .catch((error)=>{
            console.log("Not Found si",error)
        })
}
function detalistIcd9(searchValue) {
    fetch("icd9Detalis?code=" + searchValue)
        .then((response)=>response.json())
        .then((data)=>{
            document.querySelector(".codesIcd9").innerHTML ='';
            for (let i=0; i < data.length; i++){
                document.querySelector(".codesIcd9").innerHTML +=`
         <tr class="pokemonInfos">
        <td>${data[i].kod}</td>
        <td>${data[i].opis}</td>   
        <td id="nextButton"><button id="next"  value="${data[i].kod}">Wiecej →</button> </td>
        <td ><button id="addIcd9"  value="${data[i].kod}${data[i].opis}">Dodaj +</button> </td>            
      </tr>
      
        `;

                const button = document.querySelectorAll("#next");
                button.forEach(btn =>{
                    btn.addEventListener("click",evt => {
                        detalistIcd9(evt.target.value);
                    })
                })
                button.forEach(btn => {
                    console.log("++++++++++")
                        notNull(btn.value);})
            }
        })
        .catch((err)=>{
            console.log("Not Found si",err)
        })
}

function moreIcd9(searchValue) {
    fetch("/icd9More?code=" + searchValue)
        .then((response)=>response.json())
        .then((data)=>{
            document.querySelector(".codesIcd9").innerHTML ='';
            for (let i=0; i < data.length; i++){
                document.querySelector(".codesIcd9").innerHTML +=`
         <tr class="pokemonInfos">
        <td>${data[i].kod}</td>
        <td>${data[i].opis}</td>   
        <td><button id="next"  value="${data[i].kod}">Wiecej →</button> </td>
      </tr>`;
                const button = document.querySelectorAll("#next");
                button.forEach(btn =>{
                    btn.addEventListener("click",evt => {
                        detalistIcd9(evt.target.value);
                    })
                })
            }
        })
        .catch((err)=>{
            console.log("Not Found si",err)
        })
}










