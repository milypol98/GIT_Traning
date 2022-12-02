const textIcd9 = window.location.hash.substring(1);
const divIcd9 = document.querySelector('#icd9');
divIcd9.innerText = textIcd9.replaceAll('%20',' ');
