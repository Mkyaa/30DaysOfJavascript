const content = document.querySelector('.content')
const openingContent = document.createElement('div')
const openingImage = document.createElement('div')
const planetInfo = document.createElement('div')
const infoFigures = document.createElement('figure')
const infoDiv = document.createElement('div')
const infoExp = document.createElement('h1')
const infoMass = document.createElement('div')
const input = document.querySelector('.input')
const select = document.querySelector('.planets')
const button = document.querySelector('.calculate')
const errorMes = document.querySelector('.error-message')
const massReq = document.createElement('div')
const massExp = document.createElement('h1')
const planetName = document.createElement('h1')

content.appendChild(openingImage)
openingImage.appendChild(openingContent)
massReq.appendChild(massExp)
planetInfo.appendChild(infoFigures)
planetInfo.appendChild(infoDiv)
infoDiv.appendChild(infoExp)
infoDiv.appendChild(infoMass)


//openingImage style
openingImage.style.background = 'rgba(255,255,255,0.1)'
openingImage.style.width = '100%'
openingImage.style.minHeight = '65vh'

//openingContent style
openingContent.style.backgroundImage = 'url(../images/earth.png)'
openingContent.style.backgroundSize = 'cover'
openingContent.style.width = '500px'
openingContent.style.height = '500px'

//planetInfo style
planetInfo.style.background = 'rgba(255,255,255,0.1)'
planetInfo.style.width = '100%'
planetInfo.style.minHeight = '65vh'
planetInfo.style.display = 'flex'
planetInfo.style.flexDirection = 'row'
planetInfo.style.justifyContent = 'space-around'
planetInfo.style.alignItems = 'center'

//infoFigures style
infoFigures.style.backgroundSize = 'cover'
infoFigures.style.width = '400px'
infoFigures.style.height = '400px'

//infoDiv style
infoDiv.style.display = 'flex'
infoDiv.style.flexDirection = 'column'
infoDiv.style.width = '500px'
infoDiv.style.background = 'rgba(255,255,255,0.1)'

//infoExp style
infoExp.textContent = 'The weight of the object'
infoExp.style.display = 'flex'
infoExp.style.flexDirection = 'row'
infoExp.style.fontSize = '20px'
infoExp.style.fontWeight = 'normal'
infoExp.style.background = 'transparent'
infoExp.style.color = '#fff'
infoExp.style.margin = '10px 0'

//infoMass style
infoMass.textContent = '10.0 N'
infoMass.style.fontSize = '28px'
infoMass.style.fontWeight = 'bold'
infoMass.style.color = '#fff'
infoMass.style.background = 'rgba(255,255,255,0.1)'
infoMass.style.width = '150px'
infoMass.style.height = '150px'
infoMass.style.borderRadius = '50%'
infoMass.style.marginBottom = '20px'

//massReq style
massReq.style.width = '100%'
massReq.style.height = '200px'
massReq.style.background = 'rgba(255,255,255,0.1)'

//massExp style
massExp.textContent = 'Mass is required'
massExp.style.color = '#fff'
massExp.style.fontSize = '20px'
massExp.style.fontWeight = '400'
massExp.style.letterSpacing = '1px'
massExp.style.padding = '20px 200px'
massExp.style.background = 'rgba(255,255,255,0.1)'

//planetName style
planetName.textContent = ''
planetName.style.fontWeight = 'bold'
planetName.style.fontSize = '20px'
planetName.style.background = 'transparent'
planetName.style.color = '#fff'
planetName.style.margin = '10px 0'
planetName.style.letterSpacing = '1.5px'
planetName.style.paddingLeft = '10px'

const getPlanet = () => {
    switch (select.value.toLowerCase()) {
        case 'mercury':
            openingContent.style.backgroundImage = 'url(../images/mercury.png)'
            break
        case 'venus':
            openingContent.style.backgroundImage = 'url(../images/venus.png)'
            break
        case 'earth':
            openingContent.style.backgroundImage = 'url(../images/earth.png)'
            break
        case 'moon':
            openingContent.style.backgroundImage = 'url(../images/moon.png)'
            break
        case 'mars':
            openingContent.style.backgroundImage = 'url(../images/mars.png)'
            break
        case 'jupiter':
            openingContent.style.backgroundImage = 'url(../images/jupiter.png)'
            break
        case 'saturn':
            openingContent.style.backgroundImage = 'url(../images/saturn.png)'
            break
        case 'uranus':
            openingContent.style.backgroundImage = 'url(../images/uranus.png)'
            break
        case 'neptune':
            openingContent.style.backgroundImage = 'url(../images/neptune.png)'
            break
        case 'pluto':
            openingContent.style.backgroundImage = 'url(../images/pluto.png)'
            break
    }
}


const mercuryGravity = 3.71,
    venusGravity = 8.87,
    earthGravity = 9.81,
    marsGravity = 3.77,
    jupiterGravity = 23.3,
    saturnGravity = 9.2,
    uranusGravity = 8.69,
    neptuneGravity = 11,
    plutoGravity = 0.06,
    moonGravity = 1.62


select.addEventListener('change', () => getPlanet(openingContent))

button.addEventListener('click', () => {
    const checkLetter = input.value.match(/[a-z\s]/gi)
    if (select.value === '---select planet---') {
        content.innerHTML = ''
        content.appendChild(massReq)
        massExp.textContent = 'Please select a planet'
    }
    else if (input.value === '' || input.value === null) {
        content.innerHTML = ''
        content.appendChild(massReq)
        massExp.textContent = 'Enter number value on the input field'
    }
    else if (checkLetter !== null) {
        content.innerHTML = ''
        content.appendChild(massReq)
        massExp.textContent = 'Input value must be a number'
    }
    else if (checkLetter === null) {
        content.innerHTML = ''
        content.appendChild(planetInfo)
        switch (select.value.toLowerCase()) {
            case 'mercury':
                infoFigures.style.backgroundImage = 'url(../images/mercury.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (mercuryGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'venus':
                infoFigures.style.backgroundImage = 'url(../images/venus.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (venusGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'earth':
                infoFigures.style.backgroundImage = 'url(../images/earth.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (earthGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'moon':
                infoFigures.style.backgroundImage = 'url(../images/moon.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (moonGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'mars':
                infoFigures.style.backgroundImage = 'url(../images/mars.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (marsGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'jupiter':
                infoFigures.style.backgroundImage = 'url(../images/jupiter.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (jupiterGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'saturn':
                infoFigures.style.backgroundImage = 'url(../images/saturn.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (saturnGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'uranus':
                infoFigures.style.backgroundImage = 'url(../images/uranus.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (uranusGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'neptune':
                infoFigures.style.backgroundImage = 'url(../images/neptune.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (neptuneGravity * (+input.value)).toFixed(2) + ' N'
                break
            case 'pluto':
                infoFigures.style.backgroundImage = 'url(../images/pluto.png)'
                infoExp.textContent = `The weight of the object on `
                planetName.textContent = select.value.toUpperCase()
                infoExp.appendChild(planetName)
                infoMass.innerHTML = (plutoGravity * (+input.value)).toFixed(2) + ' N'
                break
        }
    }
})