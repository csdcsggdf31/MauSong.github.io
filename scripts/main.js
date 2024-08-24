
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}
alert(multiply(4,7));
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://nng-phinf.pstatic.net/MjAyNDA4MDNfMjk3/MDAxNzIyNjY3MjE0NjA2.2JTkaQgkxGEW9EqLtwgCUkhihvqbLGJGuCih91Nq9xQg.vy2-18t6tAlGotvizEaZcUwNXQEW5Vud6t1A1vA-8TMg.JPEG/IMG_0080_-_%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?type=f120_120_na') {
    myImage.setAttribute ('src','https://nng-phinf.pstatic.net/MjAyNDA4MDNfMjk3/MDAxNzIyNjY3MjE0NjA2.2JTkaQgkxGEW9EqLtwgCUkhihvqbLGJGuCih91Nq9xQg.vy2-18t6tAlGotvizEaZcUwNXQEW5Vud6t1A1vA-8TMg.JPEG/IMG_0080_-_%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?type=f120_120_na');
    } else {
    myImage.setAttribute ('src','https://nng-phinf.pstatic.net/MjAyNDA4MDNfMjk3/MDAxNzIyNjY3MjE0NjA2.2JTkaQgkxGEW9EqLtwgCUkhihvqbLGJGuCih91Nq9xQg.vy2-18t6tAlGotvizEaZcUwNXQEW5Vud6t1A1vA-8TMg.JPEG/IMG_0080_-_%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?type=f120_120_na');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
    setUserName();
}
