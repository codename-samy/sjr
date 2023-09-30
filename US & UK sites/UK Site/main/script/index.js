document.addEventListener("DOMContentLoaded", function () {
    const airlineLinks = document.querySelectorAll(".white-text a");

    airlineLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the airline name from the data-airline attribute
            const airlineName = link.getAttribute("data-airline");

            // Redirect to the airline details page with the airline name as a query parameter
            window.location.href = `../html/airlines.html?name=${encodeURIComponent(airlineName)}`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and close button elements
    var modal = document.getElementById("sitemap-modal");
    var closeButton = document.querySelector(".close");

    // Get the "SiteMap" item
    var sitemapItem = document.getElementById("sitemap");

    // Function to open the modal
    function openModal() {
      modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Open the modal when the "SiteMap" item is clicked
    sitemapItem.addEventListener("click", openModal);

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", closeModal);

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });

  // Clear cookies
document.cookie.split(';').forEach(function(cookie) {
  var eqPos = cookie.indexOf('=');
  var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
});

// Clear local storage
localStorage.clear();

// Clear session storage
sessionStorage.clear();