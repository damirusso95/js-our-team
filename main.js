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
let arrayOggetti = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" }
];
// console.log(arrayOggetti);



for (let i = 0; i < arrayOggetti.length; i++) {
    let elemento = arrayOggetti[i]
// stampoMembro();
    //  document.getElementById("lista").innerHTML = (arrayOggetti[0].nome + arrayOggetti[0].ruolo);
     

    

    


    // console.log(elemento);   

    // for (let chiave in elemento) { 

    // console.log(elemento.nome, elemento.ruolo);   
    // console.log(elemento[chiave]);   
    // }
    console.log(arrayOggetti[i].nome, arrayOggetti[i].ruolo);
}
document.getElementById("lista0").innerHTML = (arrayOggetti[0].nome + arrayOggetti[0].ruolo);
document.getElementById("lista1").innerHTML = (arrayOggetti[1].nome + arrayOggetti[1].ruolo);
document.getElementById("lista2").innerHTML = (arrayOggetti[2].nome + arrayOggetti[2].ruolo);
document.getElementById("lista3").innerHTML = (arrayOggetti[3].nome + arrayOggetti[3].ruolo);
document.getElementById("lista4").innerHTML = (arrayOggetti[4].nome + arrayOggetti[4].ruolo);
document.getElementById("lista5").innerHTML = (arrayOggetti[5].nome + arrayOggetti[5].ruolo);







 


