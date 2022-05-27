const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 1000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(result)
  }
    return console.log(result)
  }

doSomething(callback)

// const doSomething1 =()=> {
//   const callback1 = (err, result) => {
//     if (err) {
//       return console.log(result)
//     }
//       return console.log(result)
//     }
//     const skills = ['HTML', 'CSS', 'JS']
//     callback('It did not go well', skills)
// }
// doSomething1()



// const doPromise = new Promise((resolve, reject) =>{
//   setTimeout(() =>{
//     const skills = ['HTML', 'CSS', 'Javascript','React']
//     if(skills.length>0){
//       resolve(skills)
//     }
//     else{
//       reject('Hata')
//     }
//   },1500)
// })

// doPromise
// .then(result => console.log(result))
// .catch(err => console.log(err))

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'Javascript','React']
    if(skills.includes('Node')){
      resolve('Fullstack Developer')
    }
  else{
    reject('Something wrong has happened')
  }
  },1500)
})
doPromise
.then(result=> console.log(result))
.catch(err=> console.log(err))



// const countryUrl = 'https://restcountries.com/v2/all'

// const data = fetch(countryUrl)
// .then(data => data.json())
// .then(data => { let arr=[]
//   for(const country of data){
//     arr.push({
//       name: country.name,
//       capital: country.capital,
//       languages: country.languages,
//       population: country.population,
//       area: country.area
//     })
    
//   }
//   console.log(arr)
// }
// )

const catUrl ='https://api.thecatapi.com/v1/breeds'
// fetch(catUrl)
// .then(data => data.json())
// .then(result => console.log(result))

// EXERCISES


const countryUrl = 'https://restcountries.com/v2/all'

const data = fetch(countryUrl)
.then(data => data.json())
.then(data => { let arr=[]
  for(const country of data){
    arr.push({
      name: country.name,
      capital: country.capital,
      languages: country.languages,
      population: country.population,
      area: country.area
    })
    
  }
  console.log(arr)
}
)


const catObj=fetch(catUrl)
.then(data=> data.json())
.then(result=> result
// {
//   for(const cat of result){
//     let catNames=cat.name
//     // console.log(catNames)
    
//   }console.log(result)
// }
)
console.log(catObj)


// fetch(catUrl)
// .then(data => data.json())
// .then(result => {
//   const arr=[]
//   for(const cat of result){
//     arr.push({
//       name: cat.name,
//       averageWeight: cat.weight.metric
//     })
//   }
//   console.log(arr)
// })


fetch(countryUrl)
.then(data => data.json())
.then(result => {
  result.sort((a,b)=> b.population - a.population)
  console.log(result.slice(0,10))
})


const getTotalLanguages = new Promise((resolve, reject) => {
  fetch(countryUrl)
  .then(data => data.json())
  .then(result => {
    const arr=[],
    totalLang=[]
    for(const country of result){
      for(const lang of country.languages){
        arr.push(lang.name)
      }
    }
    const setLang=new Set(arr)
    for(const lang of setLang){
      const filteredLang=arr.filter(l => l===lang)
      totalLang.push({
        language:lang, count:filteredLang.length
      })
    }
    totalLang.sort((a,b)=> b.count - a.count)
    if(totalLang.length>0){
      resolve(totalLang)
    }
    else {
      reject('Something wrong has happened')
    }
})
})

getTotalLanguages
.then(result=> console.log(result))
.catch(err=> console.log(err))


fetch(countryUrl)
.then(data => data.json())
.then(result => {
   const arr=[]
  arr.push(result.map(element=>element.languages.map(language =>language.name) ))
  console.log(arr)
})


