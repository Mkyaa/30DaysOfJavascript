// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// const classTitle= document.getElementsByClassName('title')
// console.log(classTitle)
// console.log(classTitle.length)

// for(const element of classTitle) {
//     console.log(element)
// }

// const firstTitle=document.getElementById('first-title')
// console.log(firstTitle)

// const firstTitle = document.querySelector('h1')
// const firstTitle2= document.querySelector('.title')
// const firstTitle3= document.querySelector('#first-title')

// console.log(firstTitle)
// console.log(firstTitle2)
// console.log(firstTitle3)

// const allTitles= document.querySelectorAll('h1')
// console.log(allTitles)

// for(const title of allTitles){
//     console.log(title)
// }
// console.log('//////////////')

// allTitles.forEach(title=> console.log(title))

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// console.log(titles)

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id','forth-title')
console.log(titles)


titles[3].classList.add('titles','header-title')
console.log(titles)
titles[3].classList.remove('titles','header-title')
console.log(titles)

titles[3].textContent='Forth Title'

titles.forEach((title,i)=>{
    title.style.fontSize ='24px'
    title.style.display = 'flex'
    title.style.justifyContent = 'center'
    title.style.alignItems='center'
    title.style.width='200px'
    title.style.height='125px'
    if(i%2===0){
        title.style.backgroundColor ='#2a5661'
        title.style.color ='#fff'
    }
    else{
        title.style.backgroundColor ='#cce7ed'
        title.style.color ='black'
    }
})