

const noms = ["alexis", "eloise", "gautier", "julien", "mehdi", "nadège", "pierre", "riad", "sibel", "thomas", "ugo", "willy", "zakaria"];

const allCards = document.getElementsByClassName('card')
const nameImage = document.querySelectorAll('.name-image') 


for (let i = 0; i < allCards.length; i++) {
    const funModeElement = document.createElement('div') // Création de l'élément funMode
    funModeElement.className = 'fun-mode'
    indexNom = noms.indexOf(allCards[i].id)

    funModeElement.style.background = `url('assets/images/photos_fun/${noms[indexNom] + ' fun'}.jpg')` 
    funModeElement.style.backgroundSize = `cover` 

    nameImage[i].appendChild(funModeElement)
}
