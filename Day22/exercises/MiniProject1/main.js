document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

// Container

const container = document.createElement('div')
container.className = "container"
container.style.width = '650px'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.flexDirection = 'column'
container.style.fontFamily = 'Poppins'
document.body.appendChild(container)


// H1

const h1 = document.createElement('h1')
h1.className = 'h1'
h1.textContent = 'Number Generator'
h1.style.fontSize = '26px'
h1.style.letterSpacing = '1px'
h1.style.height = '5px'


// H2

const h2 = document.createElement('h2')
h2.className = 'h2'
h2.textContent = '30DaysOfJavascript:DOM Day 2'
h2.style.fontSize = '18px'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = '400'
h2.style.height = '0'


//H3

const h3 = document.createElement('h3')
h3.className = 'h3'
h3.textContent = 'Author : Mert Kaya'
h3.style.fontSize = '14px'
h3.style.textDecoration = 'underline'
h3.style.fontWeight = '400'


// Ul - li

const ul = document.createElement('ul')
ul.style.display = 'flex'
ul.style.flexWrap = 'wrap'
ul.style.justifyContent = 'center'
ul.style.alignItems = 'center'
ul.style.width = '650px'
ul.style.padding='0'

let li

for (let i = 0; i < 102; i++) {
    li = document.createElement('li')
    li.textContent = i
    li.style.listStyle = 'none'
    li.style.width = '100px'
    li.style.height = '50px'
    li.style.display = 'flex'
    li.style.justifyContent = 'center'
    li.style.alignItems = 'center'
    li.style.margin='2.5px'
    li.style.fontSize='20px'
    li.style.fontWeight='bold'
    li.style.color='white'

    if (i % 2 === 0) {
        li.style.backgroundColor = '#9beb8f'
    }
    else {
        li.style.backgroundColor = '#d9d480'
    }
    if (i >= 2) {
        let control = 0
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                control++
            }
        }
        if (control == 0) {
            li.style.backgroundColor = '#db746b'
        }
    }
    ul.appendChild(li)
}


//green = '#9beb8f'
//yellow = '#d9d480'
//red = '#db746b'

// Container add appendChild

container.appendChild(h1)
container.appendChild(h2)
container.appendChild(h3)
container.appendChild(ul)