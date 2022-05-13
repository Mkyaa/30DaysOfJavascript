const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] 

console.log('//////////////////////////')
console.log(webTechs)

if(webTechs.includes('Sass') === true){
  console.log('Sass is a CSS preprocess')
}
else {
  webTechs.push('Sass')
  console.log(webTechs)
  
}