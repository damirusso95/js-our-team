function stampoMembro() {
    for (let i = 0; i < arrayOggetti.length; i++) {
        if(i < arrayOggetti.length){
        document.getElementById("lista").innerHTML = arrayOggetti[i].nome + arrayOggetti[i].ruolo;
        }
    }
    
}