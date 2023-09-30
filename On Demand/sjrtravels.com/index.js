// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the #firstscreen and #lastscreen elements
  var firstScreen = document.getElementById("firstscreen");
  var lastScreen = document.getElementById("lastscreen");
  var navBar = document.getElementById("navdiv");
  var docFoot = document.getElementById("docfoot");
  var header = document.getElementById("docfoot");
  var pinkNavbar = document.getElementById("pink-navbar");
  var exploreBox = document.getElementById("exploreBox");
  var flyerbox = document.getElementById("flyerbox");
  var servicesection = document.getElementById("servicesection");
  var bottomflyer = document.getElementById("bottomflyer");
  var appendTop30 = document.getElementById("appendTop30");
  var bottomflyer1 = document.getElementById("bottomflyer1");
  var indiacarousel = document.getElementById("indiacarousel");
  var indialist = document.getElementById("indialist");
  var whysjr = document.getElementById("sjrcontainer");
  var sjrcontainer1 = document.getElementById("sjrcontainer1");
  var bottomflyer2 = document.getElementById("bottomflyer2");
  var sjrcontainer2 = document.getElementById("sjrcontainer2");
  var disclamer = document.getElementById("disclamer");

  // Hide the #firstscreen after 5 seconds
  setTimeout(function () {
    firstScreen.style.display = "none";
    lastScreen.style.display = "block"; // Make the #lastscreen visible
    navBar.style.display = "flex";
    docFoot.style.display = "block";
    header.style.display = "block";
    pinkNavbar.style.display = "block";
    exploreBox.style.display = "block";
    flyerbox.style.display = "block";
    servicesection.style.display = "block";
    bottomflyer.style.display = "block";
    appendTop30.style.display = "block";
    bottomflyer1.style.display = "block";
    indiacarousel.style.display = "block";
    indialist.style.display = "block";
    whysjr.style.display = "block";
    sjrcontainer1.style.display = "block";
    bottomflyer2.style.display = "block";
    sjrcontainer2.style.display = "block";
    disclamer.style.display = "block";
  }, 2500);

  const items = [
    "Shimla's Best Secret",
    "Tamil Nadu's Charming Hill Town",
    "Unforgettable Gateway to Himalayas",
    "Little Hill Station in Gujarat",
    "A Snowy Winter Wonderland",
    "Seaside Resort in West Bengal",
    "Hidden Gems of Maharashtra",
    "Hill Station in Tamil Nadu",
    "Hill Retreat in Andhra Pradesh",
    "Nature of Gujarat",
    "Coastal Town in Karnataka",
    "Queen of Satpura Pachmarhi",
    "A Town with Beaches and Hills",
    "Goa of Malvan",
    "A Green Getaway in Karnataka",
    "Idyllic Stop in Kerala",
    "Maharashtra's Wildlife",
    "The Sahyadari Range",
    "Resorts in Manali",
    "Ancient Cities of Rajasthan",
    "Apples and Peaches Orchards",
  ];

  const imageUrls = [
    "url('1.png')",
    "url('2.png')",
    "url('3.png')",
    "url('4.png')",
    "url('5.png')",
    "url('6.png')",
    "url('7.png')",
    "url('8.png')",
    "url('9.png')",
    "url('10.png')",
    "url('11.png')",
    "url('12.png')",
    "url('13.png')",
    "url('14.png')",
    "url('15.png')",
    "url('16.png')",
    "url('17.png')",
    "url('18.png')",
    "url('19.png')",
    "url('20.png')",
    "url('21.png')",
  ];

  let currentIndex = 0;
  const carouselContainer = document.getElementById("indias-carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateCarousel() {
    const item = items[currentIndex];
    const imageUrl = imageUrls[currentIndex];
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("india-carousel-item");
    carouselItem.style.backgroundImage = imageUrl;

    // Styling the text content
    const itemText = document.createElement("div");
    itemText.textContent = item;
    itemText.classList.add("india-carousel-item-title");
    itemText.style.fontWeight = "bold";
    itemText.style.background = "#31008d";
    itemText.style.width = "fit-content";
    itemText.style.color = "gold";
    itemText.style.fontSize = "24px"; // Adjust the font size as needed
    itemText.style.fontFamily = "Arial, sans-serif"; // Specify the desired font family

    // Appending the text content to the carousel item
    carouselItem.appendChild(itemText);

    // Clearing the existing content and adding the updated carousel item
    carouselContainer.innerHTML = "";
    carouselContainer.appendChild(carouselItem);
  }

  function slideCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  prevBtn.addEventListener("click", () => {
    slideCarousel(-1);
  });

  nextBtn.addEventListener("click", () => {
    slideCarousel(1);
  });

  // Initialize the carousel
  updateCarousel();

  const items1 = [
    "Varanasi - The Spiritual Capital",
    "Amarnath Cave - Jammu and Kashmir",
    "Tirupati Balaji - Andhra Pradesh",
    "Golden Temple - Amritsar",
    "Kedarnath - Uttarakhand",
    "Rameswaram - Tamil Nadu",
    "Ajmer Sharif - Rajasthan",
    "Bodh Gaya - Bihar",
    "Vaishno Devi - Jammu and Kashmir",
    "Badrinath - Uttarakhand",
    "Somnath Temple - Gujarat",
    "Shirdi Sai Baba Temple - Maharashtra",
    "Puri Jagannath Temple - Odisha",
    "Haridwar - Uttarakhand",
    "Rishikesh - Uttarakhand",
    "Kashi Vishwanath Temple - Varanasi",
    "Mathura - Uttar Pradesh",
    "Pushkar - Rajasthan",
    "Hemkund Sahib - Uttarakhand",
    "Gangotri - Uttarakhand",
    "Yamunotri - Uttarakhand",
  ];

  const imageUrls1 = [
    "url('P1.png')",
    "url('P2.png')",
    "url('P3.png')",
    "url('P4.png')",
    "url('P5.png')",
    "url('P6.png')",
    "url('P7.png')",
    "url('P8.png')",
    "url('P9.png')",
    "url('P10.png')",
    "url('P11.png')",
    "url('P12.png')",
    "url('P13.png')",
    "url('P14.png')",
    "url('P15.png')",
    "url('P16.png')",
    "url('P17.png')",
    "url('P18.png')",
    "url('P19.png')",
    "url('P20.png')",
    "url('P21.png')",
  ];

  let currentIndex1 = 0;
  const carouselContainer1 = document.getElementById("indias-carousel1");
  const prevBtn1 = document.getElementById("prevBtn1");
  const nextBtn1 = document.getElementById("nextBtn1");

  function updateCarousel1() {
    const item1 = items1[currentIndex];
    const imageUrl1 = imageUrls1[currentIndex];
    const carouselItem1 = document.createElement("div");
    carouselItem1.classList.add("india-carousel-item1");
    carouselItem1.style.backgroundImage = imageUrl1;

    // Styling the text content
    const itemText1 = document.createElement("div");
    itemText1.textContent = item1;
    itemText1.classList.add("india-carousel-item-title1");
    itemText1.style.fontWeight = "bold";
    itemText1.style.background = "#31008d";
    itemText1.style.width = "fit-content";
    itemText1.style.color = "gold";
    itemText1.style.fontSize = "24px"; // Adjust the font size as needed
    itemText1.style.fontFamily = "Arial, sans-serif"; // Specify the desired font family

    // Appending the text content to the carousel item
    carouselItem1.appendChild(itemText1);

    // Clearing the existing content and adding the updated carousel item
    carouselContainer1.innerHTML = "";
    carouselContainer1.appendChild(carouselItem1);
  }

  function slideCarousel1(direction) {
    currentIndex += direction;
    if (currentIndex1 < 0) {
      currentIndex1 = items.length - 1;
    } else if (currentIndex1 >= items.length) {
      currentIndex1 = 0;
    }
    updateCarousel1();
  }

  prevBtn1.addEventListener("click", () => {
    slideCarousel1(-1);
  });

  nextBtn1.addEventListener("click", () => {
    slideCarousel1(1);
  });

  // Initialize the carousel
  updateCarousel1();
});
