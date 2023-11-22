/*

Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: brand, model e feeding (benzina, diesel, elettrica, ibrida, gpl).
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

let listOfCars = [
    {
        brand: "Ferrari",
        model: "Superfast",
        feeding: ["Benzina"],
        photo: "./img/ferrari.jpg"
    },
    {
        brand: "Audi",
        model: "A1",
        feeding: ["Diesel"],
        photo: "./img/audi.jpg"
    },
    {
        brand: "Bugatti",
        model: "Chiron",
        feeding: ["Benzina"],
        photo: "./img/bugatti.jpg"
    },
    {
        brand: "Bmw",
        model: "Coupe",
        feeding: ["Diesel"],
        photo: "./img/bmw.jpg"
    },
    {
        brand: "Lamborghini",
        model: "Huracan",
        feeding: ["Ibrida"],
        photo: "./img/lamborghini.png"
    },
    {
        brand: "Mercedes",
        model: "Gla",
        feeding: ["Ibrida"],
        photo: "./img/mercedes.jpg"
    },
    {
        brand: "Mclaren",
        model: "Spider",
        feeding: ["Gpl"],
        photo: "./img/mclaren.jpg"
    },
    {
        brand: "Porsche",
        model: "Panamera",
        feeding: ["Gpl"],
        photo: "./img/porsche.jpg"
    },
    {
        brand: "Tesla",
        model: "Cybertruck",
        feeding: ["Elettrica"],
        photo: "./img/tesla.jpg"
    },
    {
        brand: "Cadillac",
        model: "Eldorado",
        feeding: ["Benzina"],
        photo: "img/cadillacu.webp"
    }
]

console.log(listOfCars);

// 3 ARRAY 

let gasolineCars = [];
let dieselCars = [];
let otherCars = [];

// CICLO PER STAMPARE LE 3 ARRAY 

listOfCars.forEach(function (element) {
    if (element.feeding == "Benzina") {
        gasolineCars.push(element);
    } else if (element.feeding == "Diesel") {
        dieselCars.push(element);
    } else {
        otherCars.push(element);
    }


});

console.log(gasolineCars);
console.log(dieselCars);
console.log(otherCars);






for (let i = 0; i < gasolineCars.length; i++) {

    document.getElementById("cards").innerHTML += `
    
        <div class="card col-3 m-3">
            <img src="${gasolineCars[i].photo}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-text">${gasolineCars[i].brand}</h5>
                <p>${gasolineCars[i].model}</p>
                <p>${gasolineCars[i].feeding}</p>
            </div>
        </div>
    
    `
}



for (let i = 0; i < dieselCars.length; i++) {

    document.getElementById("cards1").innerHTML += `
        
        <div class="card col-3 m-3">
            <img src="${dieselCars[i].photo}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-text">${dieselCars[i].brand}</h5>
                <p>${dieselCars[i].model}</p>
                <p>${dieselCars[i].feeding}</p>
            </div>
        </div>
        
    `
}



for (let i = 0; i < otherCars.length; i++) {

    document.getElementById("cards2").innerHTML += `
        
        <div class="card col-3 m-3">
            <img src="${otherCars[i].photo}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-text">${otherCars[i].brand}</h5>
                <p>${otherCars[i].model}</p>
                <p>${otherCars[i].feeding}</p>
            </div>
        </div>
        
    `
}




function addCar(event) {
    event.preventDefault();

    console.log("AGGIUNGI UN AUTOMOBILE!");

    let newBrand = document.getElementById("brand").value;
    let newModel = document.getElementById("model").value;
    let newFeeding = document.getElementById("feeding").value;


    let newCars = {
        brand: newBrand,
        model: newModel,
        feeding: newFeeding,
        
    };

    listOfCars.push(addCar);

    
    let card = `
                        <div class="card col-3 m-3">
                            
                            <div class="card-body">
                                <h5 class="card-text">${newCars.brand}</h5>
                                <p>${newCars.model}</p>
                                <p>${newCars.feeding}</p>
                            </div>
                        </div>
    `;

    document.getElementById("cards1").innerHTML += card;

}





// ------------ FUNZIONI ---------------------

