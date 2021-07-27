let phone =document.querySelector('.phone');
phone.addEventListener('click',tell,false);
housetel.addEventListener('click',housetell,false)
function housetell(e){
    window.location.href='tel://0492898095'
}