const input =document.querySelector("#search");
input.addEventListener("keypress" , function (event){
    if (event.key ==="Enter"){
        window.location.href = "/searchicd9?search=" + input.value;
    }
})