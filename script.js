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
     document.getElementById('txt-counter').innerHTML = count;

    if (count % 2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
}