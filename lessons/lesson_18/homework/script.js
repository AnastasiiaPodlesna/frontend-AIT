
fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) 
    .then(data => {
       
        const gallery = document.getElementById("gallery");

        data.results.map(hero => {
            // контейнер для "карточки" персонажа
            const heroDiv = document.createElement("div");
            heroDiv.style = "width: 200px; margin: 10px; text-align: center;";

            // изображение персонажа
            const img = document.createElement("img");
            img.src = hero.image;
            img.alt = hero.name; //alternative text - для текстового описание изображения.
            img.style = "width: 100%; height: auto; border-radius: 8px;";

            // элементы для имени и статуса персонажа
            const nameElement = document.createElement("p");
            nameElement.textContent = `Name: ${hero.name}`;

            const statusElement = document.createElement("p");
            statusElement.textContent = `Status: ${hero.status}`;

            const originElement = document.createElement("p");
            originElement.textContent = `Origin: ${hero.origin.name}`;

            // добавляем все элементы в карточку
            heroDiv.appendChild(img);
            heroDiv.appendChild(nameElement);
            heroDiv.appendChild(statusElement);
            heroDiv.appendChild(originElement);

            // Добавляем карточку с персонажем в галерею
            gallery.appendChild(heroDiv);
        });
    })


