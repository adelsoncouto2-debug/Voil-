fetch("../components/header.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
        const pagina = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll(".header-text a.text").forEach(link => {
            const href = link.getAttribute("href").split("/").pop()
            if (href === pagina) {
                link.classList.remove("text");
                link.classList.add("text-selected");
            }
        });
        const vai = document.querySelector(".vai-container");
        if (pagina === "vai.html") {
            vai.classList.add("active");
        }
    });