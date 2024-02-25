let cityValue=document.getElementById('cityValue')
let cityName=document.getElementById('cityName')
let countryName=document.getElementById('countryName')
let temperature=document.getElementById('tempValue')
// cityName.textContent=20
// countryName.textContent=10
// temperature.textContent=10

let search =async ()=>{
    if(cityValue.value.length == 0)
    {
        alert('please enter a city name before search')
    }else{
       try{
        let responce = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityValue.value + "&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
        let data = await responce.json()
        console.log(data);
        cityName.textContent=data.name
        countryName.textContent=data.sys.country
        temperature.textContent=data.main.temp
        console.log( temperature.textContent=data.main.temp);
        if (temperature.textContent > 25) {
            image.src = "hot.jpg"
        }
        else if (temperature.textContent > 15 && temperature.textContent < 25) {
            image.src = "cold.jpg"
        }
        else {
            image.src = "cool.jpg"
        }
    }catch{
        alert("please enter a valid name")
       }
    }
}


