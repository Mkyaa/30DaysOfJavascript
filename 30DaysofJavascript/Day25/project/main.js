const countryLength = document.querySelector('.country-length')
const countriesUrl ='https://restcountries.com/v2/all'
const contentDom= document.querySelector('.datalist')
const popBtnDOM = document.querySelector('#population')
const langBtnDOM = document.querySelector('#languages')
const sectionExpDom= document.querySelector('.section-exp')
const countries=[]

fetch(countriesUrl)
.then(response => response.json())
.then(data => {
  data.map(country=>{
      countries.push({
          name:country.name,
          population:country.population,
          language:country.languages,
          populationRate:(country.population/7759438109)*100
      })
  })
  countryLength.innerHTML = countries.length
  let totalPopulation = 0
  for(const country of countries){
    totalPopulation += country.population
    if(country.name==='United States of America'){
      country.name='USA'
    }
    else if(country.name==='Russian Federation'){
      country.name='Russia'
    }
  } 

  countries.push({
      name:'World',
      population:totalPopulation,
    })
  countries.sort((a,b)=>{
      return b.population - a.population
  })

  for(let i=0; i<11; i++){
     
    let country=countries[i]
    contentDom.innerHTML +=  `<div class="data">
    <span class="data-title">${country.name}</span>
    <div class="data-length-box">
    <div class="data-length"></div>
    </div>
    <span class="data-count">${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
    </div>`
    let dataLengthDom = document.querySelectorAll('.data-length')[i]
    dataLengthDom.style.width = `${country.populationRate}%`
  }
})


popBtnDOM.addEventListener('click',()=>{
  if(countries.length<251){
    countries.push({
      name:'World',
      population:7759438109,
    })
  }
  countries.sort((a,b)=>{
    return b.population - a.population
})
  contentDom.innerHTML = ''
    for(let i=0; i<11; i++){
      let country=countries[i]
      contentDom.innerHTML +=  `<div class="data">
      <span class="data-title">${country.name}</span>
      <div class="data-length-box">
      <div class="data-length"></div>
      </div>
      <span class="data-count">${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>`
      let dataLengthDom = document.querySelectorAll('.data-length')[i]
      dataLengthDom.style.width = `${country.populationRate}%`
    }
    sectionExpDom.textContent='10 Most populated countries in the world'
  }
)

     
langBtnDOM.addEventListener('click',()=>{
  contentDom.innerHTML = ''
  sectionExpDom.textContent='10 Most spoken languages in the world'
  if(countries.length>=251){
    countries.shift()
  }
  const filteredLang=countries.map(country=>country.language).map(lang=>lang.map(language=>language.name)).join().split(',')
  const setLang=new Set(filteredLang)
  const arr=[]
  for(const lang of setLang){
    const langCount=filteredLang.filter(item=>item===lang).length
    arr.push({
      language:lang, count:langCount, rate: (langCount/123)*100
    })
  }
  
  arr.push({
    language:'Total', count:123, rate:100
  })
  arr.sort((a,b)=> b.count - a.count)
  for(let i=0; i<11; i++){
    let lang=arr[i]
    contentDom.innerHTML +=  `<div class="data">
    <span class="data-title">${lang.language}</span>
    <div class="data-length-box">
    <div class="data-length"></div>
    </div>
    <span class="data-count">${lang.count}</span>
    </div>`
    let dataLengthDom = document.querySelectorAll('.data-length')[i]
    dataLengthDom.style.width = `${lang.rate}%`
  }
})
