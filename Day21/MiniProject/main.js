const hexCodeGenerator = () => {
    const hexDigits = '0123456789abcdef'
    let hexCode = ''
    for (let i = 0; i < 6; i++) {
        hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
    }
    hexCode = `#${hexCode}`
    return hexCode
}
console.log(hexCodeGenerator())


const body = document.querySelector('body')
const header = document.querySelector('.header')
const wrapper = document.querySelector('.wrapper')
const title = document.querySelector('h1')
const titleYear = document.querySelector('p')
const smallTitle = document.querySelector('h2')
const ul = document.querySelector('ul')
const allText = document.querySelectorAll('li')
const timer = document.querySelector("#time")
console.log()


// Body Style

body.style.display = 'flex'
body.style.justifyContent = 'center'


// Wrapper Style

wrapper.style.width = '600px'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'


//Header Style

header.style.display = 'flex'
header.style.alignItems = 'flex-end'
header.style.height = '150px'


//Title Style

title.style.alignItems = 'flex-end'
title.style.display = 'flex'
title.style.fontFamily = 'Poppins'
title.style.fontSize = '22px'
title.style.letterSpacing = '2.4px'
titleYear.style.fontSize = '100px'
titleYear.style.marginBottom = '0'

setInterval(() => {
    titleYear.style.color = hexCodeGenerator()
}, 1000)


//Small Title Style

smallTitle.style.width = '275px'
smallTitle.style.fontSize = '16px'
smallTitle.style.textDecoration = 'underline'
smallTitle.style.letterSpacing = '1px'
smallTitle.style.fontFamily = 'Poppins'
smallTitle.style.fontWeight = '300'


// Timer Style

timer.style.padding = '5px 15px'
timer.style.borderRadius = '3px'
timer.style.fontSize = '14px'
timer.style.fontWeight = 'bold'

const tarihSaat = () => {
    const date = new Date().toLocaleString('tr-TR')
    timer.innerHTML = date
}
setInterval(tarihSaat, 1000);
setInterval(() => timer.style.backgroundColor = hexCodeGenerator(), 1000)


//Ul Style

ul.style.padding = '0'
// List Style

allText.forEach(li => {
    li.style.fontFamily = 'Poppins'
    li.style.fontSize = '14px'
    li.style.listStyle = 'none'
    li.style.width = '570px'
    li.style.padding = '15px'
    li.style.backgroundColor = '#db746b'
    li.style.margin = '5px 0'

    if (li.textContent.includes('Done')) {
        li.style.backgroundColor = '#9beb8f'
    }
    else if (li.textContent.includes('Ongoing')) {
        li.style.backgroundColor = '#d9d480'
    }
})