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
            console.log(`${this.prenom} a rendu son panier`);
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
    couper (ingredients, outil) {
        
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

let bol = [];

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