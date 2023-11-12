document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var upiId = document.getElementById('upiId').value;
    var amount = document.getElementById('amount').value;
    var note = document.getElementById('note').value;

    // Generate UPI URL for the QR code
    var upiUrl = "upi://pay?pa=" + upiId + "&mc=" + upiId + "&tid=123&tr=123&tn=" + note + "&am=" + amount + "&cu=INR";

    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';

    // Generate QR code
    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: upiUrl,
        width: 128,
        height: 128
    });
});