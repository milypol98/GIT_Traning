const addIcd9Button = document.querySelectorAll("#addIcd9");

console.log("Polska")
addIcd9Button.forEach(btn => {
    btn.addEventListener("click",evt => {
       window.location.href = '/' + '#' + evt.target.value;
    });
})