/* Math object
- round -> 0.5 göre duyarlı yuvarlama
- ceil -> ne olursa olsun yukarı yuvarlar
- floor -> ne olursa olsun aşağı yuvarlar
- abs -> mutlak değer alma
- sqrt -> karekökü
- pow -> üs alma
- random -> 0 - 0.999999 arasında rastgele bir sayı üretir



    Kaçıç operatörleri
- \n -> yeni satıra geçer
- \t -> 8 boşluk bırakır tab özelliği
- noktalama işaretlerini kullanabilmek için işaretlerden önce \ kullanılır. Örneğin : ' Ben de İstanbul\'da yaşıyorum.'



    Template String kullanımı 
- `` içerinde string kullanımı için ${} ifadeleri kullanılır.


    String metodları 
- length -> uzunluğunu kontrol edebilmemizi sağlar
- toupperCase() -> büyük harfe çevirir.
- tolowerCase() -> küçük harfe çevirir.
- substr -> kelimeleri bölmemizi sağlar. ilk harf dahil sonraki harf kadar al Örn: (4,6) indexe göre 4.harfi al ve 6 harf daha sonrasını ekle
- substring -> kelimeleri bölmemizi sağlar. ilk harif hariç sonraki harfe kadar al. (4,6) indexe göre 4.den sonraki ilk harfi al 6.harfe kadar 6.harf dahil kes
- trim -> baştaki ve sondaki boşlukları temizler
- split() -> stringi bölüp array içersine ekler. parantez içlerisine yazılan kurala göre
- icludes -> içerisinde var olup olmadığını sorgular. ve boolean cevap döner
- replace -> string içerisindeki ifadeyi değiştirir
- indexOf - lastIndexOf  -> string içerisindeki ifadesin ilk ve son olarak nerede geçtiğini belirtir index numarasına göre.
- startsWith - endsWith -> şununla başla şununla bit
- seacrh -> eşleşen ifadenin ilk nerede geçtiğini belirtir index numarasına göre regex kullanılabilir
- match -> eşleşen parametrelerin hepsini bir dizi şeklinde döndürür. eşleşen parametre yoksa null döner regex kullanılır
- Number - (+) -> string ifadenin içindeki rakamı number yapar



    Truthy Values
- bütün string ifadeler boş hariç
- tüm sayılar pozitif ve negatif dahil- 0 hariç
- true boolean




    Falsy Values
- 0, false, boş string, 0n, null, undifened, NaN




    Operatörler
- =     ->  x=y     -> x y'ye eşit
- ==    ->  x==y    -> x y'ye eşit mi 
- ===   ->  x==y    -> x y'ye denk mi
- +=    ->  x+=y    -> x=x+y ile aynı kullanım ( -=, /=, %=, *=, **= ) 
- ! ->  -> ardından gelen herşeyi tam tersi yapar olumsuzlar.



    Ternary Operatörler
- koşul ? true : false


    Date Object
- let date = new Date() -> şeklinde kullanım ile erişilir. get ile kullanılır
- getFullYear -> yılı getirir
- getMonth -> ayı getirir 0-11 arası 
- getDate -> ayın gününü getirir.
- getHours -> saat 
- getMinutes -> dakika
- getSeconds -> saniye
- getMiliSeconds -> milisaniye (0-999)
- getTime -> milisaniye (1 Ocak 1970'ten itibaren)
- getDay -> haftanın günü sayı olarak 0-6 arası
*/

    