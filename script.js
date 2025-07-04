function generateCertificate() {
  const name = document.getElementById("donorName").value || "ผู้มีจิตศรัทธา";
  document.getElementById("nameArea").innerText = name;
}

function downloadImage() {
  html2canvas(document.getElementById("certificate")).then(canvas => {
    const link = document.createElement("a");
    link.download = "ใบอนุโมทนาบัตร.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
