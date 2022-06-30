function sendMail() {
    emailjs.sendForm("gmail","CI_Rosie","#contact_form","8YUPRrP3i-2qcnH99")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}