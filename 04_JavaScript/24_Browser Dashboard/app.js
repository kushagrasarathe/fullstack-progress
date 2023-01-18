function getTime() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString("en-us", {
    timeStyle: "medium",
  });
}

setInterval(getTime, 1000);

fetch(
  `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`,
  { method: "GET" }
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    document.body.style.background = `url(${data.urls.full})`;
    document.body.style.backgroundSize = `100%`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.getElementById(
      "author"
    ).innerHTML = `<a style="color: white" href=${data.user.links.html} target="_blank">By: ${data.user.name}</a>`;
  })
  .catch((err) => {
    // console.log(err)
    document.body.style.background = `url(https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM3OTc3MzY&ixlib=rb-4.0.3&q=80)`;
    document.body.style.backgroundSize = `100%`;
    document.getElementById(
      "author"
    ).innerHTML = `<a style="color: white" href="https://unsplash.com/@cjoudrey" target="_blank">By: Christian Joudrey</a>`;
  });

fetch("https://api.coingecko.com/api/v3/coins/ethereum", { method: "GET" })
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById(
      "crypto"
    ).innerHTML = ` <div><img src=${data.image.small} alt="" /><span>${data.name} : $ ${data.market_data.current_price.usd} </span></div>`;
  })
  .catch((err) => console.error(err));

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`,
    { method: "GET" }
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((weather) => {
      console.log(weather)
      document.getElementById("weather").innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" /> <div>${weather.main.temp}º ${weather.name}</div>`
    })
    .catch( err => console.log(err))
});
