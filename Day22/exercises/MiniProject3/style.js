const hexCodeGenerator = () => {
    const hexDigits = '0123456789abcdef'
    let hexCode = ''
    for (let i = 0; i < 6; i++) {
        hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
    }
    hexCode = `#${hexCode}`
    return hexCode
}


const body = document.querySelector('body')
const header = document.querySelector('.header')
const wrapper = document.querySelector('.wrapper')
const title = document.querySelector('h1')
const titleYear = document.querySelector('p')
const smallTitle = document.querySelector('h2')
const ul = document.querySelector('ul')
const allText = document.querySelectorAll('li')
const timer = document.querySelector("#time")
const nameTag = document.createElement('p')
const imgTag = document.createElement('div')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
const explain = document.createElement('p')
const topFooter = document.createElement('div')
const titlesFooter = document.createElement('div')
const titlesP = document.createElement('h3')
const skillsFooter = document.createElement('div')
const skillsP = document.createElement('h3')
const qualifFooter = document.createElement('div')
const qualifP = document.createElement('h3')
const keyWordContainer = document.createElement('div')
const keyWordsTitle = document.createElement('h3')
const keyWords = document.createElement('div')

imgTag.className = "imgTag"
nameTag.className = 'nameTag'

//append
wrapper.appendChild(nameTag)
wrapper.appendChild(imgTag)
wrapper.appendChild(explain)
wrapper.appendChild(topFooter)
wrapper.appendChild(keyWordContainer)
topFooter.appendChild(titlesFooter)
topFooter.appendChild(skillsFooter)
topFooter.appendChild(qualifFooter)
titlesFooter.appendChild(titlesP)
skillsFooter.appendChild(skillsP)
qualifFooter.appendChild(qualifP)
imgTag.appendChild(img1)
imgTag.appendChild(img2)
imgTag.appendChild(img3)
keyWordContainer.appendChild(keyWordsTitle)
keyWordContainer.appendChild(keyWords)

// Body Style

body.style.display = 'flex'
body.style.justifyContent = 'center'


// Wrapper Style

wrapper.style.width = '600px'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'
wrapper.style.fontFamily = 'Poppins'


//Header Style

header.style.display = 'flex'
header.style.alignItems = 'flex-end'
header.style.height = '150px'


//Title Style

title.style.alignItems = 'flex-end'
title.style.display = 'flex'
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


//nameTag Style

nameTag.textContent = 'Mert Kaya'
nameTag.style.fontSize = '22px'
nameTag.style.fontWeight = 'bold'
nameTag.style.margin = '0'


//imgTag Style 
imgTag.style.display = 'flex'


//img1 Style
img1.style.backgroundImage = 'url(images/linkedin-3-32.ico)'
img1.style.backgroundRepeat = 'no-repeat'
img1.style.backgroundSize = 'cover'
img1.style.width = '24px'
img1.style.height = '24px'
img1.style.border = 'none'
img1.style.borderRadius = '50%'

// img2 Style
img2.style.backgroundImage = 'url(images/twitter-32.ico)'
img2.style.backgroundRepeat = 'no-repeat'
img2.style.backgroundSize = 'cover'
img2.style.width = '24px'
img2.style.height = '24px'
img2.style.border = 'none'
img2.style.margin = '0 5px'
img2.style.borderRadius = '50%'

// img3 Style
img3.style.backgroundImage = 'url(images/github-11-32.ico)'
img3.style.backgroundRepeat = 'no-repeat'
img3.style.backgroundSize = 'cover'
img3.style.width = '24px'
img3.style.height = '24px'
img3.style.border = 'none'
img3.style.borderRadius = '50%'

//explain
explain.textContent = 'I am Frontend Developer and Econometrics. I am learning the Javascript. If you like to know about me checkout my Linkedln or Github Profile. Thank you so much joininh in my quest of changing everyone to developer'
explain.style.textAlign = 'center'
explain.style.fontSize = '14px'
explain.style.margin = '50px 0'

//topFooter style
topFooter.style.display = 'flex'

//titlesFooter style
titlesFooter.style.width = '200px'
titlesFooter.style.margin = '0 10px'

//titlesP style
titlesP.textContent = 'Titles'
titlesP.style.paddingLeft = '15px'

//skillsFooter Style
skillsFooter.style.width = '200px'
skillsFooter.style.margin = '0 10px'

//skillsP style
skillsP.textContent = 'Skills'
skillsP.style.paddingLeft = '15px'

//qualifFooter style
qualifFooter.style.width = '200px'
qualifFooter.style.margin = '0 10px'

//qualifP style
qualifP.textContent = 'Qualifications'
qualifP.style.paddingLeft = '15px'


for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.style.margin = '5px'
    li.style.padding = '0'
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.fontSize = '14px'
    const imgTitles = document.createElement('img')
    imgTitles.className = 'titlesImg'
    imgTitles.style.borderRadius = '5px'
    imgTitles.style.backgroundImage = 'url(images/js-24.ico)'
    imgTitles.style.width = '16px'
    imgTitles.style.height = '16px'
    const text = document.createElement('p')
    text.className = 'titlesText'
    text.style.margin = '0'
    text.style.width = '170px'
    text.style.marginLeft = '5px'
    li.appendChild(imgTitles)
    li.appendChild(text)
    titlesFooter.appendChild(li)
}

const allTitlesText = document.querySelectorAll('.titlesText')
allTitlesText[0].textContent = 'Educator'
allTitlesText[1].textContent = 'Programmer'
allTitlesText[2].textContent = 'Developer'
allTitlesText[3].textContent = 'Motivator'
allTitlesText[4].textContent = 'Content Creator'


for (let i = 0; i < 6; i++) {
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.style.margin = '5px'
    li.style.padding = '0'
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.fontSize = '14px'
    const imgSkills = document.createElement('img')
    imgSkills.className = 'titlesImg'
    imgSkills.style.borderRadius = '5px'
    imgSkills.style.backgroundImage = 'url(images/ok-24.ico)'
    imgSkills.style.backgroundSize = 'cover'
    imgSkills.style.width = '16px'
    imgSkills.style.height = '16px'
    const text = document.createElement('p')
    text.className = 'skillsText'
    text.style.margin = '0'
    text.style.width = '170px'
    text.style.marginLeft = '5px'
    li.appendChild(imgSkills)
    li.appendChild(text)
    skillsFooter.appendChild(li)
}

const allSkillsText = document.querySelectorAll('.skillsText')
allSkillsText[0].textContent = 'Web Development'
allSkillsText[1].textContent = 'Data Analysis'
allSkillsText[2].textContent = 'Data Visualization'
allSkillsText[3].textContent = 'Programming'
allSkillsText[4].textContent = 'Databases'
allSkillsText[5].textContent = 'Developing API'

for (let i = 0; i < 4; i++) {
    const li = document.createElement('li')
    li.style.listStyle = 'none'
    li.style.margin = '5px'
    li.style.padding = '0'
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.fontSize = '14px'
    const imgQualif = document.createElement('img')
    imgQualif.className = 'titlesImg'
    imgQualif.style.borderRadius = '5px'
    imgQualif.style.backgroundImage = 'url(images/administrator-24.ico)'
    imgQualif.style.backgroundSize = 'cover'
    imgQualif.style.width = '16px'
    imgQualif.style.height = '16px'
    const text = document.createElement('p')
    text.className = 'qualifText'
    text.style.margin = '0'
    text.style.width = '170px'
    text.style.marginLeft = '5px'
    li.appendChild(imgQualif)
    li.appendChild(text)
    qualifFooter.appendChild(li)
}

const allQualifText = document.querySelectorAll('.qualifText')
allQualifText[0].textContent = 'MSc.Computer Science Ongoing'
allQualifText[1].textContent = 'BSc. Information and Coummunication Engineer'
allQualifText[2].textContent = 'MSc. Food Technology'
allQualifText[3].textContent = 'BSc. Food Technology'


const keyWordsArr = ['HTML', 'HTML5', 'CSS', 'CSS3', 'JS', 'Javascript', 'ES6', 'Promise', 'async await', 'Database', 'React', 'React Hooks', 'Context API', 'React Rooter', 'Redux', 'Node', 'MongoDB', 'SQL', 'API', 'DOM', 'data science', 'MERN', 'Python', 'Flask', 'Statistics', 'Linear Algebra', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Visulization', 'D3.js']

//keywordContainer style
keyWordContainer.style.display = 'flex'
keyWordContainer.style.flexDirection = 'column'
keyWordContainer.style.width = '600px'
keyWordContainer.style.textAlign = 'left'
keyWordContainer.style.justifyContent = 'center'
keyWordContainer.style.alignItems = 'center'

// keyWordsTitle style
keyWordsTitle.textContent = 'Keywords'

//keyword style
keyWords.style.width = '600px'
keyWords.style.display = 'flex'
keyWords.style.flexWrap = 'wrap'
keyWords.style.justifyContent = 'space-between'


for (const key of keyWordsArr) {
    const p = document.createElement('p')
    p.textContent = `#${key}`
    p.style.padding = '7px'
    p.style.backgroundColor = hexCodeGenerator()
    p.style.margin = '5px 5px'
    p.style.borderRadius = '10px'
    p.style.fontSize = '12px'
    keyWords.appendChild(p)
}