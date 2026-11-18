"use strict"

const form = document.createElement("form");

const labelNom = document.createElement("label");
const inputNom = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const labelMessage = document.createElement("label");
const inputMessage = document.createElement("textarea");
const btnEnvoyer = document.createElement("button");
const prompt = document.createElement("input");

function creerChamps() {
    prompt.type = "text";
    prompt.name = "_gotcha";
    prompt.style.display = "none";
    prompt.tabIndex = -1;
    prompt.autocomplete = "off";

    //champs des noms
    labelNom.textContent = "Nom : ";
    inputNom.type = "text";
    inputNom.name = "nom";
    inputNom.placeholder ="Votre nom";
    inputNom.required = true;

    //champs des emails
    labelEmail.textContent = "Email : ";
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.placeholder="Votre email";
    inputEmail.required = true;

    //champs des messages
    labelMessage.textContent = "Message : ";
    inputMessage.name = "message";
    inputMessage.placeholder="Votre message";
    inputMessage.required = true;
    inputMessage.rows = "5";

    // On retourne tout dans un tableau
    return [
        prompt,labelNom, inputNom, document.createElement("br"),
        labelEmail, inputEmail, document.createElement("br"),
        labelMessage, inputMessage, document.createElement("br"),
    ];
}

function creerFormulaire() {
    form.method = "POST";
    form.action = "https://formspree.io/f/xnpddrna";

    // Bouton Envoyer
    btnEnvoyer.type = "submit";
    btnEnvoyer.textContent = "Envoyer";

    // connection des éléments dans le formulaire
    form.append(...creerChamps(),btnEnvoyer);

    validationForm();
    // Ajout du formulaire dans le html
    document.getElementById("formulaire").appendChild(form)
}


function validationForm() {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const reponse = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        });

        if (reponse.ok) {
            alert("Message envoyé, merci !");
            form.reset();
        } else {
            alert("Erreur lors de l'envoi, réessaie plus tard.");
        }
    });
}
creerFormulaire();

