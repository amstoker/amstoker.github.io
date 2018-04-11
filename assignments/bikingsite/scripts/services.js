var requestURL = 'data/services.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var services = request.response;
        showData(services);
    }


    function showData(jsonObj) {
        var services = jsonObj['services'];

        var myTable = document.querySelector("table");

        for (var i = 0; i < services.length; i++) {
            var myService = document.createElement('tr');

            var myServiceType = document.createElement('td');
            var myServicePrice = document.createElement('td');

            myServiceType.textContent = services[i].type;
            myServicePrice.textContent = services[i].price;

            myService.appendChild(myServiceType);
            myService.appendChild(myServicePrice);

            myTable.appendChild(myService);
        }
    }
