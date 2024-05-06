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
