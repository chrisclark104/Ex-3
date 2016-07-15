// A $( document ).ready() block.
$( document ).ready(function() {
});
var userEntry;
var mirror="";
var arrMirror=[];
var arrUserEntry=[];

function onRun(){
    userEntry = $('#textinput').val();
    for(var index = 0; index < userEntry.length; index++){
        arrUserEntry.push(userEntry.charAt(index));
    }
    arrMirror = arrUserEntry.reverse();
    for(var index2 = 0; index2 < arrMirror.length; index2++){
        mirror += arrMirror[index2];
    }
    if(userEntry === mirror){
        alert("THE WORD " + userEntry + " Is a Palindrome");
    }
    else {
        alert("THE WORD " + userEntry + " Is not a Palindrome");
    }  
}