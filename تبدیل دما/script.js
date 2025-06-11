function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemp;
    
    if (unit === "Celsius") {
        convertedTemp = (temperature * 9/5) + 32; // تبدیل به فارنهایت
        document.getElementById("result").innerText = ${temperature} درجه سلسیوس معادل ${convertedTemp.toFixed(2)} درجه فارنهایت است.;
    } else {
        convertedTemp = (temperature - 32) * 5/9; // تبدیل به سلسیوس
        document.getElementById("result").innerText = ${temperature} درجه فارنهایت معادل ${convertedTemp.toFixed(2)} درجه سلسیوس است.;
    }
}