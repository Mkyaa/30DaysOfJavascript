try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Hata adı', err.name)
    console.log('Hata mesajı', err.message)
    console.log(err)
  } finally {
    console.log('Her durumda çalışır')
  }


//   const throwErrorExampleFun = () => {
//     let message
//     let x = prompt('Enter a number: ')
//     try {
//       if (x == '') throw 'empty'
//       if (isNaN(x)) throw 'not a number'
//       x = Number(x)
//       if (x < 5) throw 'too low'
//       if (x > 10) throw 'too high'
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   throwErrorExampleFun()

const pattern=/[A-Za-z0-9]/g
const kAdi='mukremin123'
const cleaned=kAdi.match(pattern)
console.log(cleaned.length, kAdi.length)


const signUpForms=()=>{
    let kullaniciAdi= prompt('Kullanıcı adını giriniz.')
    const pattern=/[A-Za-z0-9]/g
    const cleaned=kullaniciAdi.match(pattern)
    try {
        if(kullaniciAdi.includes(' ')) throw 'Lütfen boşluk kullanmayınız. '
        if(kullaniciAdi==='') throw 'Kullanıcı adı boş geçilemez.'
        if(kullaniciAdi.length>16) throw 'Kullanıcı adı 16 karakterden büyük olamaz. '
        if(kullaniciAdi.length<4) throw 'Kullanıcı adı 4 karakterden küçük olamaz.'
        if(cleaned.length!==kullaniciAdi.length) throw 'Lütfen sadece harf ve rakam kullanınız. Noktalama işaretleri kullanmayınız.'
    }
    catch (e) {
        alert(e)
    }

}
signUpForms()

