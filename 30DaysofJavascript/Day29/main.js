const container = document.querySelector('.container')
const challengeDOM = document.createElement('div')
const nameDOM = document.createElement('div')

challengeDOM.classList.add('challenge')
nameDOM.classList.add('name')


container.appendChild(challengeDOM)
container.appendChild(nameDOM)


const topWord = ['3', '0', ' ', 'D', 'A', 'Y', 'S', ' ', 'O', 'F', ' ', 'J', 'A', 'V', 'A', 'C', 'R', 'I', 'P', 'T', ' ', '2', '0', '2', '2'],
    botWord = ['M', 'E', 'R', 'T', ' ', 'K', 'A', 'Y', 'A'],
    fonts = ["Arial", "Calibri", "Tahoma", "Papyrus", "Times New Roman", "Courier New",'Poppins','Open-sans'],
    fontWeight = ['300', '400', '500', '600', '700'],
    arr = topWord.join('').split(' '),
    arr2=botWord.join('').split(' ')

const hexCodeGenerator = () => {
    const hexCode = Math.floor(Math.random() * 16777215).toString(16)
    return hexCode
}

for (const word of arr) {
    const wordClass = document.createElement('div')
    wordClass.classList.add('word-class')
    word.split('').forEach(letter => {
        const letterDOM = document.createElement('p')
        letterDOM.classList.add('letter')
        letterDOM.innerHTML = letter
        wordClass.appendChild(letterDOM)
    })
    challengeDOM.appendChild(wordClass)
}
for (const word of arr2) {
    const wordClass = document.createElement('div')
    wordClass.classList.add('word-class')
    word.split('').forEach(letter => {
        const letterDOM = document.createElement('p')
        letterDOM.classList.add('letter')
        letterDOM.innerHTML = letter
        wordClass.appendChild(letterDOM)
    })
    nameDOM.appendChild(wordClass)
}


const letterDOM = document.querySelectorAll('.letter').forEach(letter => {
    setInterval(() => {
        letter.style.color = `#${hexCodeGenerator()}`
    }, 1000)
})

setInterval(() => {
    container.style.backgroundColor = `#${hexCodeGenerator()}`
},3000)
setInterval(() => {
    container.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)]
    container.style.fontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)]
},6000)