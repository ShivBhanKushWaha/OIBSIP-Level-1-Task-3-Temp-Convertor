const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    // Celsius to kelvin
    const celToKel = (cel) => {
        let celsius = (parseFloat(cel) + 273.15);
        return celsius;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    // Fahrenheit to kelvin
    const fahToKel = (fah) => {
        let kelvin = ((fah - 32) * 5 / 9 + 273.15).toFixed(1);
        return kelvin;
    }

    // kelvin to fahrenheit
    const kelToFah = (kel) => {
        let fahrenheit = ((kel - 273.15)*9/5 + 32).toFixed(1);
        return fahrenheit;
    }
    // kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(1);
        return celsius;
    }
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176;F" + " Or " + celToKel(inputTemp) + "&#176;K";
    }
    else if(valueTemp == 'kel'){
        document.getElementById("result").innerHTML = kelToFah(inputTemp) + "&#176;F" + " Or " + kelToCel(inputTemp) + "&#176;C";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176;C" +  " Or " + fahToKel(inputTemp) + "&#176;K";
    }
}
