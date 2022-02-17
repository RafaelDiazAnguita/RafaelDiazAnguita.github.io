card_views = document.querySelectorAll('.card-view-content');
buttons = document.querySelectorAll('.card-view-content button');
text = document.querySelectorAll('.card-view-content p');

for (let index = 0; index < buttons.length; index++) {
    
    buttons[index].addEventListener('click',function(){
        text[index].style.opacity = '1';
        text[index].style.height = 'auto';
    });
    
}
