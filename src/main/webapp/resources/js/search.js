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
    window.location.href ="/icd9Table"
})

