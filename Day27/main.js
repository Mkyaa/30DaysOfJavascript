const sliderTextDOM = document.querySelector('.slider-text')
const sliderImgDOM = document.querySelector('.slider-img')
const techSlide = document.querySelector('.tech-slide')

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const hexCodeGenerator = () => {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += Math.floor(Math.random() * 16).toString(16)
    }
    return hexCode
}

const sliderLoop = () => {
    wait(0)
        .then(() => {
            techSlide.innerHTML=''
            sliderTextDOM.innerHTML = ''
            sliderTextDOM.innerHTML = 'HTML'
            techSlide.innerHTML='React.js'
            techSlide.style.color = hexCodeGenerator()
            sliderImgDOM.style.backgroundImage = 'url(./images/html.ico)'
            return wait(2000)
        })
        .then(() => {
            techSlide.innerHTML=''
            sliderTextDOM.innerHTML = ''
            sliderTextDOM.innerHTML = 'CSS'
            techSlide.innerHTML='Node.js'
            techSlide.style.color = hexCodeGenerator()
            sliderImgDOM.style.backgroundImage = 'url(./images/css.ico)'
            return wait(2000)
        })
        .then(() => {
            techSlide.innerHTML=''
            sliderTextDOM.innerHTML = ''
            sliderTextDOM.innerHTML = 'JS'
            techSlide.innerHTML='Tailwind CSS'
            techSlide.style.color = hexCodeGenerator()
            sliderImgDOM.style.backgroundImage = 'url(./images/js.ico)'
            return wait(2000)
        })
}

sliderLoop()
setInterval(sliderLoop, 6000)


