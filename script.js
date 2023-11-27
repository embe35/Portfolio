console.log("hello world");
document.getElementById("year")
document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("btn-alert").onclick = () => {
    alert("Hello to you too!");
};

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = '"Hello!"';
};
document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = "Say Hello!"
};

let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = 'Number: ' + count
}

let x = count % 2;
console.log(x);