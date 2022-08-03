const button = document.getElementById("button");
const qr = document.getElementById("qr");
button.href = window.location
  .toString()
  .replace(window.location.protocol, "fyreplace:")
  .replace(window.location.host, "");

if (window.location.hash.length <= 1) {
  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&qzone=2&data=" +
    encodeURIComponent(button.href);

  var hiddenElements = [];

  do {
    hiddenElements = document.getElementsByClassName("hidden");
    hiddenElements[0].classList.remove("hidden");
  } while (hiddenElements.length > 0);
}
