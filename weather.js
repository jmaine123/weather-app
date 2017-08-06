$(document).ready(function() {
  var long;
  var lat;
  var fahren;
  var celsius;
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
            lat = "lat=" + position.coords.latitude;
            long = "lon=" + position.coords.longitude;

        $("#data").html("latitude:" + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

        var url = "https://fcc-weather-api.glitch.me/api/current?";
        var api = url+lat+"&"+long;

          $.getJSON( api, function(data){
              var weatherType= data.weather[0].description;
              var celsius = data.main.temp;
              var windSpeed = data.wind.speed;
              var city = data.name;
              var unit ='F'
              var tempSwap = true;
            console.log(weatherType);

            fahren = Math.round((celsius*9)/5 + 32);

            console.log(fahren);
            console.log(celsius);

            $("#city").html(city + ","+ ' ' + data.sys.country);
            $("#temp").html(fahren + ' '+ String.fromCharCode(176));
            $("#degrees").html(unit);

            $("#degrees").click(function(){

              if(tempSwap===false){
                $("#temp").html(celsius + ' '+ String.fromCharCode(176));
                $("#degrees").html('C')
                tempSwap = true;
              }
              else{
                $("#degrees").html('F');
                $("#temp").html(fahren + ' ' + String.fromCharCode(176));
                tempSwap=false;
              }
            });

            $(".status").html(weatherType);

              if (weatherType === 'mist'){
                $(".status").html(weatherType);
                $(".pageOne").css('backgroundImage', 'url(https://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040)')
                  $('.pageOne').css('color', 'black')
              }
            else if (weatherType === 'overcast clouds'){
              $(".status").html(weatherType);
              $(".pageOne").css('backgroundImage', 'url(http://cloud-maven.com/wp-content/uploads/2012/02/DSC03800.jpg)');
            }
            else if(weatherType === 'light rain'){
              $(".status").html(weatherType);
              $(".pageOne").css('backgroundImage', 'url(https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)');
            }
            else if(weatherType === 'thunderstorms'){
              $(".status").html(weatherType);
              $(".pageOne").css('backgroundImage', 'url(https://images.unsplash.com/photo-1482005253821-5d6a2c685879?dpr=2&auto=format&fit=crop&w=1500&h=752&q=80&cs=tinysrgb&crop=)');
            }
            else if(weatherType === 'rain'){
              $(".status").html(weatherType);
              $(".pageOne").css('backgroundImage', 'url(https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)');
            }
            else if(weatherType === 'light intensity drizzle'){
                  $(".status").html(weatherType);
                  $(".pageOne").css('backgroundImage', 'url(https://images.unsplash.com/19/drops.JPG?dpr=2&auto=format&fit=crop&w=1500&h=1120&q=80&cs=tinysrgb&crop=)');
                  $(".pageOne").css('color', 'black');
                }

             else if(weatherType === 'snow'){
                  $(".status").html(weatherType);
                  $(".pageOne").css('backgroundImage', 'url(https://i.giphy.com/media/PSlEbnvPEgdVu/giphy.webp)');
                  $(".pageOne").css('color', 'white');
                }

            else if (weatherType === 'clear sky'){
              $(".status").html(weatherType);
              $(".pageOne").css('backgroundImage', 'url(https://crystalseye.files.wordpress.com/2011/08/dsc_0724.jpg)');
              $(".pageOne").css('color', 'black');
            }
           });

      });
  };



});
