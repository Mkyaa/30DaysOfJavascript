document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.fontFamily = 'Poppins'

// definitions

const container = document.querySelector('#container')
const h1 = document.createElement('h1')
const h3 = document.createElement('h3')
const h5 = document.createElement('h5')
const inpAndButton = document.createElement('div')
const err = document.createElement('p')
const input = document.createElement('input')
const button = document.createElement('button')
const ul = document.createElement('ul')

// add specials

container.setAttribute('class', 'container')


//append
container.appendChild(h1)
container.appendChild(h3)
container.appendChild(h5)
container.appendChild(err)
inpAndButton.appendChild(input)
inpAndButton.appendChild(button)
container.appendChild(inpAndButton)
container.appendChild(ul)


//STYLES

//container style
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.flexDirection = 'column'
container.style.width = '900px'

// h1 style
h1.textContent = 'Number Generator'
h1.style.fontSize = '28px'
h1.style.letterSpacing = '2px'
h1.style.color = '#5bbc7a'
h1.style.display = 'flex'
h1.style.justifyContent = 'center'
h1.style.marginBottom = '0'

//h3 style
h3.textContent = '30DaysOfJavascript:DOM Day 3'
h3.style.display = 'flex'
h3.style.justifyContent = 'center'
h3.style.margin = '5px 0'
h3.style.fontSize = '16px'
h3.style.fontWeight = 'normal'

//h5 style
h5.textContent = 'Author : Mert Kaya'
h5.style.display = 'flex'
h5.style.justifyContent = 'center'
h5.style.margin = '5px 0'
h5.style.fontWeight = 'normal'


//inpAndButton style
inpAndButton.style.display = 'flex'
inpAndButton.style.justifyContent = 'center'


//input style
input.placeholder = 'Generate more numbers'
input.style.height = '40px'
input.style.width = '450px'
input.style.marginRight = '20px'
input.style.border = '1px solid #5bbc7a'
input.style.borderRadius = '20px'
input.style.fontSize = '14px'
input.style.paddingLeft = '15px'

//button style
button.textContent = 'Generate Numbers'
button.style.width = '150px'
button.style.backgroundColor = '#5bbc7a'
button.style.border = 'none'
button.style.color = '#fff'
button.style.letterSpacing = '0.5px'

//ul style
ul.style.listStyle = 'none'
ul.style.display = 'flex'
ul.style.flexWrap = 'wrap'
ul.style.justifyContent = 'center'
ul.style.alignItems = 'center'
ul.style.width = '900px'
ul.style.padding = '0'

// err style
err.style.color = '#f05a4f'
err.style.display = 'flex'
err.style.paddingLeft = '140px'
err.style.margin = '20px 0 5px 0'
err.style.fontSize = '12px'


let li
const liStyle = () => {
    li.style.listStyle = 'none'
    li.style.width = '80px'
    li.style.height = '40px'
    li.style.display = 'flex'
    li.style.justifyContent = 'center'
    li.style.alignItems = 'center'
    li.style.margin = '2.5px'
    li.style.fontSize = '20px'
    li.style.fontWeight = 'bold'
    li.style.color = 'white'
}

const generateNumber = nums => {
    for (let i = 0; i < nums + 1; i++) {
        li = document.createElement('li')
        li.textContent = i
        liStyle()
        if (i % 2 === 0) {
            li.style.backgroundColor = '#5bbc7a'
        }
        else {
            li.style.backgroundColor = '#f7dc5c'
        }
        if (i >= 2) {
            let control = 0
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    control++
                }
            }
            if (control == 0) {
                li.style.backgroundColor = '#f05a4f'
            }
        }
        ul.appendChild(li)
    }
}

generateNumber(51)


button.addEventListener('click', () => {
    let contolLetter = input.value.match(/[a-z\s]/gi)
    console.log(contolLetter)
    if (input.value === '' || input.value === null) {
        err.textContent = 'Enter number value on the input field to generate numbers'
    }
    else if (contolLetter !== null) {
        err.textContent = 'Input value must be a number'
    }
    else if (contolLetter === null) {
        err.textContent = ''
        ul.innerHTML = ''
        generateNumber(+(input.value))
    }
})


//green = '#5bbc7a'
//yellow = '#d9d480' & #dbc742 & #f7dc5c
//red = '#eb695b' & #f05a4f