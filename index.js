document.getElementById('generate-btn').addEventListener('click', function() {
    document.getElementById('qrcode').innerHTML = "";
    const text = document.getElementById('text-input').value;
    if (text) {
        new QRCode(document.getElementById('qrcode'), text);
    } else {
        alert("Please enter some text or URL!");
    }
});