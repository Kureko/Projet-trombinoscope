

const noms = ["alexis", "eloise", "gautier", "julien", "mehdi", "nadège", "pierre", "riad", "sibel", "thomas", "ugo", "willy", "zakaria"];

const allCards = document.getElementsByClassName('card')
const nameImage = document.querySelectorAll('.name-image')

const profileName = document.querySelector('#profile-name')
const profileImage = document.querySelector('#profile-image')
const listItem = document.querySelectorAll('.item')
const profileContainer = document.querySelector('#profile-watching')

profileContainer.addEventListener('click', () => {
    profileContainer.style.display = "none"
})

for (let i = 0; i < allCards.length; i++) {
    const funModeElement = document.createElement('div') // Création de l'élément funMode
    funModeElement.className = 'fun-mode'
    indexNom = noms.indexOf(allCards[i].id)

    funModeElement.style.background = `url('assets/images/photos_fun/${noms[indexNom] + ' fun'}.jpg')` 
    funModeElement.style.backgroundSize = `cover` 

    nameImage[i].appendChild(funModeElement)
}

for (let a = 0; a < allCards.length; a++) {
    const CARD = document.querySelectorAll('.card')[a].id.toString()

    allCards[a].addEventListener('click', () => {

        profileContainer.style.display = "flex"
        profileName.innerHTML = document.querySelectorAll('.name')[a].innerHTML

        for (let i = 0; i < 3; i++) {
            console.log(experience[CARD][i])
            if (experience[CARD][i] !== undefined) {
                listItem[i].innerHTML = "- " + experience[CARD][i]
            }
        }
        for (let i = 0; i < 3; i++) {
            if (formations[CARD][i] !== undefined) {
                listItem[i+3].innerHTML = "- " + formations[CARD][i]
            }
        }

        profileImage.style.background = `url('${photos[CARD]}')`
        profileImage.style.backgroundSize = 'cover'
        profileImage.style.backgroundPosition = 'center'
    })
}

const formations = {
    julien: ["BTS, Informatique et Réseau pour les industries et les Services", "Développeur Web PHP/Symfony - WildCodeSchool"],
    alexis: ["Pas d'information"],
    eloise: ["Pas d'information"],
    gautier: ["Pas d'information"],
    mehdi: ["Pas d'information"],
    nadège: ["Pas d'information"],
    pierre: ["Pas d'information"],
    riad: ["Pas d'information"],
    sibel: ["Pas d'information"],
    thomas: ["Pas d'information"],
    ugo: ["Pas d'information"],
    willy: ["Pas d'information"],
    zakaria: ["Pas d'information"],
}

const experience = {
    julien: ["Opérateur Numérique", "Projet I/O"],
    alexis: ["Licence Mathématiques Informatique"],
    eloise: ["Commercial"],
    gautier: ["Licence Réseau Télécom (spécialité dev mobile)"],
    mehdi: ["Ingénieur PAO"],
    nadège: ["Responsable Qualité"],
    pierre: ["Commercial Immobilier"],
    riad: ["Commercial Automobile"],
    sibel: ["BTS SIO"],
    thomas: ["Bac Professionnel Gestion Administration"],
    ugo: ["Intégrateur Web"],
    willy: ["BTS Véhicule Industriel"],
    zakaria: ["Faculté Psychologie Tours"],
}

const photos = {
    julien: "assets/images/Julien pro.jpg",
    alexis: "assets/images/Alexis pro.jpg",
    eloise: "assets/images/Elo pro.jpg",
    gautier: "assets/images/Gautier pro.jpg",
    mehdi: "assets/images/Mehdi pro.jpg",
    nadège: "assets/images/Nadège pro.jpg",
    pierre: "assets/images/Pierre pro.jpg",
    riad: "assets/images/Riad pro.jpg",
    sibel: "assets/images/Sibel pro.jpg",
    thomas: "assets/images/Thomas pro.jpg",
    ugo: "assets/images/Ugo pro.jpg",
    willy: "assets/images/Willy pro.jpg",
    zakaria: "assets/images/Zak pro.jpg",
}


