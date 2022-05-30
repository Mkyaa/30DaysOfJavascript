// const firstText= document.querySelector('p')
// console.log(firstText)
// const firstText2= document.querySelector('#first-text')
// const secondText= document.querySelector('#second-text')
// const thirdText= document.querySelector('#third-text')
// const fourthText= document.querySelector('#forth-text')
// console.log(firstText2)
// console.log(secondText)
// console.log(thirdText)
// console.log(fourthText)

// const allText = document.querySelectorAll('p')
// console.log(allText)

// allText.forEach(text => console.log(text.textContent))
// fourthText.textContent='Forth Paragraph'
// console.log(fourthText.textContent)

// firstText2.setAttribute('class', 'first')
// secondText.setAttribute('class', 'second')
// thirdText.setAttribute('class', 'third')
// fourthText.setAttribute('class', 'forth')
// firstText2.setAttribute('title','title1')
// firstText2.classList.add('f-text')
// allText.forEach(text=> console.log(text))


const allText = document.querySelectorAll('p')
allText[0].setAttribute('class', 'first-text')
allText[0].setAttribute('id', 'first')
allText[1].setAttribute('class', 'second-text')
allText[1].setAttribute('id', 'second')
allText[2].setAttribute('class', 'third-text')
allText[2].setAttribute('id', 'third')
allText[3].setAttribute('class', 'fourth-text')
allText[3].setAttribute('id', 'fourth')

console.log(allText)

const firstText = document.querySelector('#first')
const secondText = document.querySelector('#second')
const thirdText = document.querySelector('#third')
const fourthText = document.querySelector('#fourth')
console.log(firstText, secondText, thirdText, fourthText)


allText.forEach((text,i)=>{
    text.style.fontFamily ='Times New Roman'
    text.style.fontSize ='17px'
    text.style.width = '400px'
    text.style.height = '50px'
    text.style.border = '1px solid #ccc'
    text.style.display = 'flex'
    text.style.justifyContent = 'center'
    text.style.alignItems='center'
    if(i%2===0){
        text.style.backgroundColor ='red'
    }
    else{
        text.style.backgroundColor ='green'
    }
})