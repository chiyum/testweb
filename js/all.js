let click =document.querySelector('.click');
let off =document.querySelector('.ulC p')
let menu = document.querySelector('.ulC');

click.addEventListener('click',closs,false);

function closs(e){
    if(e.target.className ==='click'){
        menu.style.bottom = 0
        click.setAttribute("class","clickOff")
    }else{
        menu.style.bottom = 230+"px"
        click.setAttribute("class","click")
    }
    
}

off.addEventListener('click',offClcik,false)

function offClcik(e){
    menu.style.bottom =230+"px"
}