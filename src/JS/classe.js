class Lieux {
    constructor (nom, personnes, ingredients) {
        this.nom = nom;
        this.personnes = personnes;
        this.ingredients = ingredients;
    }
}

class Ingredients {
    constructor (nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export {Lieux,Ingredients}