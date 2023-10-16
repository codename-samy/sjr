// Wrap your code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    // Function to create and display the modal
    function createModal() {
      // Create the modal container
      var modalContainer = document.createElement('div');
      modalContainer.classList.add('modal');
  
      // Create the modal content
      var modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
  
      // Create the close button
      var closeButton = document.createElement('span');
      closeButton.classList.add('close');
      closeButton.innerHTML = '&times;';
  
      // Create the modal content text
      var modalText = document.createElement('p');
      modalText.textContent = 'This is your dynamic modal content.';
  
      // Append elements to the modal
      modalContent.appendChild(closeButton);
      modalContent.appendChild(modalText);
      modalContainer.appendChild(modalContent);
  
      // Append the modal to the body
      document.body.appendChild(modalContainer);
  
      // Display the modal
      modalContainer.style.display = 'block';
  
      // Add event listener to close the modal when the close button is clicked
      closeButton.addEventListener('click', function () {
        modalContainer.style.display = 'none';
      });
    }
  
    // Check if the current page URL contains "airline" (modify this condition as needed)
    if (window.location.href.includes('airline')) {
      // Call the createModal function to display the modal
      createModal();
    }
  });
  