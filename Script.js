function creerFormulaire() {
    // Créer l'élément <form>
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "mailto:lotnkamlekeu@yahoo.com";
    form.enctype = "text/plain";

    // Champ : Nom
    const labelNom = document.createElement("label");
    labelNom.textContent = "Nom : ";
    const inputNom = document.createElement("input");
    inputNom.type = "text";
    inputNom.name = "nom";
    inputNom.placeholder ="Votre nom";
    inputNom.required;
    labelNom.appendChild(inputNom);

    // Champ : Email
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email : ";
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.placeholder="Votre email";
    inputEmail.required;
    labelEmail.appendChild(inputEmail);

    // Champ : Message
    const labelMessage = document.createElement("label");
    labelMessage.textContent = "Message : ";
    const inputMessage = document.createElement("textarea");
    inputMessage.type = "message";
    inputMessage.name = "message";
    inputMessage.placeholder="Votre message";
    inputMessage.required;
    inputMessage.rows = "5";
    labelMessage.appendChild(inputMessage);

    // Bouton Envoyer
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Envoyer";

    // Injecter les éléments dans le formulaire
    form.appendChild(labelNom);
    form.appendChild(document.createElement("br"));
    form.appendChild(labelEmail);
    form.appendChild(document.createElement("br"));
    form.appendChild(labelMessage);
    form.appendChild(document.createElement("br"));
    form.appendChild(btn);


    // Ajouter le formulaire à la page
    const container = document.getElementById("formulaire");
    container.appendChild(form);
}

creerFormulaire();

