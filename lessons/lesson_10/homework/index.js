// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Еще одна кнопка";
clonedBtn.style.backgroundColor = '#d8b62d';
clonedBtn.style.color = "white";
clonedBtn.className = 'second-btn';

btn.addEventListener('click', () => {
 document.body.append(clonedBtn) // добавляем к body склонированную кнопку
 console.log('первый слушатель'); 
});

clonedBtn.addEventListener('click', () => {   // здесь можете создать EventListener для второй кнопки
    btn.style.backgroundColor = '#9c4a1a';
    btn.style.color = "black";
    console.log('второй слушатель'); 
});

console.log('основной блок кода');