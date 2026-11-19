import { cars } from "../data/cars-data.js";

const params = new URLSearchParams(window.location.search);

const vehicleId = params.get("id");

const car = cars.find((vehicle) => vehicle.id === vehicleId);

const sectionsContainer = document.querySelector(".sections-container");
const interestedSection = document.querySelector(".interested-section");
const similarSection = document.querySelector(".similar-section");
const errorContainer = document.querySelector(".vehicle-error");

if (!car) {
  sectionsContainer.classList.remove("sections-container");
  sectionsContainer.hidden = true;
  interestedSection.hidden = true;
  similarSection.hidden = true;
  errorContainer.hidden = false;
} else {
  displayVehicle();
}

function displayVehicle() {
  // Vehicle overview

  let overviewHtml = `
        <h3 class="vehicle-name">${car.name}</h3>

        <h3 class="price">${car.price}</h3>

        <p><span>Condition :</span> ${car.condition}</p>

        <p><span>Year :</span> ${car.year}</p>

        <p><span>Mileage :</span> ${car.specifications.mileage}</p>

        <p><span>Location :</span> ${car.location}</p>
    `;

  document.querySelector(".overview").innerHTML = overviewHtml;

  //   Update browser title

  document.title = `${car.name} ${car.year} | MikeOke Motors`;

  //   Display other sections

  displayGallery();
  displayInformation();
  displayContactLinks();
  displaySimilarCars();
}

function displayGallery() {
  const mainGallery = document.querySelector(".main-image-gallery");

  const thumbnail = document.querySelector(".image-thumbnail");

  const images = Object.values(car.image);

  let imageHtml = "";
  let thumbnailHtml = "";

  // Display the first image

  images.forEach((img) => {
    imageHtml += `
    <img src="${img}" alt="${car.name}" />
  `;
  });

  mainGallery.innerHTML = imageHtml;

  images.forEach((imgThumbnail, index) => {
    thumbnailHtml += `
    <img class="thumbnail-button ${index === 0 ? "border" : ""}" src="${imgThumbnail}" alt="${car.name}" />
  `;
  });

  thumbnail.innerHTML = thumbnailHtml;
}

function displayInformation() {
  // Vehicle overview

  let informationHtml = `
      <p><span>Color :</span> ${car.specifications.color}</p>

      <p><span>Transmission :</span> ${car.specifications.transmission}</p>

      <p><span>Fuel type :</span> ${car.specifications.fuelType}</p>

      <p><span>Engine capacity :</span> ${car.specifications.engineCapacity}</p>

      <p><span>Airbags :</span> ${car.conditionDetails.airbag}</p>

      <p><span>Spare tyre :</span> ${car.conditionDetails.spareTyre}</p>

      <p><span>Interior :</span> </p>

      <p><span>Exterior :</span></p>

      <p><span>Vehicle damage :</span> ${car.conditionDetails.damage}</p>

      <p><span>Special features :</span> ${car.features}</p>

      <p><span>Starting system :</span> ${car.specifications.startingSystem}</p>
    `;

  document.querySelector(".information").innerHTML = informationHtml;
}
