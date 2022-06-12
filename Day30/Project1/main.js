const container = document.querySelector('.container')
const content = document.querySelector('.content')
const countryContent = document.querySelector('.country-cont')
const input = document.querySelector('.search-input')
const sortName = document.querySelector('#sort-name')
const sortCapital = document.querySelector('#sort-capital')
const sortPopulation = document.querySelector('#sort-population')
const dataList = document.querySelector('.datalist')
const populationList = document.querySelector('#population')
const languagesList = document.querySelector('#languages')
const sectionExp = document.querySelector('.section-exp')
const goTopBtn = document.createElement('a')

const getCard = (array) => {
    countryContent.innerHTML += `
            <div class="card">
                <i class="country-flag" style="background-image:url('${array.flag}')"></i>
                <h3 class="country-name">${array.name.toUpperCase()}</h3>
                <p class="country-info">Capital : ${array.capital}</p>
                <p class="country-info">Population : ${array.population}</p>
                <p class="country-info">Languages : ${array.languages}</p>
            </div>  `
}


const countriesURL = 'https://restcountries.com/v3.1/all'
fetch(countriesURL)
    .then(response => response.json())
    .then(data => {
        const dataArr = []
        // data filtered to arr
        data.forEach(country => {
            if (country.capital === undefined) {
                dataArr.push({
                    name: country.name.common,
                    capital: 'No capital',
                    population: country.population,
                    flag: country.flags.png,
                    languages: country.languages
                })
            }
            else {
                dataArr.push({
                    name: country.name.common,
                    capital: country.capital.join(', '),
                    population: country.population,
                    flag: country.flags.png,
                    languages: country.languages
                })
            }
        })

        // dataArr edited
        dataArr.forEach(country => {
            if (country.languages === undefined) {
                country.languages = '-'
            }
            const countryLanguage = Object.values(country.languages)
            country.languages = [countryLanguage.join(', ')]
        })

        dataArr.sort((a, b) => a.name.localeCompare(b.name))

        //data listed
        const loadingPage = (arr) => {
            arr.forEach(country => {
                getCard(country)
            })
        }
        sortName.innerHTML = `NAME <i class="sort-des-img descending"></i>`

        loadingPage(dataArr)


        //sort all data
        const allSort = (arr) => {
            sortName.addEventListener('click', () => {
                if (sortName.innerHTML === `NAME <i class="sort-des-img descending"></i>`) {
                    arr.sort((a, b) => b.name.localeCompare(a.name))
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.innerHTML = `NAME <i class="sort-des-img ascending"></i>`
                    sortCapital.textContent = `CAPITAL`
                    sortPopulation.textContent = `POPULATION`
                }
                else if (sortName.innerHTML === `NAME <i class="sort-des-img ascending"></i>` || sortName.textContent === `NAME`) {
                    arr.sort((a, b) => a.name.localeCompare(b.name))
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.innerHTML = `NAME <i class="sort-des-img descending"></i>`
                    sortCapital.textContent = `CAPITAL`
                    sortPopulation.textContent = `POPULATION`
                }
            })
            sortCapital.addEventListener('click', () => {
                if (sortCapital.textContent === `CAPITAL` || sortCapital.innerHTML === `CAPITAL <i class="sort-des-img ascending"></i>`) {
                    arr.sort((a, b) => a.capital.localeCompare(b.capital))
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.textContent = `NAME`
                    sortCapital.innerHTML = `CAPITAL <i class="sort-des-img descending"></i>`
                    sortPopulation.textContent = `POPULATION`
                }
                else if (sortCapital.innerHTML === `CAPITAL <i class="sort-des-img descending"></i>`) {
                    arr.sort((a, b) => b.capital.localeCompare(a.capital))
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.textContent = `NAME`
                    sortCapital.innerHTML = `CAPITAL <i class="sort-des-img ascending"></i>`
                    sortPopulation.textContent = `POPULATION`
                }
            })
            sortPopulation.addEventListener('click', () => {
                if (sortPopulation.textContent === `POPULATION` || sortPopulation.innerHTML === `POPULATION <i class="sort-des-img ascending"></i>`) {
                    arr.sort((a, b) => a.population - b.population)
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.textContent = `NAME`
                    sortCapital.textContent = `CAPITAL`
                    sortPopulation.innerHTML = `POPULATION <i class="sort-des-img descending"></i>`
                }
                else if (sortPopulation.innerHTML === `POPULATION <i class="sort-des-img descending"></i>`) {
                    arr.sort((a, b) => b.population - a.population)
                    countryContent.innerHTML = ''
                    loadingPage(arr)
                    sortName.textContent = `NAME`
                    sortCapital.textContent = `CAPITAL`
                    sortPopulation.innerHTML = `POPULATION <i class="sort-des-img ascending"></i>`
                }
            })
        }
        allSort(dataArr)

        //search
        input.addEventListener('input', () => {
            const inputValue = input.value.toLowerCase()
            const filteredData = dataArr.filter(country => country.name.toLowerCase().includes(inputValue))
            countryContent.innerHTML = ''
            loadingPage(filteredData)
            allSort(filteredData)

        })


        // input.addEventListener('keyup', (e) => {
        //     const inputValue = e.target.value.toLowerCase()
        //     const filteredData = dataArr.filter(country => country.name.toLowerCase().includes(inputValue))
        //     countryContent.innerHTML = ''
        //     filteredData.forEach(country => {
        //         getCard(country)
        //     })
        //     if (filteredData.length === 0) {
        //         countryContent.innerHTML = `<h3 class="no-result">No result</h3>`
        //     }
        // })


        //dataarr copies to sortedPopArr for graph
        const sortedPopArr = [...dataArr],
            totalPop = sortedPopArr.reduce((acc, curr) => acc + curr.population, 0)
        sortedPopArr.push({
            name: 'Total',
            capital: '',
            population: totalPop,
            flag: '',
            languages: ''
        })

        //sort population graph in loading page
        sortedPopArr.sort((a, b) => b.population - a.population)
        const getPop = (arr) => {
            for (i = 0; i < 10; i++) {
                dataList.innerHTML += `<div class="data">
                <span class="data-title">${arr[i].name}</span>
                <div class="data-length-box">
                <div class="data-length"></div>
                <span class="data-percent">${(arr[i].population / totalPop * 100).toFixed(2)}%</span>
                
                </div>
                <span class="data-count">${arr[i].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>`
                const dataLength = document.querySelectorAll('.data-length')[i]
                dataLength.style.width = `${arr[i].population / totalPop * 100}%`
            }
        }
        getPop(sortedPopArr)

        dataList.appendChild(goTopBtn)
        goTopBtn.classList.add('go-top-btn')
        goTopBtn.setAttribute('href', '#top')


        // change graph when click on buttons
        populationList.addEventListener('click', () => {
            sectionExp.textContent = '10 Most populated countries in the world'
            dataList.innerHTML = ''
            getPop(sortedPopArr)
            dataList.appendChild(goTopBtn)
            goTopBtn.classList.add('go-top-btn')
            goTopBtn.setAttribute('href', '#top')
        })
        languagesList.addEventListener('click', () => {
            sectionExp.textContent = '10 Most spoken in the world'
            const arr = []
            dataList.innerHTML = ''
            const filteredLang = dataArr.map(country => country.languages).join(', ').split(', ')
            const langArr = filteredLang.filter((item, index) => filteredLang.indexOf(item) === index)
            for (const lang of langArr) {
                const langCount = filteredLang.filter(country => country === lang).length
                arr.push({
                    name: lang,
                    count: langCount
                })

            }
            arr.sort((a, b) => b.count - a.count)
            for (i = 0; i < 10; i++) {
                dataList.innerHTML += `<div class="data">
                <span class="data-title">${arr[i].name}</span>
                <div class="data-length-box">
                <div class="data-length"></div>
                <span class="data-percent">${(arr[i].count / 250 * 100).toFixed(2)}%</span>
                
                </div>
                <span class="data-count">${arr[i].count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>`
                const dataLength = document.querySelectorAll('.data-length')[i]
                dataLength.style.width = `${arr[i].count / 91 * 100}%`
            }
            dataList.appendChild(goTopBtn)
            goTopBtn.classList.add('go-top-btn')
            goTopBtn.setAttribute('href', '#top')
        })

    })
    .catch(err => console.log(err))
