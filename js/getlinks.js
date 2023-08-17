function getLinks(type) {
    const typeString = String(type)
    const request = new Request("../json/links.json")

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            var links = null;
            switch (typeString) {
                case "general":
                    links = data.general
                    break;
                case "providers":
                    links = data.providers
                    break;
                case "appointments":
                    links = data.appointments
                    break;
                case "places":
                    links = data.places
                    break;
                default:
                    links = data.general
            }

            for (item of links) {
                var section = document.getElementById("section");

                const cardLink = document.createElement("a");
                cardLink.href = item.linkAddress;
                cardLink.className = "card-link";

                const card = document.createElement("div");
                card.className = "card";

                const cardLinkName = document.createElement("div");
                cardLinkName.className = "container";
                cardLinkName.textContent = item.linkName;

                card.appendChild(cardLinkName);

                const cardLinkAddress = document.createElement("p");
                cardLinkAddress.className = "containerDetails";
                cardLinkAddress.textContent = item.linkAddress;

                card.appendChild(cardLinkAddress);

                if (item.description != null) {
                    const cardLinkDescription = document.createElement("p");
                    cardLinkDescription.className = "containerDetails";
                    cardLinkDescription.textContent = item.description;

                    card.appendChild(cardLinkDescription);
                }

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

