//---------------------------------------------------------------------------------------------------------------
// ! fetch запрос на .then

// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json()) 
//     .then(data => {
//      // все операции с данными сервера будут происходить внутри второго then

//     data.map(product =>{
//         const item = document.createElement('p')
//         item.textContent = product.title
//         document.body.append(item)                                           //``
//     })
//     })

// ! fetch запрос на async / await - альтернативный способ обработки асинхронных запросов в JS
//---------------------------------------------------------------------------------------------------------------

const gridProducts = document.querySelector('#grid-products')

async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json() 
    // console.log(data)
    data.map(product => {
    // создаем карточку с данными
    const card = document.createElement('div')
    card.className ="product-card" // classList.add - добавляет новый класс к существующему
    card.classList.add('primary') // className ="" - перезаписывает на новый класс
    //создаем заголовок
    const heading = document.createElement("h4")
    heading.textContent = product.title
    // создаем картинку
    const img = document.createElement('img')
    img.src = product.image
    img.alt = product.title
    // создаем обертку для картинки
    const wrapper = document.createElement('div')
    wrapper.className = 'img-wrapper'
    wrapper.append(img)
    // создаем описание товара
    const desc = document.createElement('p')
    desc.textContent = product.description
    // обрезаем длинный текст
    let descText = product.description
    if (descText.length > 40){
        desc.textContent = descText.slice(0,200) + "..."
    } else {
        desc.textContent = product.description
    }
    // добавляем цену товару
    const price = document.createElement('p')
    price.textContent = `Price: ${product.price}EUR`
    // добавляем элементы в карточку в том порядке, как мы хотим увидеть их контейнере
    card.append(heading, wrapper, desc, price)
    // добавляем карточки в родитель
    gridProducts.append(card)
 })
}

fetchProducts()   

// ! повторяем fetch

// fetch('https://fakestoreapi.com/products?limit=5')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

async function getAsyncProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json()
    console.log(data)  
}

getAsyncProducts()


//---------------------------------------------------------------------------------------------------------------
// ! пример именной стрелочной функции. Преимущество: нельзя использовать до инициализации

// const fetchProducts = async() => {
//     const res = await fetch("https://fakestoreapi.com/products")
//     const data = await res.json() 
//     console.log(data)
// }
// fetchProducts()   
//---------------------------------------------------------------------------------------------------------------

