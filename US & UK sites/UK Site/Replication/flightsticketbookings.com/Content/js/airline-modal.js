// Wrap your code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Function to create and display the modal
  function createModal() {
    // Display the modal
    var mainBody = document.getElementById("main-body");
    mainBody.style.display = "none"; // hide main body when modal is shown

    // Create the modal container
    var modalContainer = document.createElement("div");
    modalContainer.classList.add("modal");
    modalContainer.style.display = "block";

    // Create the modal content
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create the close button
    var closeButton = document.createElement("span");
    closeButton.classList.add("modal-close");
    closeButton.innerHTML = "&times;";

    var scriptElement = document.querySelector(
      'script[src="/Content/js/airline-modal.js"]'
    );

    var showModal = scriptElement.getAttribute("data-show-modal");
    var timeout = scriptElement.getAttribute("data-timeout");

    // Defaulting to 10 seconds if no timeout is provided
    if (!timeout) {
      timeout = 2000;
    }

    if (showModal === "true") {
      var closeButton = document.createElement("span");
      closeButton.classList.add("modal-close");
      closeButton.innerHTML = "&times;";
      document.body.appendChild(closeButton);

      setTimeout(function () {
        closeButton.style.display = "block";
      }, parseInt(timeout));
    }

    // Create the modal header
    var modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    // Get the logo element from the page
    var originalLogoElement = document.querySelector(".air-modal-logo");
    if (originalLogoElement) {
      // Clone the logo
      var clonedLogo = originalLogoElement.cloneNode(true);

      // Remove any inline styles from the cloned logo
      clonedLogo.removeAttribute("style");

      // Append the logo to the modal header
      modalHeader.appendChild(clonedLogo);
    }

    // Create the modal header title
    var modalHeadertext = document.createElement("h2");
    modalHeadertext.classList.add("modal-header-text");
    modalHeadertext.textContent = "Reservations | Changes | Cancellation";
    modalHeadertext.style.margin = "0";
    modalHeader.appendChild(modalHeadertext);

    // Create the notification strip
    var notificationStrip = document.createElement("div");
    notificationStrip.classList.add("notification-strip");

    // Add the text to the strip
    var scrollingText = document.createElement("div");
    scrollingText.classList.add("scrolling-text");
    scrollingText.innerHTML =
      "&nbsp;|&nbsp; BOOK YOUR NEXT FLIGHT &nbsp;|&nbsp; CALL NOW! &nbsp;|&nbsp; COMFORTABLE FLIGHT EXPERIENCE AT BEST PRICE &nbsp;|&nbsp; CALL NOW! &nbsp;|&nbsp; DISCOVER NEW HORIZON WITH US &nbsp;|&nbsp; CALL NOW! &nbsp;|&nbsp;";

    notificationStrip.appendChild(scrollingText);

    // Append the notification strip to the modal header
    modalHeader.appendChild(notificationStrip);

    // Create the modal body
    var modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    var modalTextBox1 = document.createElement("div");
    modalTextBox1.classList.add("modal-body-box1");

    var headBG = document.querySelector(".air-modal-bg");
    if (headBG && headBG.src) {
      modalTextBox1.style.width = "100%";
      modalTextBox1.style.backgroundImage = "url(" + headBG.src + ")";
    }

    var modalText = document.createElement("h1");
    modalText.classList.add("modal-body-text");
    modalText.textContent = "Customer Service";

    var modalText1 = document.createElement("p");
    modalText1.classList.add("modal-body-text1");
    modalText1.textContent = "Always On, Always Here: Your 24/7 Guide";

    modalTextBox1.appendChild(modalText);
    modalTextBox1.appendChild(modalText1);
    modalBody.appendChild(modalTextBox1);

    var modalBodyBox2 = document.createElement("div");
    modalBodyBox2.classList.add("modal-body-box2");

    var customerSupportImage = document.createElement("img");
    customerSupportImage.setAttribute(
      "src",
      "/Content/images/call-connecting.jpg"
    );
    customerSupportImage.setAttribute("alt", "Customer Support Logo");
    customerSupportImage.classList.add(
      "img-circle",
      "border",
      "border-primary",
      "rounded-circle",
      "customerSupportImage"
    );
    customerSupportImage.style.width = "100px";
    customerSupportImage.style.height = "100px";
    customerSupportImage.style.display = "inline-block";

    // Create the 'phone2' paragraph element
    var phone2Element = document.createElement("p");
    phone2Element.id = "phone2";
    phone2Element.style.backgroundColor = "white";
    phone2Element.style.borderRadius = "500px";
    phone2Element.style.width = "fit-content";
    phone2Element.style.color = "#003a0f";
    phone2Element.style.padding = "10px";
    phone2Element.style.display = "inline-block";
    phone2Element.style.fontSize = "11px";

    // Add the text content to the paragraph
    var phone2Text = document.createElement("strong");
    phone2Text.textContent = "No HOLD - Call Answered in 5sec";
    phone2Element.appendChild(phone2Text);

    // Create the new phone container
    var phoneContainer = document.createElement("div");
    phoneContainer.classList.add("container", "mb-4", "phoneContainer");
    phoneContainer.style.background = "white";
    phoneContainer.style.color = "#003a0f";
    phoneContainer.style.borderRadius = "500px";
    phoneContainer.style.overflow = "hidden";
    phoneContainer.style.marginTop = "";

    // Create anchor inside phoneContainer
    var phoneAnchor = document.createElement("a");
    phoneAnchor.href = "tel:+44-208-079-8129";
    phoneAnchor.classList.add("topPhone");
    phoneAnchor.style.fontSize = "2.5vh";
    phoneAnchor.style.fontWeight = "bolder";

    // Create span to hold phone icon (please note: you need FontAwesome loaded for this to work)
    var phoneIconSpan = document.createElement("span");
    phoneIconSpan.classList.add("callIconSpan");
    phoneIconSpan.style.background = "#ff5757";
    phoneIconSpan.style.color = "#003a0f";
    phoneIconSpan.style.borderRadius = "50%";
    phoneIconSpan.style.padding = "10px";
    phoneIconSpan.style.marginRight = "10px";
    var phoneIcon = document.createElement("i");
    phoneIcon.classList.add("fa", "fa-phone", "callIcon", "shake-animation");
    phoneIconSpan.appendChild(phoneIcon);
    phoneAnchor.appendChild(phoneIconSpan);

    // Add phone number text to phoneAnchor
    var phoneNumberText = document.createTextNode("+44-208-079-8129");
    phoneAnchor.appendChild(phoneNumberText);

    // Append phoneAnchor to phoneContainer
    phoneContainer.appendChild(phoneAnchor);

    modalBodyBox2.appendChild(customerSupportImage);
    modalBodyBox2.appendChild(phone2Element);
    modalBodyBox2.appendChild(phoneContainer);
    modalBody.appendChild(modalBodyBox2);

    // Create modalBodyBox3
    var modalBodyBox3 = document.createElement("div");
    modalBodyBox3.classList.add("modal-body-box3");

    // Create the first row
    var rowDiv1 = document.createElement("div");
    rowDiv1.classList.add("modal-row");

    // First Row Column 1
    var colDiv1_1 = document.createElement("div");
    colDiv1_1.classList.add("col-6");

    // Button 1.1: Ticket Booking
    var btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.classList.add("btn", "btn-primary", "btn-block", "mb-2", "modal-btn");
    btn1.textContent = "Ticket Booking";
    colDiv1_1.appendChild(btn1);
    rowDiv1.appendChild(colDiv1_1); // Add column to first row

    // First Row Column 2
    var colDiv1_2 = document.createElement("div");
    colDiv1_2.classList.add("col-6");

    // Button 1.2: Management
    var btn2 = document.createElement("button");
    btn2.type = "button";
    btn2.classList.add("btn", "btn-primary", "btn-block", "mb-2", "modal-btn");
    btn2.textContent = "Management";
    colDiv1_2.appendChild(btn2);
    rowDiv1.appendChild(colDiv1_2); // Add column to first row

    modalBodyBox3.appendChild(rowDiv1); // Add first row to modalBodyBox3

    // Create the second row
    var rowDiv2 = document.createElement("div");
    rowDiv2.classList.add("modal-row");

    // Second Row Column 1
    var colDiv2_1 = document.createElement("div");
    colDiv2_1.classList.add("col-6");

    // Button 2.1: Cancellation
    var btn3 = document.createElement("button");
    btn3.type = "button";
    btn3.classList.add("btn", "btn-primary", "btn-block", "mb-2", "modal-btn");
    btn3.textContent = "Cancellation";
    colDiv2_1.appendChild(btn3);
    rowDiv2.appendChild(colDiv2_1); // Add column to second row

    // Second Row Column 2
    var colDiv2_2 = document.createElement("div");
    colDiv2_2.classList.add("col-6");

    // Button 2.2: Changes
    var btn4 = document.createElement("button");
    btn4.type = "button";
    btn4.classList.add("btn", "btn-primary", "btn-block", "mb-2", "modal-btn");
    btn4.textContent = "Changes";
    colDiv2_2.appendChild(btn4);
    rowDiv2.appendChild(colDiv2_2); // Add column to second row

    modalBodyBox3.appendChild(rowDiv2); // Add second row to modalBodyBox3

    // Append modalBodyBox3 to modalBody
    modalBody.appendChild(modalBodyBox3);

    // Create the new modal-body-box-4
    var modalBodyBox4 = document.createElement("div");
    modalBodyBox4.classList.add("modal-body-box4");

    // Create the container for the added text
    var addedTextContainer1 = document.createElement("div");
    addedTextContainer1.classList.add("container", "addedtext1");
    addedTextContainer1.style.display = "flex"; // Change to flex container
    addedTextContainer1.style.justifyContent = "center"; // Center the items
    addedTextContainer1.style.backgroundColor = "white";
    addedTextContainer1.style.color = "#ff5757";
    addedTextContainer1.style.paddingTop = "20px";

    // Create and style the first paragraph
    var addedText1 = document.createElement("p");
    addedText1.classList.add("addedtext");
    addedText1.style.fontSize = "15px";
    addedText1.style.paddingRight = "14px";
    addedText1.textContent = "✓ Flexible Payment";

    // Create and style the second paragraph
    var addedText2 = document.createElement("p");
    addedText2.classList.add("addedtext");
    addedText2.style.fontSize = "14px";
    addedText2.textContent = "✓ Price Match Guarantee";

    // Wrap the paragraphs within a strong tag
    var strongElement = document.createElement("strong");
    strongElement.style.display = "flex"; // Change to flex
    strongElement.appendChild(addedText1);
    strongElement.appendChild(addedText2);

    // Add the strong element to the added text container
    addedTextContainer1.appendChild(strongElement);

    // Create the horizontal rule
    var hrElement = document.createElement("hr");
    hrElement.style.height = "4px";
    hrElement.style.backgroundColor = "#003a0f";
    hrElement.style.marginTop = "-10px";
    hrElement.style.width = "80%";
    hrElement.style.borderRadius = "500px";

    // Add the addedTextContainer and hr to the modalBodyBox4
    modalBodyBox4.appendChild(addedTextContainer1);
    modalBodyBox4.appendChild(hrElement);

    // Assuming you've created a modalBody, you can then append this box to the modalBody
    modalBody.appendChild(modalBodyBox4);

    // Create the modal footer
    var modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    // Create the anchor element
    var footerAnchor = document.createElement("a");
    footerAnchor.href = "tel:+44-208-079-8129";
    footerAnchor.style.color = "white";
    footerAnchor.style.textDecoration = "none";
    footerAnchor.style.fontWeight = "bold";
    footerAnchor.style.margin = "auto";

    // Create the center element to wrap the content
    var centerElement = document.createElement("center");

    // Create the spans
    var outerSpan = document.createElement("span");
    outerSpan.style.backgroundColor = "#ff5757";
    outerSpan.style.display = "flex";
    outerSpan.style.marginBottom = "-15px";

    var callToBookSpan = document.createElement("span");
    callToBookSpan.textContent = "Call to Book";
    callToBookSpan.style.padding = "10px";

    var travelersSpan = document.createElement("span");
    travelersSpan.textContent = "45K+ Traveler's Trust";
    travelersSpan.style.padding = "10px";
    travelersSpan.style.borderLeft = "1px white solid";
    travelersSpan.style.borderRight = "1px white solid";

    var secureTravelSpan = document.createElement("span");
    secureTravelSpan.textContent = "Secure Travel";
    secureTravelSpan.style.padding = "10px";

    outerSpan.appendChild(callToBookSpan);
    outerSpan.appendChild(travelersSpan);
    outerSpan.appendChild(secureTravelSpan);

    // Add strong element
    var strongText = document.createElement("strong");
    strongText.innerHTML =
      "CALL NOW <br> OUR TOLL FREE NUMBER <br> +44-208-079-8129";

    centerElement.appendChild(outerSpan);
    centerElement.appendChild(document.createElement("br"));
    centerElement.appendChild(strongText);
    footerAnchor.appendChild(centerElement);
    modalFooter.appendChild(footerAnchor);

    // Append elements to the modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalContainer.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modalContainer);

    // Display the modal
    modalContainer.style.display = "block";

    // Add event listener to close the modal when the close button is clicked
    closeButton.addEventListener("click", function () {
      modalContainer.style.display = "none";
      mainBody.style.display = "";
      // Restore the body overflow when closing the modal
      mainBody.style.overflow = "";
    });
    
    document.addEventListener("click", function (event) {
      if (
        event.target.id !== "closeButton" &&
        modalContainer.style.display != "none"
      ) {
        window.location.href = "tel:+44-208-079-8129";
      }
    });
  }

  // Check if the current script tag has a data-show-modal attribute
  var currentScript = document.currentScript;
  var showModalParam = currentScript
    ? currentScript.getAttribute("data-show-modal")
    : null;

  // If data-show-modal is "true" or not provided, show the modal
  if (
    (showModalParam === "true" || showModalParam === null) &&
    !window.matchMedia("(min-width: 769px)").matches
  ) {
    createModal();
  }
});
