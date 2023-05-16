document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertBtn').addEventListener('click', convertTemperature);
  });
  
  function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const scale = document.getElementById('scaleSelect').value;
    let convertedTemperature;
    let resultScale;
  
    if (scale === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      resultScale = 'Fahrenheit';
    } else if (scale === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9;
      resultScale = 'Celsius';
    } else if (scale === 'kelvin') {
      convertedTemperature = temperature - 273.15;
      resultScale = 'Celsius';
    }
  
    document.getElementById('result').textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${resultScale}`;
  }
  