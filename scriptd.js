// function submitDonation() {
//     // Get form values
//     const donorName = document.getElementById("donorName").value;
//     const donorEmail = document.getElementById("donorEmail").value;
//     const donorPhone = document.getElementById("donorPhone").value;
//     const donorPAN = document.getElementById("donorPAN").value;
//     const amount = document.getElementById("amount").value;
//     const purpose = document.getElementById("purpose").value;
//     const paymentMethod = document.getElementById("paymentMethod").value;

//     // You can send this data to the backend using AJAX or fetch API

//     // For simplicity, we'll generate a QR code URL and display it
//     const qrCodeURL = generateQRCodeURL(donorName, amount, paymentMethod);

//     // Display QR Code
//     document.getElementById("qrCode").src = qrCodeURL;

//     // Display payment options based on the selected payment method
//     displayPaymentOptions(paymentMethod);
// }

// function generateQRCodeURL(donorName, amount, paymentMethod) {
//     // Generate a QR code URL based on the data
//     // This URL should point to a server endpoint that generates the actual QR code
//     // Here's a placeholder URL format:
//     return `https://example.com/generate-qr?name=${donorName}&amount=${amount}&method=${paymentMethod}`;
// }

// function displayPaymentOptions(paymentMethod) {
//     // Display payment options based on the selected payment method
//     const paymentOptions = document.getElementById("paymentOptions");

//     // Clear previous payment options
//     paymentOptions.innerHTML = "";

//     // You can add payment options specific to each method (e.g., UPI, Visa, RuPay) here
//     // For simplicity, we'll just display some text
//     paymentOptions.innerHTML = `Pay with ${paymentMethod}`;
// }
