class Lieux {
    constructor (nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Epicerie extends Lieux {
    constructor (nom, personnes, paniers, ingredients) {
        super (nom, personnes);
        this.paniers = paniers;
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

export {Lieux,Epicerie,Ingredients}