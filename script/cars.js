import { cars } from "../data/cars-data.js";

let carsHtml = "";

cars.forEach((car) => {
  carsHtml += `
    <div data-aos="fade-up" class="car-div">
        <a href="car-details.html?id=${car.id}">
            <img
            src=${car.image.image1}
            alt=${car.name}
            loading="lazy"
            />
        </a>

        <div class="car-details">
            <h3>${car.name}</h3>

            <p><span>Price:</span> ${car.price}</p>

            <p><span>Condition :</span> ${car.condition}</p>

            <p><span>Year :</span> ${car.year}</p>
        </div>

        <div class="more-link">
            <a class="primary-link" href="car-details.html?id=${car.id}">See more</a>
        </div>
    </div>
    `;
});

document.querySelector(".car-cards").innerHTML = carsHtml;
