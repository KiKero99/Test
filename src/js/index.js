const move_distance = 50;

function move() {
    document.addEventListener("mousemove", (e) => {
        const non = document.getElementById("non");

        if (!non) {
            return;
        }

        const x = non.offsetLeft;
        const y = non.offsetTop;
        const width = non.offsetWidth;
        const height = non.offsetHeight;

        const w = window.innerWidth;
        const h = window.innerHeight;

        if (Math.abs(x + width / 2 - e.clientX) < move_distance && Math.abs(y + height / 2 - e.clientY) < move_distance) {
            non.style.top = Math.random() * (h - height) + "px";
            non.style.left = Math.random() * (w - width) + "px";
            console.log("Upsie");
        }
    });
}

function changeInterface(txt) {
    const area = document.getElementById("button-area");
    const central = document.getElementById("central-txt");
    area.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerText = txt;
    central.appendChild(h1);
}

function yes_non(id, txt) {
    const elem = document.getElementById(id);
    elem.addEventListener("click", () => {
        changeInterface(txt);
    })
}

window.onload = () => {
    move();
    yes_non("oui", "Je l'ai toujours su sale GAY!!");
    yes_non("non", "Ouff, j'ai eu peur.");
};
