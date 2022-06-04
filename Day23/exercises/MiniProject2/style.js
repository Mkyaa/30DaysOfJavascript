document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.minWidth = '100vh'
document.body.style.minHeight='95vh'
document.body.style.fontFamily = 'Roboto Condensed'

const keyNum= document.createElement('h1')
const container = document.querySelector('#container')
const h1 = document.createElement('h1')
const keyName = document.createElement('h1')

//append
container.appendChild(h1)
container.appendChild(keyNum)


//container style
container.style.display='flex'
container.style.flexDirection='column'
container.style.justifyContent='center'
container.style.alignItems='center'

//h1 style
h1.textContent = 'Press any keyboard key'
h1.style.fontSize ='54px'
h1.style.padding='15px 50px'
h1.style.boxShadow='5px 5px 5px 3px #ccc'
h1.style.letterSpacing='3px'
h1.style.display='flex'

//keyName style
keyName.style.fontSize='54px'
keyName.style.letterSpacing='3px'
keyName.style.color='#5bbc7a'
keyName.style.padding='0'
keyName.style.margin='0'
keyName.style.marginLeft='15px'
keyName.textContent=''

//keyNum style
keyNum.style.fontSize='120px'
keyNum.style.color='#5bbc7a'
keyNum.style.margin='0'

document.body.addEventListener('keydown', e=>{
    keyNum.textContent = e.keyCode
    h1.textContent ='You pressed'
    keyName.textContent=e.key
    if(e.key===' '){
        keyName.textContent='Space'
    }
    h1.appendChild(keyName)
})
