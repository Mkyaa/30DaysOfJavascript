const formsInfo = document.querySelectorAll('.icon-info')
const inputContainer = document.querySelectorAll('.input-container')
const submitBtn = document.querySelector('#submit-btn')

const users=[]

formsInfo.forEach(forms => {
    forms.addEventListener('mouseover', () => {
        if (forms.parentNode.childNodes[1].id === 'firstname') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'First name must be alphanumeric and contain 3-16 characters'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'lastname') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'Last name must be alphanumeric and contain 3-16 characters'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'email') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'Email must be a valid email address, e.g. example@example.com'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'password') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'Password must be alphenumeric (@._ and - are also allowed) and contain 6-20 characters'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'confirm-password') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'Check your password again'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'phone') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'A valid phone number (11 digits and 333-333-3334)'
            forms.parentNode.appendChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'bio-area') {
            const infoContent = document.createElement('span')
            infoContent.classList.add('info-panel')
            infoContent.textContent = 'Bio must contain lowercase letters, underscores, hyphens and be 8-50 characters'
            forms.parentNode.appendChild(infoContent)
        }
    })
})
formsInfo.forEach(forms => {
    forms.addEventListener('mouseout', () => {
        if (forms.parentNode.childNodes[1].id === 'firstname') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'lastname') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'email') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'password') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'confirm-password') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'phone') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
        if (forms.parentNode.childNodes[1].id === 'bio-area') {
            const infoContent = document.querySelector('.info-panel')
            forms.parentNode.removeChild(infoContent)
        }
    })


})

inputContainer.forEach(input => {
    input.addEventListener('keyup', () => {
        const inputValue = input.childNodes[1].value
        const firstNameMatch = inputValue.match(/^[a-zA-Z]{3,16}$/)
        const lastNameMatch = inputValue.match(/^[a-zA-Z]{3,16}$/)
        const emailMatch = inputValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        const passwordMatch = inputValue.match(/^[a-zA-Z0-9@._-]{6,20}$/)
        const phoneMatch = inputValue.match(/^[0-9]{11}$/)
        const bioMatch = inputValue.match(/^[a-z\s.]{8,50}$/)

        if (input.childNodes[1].id === 'firstname') {
            if(firstNameMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'lastname') {
            if(lastNameMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'email') {
            if(emailMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'password') {
            if(passwordMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'confirm-password') {
            if(passwordMatch && inputValue === document.querySelector('#password').value){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'phone') {
            if(phoneMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
        if (input.childNodes[1].id === 'bio-area') {
            if(bioMatch){
                input.childNodes[1].style.borderColor = 'green'
            }
            else{
                input.childNodes[1].style.borderColor = 'red'
            }
        }
    })
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const firstName = document.querySelector('#firstname').value
    const lastName = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirm-password').value
    const phone = document.querySelector('#phone').value
    const bio = document.querySelector('#bio-area').value

    if (firstName.match(/^[a-zA-Z]{3,16}$/) && lastName.match(/^[a-zA-Z]{3,16}$/) && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password.match(/^[a-zA-Z0-9@._-]{6,20}$/) && confirmPassword.match(/^[a-zA-Z0-9@._-]{6,20}$/) && phone.match(/^[0-9]{11}$/) && bio.match(/^[a-z\s.]{8,50}$/)) {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone,
            bio: bio
        }
        users.push(user)
        const userJSON = JSON.stringify(user)
        localStorage.setItem('user', userJSON)
        window.location.href = './profile.html'
    }
})
console.log(users)