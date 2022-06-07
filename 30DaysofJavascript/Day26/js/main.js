import countries from "./countries.js"

const countryCardDOM = document.querySelector('.content')
const startingFilterDOM = document.querySelector('#startingFilter')
const searchWithDOM = document.querySelector('#searchWith')
const sortDOM = document.querySelector('#sort')
const inputDOM = document.querySelector('.search-input')
const searcCountDOM = document.querySelector('.search-count')
const filteredCount = document.querySelector('.filtered-count')


searcCountDOM.innerHTML += ` <b>${countries.length} </b>`

for (const country of countries) {
    countryCardDOM.innerHTML += `
 <div class="country-card">
 <span class="country-name">${country.toUpperCase()}</span>
 </div>
 `
}


startingFilterDOM.addEventListener('click', () => {
    startingFilterDOM.style.backgroundColor = '#581cb8'
    searchWithDOM.style.backgroundColor = '#7952cf'
    sortDOM.style.backgroundColor = '#7952cf'
    inputDOM.addEventListener('keyup', (e) => {
        const inputValue = e.target.value.toLowerCase()
        const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue))
        if (filteredCountries.length === 0) {
            filteredCount.innerHTML = `<b>No results found</b>`
        }
        else if (filteredCountries.length === 1) {
            filteredCount.innerHTML = `Country start with '${e.target.value.toUpperCase()}' is 1</b>`
        }
        else if (filteredCountries.length === 193) {
            filteredCount.innerHTML = ''
        }
        else {
            filteredCount.innerHTML = `Countries start with '${e.target.value.toUpperCase()}' are ${filteredCountries.length}</b>`
        }
        countryCardDOM.innerHTML = ''
        for (const country of filteredCountries) {
            countryCardDOM.innerHTML += `
         <div class="country-card">
         <span class="country-name">${country.toUpperCase()}</span>
         </div>
         `
        }
    })
})

searchWithDOM.addEventListener('click', () => {
    searchWithDOM.style.backgroundColor = '#581cb8'
    startingFilterDOM.style.backgroundColor = '#7952cf'
    sortDOM.style.backgroundColor = '#7952cf'
    inputDOM.addEventListener('keyup', (e) => {
        const inputValue = e.target.value.toLowerCase()
        const filteredCountries = countries.filter(country => country.toLowerCase().includes(inputValue))
        if (filteredCountries.length === 0) {
            filteredCount.innerHTML = `<b>No results found</b>`
        }
        else if (filteredCountries.length === 1) {
            filteredCount.innerHTML = `Countries containing '${e.target.value.toUpperCase()}' is 1</b>`
        }
        else if (filteredCountries.length === 193) {
            filteredCount.innerHTML = ''
        }
        else {
            filteredCount.innerHTML = `Countries containing '${e.target.value.toUpperCase()}' are ${filteredCountries.length}</b>`
        }
        countryCardDOM.innerHTML = ''
        for (const country of filteredCountries) {
            countryCardDOM.innerHTML += `
         <div class="country-card">
         <span class="country-name">${country.toUpperCase()}</span>
         </div>
         `
        }
    })
})

sortDOM.addEventListener('click', () => {
    if (sortDOM.textContent === 'A-Z') {
        sortDOM.style.backgroundColor = '#581cb8'
        startingFilterDOM.style.backgroundColor = '#7952cf'
        searchWithDOM.style.backgroundColor = '#7952cf'
        sortDOM.textContent = 'Z-A'
        countries.sort((a, b) => b.localeCompare(a))
        countryCardDOM.innerHTML = ''
        for (const country of countries) {
            countryCardDOM.innerHTML += `
        <div class="country-card">
        <span class="country-name">${country.toUpperCase()}</span>
        </div>
        `
        }
    }
    else if (sortDOM.textContent === 'Z-A') {
        sortDOM.style.backgroundColor = '#7952cf'
        startingFilterDOM.style.backgroundColor = '#7952cf'
        searchWithDOM.style.backgroundColor = '#7952cf'
        sortDOM.textContent = 'A-Z'
        countries.sort((a, b) => a.localeCompare(b))
        countryCardDOM.innerHTML = ''
        for (const country of countries) {
            countryCardDOM.innerHTML += `
            <div class="country-card">
            <span class="country-name">${country.toUpperCase()}</span>
            </div>
            `
        }
    }

})

