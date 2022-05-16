const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: ['ab12ex','ghderc']
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['ab12ex','fg12cy','ghderc']
    }
]


const getIdBuilder = () => {
    let idCont = 'abcdefghijklmnoprstuwxvyz0123456789'
    idCode = ''
    for (let i = 0; i < 6; i++) {
        idCode += idCont.charAt(Math.floor(Math.random() * idCont.length))
    }
    return idCode
}

console.log(getIdBuilder())

const getDate = () => {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        fullDate = ''

    if (hour > 12 && hour < 24) {
        return fullDate = `${day}/${month}/${year} ${hour}:${minute} PM`
    }
    else {
        return fullDate = `${day}/${month}/${year} ${hour}:${minute} AM`
    }
}

console.log(getDate())
console.log(users)

function signUp(name, password, mail) {
    let usersCheck = true
    for (let i = 0; i < users.length; i++) {
        if (mail === users[i].email) {
            usersCheck = false
            return console.log('Kullanılan mail adresiyle daha önce kayıt olundu.')
        }
    }
    if (usersCheck == true) {
        return users.push({
            __id: getIdBuilder(),
            userName: name,
            email: mail,
            password: password,
            createdAt: getDate(),
            isLoggedIn: true
        })
    }
}


console.log(signUp('Alex', '123123', 'alex1@alex.com'))
console.log(users)


function login(email, password) {
    let loginCheck = false
    for(let i = 0; i < users.length; i++) {
        if(users[i].email === email && users[i].password === password){
            loginCheck = true
            return console.log('Başarıyla giriş yaptınız.')
        }
    }
    if (loginCheck===false){
        return console.log('Giriş bilgilerinizi kontrol ediniz.')
    }
}

console.log(login('asab@asab.com','123456'))

function rateProduct(productId, userId, rate) {
    for(let i = 0; i < products.length; i++) {
        if(products[i]._id === productId){
            if(products[i].ratings.length===0){
               products[i].ratings.push({
                    userId: userId,
                    rate:Number(rate)})
                return console.log('Kullanıcı puanı eklendi.')
            }
            for(let j = 0; j < products[i].ratings.length; j++) {
                if(products[i].ratings[j].userId === userId)
                { 
                   return console.log('Kullanıcı daha önce bu ürünü puanladı.')
                }
            }
                products[i].ratings.push({
                    userId: userId,
                    rate:Number(rate)})
                return console.log('Kullanıcı puanı eklendi.')
            }
        }
    }

    

console.log(rateProduct('hedfcg','fg12cy', '4'))
console.log(products)



function averageRating(productId){
    let averageRating=0
    for(let i=0; i <products.length; i++){
        if(products[i]._id==productId){
            for(let j = 0; j <products[i].ratings.length; j++)
            {
                averageRating+=products[i].ratings[j].rate
                
            }
            averageRating = averageRating / products[i].ratings.length
        }
    }
    return averageRating
    
}

console.log(averageRating('eedfcf'))



function likeProduct (userId, productId){
    for (let i=0; i<products.length; i++){
        if(products[i]._id===productId){
            for (let j=0; j<products[i].likes.length; j++){
                let usersCheck=products[i].likes.includes(userId)
                if(usersCheck===true){
                   return products[i].likes.splice(products[i].likes.indexOf(userId), 1);
                }
                else{
                    return products[i].likes.push(userId)
                }
            }
        }
    }
}

console.log(likeProduct('ab12ex','aegfal'))
console.log(products);

