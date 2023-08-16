class GozioLink {

    constructor(linkAddress, linkName) {
        this.linkAddress = linkAddress;
        this.linkName = linkName;
    }
}

const node = document.getElementById("footer");
const footerText = document.createElement("p");
footerText.textContent = "Gozio Links";
node.appendChild(footerText);

const links = [
    new GozioLink("gozio://open", "Just Opens"),
    new GozioLink("https://www.google.com", "Google")
];

var section = document.getElementById("section");

for (link in links) {
    const cardLink = document.createElement("a");
    cardLink.href = links[link].linkAddress;
    cardLink.className = "card-link";

    const card = document.createElement("div");
    card.className = "card";

    const cardContents = document.createElement("div");
    cardContents.className = "container";
    cardContents.textContent = links[link].linkName;

    card.appendChild(cardContents);
    cardLink.appendChild(card);
    section.appendChild(cardLink);

}
