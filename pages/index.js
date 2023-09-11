document.getElementById("metricCheck").checked = true;

const metricRadioButton = document.getElementById("metricCheck");
const imperialRadioButton = document.getElementById("imperialCheck");

const metricDiv = document.querySelector(".input__measurement--metric");
const imperialDiv = document.querySelector(".input__measurement--imperial");

metricRadioButton.addEventListener("onload", function () {
  if (metricRadioButton.checked) {
    console.log(metricRadioButton);
    metricDiv.style.display = "flex";
    imperialDiv.style.display = "none";
  }
});

metricRadioButton.addEventListener("change", function () {
  if (metricRadioButton.checked) {
    console.log(metricRadioButton);
    metricDiv.style.display = "flex";
    imperialDiv.style.display = "none";
  }
});

imperialRadioButton.addEventListener("change", function () {
  if (imperialRadioButton.checked) {
    metricDiv.style.display = "none";
    imperialDiv.style.display = "flex";
  }
});
