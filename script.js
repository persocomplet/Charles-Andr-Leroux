window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function Model() {
    model = this

    // toutes les variables ci-dessous sont les éléments HTML que nous voudrons accéder et modifier
    this.sectionsMain = null
    this.sectionsConteneurAvant = null
    this.sectionsConteneurArriere = null

    this.dynamiqueExterieur = null
    this.dynamiqueInterieurs = null

    this.imageExterieur = null
    this.imageInterieur = null

    // cette variable indique l'index de la section active dans la liste des sections
    this.sectionActive = 0
    // cette variable indique si le statut de la section vient de changer; cela permet au view de savoir quand il doit changer l'état des éléments
    this.sectionChangee = false

    // ces variables indiquent si les animations sont activés
    this.dynamiqueActif = false
    this.imageActif = false

    // ces variables indiquent si l'état des animations a changé; cela permet au view de savoir quand il doit changer l'état des éléments
    this.dynamiqueChangee = false
    this.imageChangee = false

    // fonction pour aller obtenir les objets HTML nécessaires
    this.initialize = function() {
        // TODO: utiliser document.getElementByClassName() pour obtenir les éléments
        model.dynamiqueExterieur = document.getElementsByClassName("animation dynamique exterieur")[0]
        model.dynamiqueInterieurs = document.getElementsByClassName("animation dynamique interieur")

        model.imageExterieur = document.getElementsByClassName("animation image conteneur exterieur")[0]
        model.imageInterieur = document.getElementsByClassName("animation image conteneur interieur")[0]
    }

    // fonction pour mettre à jour l'état de toutes les animations
    this.update = function() {
        // TODO: obtenir la position des éléments sur l'écran, et décider de l'état des animations selon leur position relative à la fenêtre. on veut déclancher l'animation quand l'élément dépasse le tiers inférieur de l'écran

        model.dynamiqueActif = model.dynamiqueExterieur.getBoundingClientRect().top < 2 / 3 * window.innerHeight
        model.imageActif = model.imageExterieur.getBoundingClientRect().top < 2 / 3 * window.innerHeight

    }
}