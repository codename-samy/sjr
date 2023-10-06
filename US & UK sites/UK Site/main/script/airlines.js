document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const airlineName = params.get("name");

  if (airlineName) {
    document.getElementById("airline-title").textContent = airlineName;
    document.getElementById("airline-title1").textContent = airlineName;
    document.getElementById("airline-title2").textContent = airlineName;
    document.getElementById("airline-title4").textContent = airlineName;
    document.getElementById("airline-title5").textContent = airlineName;
    document.getElementById("airline-title6").textContent = airlineName;
    document.getElementById("airline-title7").textContent = airlineName;
    document.getElementById("airline-title8").textContent = airlineName;
    document.getElementById("airline-title9").textContent = airlineName;

    const imageSrc = getImageSource(airlineName);
    const airlineImage = document.getElementById("airline-image");
    airlineImage.src = imageSrc; // Set the src attribute directly
    airlineImage.alt = airlineName; // Set the alt attribute

    const imageSrc1 = getImageSource1(airlineName);
    document.getElementById(
      "airline-flight-image"
    ).innerHTML = `<img src="${imageSrc1}" alt="${airlineName}">`;

    const imageSrc2 = getImageSource(airlineName);
    document.getElementById(
      "airline-image"
    ).innerHTML = `<img src="${imageSrc2}" alt="${airlineName}">`;

    const imageSrc3 = getImageSource1(airlineName);
    document.getElementById(
      "airline-flight-image-1"
    ).innerHTML = `<img src="${imageSrc3}" alt="${airlineName}">`;

    const imageSrc4 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-1"
    ).innerHTML = `<img src="${imageSrc4}" alt="${airlineName}">`;

    const imageSrc5 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-2"
    ).innerHTML = `<img src="${imageSrc5}" alt="${airlineName}">`;

    const imageSrc6 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-3"
    ).innerHTML = `<img src="${imageSrc6}" alt="${airlineName}">`;

    const imageSrc7 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-4"
    ).innerHTML = `<img src="${imageSrc7}" alt="${airlineName}">`;

    const imageSrc8 = getImageSource1(airlineName);
    document.getElementById(
      "airline-flight-image-2"
    ).innerHTML = `<img src="${imageSrc8}" alt="${airlineName}">`;

    const imageSrc9 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-5"
    ).innerHTML = `<img src="${imageSrc9}" alt="${airlineName}">`;

    const imageSrc10 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-6"
    ).innerHTML = `<img src="${imageSrc10}" alt="${airlineName}">`;

    const imageSrc11 = getImageSource(airlineName);
    document.getElementById(
      "airline-image-7"
    ).innerHTML = `<img src="${imageSrc10}" alt="${airlineName}">`;

    const imageSrc12 = getImageSource1(airlineName);
    document.getElementById(
      "airline-flight-image-3"
    ).innerHTML = `<img src="${imageSrc12}" alt="${airlineName}">`;

    const imageSrc13 = getImageSource1(airlineName);
    document.getElementById(
      "airline-flight-image-4"
    ).innerHTML = `<img src="${imageSrc13}" alt="${airlineName}">`;

    const aboutUsDescription = getAboutUsDescription(airlineName);
    document.getElementById("about-us-description").textContent =
      aboutUsDescription;

    const aboutUsDescription1 = getAboutUsDescription(airlineName);
    document.getElementById("about-us-description1").textContent =
      aboutUsDescription;
  }

  $("#airlineModal").on("shown.bs.modal", function () {
    const imageSrc = getImageSource(airlineName);
    const modalImage = $("#airlineModal").find("#airline-image");
    modalImage.attr("src", imageSrc);

    const flightImageSrc = getImageSource1(airlineName);
    const modalFlightImage = $("#airlineModal").find("#airline-flight-image");
    modalFlightImage.html(`<img src="${flightImageSrc}" alt="${airlineName}">`);
  });
});

function getImageSource(airlineName) {
  switch (airlineName) {
    case "Air Canada":
      return "../../images/airlines/air-canada-logo.png";
    case "American Airlines":
      return "../images/airlines/american-airlines-logo.png";
    case "British Airways":
      return "../images/airlines/british-airways-logo.png";
    case "Delta Airlines":
      return "../images/airlines/delta-airlines-logo.png";
    case "Emirates Airlines":
      return "../images/airlines/emirates-airlines-logo.png";
    case "Etihad Airways":
      return "../images/airlines/etihad-airways-logo.png";
    case "KLM Royal Dutch Airlines":
      return "../images/airlines/klm-royal-dutch-airlines-logo.png";
    case "Lufthansa Airlines":
      return "../images/airlines/lufthansa-airlines-logo.png";
    case "Qatar Airways":
      return "../images/airlines/qatar-airways-logo.png";
    case "Singapore Airlines":
      return "../images/airlines/singapore-airlines-logo.png";
    case "Swiss Airlines":
      return "../images/airlines/swiss-airlines-logo.png";
    case "TAP Airlines":
      return "../images/airlines/tap-airlines-logo.png";
    case "Thai Airways":
      return "../images/airlines/thai-airways-logo.png";
    case "Turkish Airlines":
      return "../images/airlines/turkish-airlines-logo.png";
    case "Virgin Atlantic_Airways":
      return "../images/airlines/virgin-atlantic-airways-logo.png";
    case "Southwest Airlines":
      return "../images/airlines/southwest-airlines-logo.png";
    case "Qantas Airways":
      return "../images/airlines/qantas-airways-logo.png";
    default:
      return "../images/airlines/default-logo.png"; // Default image if not found
  }
}

function getImageSource1(airlineName) {
  switch (airlineName) {
    case "Air Canada":
      return "../../images/airlines/air-canada-flight.png";
    case "American Airlines":
      return "../images/airlines/american-airlines-flight.png";
    case "British Airways":
      return "../images/airlines/british-airways-flight.png";
    case "Delta Airlines":
      return "../images/airlines/delta-airlines-flight.png";
    case "Emirates Airlines":
      return "../images/airlines/emirates-airlines-flight.png";
    case "Etihad Airways":
      return "../images/airlines/etihad-airways-flight.png";
    case "KLM Royal Dutch Airlines":
      return "../images/airlines/klm-royal-dutch-airlines-flight.png";
    case "Lufthansa Airlines":
      return "../images/airlines/lufthansa-airlines-flight.png";
    case "Qatar Airways":
      return "../images/airlines/qatar-airways-flight.png";
    case "Singapore Airlines":
      return "../images/airlines/singapore-airlines-flight.png";
    case "Swiss Airlines":
      return "../images/airlines/swiss-airlines-flight.png";
    case "TAP Airlines":
      return "../images/airlines/tap-airlines-flight.png";
    case "Thai Airways":
      return "../images/airlines/thai-airways-flight.png";
    case "Turkish Airlines":
      return "../images/airlines/turkish-airlines-flight.png";
    case "Virgin Atlantic_Airways":
      return "../images/airlines/virgin-atlantic-airways-flight.png";
    case "Southwest Airlines":
      return "../images/airlines/southwest-airlines-flight.png";
    case "Qantas Airways":
      return "../images/airlines/qantas-airways-flight.png";
    default:
      return "../images/airlines/default-flight.png"; // Default image if not found
  }
}

const airlineData = {
  "Air Canada": {
    description:
      "Air Canada, Canada's flagship carrier, stands as a towering symbol of the country's aviation prowess. Established in 1937, our airline has forged an enduring legacy of connecting Canadians and travelers from across the globe. For over eight decades, we have been at the forefront of the aviation industry, contributing significantly to the growth and prosperity of Canada. Our journey began in the early days of aviation when propeller-driven aircraft ruled the skies. Over the years, we have evolved alongside the industry's advancements, embracing cutting-edge technology and modernization. Today, we are proud to be the largest airline in Canada, operating a vast network of domestic and international flights, offering travelers a gateway to the world. At the heart of Air Canada's mission is a steadfast commitment to safety. We understand the paramount importance of ensuring the well-being of our passengers and crew. Rigorous safety standards, continuous training, and state-of-the-art maintenance practices are integral parts of our operations. Travelers can embark on their journeys with confidence, knowing that their safety is our top priority. Service excellence is another cornerstone of Air Canada's identity. We believe that every passenger deserves an exceptional travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey comfortable and enjoyable. From friendly cabin crew to attentive ground staff, we strive to exceed your expectations at every touchpoint of your travel. Innovation is woven into the fabric of our airline. ",
  },
  "American Airlines": {
    description:
      "American Airlines, a global aviation giant, stands as an emblem of excellence in the aviation industry. Our storied history dates back to the early days of aviation, and for nearly a century, we have been at the forefront of connecting people and places around the world. Established in 1930, American Airlines has played an instrumental role in shaping the modern aviation landscape. Our journey began with a commitment to innovation and a vision to make air travel accessible to all. Over the decades, we have witnessed the evolution of aviation, from propeller-driven aircraft to cutting-edge jetliners. Today, we proudly hold our place as one of the largest and most respected airlines globally, operating a comprehensive network of domestic and international flights. Safety is at the core of American Airlines' mission. We recognize the immense responsibility that comes with carrying millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Passengers can embark on their journeys with confidence, knowing that their safety is our utmost priority. At American Airlines, we are driven by a passion for service excellence. We believe that every traveler, whether on a business trip or a leisurely vacation, deserves an exceptional experience. Our dedicated team, from our friendly cabin crew to our attentive ground staff, is committed to ensuring your journey is comfortable and enjoyable. We go the extra mile to exceed your expectations at every stage of your travel.",
  },
  "British Airways": {
    description:
      "British Airways, an icon of aviation, stands as a beacon of timeless elegance in the world of air travel. With a legacy dating back to the dawn of commercial aviation, our airline has consistently epitomized British excellence and sophistication in the skies. Established in 1974, British Airways has been at the forefront of connecting people, cultures, and continents.Service excellence is woven into the fabric of British Airways' identity. We believe that every traveler deserves a superior travel experience. Whether you're embarking on a business trip or a leisurely getaway, our dedicated team is committed to making your journey seamless and luxurious. From our attentive cabin crew to our personalized services, we strive to surpass your expectations at every stage of your travel. Innovation is integral to our airline's DNA. We are pioneers in embracing cutting-edge technologies and sustainable practices. Our modern fleet of aircraft not only ensures efficiency and reliability but also contributes to minimizing our environmental footprint. As we look ahead, we are steadfast in exploring eco-friendly initiatives to make air travel more sustainable for future generations. British Airways is more than an airline; it's a symbol of British sophistication and a global connector. Whether you're exploring the vibrant streets of London or embarking on an intercontinental adventure, we are here to accompany you on your journey. Our user-friendly booking platform and unwavering dedication to customer satisfaction reflect our commitment to making your travel experience seamless and luxurious. ",
  },
  "Delta Airlines": {
    description:
      "Delta Air Lines, a symbol of aviation excellence, stands at the pinnacle of the airline industry. With a storied history dating back to 1928, our airline has been a driving force in shaping modern air travel. For nearly a century, Delta has been at the forefront of connecting people, places, and cultures, setting the standard for aviation excellence. Our journey began during the early days of aviation when aircraft were powered by propellers and air travel was a pioneering adventure. Over the years, we have evolved alongside the industry's advancements, embracing cutting-edge technology and innovation. Today, we proudly hold our position as one of the largest and most respected airlines globally, operating an extensive network of domestic and international flights. Safety is the cornerstone of Delta Air Lines' mission. We understand the immense responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we adhere to the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with absolute confidence, knowing that their safety is our top priority. Service excellence defines Delta's identity. We believe that every passenger deserves a superior travel experience. Whether you're traveling for business or leisure, our dedicated team is committed to making your journey seamless and comfortable. From our attentive cabin crew to our exceptional customer service, we go above and beyond to exceed your expectations at every stage of your travel.",
  },
  "Emirates Airlines": {
    description:
      "Emirates Airlines, an embodiment of luxury and Arabian hospitality, soars as one of the world's most prestigious airlines. Established in 1985, our airline has redefined air travel, setting unparalleled standards in excellence, comfort, and service. For over three decades, Emirates has been at the forefront of connecting people, cultures, and continents, elevating the journey to new heights. Our journey began in an era when air travel was seen as an expression of luxury and sophistication. Over the years, we have maintained that legacy while embracing modernity and innovation. Today, we proudly stand as one of the world's largest and most esteemed airlines, operating a vast network of international flights that unite the world. Service excellence is woven into the fabric of Emirates' identity. We believe that every passenger deserves an opulent travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and luxurious. From our attentive cabin crew to our personalized services, we aim to surpass your expectations at every stage of your travel.  Innovation is embedded in our airline's DNA. We are pioneers in adopting cutting-edge technologies and sustainable practices. Our modern fleet of aircraft not only ensures efficiency and reliability but also minimizes our environmental impact. As we look ahead, we remain devoted to exploring eco-friendly initiatives to make air travel more sustainable for generations to come.",
  },
  "Etihad Airways": {
    description:
      "Etihad Airways, an epitome of Arabian excellence, stands as a symbol of luxury and innovation in the aviation industry. Established in 2003, our airline has swiftly risen to prominence, redefining air travel with our unwavering commitment to hospitality, comfort, and global connectivity. For nearly two decades, Etihad has been at the forefront of connecting people, cultures, and continents, elevating the journey to new horizons. Our journey commenced in an era when air travel was evolving into a global phenomenon. Over the years, we have embraced modernity and innovation while staying true to our Arabian roots. Today, we proudly represent the United Arab Emirates as its national airline, operating an extensive network of domestic and international flights that bridge the world. Safety is at the core of Etihad Airways' mission. We understand the immense responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and cutting-edge maintenance practices. Travelers can embark on their journeys with unwavering confidence, knowing that their safety is our topmost priority. ",
  },
  "KLM Royal Dutch Airlines": {
    description:
      "KLM Royal Dutch Airlines, an iconic name in aviation, holds a distinguished position as one of the world's oldest and most respected airlines. With a storied history dating back to 1919, our airline has been a pioneer in connecting people, cultures, and continents for over a century. For generations, KLM has embodied the spirit of Dutch innovation, excellence, and global connectivity. Our journey began in the aftermath of World War I when aviation was still in its infancy. Over the years, we have evolved in tandem with the industry's advancements, always at the forefront of embracing cutting-edge technology and modernization. Today, we proudly represent the Netherlands as its national airline, operating a comprehensive network of domestic and international flights that span the globe. Safety is the bedrock of KLM Royal Dutch Airlines' mission. We understand the immense responsibility that comes with carrying passengers and cargo worldwide. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our highest priority. Service excellence defines KLM's identity. We believe that every passenger deserves a superior travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enjoyable. From our friendly cabin crew to our personalized services, we strive to exceed your expectations at every stage of your travel. Innovation is deeply embedded in our airline's culture. We are pioneers in adopting advanced technologies and sustainable practices. Our modern fleet of aircraft not only ensures efficiency and reliability but also contributes to minimizing our environmental impact. As we look ahead, we remain committed to exploring eco-friendly initiatives to make air travel more sustainable for future generations. KLM Royal Dutch Airlines is more than an airline; it's a symbol of Dutch pride, innovation, and global connectivity. Whether you're exploring the historic streets of Amsterdam or embarking on a transcontinental adventure, we are here to accompany you on your journey. Our user-friendly booking platform and unwavering dedication to customer satisfaction reflect our commitment to making your travel experience seamless and exceptional.",
  },
  "Lufthansa Airlines": {
    description:
      "Lufthansa Airlines, a symbol of European aviation excellence, has established itself as one of the world's premier airlines. With a rich history dating back to 1955, our airline has been at the forefront of connecting people, cultures, and continents for decades. For over half a century, Lufthansa has embodied the spirit of German precision, reliability, and global connectivity. Our journey began in the post-World War II era, as Europe was rebuilding and aviation was entering a new era of progress. Over the years, we have evolved alongside the industry's advancements, embracing innovation and modernization. Today, we proudly represent Germany as its national airline, operating a comprehensive network of domestic and international flights that span the globe. Safety is at the heart of Lufthansa Airlines' mission. We understand the profound responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with absolute confidence, knowing that their safety is our utmost concern. Service excellence defines Lufthansa's identity. We believe that every passenger deserves a superior travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enjoyable. From our attentive cabin crew to our world-class amenities, we aim to exceed your expectations at every stage of your travel.",
  },
  "Qatar Airways": {
    description:
      "Qatar Airways, an embodiment of luxury and Arabian hospitality, stands as one of the world's leading airlines, renowned for its commitment to excellence, comfort, and global connectivity. Established in 1993, our airline has rapidly risen to prominence, setting the standard for world-class travel. For nearly three decades, Qatar Airways has been at the forefront of connecting people, cultures, and continents, redefining the art of air travel. Our journey began in a region where innovation and ambition are deeply rooted. Over the years, we have embraced modernity and technology, while staying true to our Arabian heritage. Today, we proudly represent the State of Qatar as its national airline, operating a vast network of domestic and international flights that span the globe. Safety is at the core of Qatar Airways' mission. We understand the profound responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our utmost priority.",
  },
  "Singapore Airlines": {
    description:
      "Singapore Airlines, a name synonymous with luxury and innovation, stands as one of the world's most celebrated airlines, renowned for its unwavering commitment to excellence, comfort, and global connectivity. Established in 1947, our airline has carved a distinguished legacy of connecting people, cultures, and continents for over seven decades. For generations, Singapore Airlines has been a symbol of Singaporean pride, hospitality, and aviation prowess. Our journey commenced in the early days of aviation when air travel was a novelty. Over the years, we have evolved in tandem with the industry's advancements, embracing modernity and technology. Today, we proudly represent Singapore as its flag carrier, operating an extensive network of domestic and international flights that span the globe. Safety is at the heart of Singapore Airlines' mission. We understand the profound responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with absolute confidence, knowing that their safety is our paramount concern. Service excellence defines Singapore Airlines' identity. We believe that every passenger deserves an exceptional travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enriching. From our attentive cabin crew to our world-class amenities, we aim to exceed your expectations at every stage of your travel.",
  },
  "Swiss Airlines": {
    description:
      "Swiss International Air Lines, commonly known as Swiss Airlines, is a renowned name in aviation, celebrated for its commitment to precision, comfort, and global connectivity. Since its inception in 2002, our airline has soared to prominence, embodying the spirit of Swiss excellence and hospitality. For over two decades, Swiss Airlines has been at the forefront of connecting people, cultures, and continents, setting the standard for exceptional air travel. Our journey began in the heart of Europe, a region renowned for its precision and innovation. Over the years, we have embraced modernity and technology while staying true to our Swiss heritage. Today, we proudly represent Switzerland as its flag carrier, operating a comprehensive network of domestic and international flights that span the globe. Safety is the cornerstone of Swiss Airlines' mission. We understand the immense responsibility that comes with transporting passengers and cargo worldwide. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our utmost concern. Service excellence defines Swiss Airlines' identity. We believe that every passenger deserves a superior travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enriching. From our attentive cabin crew to our personalized services, we aim to exceed your expectations at every stage of your travel. Innovation is woven into the fabric of our airline. We are pioneers in adopting advanced technologies and sustainable practices. Our modern fleet of aircraft not only ensures efficiency and reliability but also contributes to minimizing our environmental impact. As we look to the future, we remain committed to exploring eco-friendly initiatives to make air travel more sustainable for future generations.",
  },
  "TAP Airlines": {
    description:
      "TAP Air Portugal, the national flag carrier of Portugal, is a renowned name in the world of aviation, celebrated for its commitment to service, convenience, and global connectivity. Established in 1945, our airline has played a pivotal role in connecting Portugal with the world and showcasing the rich culture and heritage of our country. For over seven decades, TAP Air Portugal has been at the forefront of connecting people, cultures, and continents, embodying the essence of Portuguese hospitality. Our journey began in Lisbon, Portugal's vibrant capital, and over the years, we have grown to become a global airline. Today, we operate an extensive network of domestic and international flights that span the globe, providing travelers with a gateway to Portugal and beyond. Safety is at the core of TAP Air Portugal's mission. We understand the profound responsibility that comes with transporting passengers and cargo worldwide. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our paramount concern. Service excellence defines TAP Air Portugal's identity. We believe that every passenger deserves a superior travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enjoyable. From our attentive cabin crew to our in-flight amenities, we aim to exceed your expectations at every stage of your travel.",
  },
  "Thai Airways": {
    description:
      "Thai Airways International Public Co., Ltd., commonly known as Thai Airways, is Thailand's flagship carrier and a symbol of the country's warm hospitality, grace, and excellence in aviation. Since its establishment in 1960, our airline has been on a mission to connect people, cultures, and continents while offering travelers an authentic Thai experience. For over six decades, Thai Airways has proudly represented Thailand on the global stage, showcasing the nation's rich culture and traditions. Our journey began in Bangkok, the bustling capital of Thailand, and from there, we expanded our network to cover destinations across Asia and the world. Today, we operate a comprehensive network of domestic and international flights, providing passengers with a gateway to explore Thailand and beyond. Safety is at the forefront of Thai Airways' mission. We understand the paramount importance of ensuring the well-being of our passengers and crew. To achieve this, we adhere to the highest safety standards, rigorous training, and cutting-edge maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our top priority. Service excellence is a fundamental part of Thai Airways' identity. We believe that every passenger deserves an exceptional travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enriching. From our attentive cabin crew to our in-flight services, we strive to exceed your expectations at every stage of your travel. Innovation is a core value of our airline. We continually embrace advanced technologies and sustainable practices. Our modern fleet of aircraft ensures efficiency and reliability while minimizing our environmental impact. As we move forward, we are committed to exploring eco-friendly initiatives to make air travel more sustainable for future generations. Thai Airways is more than an airline; it's a symbol of Thai culture, cuisine, and hospitality. Whether you're exploring the bustling markets of Bangkok or embarking on an international adventure, we are here to accompany you on your journey. Our user-friendly booking platform and unwavering commitment to customer satisfaction reflect our dedication to making your travel experience seamless and culturally immersive.",
  },
  "Turkish Airlines": {
    description:
      "Turkish Airlines, Turkey's national flag carrier, is an emblem of Turkish hospitality, innovation, and global connectivity. Established in 1933, our airline has soared to become one of the world's leading carriers, dedicated to connecting people, cultures, and continents while showcasing the warmth and charm of Turkey. For nearly nine decades, Turkish Airlines has been at the forefront of aviation, serving as a global ambassador for our country's rich history and culture. Our journey began in Istanbul, a city that straddles two continents, and from there, we expanded our wings to cover destinations across Europe, Asia, Africa, the Americas, and beyond. Today, we operate an extensive network of domestic and international flights, providing travelers with a gateway to explore Turkey and the world Safety is the cornerstone of Turkish Airlines' mission. We understand the immense responsibility that comes with transporting millions of passengers each year. To ensure their well-being, we uphold the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our utmost concern.  Service excellence defines Turkish Airlines' identity. We believe that every passenger deserves an exceptional travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and memorable. From our friendly cabin crew to our in-flight services, we aim to exceed your expectations at every stage of your travel. Innovation is ingrained in our airline's DNA. We are pioneers in adopting advanced technologies and sustainable practices. Our modern fleet of aircraft not only ensures efficiency and reliability but also contributes to minimizing our environmental impact. As we look to the future, we remain committed to exploring eco-friendly initiatives to make air travel more sustainable for future generations. Turkish Airlines is more than an airline; it's a symbol of Turkish culture, cuisine, and hospitality. Whether you're exploring the bustling bazaars of Istanbul or embarking on an international adventure, we are here to accompany you on your journey. Our user-friendly booking platform and unwavering commitment to customer satisfaction reflect our dedication to making your travel experience seamless and culturally enriching.",
  },
  "Virgin Atlantic_Airways": {
    description:
      "Virgin Atlantic_Airways, a pioneering name in aviation, is renowned for its commitment to innovation, style, and exceptional customer experiences. Founded in 1984, our airline has revolutionized the way people fly, setting new standards for comfort, entertainment, and personalized service. For over three decades, Virgin Atlantic has been at the forefront of connecting people and destinations while delivering a unique and memorable journey. Our journey began with a vision to create a truly distinctive airline that would challenge conventions and bring a breath of fresh air to the skies. Today, we are proud to be one of the world's leading airlines, operating a comprehensive network of domestic and international flights that span the globe. Safety is the cornerstone of Virgin Atlantic's mission. We understand the immense responsibility that comes with aviation, and the safety of our passengers and crew is our highest priority. To ensure their well-being, we uphold the most stringent safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is paramount. Service excellence defines Virgin Atlantic's identity. We believe that every passenger deserves an extraordinary travel experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and unforgettable. From our friendly cabin crew to our innovative in-flight entertainment and dining, we aim to exceed your expectations at every stage of your travel. Innovation is at the heart of our airline. We are pioneers in adopting cutting-edge technologies and sustainable practices. Our modern fleet of aircraft ensures efficiency, reliability, and a reduced environmental footprint. As we look to the future, we remain committed to exploring eco-friendly initiatives to make air travel more sustainable and enjoyable for future generations. Virgin Atlantic_Airways is more than an airline; it's a symbol of style, innovation, and British flair. Whether you're exploring the cultural treasures of London or embarking on a global adventure, we are here to accompany you on your journey. Our user-friendly booking platform and unwavering commitment to customer satisfaction reflect our dedication to making your travel experience seamless and exceptional.",
  },
  "Southwest Airlines": {
    description:
      "Southwest Airlines, the epitome of the American spirit, is celebrated for its unwavering commitment to affordable travel, unparalleled customer service, and a unique corporate culture. Founded in 1967, our airline has transformed the way America travels, providing millions of passengers with convenient, friendly, and accessible air travel options. For over five decades, Southwest Airlines has been synonymous with the freedom to explore, connect, and soar to new heights. Safety is the bedrock of Southwest Airlines' mission. We understand that the well-being of our passengers and crew is paramount. To ensure their safety, we maintain the highest safety standards, rigorous training, and state-of-the-art maintenance practices. Travelers can take to the skies with confidence, knowing that their safety is our highest priority. Service excellence is part of our DNA. We believe that every passenger deserves exceptional service and a warm, welcoming experience. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and enjoyable. From our friendly and helpful staff to our efficient and comfortable cabins, we aim to exceed your expectations at every step of your travel.  Southwest Airlines is more than just an airline; it's a symbol of the American dream and the freedom to explore. Whether you're embarking on a business trip or a family vacation, we are here to help you spread your wings and discover the world. Our straightforward booking process and dedication to customer satisfaction reflect our commitment to making your travel experience easy and enjoyable.",
  },
  "Qantas Airways": {
    description:
      "Qantas Airways, Australia's most iconic airline, holds a century-long legacy of pioneering aviation, connecting the vast continent of Australia with the world beyond. Established in 1920, our airline has been a symbol of Australian ingenuity, adventure, and hospitality. For over a century, Qantas has been at the forefront of aviation, playing a vital role in connecting people, places, and cultures across the globe. Our journey began in the vast and rugged landscapes of Australia, where we set out to conquer the skies and bridge the vast distances that define our continent. Today, we are proud to be Australia's flag carrier, operating a comprehensive network of domestic and international flights that link Australia to destinations across the world. Safety is at the heart of Qantas Airways' mission. We understand the immense responsibility that comes with aviation, and the safety of our passengers and crew is our paramount concern. To ensure their well-being, we adhere to the most stringent safety standards, rigorous training, and cutting-edge maintenance practices. Travelers can embark on their journeys with complete confidence, knowing that their safety is our utmost priority. Service excellence defines the Qantas experience. We believe that every passenger deserves a journey of comfort, style, and Australian warmth. Whether you're flying for business or leisure, our dedicated team is committed to making your journey seamless and memorable. From our attentive cabin crew to our award-winning in-flight services, we aim to exceed your expectations at every stage of your travel. Innovation is ingrained in our airline's DNA. We are pioneers in adopting advanced technologies and sustainable practices. Our modern fleet of aircraft ensures efficiency, reliability, and a reduced environmental footprint. As we look to the future, we remain committed to exploring eco-friendly initiatives to make air travel more sustainable for future generations.",
  },
};

function getAboutUsDescription(airlineName) {
  return airlineData[airlineName]?.description || "Description not available";
}

document.cookie.split(";").forEach(function (cookie) {
  var eqPos = cookie.indexOf("=");
  var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
});

localStorage.clear();
sessionStorage.clear();

var modal = document.getElementById("airlineModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    const mainscreen = document.getElementById("mainscreen");
    mainscreen.style.display = "block";
  }
};
var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  const mainscreen = document.getElementById("mainscreen");
  mainscreen.style.display = "block";
});
