const texts=['AUV'];
var count=0;
var index=0;
var text='';
var letter='';
$(function(){

    type();
function type(){
    if(count===texts.length)
        {
            count=0;
        }
    text=texts[count];
    letter=text.slice(0,++index);
    $(".typing").text(letter);
    if(letter.length===text.length)
        {
            count++;
            index=0;
        }
    
    
    setTimeout(type,1000);
}


});