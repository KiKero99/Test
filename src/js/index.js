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

function navigate(txt) {
    if (txt == "1") {
        window.location = "https://forms.gle/rnrdjnJEBufCGK7j9"
    }
    window.location = "https://forms.gle/eKfqmuNvVRNDMhSEA"
}

function yes_non(id, txt) {
    const elem = document.getElementById(id);
    elem.addEventListener("click", () => {
        navigate(txt);
    })
}

window.onload = () => {
    move();
    yes_non("oui", "1");
    yes_non("non", "0");
};
