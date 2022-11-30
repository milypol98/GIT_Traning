const buttonAdd = document.querySelectorAll("#addIcd9")
buttonAdd.forEach(btn => {
    btn.addEventListener("click", evt=>{
        console.log(evt.target.value);
    })
})