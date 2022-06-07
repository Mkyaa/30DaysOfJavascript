const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const submit = document.querySelector('#submit')
const contentDOM = document.querySelector('.content')
const form = document.querySelector('.add-item')

const clearLeaderList = () => {
    localStorage.setItem('leaderList', JSON.stringify([]))
    contentDOM.innerHTML = ''
    startingPage()
}

const addDate = () => {
    const date = new Date()
    const month = date.getMonth() + 1

    const monthArr=['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara']

    const dateString = monthArr[month]  + ' ' + date.getDate() + ',' +  date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    return dateString
}

const getLeaderList = (arr) => {
    arr.forEach((element,i) => {
        const cardDiv=document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML = `  <div class="name-time">
        <span class="name">${element.name}</span>
        <span class="time">${element.date}</span>
        </div>
        <span class="country">${element.country}</span>
        <span class="score">${element.score}</span>
        <div class="card-interactions">
        <span type="submit" id="delete${i}" class="edit-button delete-card"></span>
        <span id="add-five${i}" class="edit-button">+5</span>
        <span id="minus-five${i}" class="edit-button">-5</span>
        </div>`        
        contentDOM.appendChild(cardDiv)
        document.querySelector(`#delete${i}`).addEventListener('click', (e) => {
            e.preventDefault()
            const leaderList = JSON.parse(localStorage.getItem('leaderList'))
            leaderList.splice(i, 1)
            localStorage.setItem('leaderList', JSON.stringify(leaderList))
            contentDOM.innerHTML = ''
            getLeaderList(leaderList)
        })
        document.querySelector(`#add-five${i}`).addEventListener('click', (e) => {
            e.preventDefault()
            const leaderList = JSON.parse(localStorage.getItem('leaderList'))
            leaderList[i].score += 5
            leaderList.sort((a,b) => b.score - a.score)
            localStorage.setItem('leaderList', JSON.stringify(leaderList))
            contentDOM.innerHTML = ''
            getLeaderList(leaderList)
        })
        document.querySelector(`#minus-five${i}`).addEventListener('click', (e) => {
            e.preventDefault()
            const leaderList = JSON.parse(localStorage.getItem('leaderList'))
            leaderList[i].score -= 5
            leaderList.sort((a,b) => b.score - a.score)
            localStorage.setItem('leaderList', JSON.stringify(leaderList))
            contentDOM.innerHTML = ''
            getLeaderList(leaderList)
        })
    })
        
}

const startingPage = () => {
    const leaderList = JSON.parse(localStorage.getItem('leaderList'))
    if (!leaderList) {
        localStorage.setItem('leaderList', JSON.stringify([]))
    }
    else {
        getLeaderList(leaderList)
    }
}
startingPage()

const addLeader = (e) => {
    e.preventDefault()
    const leaderList = JSON.parse(localStorage.getItem('leaderList'))
    
    console.log(leaderList)
    if(!firstName.value || !lastName.value || !country.value || !score.value) {
        alert('Lütfen tüm alanları doldurunuz')
        return
    }
    const leader = {
        name: firstName.value.toUpperCase() + ' ' + lastName.value.toUpperCase(),
        country: country.value.toUpperCase(),
        score: +score.value,
        date: addDate()
    }
    leaderList.push(leader)
    leaderList.sort((a,b) => b.score - a.score)
    localStorage.setItem('leaderList', JSON.stringify(leaderList))
    contentDOM.innerHTML = ''
    getLeaderList(leaderList)
    firstName.value = ''
    lastName.value = ''
    country.value = ''
    score.value = ''
}


form.addEventListener('submit', addLeader)

