// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const contactPage = document.getElementById('contact-page');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Create the thank you message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message';
        thankYouMessage.style.fontSize = '24px';
        thankYouMessage.style.textAlign = 'center';

        // Clear the contact page content and add the thank you message
        contactPage.innerHTML = '';
        contactPage.appendChild(thankYouMessage);
    });
});
