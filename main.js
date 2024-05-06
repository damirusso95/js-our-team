// CONSEGNA
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// :roccia: MILESTONE 1:
// Stampare su console, per ogni membro del team: il nome e il ruolo.

// :roccia: MILESTONE 2:
// Stampare in pagina, per ogni membro del team: nome, ruolo e immagine, come semplici stringhe.
// Svolgere questa milestone grazie a una funzione può semplificarvi il lavoro per i bonus.
//  La funzione riceve un oggetto e restituisce una stringa di HTML :occhiolino:

// MILESTONE 0:
const listaElement = document.querySelector("ul");
let arrayOggetti = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" }
];
let lista = creaLista();


// console.log(arrayOggetti);


// ciclo che stampa su console
for (let i = 0; i < arrayOggetti.length; i++) {
    let elemento = arrayOggetti[i]  
    console.log(arrayOggetti[i].nome, arrayOggetti[i].ruolo);
}



// funzione che richiama il crea lista su dom html
function creaLista() {
    // ciclo for itero gli elementi
for (let i = 0; i < arrayOggetti.length; i++) {
    const element = arrayOggetti[i];
    console.log(i, element);
    // stampo tanti "li" quanti sono gli elementi nella lista
    document.getElementById("ul").innerHTML += `<li>${(arrayOggetti[i].nome + arrayOggetti[i].ruolo)}</li>`;
}   
}








 


