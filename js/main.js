let locationButton = document.getElementById('location') ;
        let cameraButton = document.getElementById('longitude') ;
        locationButton.addEventListener('click', function() {
            let latitudeRow = document.getElementById('latitude') ;
            let longitudeRow = document.getElementById('longitude') ;
            let position;
            if ( 'geolocation' in navigator) { 
                window.navigator.geolocation.getCurrentPosition(function(positionProps) {
                    position = positionProps;
                    latitudeRow.innerHTML = positionProps.coords.latitude
                    longitudeRow.innerHTML = positionProps.coords.longitude
                    document.querySelector('.map').classList.add('active')
                    let href = `https://www.google.com.ua/maps/place/${positionProps.coords.latitude}+${positionProps.coords.longitude}`;
                    document.querySelector('.map').setAttribute('href', href);
                }, function(err) {
                    alert(`ERROR code (${err.code}): ${err.message}`)
                });
            }
            else { 
                alert( 'Геолокация пока не поддерживается для этой версии браузера / ОС.' );
             }
        })