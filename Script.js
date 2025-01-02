let inputslider = document.getElementById("rangeinput");
let slidervalue = document.getElementById("rangevalue");
let passbox = document.getElementById("Passwordbox");
let lowercase = document.getElementById("Lowercase");
let uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("Numbers");
let symbols = document.getElementById("Symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let syms = "@!#$%^&*()";

slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener("click", () => {
    passbox.value = generatePassword();
});

function generatePassword() {
    let genpassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += symbols.checked ? syms : "";
    allchars += numbers.checked ? nums : "";

    if (allchars == "" || allchars.length == 0) {
        return genpassword;
    }

    for (let i = 1; i <= inputslider.value; i++) {
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }
    return genpassword;
}

copyicon.addEventListener("click",()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText=" ";
        copyicon.title ="Password Copied";
        setTimeout(()=>{
            copyicon.innerHTML="<i class='fa-solid fa-check'></i>"
            copyicon.title="";
        },300);
    }
    
});
