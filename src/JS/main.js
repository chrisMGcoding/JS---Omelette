// création de l'objet "personne"

let personne = {
    prenom : "Chris",
    lieu : " ",
    argent : 50,
    maindroite : {
        contenu : [],
        priseEnMain (objet) {
            personne.maindroite.contenu.push(objet);
            console.log(`Vous utilisez votre main droite`);
        }
    }, 
    maingauche : {
        contenu : [],
        priseEnMain (objet) {
            personne.maingauche.contenu.push(objet);
            console.log(`Vous utilisez votre main gauche`);
        }
    },
    seDeplacer (lieu) {
        if (lieu == maison) {
        maison.personnes.push(personne);
        console.log(`${this.prenom} est arrivé à la ${lieu.nom}`);
        }
        else {
        epicerie.personnes.push(personne);
        console.log(`${this.prenom} est arrivé à l'${lieu.nom}`);
        }
    },
    payerArticle (article) {
        this.argent -= (parseInt(article.prix));
    },
    couper (ingredients, outil) {
        if (outil == "couteau") {
        return ingredients.etat = "coupé";
        } 
        else {
            console.log("ratez !");
        }
    }
}

// importation des classes

import {Lieux, Epicerie, Ingredients} from "./classe.js";

// création de l'objet "maison"

let maison = new Lieux("maison", []);

// création ingrédients

let oignon = new Ingredients("oignons", "entier", 1.5);
let oeufs = new Ingredients("oeufs", "entier", 1);
let epices = new Ingredients("épices", "moulues", 2);
let fromage = new Ingredients("fromage", "coupé", 2);

let liste = [oignon, oeufs, epices, fromage];

// création épicerie
let panier = [[],[],[]];
let epicerie = new Epicerie("épicerie",[], panier, liste);


// création outil

// création poêle

// création bol



// début omelette


// déplacement
personne.seDeplacer(maison);
personne.seDeplacer(epicerie);

// 
personne.maindroite.priseEnMain(epicerie.paniers);

// 
