/*

Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, ibrida, gpl).
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
BONUS:
Stampare queste 3 liste nell'index HTML (scegliete voi il layout più appropriato rispulciando la documentazione di Bootstrap oppure facendo 3 sezioni separate)
Studiatevi il live-coding fatto in classe ed eventuali dubbi o miglioramenti o idee discutetene con Emanuele.
Fatevi un piccolo form per aggiungere una nuova auto e aggiungetela alla lista/sezione corrispondente. (Visionate il live coding di questa mattina e provare se volete a vedere il comportamente dell'istruzione debug;)

*/


// Questo è il file che contiene tutto il codice JS della pagina web

// ARRAY DA 10 AUTOMOBILI

let listaAutomobili = [
    {
        marca: "Ferrari",
        modello: "Superfast",
        alimentazione: ["Benzina"]
    },
    {
        marca: "Audi",
        modello: "A1",
        alimentazione: ["Diesel"]
    },
    {
        marca: "Bugatti",
        modello: "Chiron",
        alimentazione: ["Benzina"]
    },
    {
        marca: "Bmw",
        modello: "Coupe",
        alimentazione: ["Diesel"]
    },
    {
        marca: "Lamborghini",
        modello: "Huracan",
        alimentazione: ["Ibrida"]
    },
    {
        marca: "Mercedes",
        modello: "Gla",
        alimentazione: ["Ibrida"]
    },
    {
        marca: "Mclaren",
        modello: "Spider",
        alimentazione: ["Gpl"]
    },
    {
        marca: "Porsche",
        modello: "Panamera",
        alimentazione: ["Gpl"]
    },
    {
        marca: "Tesla",
        modello: "Cybertruck",
        alimentazione: ["Elettrica"]
    },
    {
        marca: "Cadillac",
        modello: "Eldorado",
        alimentazione: ["Benzina"]
    },
]

printObject(listaAutomobili);

// 3 ARRAY 

let automobiliBenzina = [];
let automobiliDiesel = [];
let altreAuto = [];

// CICLO PER STAMPARE LE 3 ARRAY 

listaAutomobili.forEach(function(element) {
    if (element.alimentazione == "Benzina") {
        automobiliBenzina.push(element);
    } else if (element.alimentazione == "Diesel") {
        automobiliDiesel.push(element);
    } else {
        altreAuto.push(element);
    }


});

console.log(automobiliBenzina);
console.log(automobiliDiesel);
console.log(altreAuto);


for (let i = 0; i < listaAutomobili.length; i++) {
    console.log("Marca:", listaAutomobili[i].marca);
    console.log("Modello:", listaAutomobili[i].modello);
    console.log("Alimentazione:", listaAutomobili[i].alimentazione);
    console.log("");

    
}

for (let i = 0; i < listaAutomobili.length; i++) {

    document.getElementById("cards").innerHTML += `
    
        <div class="card col-4 m-3">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-text">${listaAutomobili[i].marca}</h5>
                <p>${listaAutomobili[i].modello}</p>
                <p>${listaAutomobili[i].alimentazione}</p>
            </div>
        </div>
    
    `
    }

   



// ------------ FUNZIONI ---------------------

function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}