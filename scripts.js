$.getJSON('https://ipapi.co/json/', function(data) {
        console.log("Location Object: ", data);
        getCurrentWeather(data.latitude, data.longitude);
    })
   
  function getCurrentWeather(latitude, longitude){
    let appid = "&APPID=2a1d2b3e28c3b8ffdbbe0e9b5ce3cba2";
    let units = "&units=metric";
    let weather, city, iconCode, celsius, weatherDescription, codeCountry, fahrenheit;
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+""+appid+""+units+"";
    $.getJSON(url, function(data){
      console.log("success Weather: ",data);
      showWeather(data);
    })
  }
  function showWeather(data){
      showingWeather();
      let city = data.name, weatherDescription = data.weather[0].description, celsius = Math.trunc(data.main.temp);
      let codeCountry = data.sys.country;
      let wind = data.wind.speed;
      let pressure = data.main.pressure;
      let humidity = data.main.humidity;  
      let fahrenheit = Math.trunc(celsius * 9/5 + 32);
      let weatherBackgroundPicture = weatherBackgroundObject[data.weather[0].icon].URL;
      $('body').css("background-image", "url("+ weatherBackgroundPicture +")");
      
      iconCode = data.weather[0].id;
      if(data.dt >= data.sys.sunrise && data.dt < data.sys.sunset){
          $("#icon").attr('class', 'wi wi-owm-day-' + iconCode );
        }else{
          $("#icon").attr('class', 'wi wi-owm-night-' + iconCode );
        }
    
      let windDeg = data.wind.deg;
         $("#windDeg").attr('class', 'wi wi-wind towards-' + windDeg + '-deg');

      $("#city").html("<h2><strong>"+city+", "+codeCountry+"</strong></h2>");
      $("#weather").html(""+weatherDescription+"");
      $("#temperature").html(" "+celsius+" °C");
      $("#wind").html(""+wind+"");
      $("#pressure").html(""+pressure+" hPa");
      $("#humidity").html(""+humidity+"%");

      $('input[type=checkbox]').change(function () {
        if ($(this).prop("checked")) {
            $("#temperature").html(" "+fahrenheit+" °F");
            return;
            }
            $("#temperature").html(" "+celsius+" °C");
            });
  }

  function updateTime(){
      let currentTime = new Date()
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();

      if (minutes < 10){
            minutes = "0" + minutes
            }
      let timeStr = hours + ":" + minutes + ":" + seconds + " ";
      if(hours > 11){
            timeStr += "PM";
        } else {
            timeStr += "AM";
        }
        document.getElementById('timeNow').innerHTML = timeStr;
      };
      setInterval(updateTime, 500);

      window.onload = function dateNow() {
          let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
          let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

          let date = new Date();
          let dayNumber = date.getDate();
          let month = months[date.getMonth()];
          let day = days[date.getDay()];

          let currentDate = day + ", " + month + " " + dayNumber;

          document.getElementById('dateNow').innerHTML = currentDate;
          }

        let weatherBackgroundObject = {
            '01d':{'URL': 'https://i.picsum.photos/id/1015/6000/4000.jpg',
                },
                  '01n':{
                        'URL': 'https://i.picsum.photos/id/249/3000/2000.jpg',
                      },
            '02d':{
                  'URL': 'https://i.picsum.photos/id/222/1800/977.jpg',
                },
                  '02n':{
                        'URL': 'https://i.picsum.photos/id/556/5442/3628.jpg',
                      },
            '03d':{
                  'URL': 'https://i.picsum.photos/id/516/3008/2000.jpg',
                },
                  '03n':{
                        'URL': 'https://i.picsum.photos/id/149/3454/2288.jpg',
                      },
            '04d':{
                  'URL': 'https://i.picsum.photos/id/151/4288/3216.jpg',
                },
                  '04n':{
                        'URL': 'https://i.picsum.photos/id/120/4928/3264.jpg',
                      },
            '09d':{
                  'URL': 'https://i.picsum.photos/id/171/2048/1536.jpg',
                },
                  '09n':{
                        'URL': 'https://i.picsum.photos/id/171/2048/1536.jpg',
                      },
            '10d':{
                  'URL': 'https://i.picsum.photos/id/171/2048/1536.jpg',
                },
                  '10n':{
                        'URL': 'https://c1.staticflickr.com/7/6235/6278156496_3ebebe08ce_b.jpg',
                      },
            '11d':{
                  'URL': 'https://i.picsum.photos/id/123/4928/3264.jpg',
                },
                  '11n':{
                        'URL': 'https://i.picsum.photos/id/149/3454/2288.jpg',
                      },
            '13d':{
                  'URL': 'https://i.picsum.photos/id/256/2000/697.jpg',
                },
                  '13n':{
                        'URL': 'https://i.picsum.photos/id/1004/5616/3744.jpg',
                      },
            '50d':{
                  'URL': 'https://i.picsum.photos/id/353/6016/3376.jpg',
                },
                  '50n':{
                        'URL': 'https://i.picsum.photos/id/1021/2048/1206.jpg',
                        }
        };

// 
function showingWeather(){
  $('.loader').hide('slow');
  $('.weather').show('slow');
}