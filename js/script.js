function initialize(){
  var divCelcius = document.getElementById("caraKalkulasiCelcius");
  var labelCaraKonversi = document.getElementById("labelCaraKonversi");
  divCelcius.style.display = "none";
  labelCaraKonversi.innerHTML = "Cara konversi Dari Celcius(&deg;C) ke Fahrenheit (&deg;F)" 
}

function konversiSuhu() {
  var suhu = parseFloat(document.getElementById("inputSuhu").value);
  if (isNaN(suhu)) {
    alert("Mohon masukkan suhu terlebih dahulu!");
    return;
  }
  var suhuFahrenheit = (suhu * 9/5) + 32;
  document.getElementById("hasilSuhu").value = suhuFahrenheit.toFixed(2) + " °F";
  var detailPerhitungan = suhu + " °C * 9/5 + 32 = " + suhuFahrenheit.toFixed(2) + " °F";
  document.getElementById("detailPerhitungan").value = detailPerhitungan;
}

function konversiSuhuReverse() {
  var judul = document.getElementById("judul");
  var inputSuhu = document.getElementById("inputSuhu");
  var headerInputSuhu = document.getElementById("headerInputSuhu");
  var labelCaraKonversi = document.getElementById("labelCaraKonversi");
  var divFarenheit = document.getElementById("caraKalkulasiFahrenheit");
  var divCelcius = document.getElementById("caraKalkulasiCelcius");
  if (judul.innerText === "Konversi Suhu Celsius ke Fahrenheit") {
    judul.innerText = "Konversi Suhu Fahrenheit ke Celsius";
    inputSuhu.placeholder = "Masukkan suhu Fahrenheit";
    headerInputSuhu.innerText = "Masukkan suhu Fahrenheit";
    labelCaraKonversi.innerHTML = "Cara konversi Dari Fahrenheit (&deg;F) ke Celcius(&deg;C)";
    divFarenheit.style.display = "none";
    divCelcius.style.display = "block";

  } else {
    judul.innerText = "Konversi Suhu Celsius ke Fahrenheit";
    inputSuhu.placeholder = "Masukkan suhu Celcius";
    headerInputSuhu.innerText = "Masukkan suhu Celcius";
    labelCaraKonversi.innerHTML = "Cara konversi Dari Celcius(&deg;C) ke Fahrenheit (&deg;F)"
    divFarenheit.style.display = "block";
    divCelcius.style.display = "none";
  }
  reset();
}

function reset() {
  document.getElementById("inputSuhu").value = "";
  document.getElementById("hasilSuhu").value = "";
  document.getElementById("detailPerhitungan").value = "";
}
