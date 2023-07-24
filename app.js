const apikey =`68959872a5950f5ee5f9d426bf0eb448`
const loadWeather =async(city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const res = await  fetch(url)
    const data = await res.json()
    displayData(data)
}

const displayData =data=>{
   document.getElementById('searchBTN').addEventListener('click', function(){
    
        const inputField = document.getElementById('inputField');
        searchText = inputField.value;
        loadWeather(searchText)

    })
    document.getElementById('title').innerText =data.name;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('cloudNow').innerText= data.weather[0].main;
    inputField.value ='';
}
loadWeather('dhaka')