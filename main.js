// CONSEGNA
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



 
const listaElement = document.querySelector("ul");
// CREO ARRAY CON OBJ DENTRO
let arrayOggetti = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" }
];
// RICHIAMO FUNZIONE CHE STAMPA SUL DOM
let lista = creaLista();

// CICLO CHE STAMPA SU CONSOLE
for (let i = 0; i < arrayOggetti.length; i++) {
    let elemento = arrayOggetti[i]
    console.log(arrayOggetti[i].nome, arrayOggetti[i].ruolo);
}
