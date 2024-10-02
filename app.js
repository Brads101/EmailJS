// Initialize EmailJS with your user ID
(function () {
    emailjs.init("5RkuENYfsciXC_OxN");
  })();
  
  // Function to send email using EmailJS
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Send the email using the form data
  
      emailjs.sendForm("service_28nhc7s", "template_wg7xctz", this).then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });