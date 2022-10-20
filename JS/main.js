const buttons = document.querySelectorAll('.btn');
const content = document.querySelector('.content');

const fontSizeUp = document.querySelector('.fontSizeUp');
const fontSizeDown = document.querySelector('.fontSizeDown');

const fontSizeSpan = document.querySelector('.fontSize span');

for(let i=0; i<buttons.length ;i++) {
    buttons[i].addEventListener('click', (e) =>{
        
        let command = (e.target.closest('.btn')).getAttribute('data');
        if(command === "createLink" || command === "insertImage") {
            let url = prompt("Link: ","http://");
            document.execCommand(command,false,url);
        }else{
            document.execCommand(command,false,null);
        }
    })
}

let font="";
let fontSize=18;

function updateFont() {
    let selectFont = document.querySelector('#select_font');
    font = selectFont.options[selectFont.selectedIndex].value;

    content.style = 'font-family:' + font + ";";
}
updateFont();

function updateFontSizeSpan() {
    fontSizeSpan.innerHTML = "";
    fontSizeSpan.innerHTML = fontSize + "px";
}
updateFontSizeSpan();

fontSizeUp.addEventListener('click', () =>{
    fontSize++;
    content.style = "font-size:" + fontSize + "px;";
    updateFontSizeSpan();
})

fontSizeDown.addEventListener('click', () =>{
    fontSize--;
    content.style = "font-size:" + fontSize + "px;";
    updateFontSizeSpan();
})