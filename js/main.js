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
        document.getElementById('camera').onchange = function (event) {
            var files = event.target.files || event.currentTarget.files;
            var reader = [];
            var images = document.getElementById('picField');
            var name;
            for (var i in files) {
                if (files.hasOwnProperty(i)) {
                    name = 'file' + i;
                    reader[i] = new FileReader();
                    reader[i].readAsDataURL(event.target.files[i]);
                    images.innerHTML += '<img id="'+ name +'" src="" />';
                    (function (name) {
                        reader[i].onload = function (e) {
                            document.getElementById(name).src = e.target.result;
                        };
                    })(name);
                }
            }
        }