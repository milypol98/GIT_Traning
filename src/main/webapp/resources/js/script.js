function checkNextValue(searchValue) {
    fetch("icd9Detalis?code=" + searchValue)
        .then((response)=>response.json())
        .then((data)=>{
            console.log('milosz');
            console.log(data);
            if (data.length < 1){
                const button = document.querySelectorAll("#next");
                button.forEach(btn => {
                    btn.innerText = 'mstaw'
                })
            }
        })
}
function detalistIcd9(searchValue) {
    fetch("icd9Detalis?code=" + searchValue)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            document.querySelector(".codesIcd9").innerHTML ='';
            for (let i=0; i < data.length; i++){
                document.querySelector(".codesIcd9").innerHTML +=`
         <tr class="pokemonInfos">
        <td>${data[i].kod}</td>
        <td>${data[i].opis}</td>   
        <td><button id="next"  value="${data[i].kod}">Wiecej</button> </td>
        <td><button id="add"  value="${data[i].kod}">wstaw</button> </td>
      </tr>`;

                const button = document.querySelectorAll("#next");
                button.forEach(btn =>{
                    btn.addEventListener("click",evt => {
                        console.log(evt.target.value);
                        detalistIcd9(evt.target.value);
                    })
                })
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
            console.log(data)
            document.querySelector(".codesIcd9").innerHTML ='';
            for (let i=0; i < data.length; i++){
                document.querySelector(".codesIcd9").innerHTML +=`
         <tr class="pokemonInfos">
        <td>${data[i].kod}</td>
        <td>${data[i].opis}</td>   
        <td><button id="next"  value="${data[i].kod}">Wiecej</button> </td>
      </tr>`;
                const button = document.querySelectorAll("#next");
                button.forEach(btn =>{
                    btn.addEventListener("click",evt => {
                        console.log(evt.target.value);
                        detalistIcd9(evt.target.value);
                    })
                })
            }
        })
        .catch((err)=>{
            console.log("Not Found si",err)
        })
}

function getIcd9(){
    fetch("/icd9Table")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);

            document.querySelector(".codesIcd9").innerHTML ='';
      for (var i=0; i < data.length; i++){
          document.querySelector(".codesIcd9").innerHTML +=`
         <tr class="pokemonInfos">
        <td>${data[i].kod}</td>
        <td>${data[i].opis}</td>   
        <td><button id="next"  value="${data[i].kod}">Wiecej</button> </td>
      </tr>`;
      }
            const button = document.querySelectorAll("#next");
            button.forEach(btn =>{
                btn.addEventListener("click",evt => {
                    console.log(evt.target.value);
                    moreIcd9(evt.target.value);
                })
            })

        })
        .catch((err)=>{
            console.log("Not Found",err);
        })
}
getIcd9();









