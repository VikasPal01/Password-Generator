const passwordBox=document.querySelector("#password");
const length=12;//password length//
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz"
const num="0123456789";
const symbols="~!@#$%^&*()_-+={}[]<>/"
//this is bcoz in createpasss it will create only 4 letter but we need 12
const allchar=uppercase+num+lowercase+symbols;


function createpass(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];

    }
    passwordBox.value=password;
}
//we add createpass func in button in onclick then whenever button is click it get call

function copyBtn(){
    passwordBox.select();
    document.execCommand("copy");
}