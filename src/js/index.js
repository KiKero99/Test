

function move() {
    document.addEventListener("mousemove", (e) => {
        const non = document.getElementById("non");

        const x = non.offsetLeft;
        const y = non.offsetTop;
        const width = non.offsetWidth;
        const height = non.offsetHeight;

        const w = window.innerWidth;
        const h = window.innerHeight;

        if (Math.abs(x + width / 2 - e.clientX) < 50 && Math.abs(y + height / 2 - e.clientY) < 50) {
            non.style.top = Math.random() * (h - height) + "px";
            non.style.left = Math.random() * (w - width) + "px";
            console.log("Upsie")
        }
    });
}

function yes() {
    const yes = document.getElementById("oui");
    yes.addEventListener("click", () => {
        const area = document.getElementById("button-area");
        const central = document.getElementById("central-txt");
        area.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerText = "Je l'ai toujours su sale GAY!!";
        central.appendChild(h1);
    })
}

function non() {
    const non = document.getElementById("non");
    non.addEventListener("click", () => {
        const area = document.getElementById("button-area");
        const central = document.getElementById("central-txt");
        area.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerText = "Ouff, j'ai eu peur.";
        central.appendChild(h1);
    })
}


window.onload = () => {
    move();
    yes();
    non();
};