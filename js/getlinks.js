function getGeneralLinks() {

    const request = new Request("../json/links.json")

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (item of data.general) {
                var section = document.getElementById("section");

                const cardLink = document.createElement("a");
                cardLink.href = item.linkAddress;
                cardLink.className = "card-link";

                const card = document.createElement("div");
                card.className = "card";

                const cardContents = document.createElement("div");
                cardContents.className = "container";
                cardContents.textContent = item.linkName;

                card.appendChild(cardContents);
                cardLink.appendChild(card);
                section.appendChild(cardLink);
            }
        })
}

function getAppointmentLinks() {

    const request = new Request("../json/links.json")

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (item of data.appointments) {
                var section = document.getElementById("section");

                const cardLink = document.createElement("a");
                cardLink.href = item.linkAddress;
                cardLink.className = "card-link";

                const card = document.createElement("div");
                card.className = "card";

                const cardContents = document.createElement("div");
                cardContents.className = "container";
                cardContents.textContent = item.linkName;

                card.appendChild(cardContents);
                cardLink.appendChild(card);
                section.appendChild(cardLink);
            }
        })
}

function getPlaceLinks() {

    const request = new Request("../json/links.json")

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (item of data.places) {
                var section = document.getElementById("section");

                const cardLink = document.createElement("a");
                cardLink.href = item.linkAddress;
                cardLink.className = "card-link";

                const card = document.createElement("div");
                card.className = "card";

                const cardContents = document.createElement("div");
                cardContents.className = "container";
                cardContents.textContent = item.linkName;

                card.appendChild(cardContents);
                cardLink.appendChild(card);
                section.appendChild(cardLink);
            }
        })
}

function getProviderLinks() {

    const request = new Request("../json/links.json")

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (item of data.providers) {
                var section = document.getElementById("section");

                const cardLink = document.createElement("a");
                cardLink.href = item.linkAddress;
                cardLink.className = "card-link";

                const card = document.createElement("div");
                card.className = "card";

                const cardContents = document.createElement("div");
                cardContents.className = "container";
                cardContents.textContent = item.linkName;

                card.appendChild(cardContents);
                cardLink.appendChild(card);
                section.appendChild(cardLink);
            }
        })
}

function customLinkSearchClicked() {
    const linkToGoTo = String(document.getElementById("customLinkTextField").value);
    if (linkToGoTo) {
        window.location = linkToGoTo;
    }
}

function customLinkKeyPress(event) {
    if (event.keyCode == 13) {
        customLinkSearchClicked();
    }
}