const button = document.querySelectorAll("#addButton");
const tr1 = document.querySelectorAll("tr");
tr1.forEach(e=>
    e.lastElementChild.addEventListener("click",function (){
        console.log(e.children[1].innerText);
    }))


const searchInput = document.querySelector("#speed-search");
const tr = [...document.querySelectorAll("tr")];
const table = document.querySelector("table");
const searchWord = e=> {
    const currentWord = e.target.value.toUpperCase();
    let result =tr;
    console.log(result);
    result = result.filter(tr =>tr.textContent.includes(currentWord));
    table.textContent = '';
    result.forEach(name => table.appendChild(name));
}
searchInput.addEventListener("input",searchWord)


