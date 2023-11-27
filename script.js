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

