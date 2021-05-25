// création épicerie

let epicerie = new Lieux("epicerie",[], []);

epicerie.bacPanier = [
    {type:'panier1', contenu: []},
    {type:'panier2', contenu: []},
    {type:'panier3', contenu: []}
];

// création de l'objet "personne"

let personne = {
    prenom : "Chris",
    lieu : " ",
    argent : 50,
    maindroite : [], 
    maingauche : [],
    prendrePanier (endroit) {
        if (endroit.nom == "epicerie") {
            personne.maindroite.push(endroit.bacPanier.shift());
            console.log(`${this.prenom} a pris ${this.maindroite[0].type}`);
        }
    },
    rendrePanier (endroit) {
        if (endroit.nom == "epicerie") {
            epicerie.bacPanier.push(personne.maindroite.shift());
            console.log(`${this.prenom} a rendu son panier à l'épicerie`);
        }
    },
    seDeplacer (depart, arrivee) {
        arrivee.personnes.push(personne);
        depart.personnes.splice(depart.personnes.indexOf(personne), 1);
        personne.lieu = arrivee;
        console.log(`${personne.prenom} est bien arrivé à ${personne.lieu.nom}`);
    },
    payerArticle () {
        this.argent -= epicerie.ingredients[i].prix;
    },
    couper () {
    let j = -1;
    for (; j < bol.contenu.length; ) {
        j++;
        if (bol.contenu[j].etat == "entier") {
            bol.contenu[j].etat == "coupé";
            console.log(`Chris a coupé ${bol.contenu[j].nom} en petit morceaux !`);
        } else {
            console.log(`pas besoin de couper ${bol.contenu[j].nom} !`);
        }
    }

    }
}

// importation des classes

import {Lieux, Ingredients} from "./classe.js";

// création de l'objet "maison"

let maison = new Lieux("maison", []);

// création ingrédients

let oignon = new Ingredients("oignons", "entier", 1.5);
let oeufs = new Ingredients("oeufs", "entier", 2);
let epices = new Ingredients("épices", "moulues", 2);
let fromage = new Ingredients("fromage", "coupé", 2);



epicerie.ingredients.push(oignon, oeufs, epices, fromage);

// création outil

// création poêle

// création bol

let bol = {
    contenu : [],
    // melanger() {
    //     for (let j = 0; i < this.contenu.length; j++) {
    //         if (this.contenu[j].etat == "coupé" || this.contenu[j].etat == "moulu") {
    //             let newMelange = {
    //                 nom: "Omelette",
    //                 etat: "non cuite"
    //             }
    //         } else {
    //         }
    //         console.log(`J'ai maintenant dans mon bol une ${newMelange.nom} mais elle est ${newMelange.etat}`);
    //         this.contenu = newMelange;
    //     }
    // },
}

// début omelette


// déplacement
let nullePart = new Lieux('Nulle Part',[]);
nullePart.personnes.push(personne);
personne.lieu = nullePart;

personne.seDeplacer(nullePart, maison);

personne.seDeplacer(maison, epicerie);



// perso prend le panier et achète

personne.prendrePanier(epicerie);


let i = -1;
for (; i < epicerie.ingredients.length-1 ;) {
    i++;
    personne.maindroite.push(epicerie.ingredients[i]);
    personne.payerArticle();
    console.log(`Chris a mis ${epicerie.ingredients[i].nom} dans ${personne.maindroite[0].type}`);
    console.log(`il reste ${personne.argent - epicerie.ingredients[i].prix} à Chris`)
}

// on rentre à la maison

personne.seDeplacer(epicerie, maison);


// on place les ingrédients dans le bol

let n = 0;
for (; n < personne.maindroite.length-1;) {
    n++;
    bol.contenu.push(personne.maindroite[n]);
    console.log(`Chris ajoute ${personne.maindroite[n].nom} dans le bol`);
}


// on va à l'épicerie déposer son panier et on retourne à la maison

personne.seDeplacer(maison, epicerie);

personne.rendrePanier(epicerie);

personne.seDeplacer(epicerie, maison);


console.log(bol.contenu[0].etat)
console.log(bol.contenu.length);

// on coupe les éléments entier

console.log(bol.contenu)

let j = -1;
for (; j < bol.contenu.length; ) {
    j++;
    if (bol.contenu[j].etat == "entier") {
        bol.contenu[j].etat == "coupé";
        console.log(`Chris a coupé ${bol.contenu[j].nom} en petit morceaux !`);
    } else {
        console.log(`pas besoin de couper ${bol.contenu[j].nom} !`);
    }
}

