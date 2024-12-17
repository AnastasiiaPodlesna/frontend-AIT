
const gridProducts = document.querySelector('#grid-products')

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json() 
    //console.log(data)
   
    data.products.map(prod => {
    // создаем карточку с данными
    const card = document.createElement('div')
    card.className ="product-card" // classList.add - добавляет новый класс к существующему
   
    //создаем заголовок
    const heading = document.createElement("h3")
    heading.textContent = prod.title
    //console.log(heading)

    // создаем картинку
    const img = document.createElement('img')
    img.src = prod.images
    img.alt = prod.title

    // создаем обертку для картинки
    const wrapper = document.createElement('div')
    wrapper.className = 'img-wrapper'
    wrapper.append(img)

    // создаем описание товара
    const desc = document.createElement('p')
    desc.textContent = prod.description
    // обрезаем длинный текст
    let descText = prod.description
    if (descText.length > 40){
        desc.textContent = descText.slice(0,200) + "..."
    } else {
        desc.textContent = product.description
    }

    // добавляем цену товару
    const price = document.createElement('p')
    price.className = 'product-price'
    price.textContent = `Price: ${prod.price}EUR`
    
    // добавляем элементы в карточку в том порядке, как мы хотим увидеть их контейнере
    card.append(heading, wrapper, desc, price)
    // добавляем карточки в родитель
    gridProducts.append(card)
 })
}

fetchProducts()   