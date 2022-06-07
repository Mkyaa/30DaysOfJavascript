const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    let li
    for(const country of data){
        li=document.createElement('li')
        li.textContent=country.name
        li.style.width = '200px'
        li.style.height = '200px'
        li.style.border = '1px solid #ccc'
        li.style.borderRadius = '5px'
        li.style.margin='10px'
        li.style.fontWeight ='bold'
        li.style.fontSize = '14px'
        li.style.display = 'flex'
        li.style.justifyContent = 'center'
        li.style.alignItems='center'
        li.style.padding ='10px'
        ul.appendChild(li)
    }
    totalCountry.textContent=data.length
})