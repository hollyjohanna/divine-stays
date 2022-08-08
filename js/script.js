AOS.init();
const navBtn = document.getElementById("nav-button");
const navLinks = document.getElementsByClassName("nav-link-container")[0];

navBtn.onclick = function () {
  navLinks.classList.toggle("active");
};

function expandToggle() {
  let footerUl = document.getElementById("footer-link-ul");
  footerUl.classList.toggle("active");
}

function expandToggle2() {
  let footerUl2 = document.getElementById("footer-link-ul-2");
  footerUl2.classList.toggle("active");
}

//--------------------------------SCROLL BUTTON-----------------------------------

const scrollBtn = document.getElementById("scroll-button");
const element = document.getElementById("scroll-button");

scrollBtn.onclick = function () {
  element.scrollIntoView({ behavior: "smooth" });
};

//------------------------------------SWIPER---------------------------------------
const getStartedBtn = document.getElementById("get-started-button");
const accomBtn = document.getElementById("accommodation-button");
const roomsImg = document.getElementById("rooms-img");
const navLinkAccom = document.getElementById("nav-link-accom");

let swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
  autoHeight: true,
});

getStartedBtn.onclick = function () {
  swiper.slideNext();
};

roomsImg.onclick = function () {
  swiper.slideNext();
};

accomBtn.onclick = function () {
  let guestsSelected = parseInt(number.innerText);
  if (locationInput.value == "") {
    message.innerHTML = `
    <p class="success">Please Select a Location</p>
    `;
    console.log("select location");
  } else if (guestsSelected < 1 || guestsSelected > 6) {
    message.innerHTML = `
    <p class="success">Please Select Guests (1-6)</p>
    `;
    console.log("select guests");
  } else if (daysSelected < 1) {
    message.innerHTML = `
      <p class="success"><i class="bi bi-exclamation-triangle"></i> Please select at least 1 days</p>
    `;
  } else if (daysSelected > 16) {
    message.innerHTML = `
      <p class="success"><i class="bi bi-exclamation-triangle"></i> Please select less than 16 days</p>
    `;
  } else {
    swiper.slideNext();
    filterAccom();
    showlocation();
  }
  // console.log(locationInput.value);
};

navLinkAccom.onclick = function () {
  swiper.slideTo(1);
  navLinks.classList.toggle("active");
};

//-----------------------------ACCOMODATION OBJECTS-------------------------------

const accomArray = [
  {
    id: 0,
    type: "Hotel",
    image: "img/hotel-HB.jpg",
    location: "Hawke's Bay",
    name: "Vineyard Hotel",
    price: 157,
    description:
      "Nestled in the most pristine part of Hawke's Bay, Vineyard Hotel offers a gorgeous stay for a romantic getaway, a quick trip and everything in between.",
    subDescription: "Sleeps 2, 1 bed, 1 bathroom",
    minNight: 1,
    maxNight: 5,
    minGuest: 1,
    maxGuest: 2,
    starRating: "img/Stars5stars.png",
    starRatingNum: "5 stars",
    mealOption1:
      "Mushroom Fettuccine, with accompanying wines, bruscetta and Chocolate creamaux for dessert ",
    mealOption2:
      "Beef wagyu, sourdough, and salad with accompanying wines and vanilla cheesecake for dessert",
    geometry: {
      type: "Point",
      coordinates: [176.84160411167937, -39.39529524400669],
    },
    properties: {
      customId: "HB-1",
    },
  },
  {
    id: 1,
    type: "House",
    image: "img/the-cottage-HB.jpg",
    location: "Hawke's Bay",
    name: "The Cottage",
    price: 315,
    description:
      "The Cottage, located just out of Hawke's Bay is a beautiful vintage location, offering wine tours around the region, luxury linens and a spa bath for the perfect getaway.",
    subDescription: "Sleeps 4, 3 beds, 1 bathroom",
    minNight: 1,
    maxNight: 6,
    minGuest: 1,
    maxGuest: 4,
    starRating: "img/Stars5stars.png",
    starRatingNum: "5 stars",
    mealOption1: "English roast beef, mashed potatoes, yorkshire pudding",
    mealOption2: "Vegetarian roast, mashed potatoes, peas, mushrooms",
    geometry: {
      type: "Point",
      coordinates: [176.89198079525084, -39.55500328820611],
    },
    properties: {
      customId: "HB-2",
    },
  },
  {
    id: 2,
    type: "House",
    image: "img/house-martinborough.jpg",
    location: "Martinborough",
    name: "Martinborough Lodge",
    price: 240,
    description:
      "The Martinborough Lodge is a brick house located on the waters edge, with beautiful scenery overlooking the surrounding vineyards. A beautiful and private stay for couples or families.",
    subDescription: "Sleeps 4, 2 beds, 1 bathroom",
    minNight: 2,
    maxNight: 15,
    minGuest: 1,
    maxGuest: 4,
    starRating: "img/Stars5stars.png",
    starRatingNum: "5 stars",
    mealOption1: "Vegetarian tacos, avocado, feta, smooth black beans",
    mealOption2: "Chicken quesadillas, mole sauce, salad",
    geometry: {
      type: "Point",
      coordinates: [175.49168229521757, -41.22413654008859],
    },
    properties: {
      customId: "M-1",
    },
  },
  {
    id: 3,
    type: "Motel",
    image: "img/motel-martinborough.jpg",
    location: "Martinborough",
    name: "Martinborough Motel",
    price: 90,
    description:
      "Martinborough Motel located in the heart of Martinborough is a beautiful and clean motel, perfect for long stays with its ideal location and proximity to all the bars, restuarants and vineyards in the area.",
    subDescription: "Sleeps 4, 4 beds, 1 bathroom",
    minNight: 3,
    maxNight: 10,
    minGuest: 2,
    maxGuest: 4,
    starRating: "img/Stars4stars.png",
    starRatingNum: "4 stars",
    mealOption1:
      "Continental breakfast, croissants, jam, orange juice and muesli",
    mealOption2: "Cooked breakfast, sausages, eggs, beans and local sourdough",
    geometry: {
      type: "Point",
      coordinates: [175.4661494652089, -41.21973023426335],
    },
    properties: {
      customId: "M-2",
    },
  },
  {
    id: 4,
    type: "House",
    image: "img/house-canterbury.jpg",
    location: "Canterbury",
    name: "Cottage In The Vines",
    price: 230,
    description:
      "Owned by the same family for generations, Cottage In The Vines is a gorgeous and eclectic stay close by the surrounding vineyards. Offering peace, privacy and beautiful views.",
    subDescription: "Sleeps 6, 4 beds, 2 bathroom",
    minNight: 3,
    maxNight: 10,
    minGuest: 3,
    maxGuest: 6,
    starRating: "img/Stars5stars.png",
    starRatingNum: "5 stars",
    mealOption1:
      "Smoked salmon, creamcheese and caper bagels, corn chips and dip",
    mealOption2: "Vegetarian quiche with tomato, onion and potato, side salad",
    geometry: {
      type: "Point",
      coordinates: [172.74034870266308, -43.03797272841897],
    },
    properties: {
      customId: "C-1",
    },
  },
  {
    id: 5,
    type: "Hostel",
    image: "img/hostel-canterbury.jpg",
    location: "Canterbury",
    name: "Canterbury Hostel",
    price: 30,
    description:
      "The Canterbury Hostel is the perfect cheap stay, located nearby the surrounding vineyards this is the perfect location for many of the vineyard tours and winetasting. We offer clean private rooms as well as shared dorms.",
    subDescription: "Sleeps 1, 1 bed, 1 bathroom",
    minNight: 1,
    maxNight: 10,
    minGuest: 1,
    maxGuest: 1,
    starRating: "img/Stars3stars.png",
    starRatingNum: "3 stars",
    mealOption1: "Spaghetti Bolognese, side salad and ice cream",
    mealOption2: "Spaghetti Bolonese (vegetarian) side salad and ice cream",
    geometry: {
      type: "Point",
      coordinates: [172.76275917714327, -43.05439166790913],
    },
    properties: {
      customId: "C-2",
    },
  },
];

//----------------------Guests Increment/Decrement------------------------------

let count = 0;
const number = document.getElementById("number");

function incrementButton() {
  count++;
  number.innerText = count;
  // console.log("count");
}

function decrementButton() {
  count--;
  number.innerText = count;
  // console.log("count");
}

//-----------------------------DATE RANGE PICKER-----------------------------------
const message = document.getElementById("message");
let start;
let end;
let daysSelected = 0;

$(function () {
  $('input[name="daterange"]').daterangepicker({
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format("YYYY"), 10),
  });
  $('input[name="daterange"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      // console.log("You clicked apply");
      let fullDate = $(this).val(
        picker.startDate.format("MM/DD/YYYY") +
          " - " +
          picker.endDate.format("MM/DD/YYYY")
      );

      let start = picker.startDate.format("MM/DD/YYYY");
      console.log(start);
      let end = picker.endDate.format("MM/DD/YYYY");
      daysSelected = datediff(parseDate(start), parseDate(end));
      // console.log(daysSelected);

      // work out the differece between two dates
      function parseDate(str) {
        var mdy = str.split("/");
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
      }

      // this function here works out the difference between the Dates
      // using two arguments, the start date and the end date
      function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
      }
      let messageContent;
      // let daysValid;
      // add in our own validation
      if (daysSelected < 1) {
        daysValid = false;
        messageContent = `
          <p class="success"><i class="bi bi-exclamation-triangle"></i>  Please select at least 1 days</p>
        `;
      } else if (daysSelected > 16) {
        daysValid = false;
        messageContent = `
          <p class="success"><i class="bi bi-exclamation-triangle"></i> Please select less than 16 days</p>
        `;
      } else {
        daysValid = true;
        messageContent = `
          <p class="success">Days selected: ${daysSelected} <i class="bi bi-check-circle"></i></p>
        `;
      }
      message.innerHTML = messageContent;
    }
  );
});

let daysValid;

//----------------------------MAP------------------------------------------

const locationInput = document.getElementById("location-input");
const result = document.getElementById("result");

function showlocation() {
  let location = locationInput.value;
  // console.log(locationInput.value);
  result.innerHTML = `
    <h2 id="location-header">${location}</h2>
    <a href="index.html"><button type="button" id="start-new-search-btn" class="button">Start New Search <i class="bi bi-arrow-right-circle"></i></button></a>
  `;

  let guestsSelected = number.innerText;

  if (location == "Hawke's Bay") {
    map.flyTo({
      center: [176.866235315849, -39.49916729870548],
      zoom: 10,
    });

    for (let i = 0; i < accomArray.length; i++) {
      console.log([daysSelected, guestsSelected]);
      console.log([accomArray[i].minNight, accomArray[i].maxNight]);
      // debugger;
      if (
        accomArray[i].location.includes("Hawke's Bay") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        // console.log(accomArray[i]);
        console.log("hello");
        renderMarker(accomArray[i]);
        // console.log("yay we found these options");
      }
    }
  } else if (location == "Martinborough") {
    map.flyTo({
      center: [175.45944056759214, -41.21888831545945],
      zoom: 10,
    });
    for (let i = 0; i < accomArray.length; i++) {
      console.log([daysSelected, guestsSelected]);
      console.log([accomArray[i].minNight, accomArray[i].maxNight]);
      // debugger;
      if (
        accomArray[i].location.includes("Martinborough") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        // console.log(accomArray[i]);
        console.log("hello");
        renderMarker(accomArray[i]);
        // console.log("yay we found these options");
      }
    }
  } else if (location == "Canterbury") {
    map.flyTo({
      center: [172.75807333098015, -43.062918526018635],
      zoom: 10,
    });

    for (let i = 0; i < accomArray.length; i++) {
      console.log([daysSelected, guestsSelected]);
      console.log([accomArray[i].minNight, accomArray[i].maxNight]);
      // debugger;
      if (
        accomArray[i].location.includes("Canterbury") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        // console.log(accomArray[i]);
        console.log("hello");
        renderMarker(accomArray[i]);
        // console.log("yay we found these options");
      }
    }
  } else {
  }
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiaG9sbHktam9oYW5uYSIsImEiOiJjbDNyd256dGoxamt6M2RyeHFtN2Z1dnJmIn0.WEwKHsZmrSdUCF7Zol4N4g";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/holly-johanna/cl3rxj2pc003014p0k59cqfed", // style URL
  center: [173.06039293591368, -40.33753351258513], // starting position [lng, lat]
  zoom: 5, // starting zoom
});

//full screen optional
map.addControl(new mapboxgl.FullscreenControl());

// render the custom markers
function renderMarker(currentMarker) {
  let newMarkerElement = document.createElement("div");
  newMarkerElement.className = "marker";
  if (currentMarker.properties.customId == "HB-1") {
    newMarkerElement.style.backgroundImage = "url('img/hotel-HB.jpg')";
  }
  if (currentMarker.properties.customId == "HB-2") {
    newMarkerElement.style.backgroundImage = "url('img/the-cottage-HB.jpg')";
  }
  if (currentMarker.properties.customId == "M-1") {
    newMarkerElement.style.backgroundImage =
      "url('img/house-martinborough.jpg')";
  }
  if (currentMarker.properties.customId == "M-2") {
    newMarkerElement.style.backgroundImage =
      "url('img/motel-martinborough.jpg')";
  }
  if (currentMarker.properties.customId == "C-1") {
    newMarkerElement.style.backgroundImage = "url('img/house-canterbury.jpg')";
  }
  if (currentMarker.properties.customId == "C-2") {
    newMarkerElement.style.backgroundImage = "url('img/hostel-canterbury.jpg')";
  }

  new mapboxgl.Marker(newMarkerElement)
    .setLngLat(currentMarker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({
        offset: 25,
      })
    )
    // .setHTML('<h3>' + currentMarker.properties.title + '</h3><p>' + currentMarker.properties.description + '</p>')
    .addTo(map);
}

//----------------------GENERATE ACCOMODATION-------------------------------------

const result2 = document.getElementById("result2");
let guestsSelected;

function generateAccom(index) {
  let total = accomArray[index].price * daysSelected;
  // console.log(accomArray[index]);
  result2.innerHTML += `
  <div class="accomodation-cards" data-aos="fade-up">
      <img id="accom-img" src="${accomArray[index].image}" alt="${accomArray[index].name}">
      <div class="accom-cards-details-first">
        <h3 id="accom-name">${accomArray[index].name}</h3>
        <h4 id="accom-location">${accomArray[index].location}</h4>
        <div id="details">
          <div id="price-container">
            <p id="accom-price">$${accomArray[index].price} avg/night</p>
            <p id="accom-price">Total $${total}</p>
          </div>
          <p id="accom-description">${accomArray[index].description}</p>
          <p id="accom-subdescription">${accomArray[index].subDescription}</p>
        </div>
      </div>
      <div class="accom-cards-details-second">
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <p class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Meal Option 1
            </button>
          </p>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <p id="meal-option">${accomArray[index].mealOption1}</p>
          </div>
        </div>
        <div class="accordion-item">
          <p class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Meal Option 2
            </button>
          </p>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <p id="meal-option">${accomArray[index].mealOption2}</p>
          </div>
        </div>
      </div>
      <div id="stars-and-buttons">
        <img id="star-rating" src="${accomArray[index].starRating}" alt="${accomArray[index].starRatingNum}">
        <button type="button" id="book-button" class="second-button">Book Now</button>
      </div>
    </div>
  </div>
  `;
}

function filterAccom() {
  let location = locationInput.value.toLowerCase();
  let guestsSelected = number.innerText;
  // console.log(location);
  if (location == "hawke's bay") {
    console.log("you chose hawkes bay");
    for (let i = 0; i < accomArray.length; i++) {
      // console.log([daysSelected, guestsSelected]);
      // console.log([accomArray[i].minNight, accomArray[i].maxNight]);

      if (
        accomArray[i].location.includes("Hawke's Bay") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        // console.log(accomArray[i]);
        // console.log("hello");
        generateAccom(i);
        // console.log("yay we found these options");
      }
    }
  } else if (location == "martinborough") {
    for (let i = 0; i < accomArray.length; i++) {
      if (
        accomArray[i].location.includes("Martinborough") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        generateAccom(i);
        console.log("yay we found these options");
      }
    }
  } else if (location == "canterbury") {
    for (let i = 0; i < accomArray.length; i++) {
      if (
        accomArray[i].location.includes("Canterbury") &&
        daysSelected >= accomArray[i].minNight &&
        daysSelected <= accomArray[i].maxNight &&
        guestsSelected >= accomArray[i].minGuest &&
        guestsSelected <= accomArray[i].maxGuest
      ) {
        generateAccom(i);
        console.log("yay we found these options");
      }
    }
  }
}
