// Lire le contenu de la balise h1
const contentsOfH1tags = document.getElementsByTagName("h1");

// Afficher le contenu des balises H1
console.log(contentsOfH1tags);

// contenu de la première balise h1
const firstH1 = contentsOfH1tags[0];
console.log(firstH1.innerHTML);

// Libelle du boutton
const button = document.getElementById("calculer");
console.log(button);
const buttonLabel = button.innerText;
console.log(buttonLabel);
