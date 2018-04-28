'use strict';

// definicja funkcji ajax

function ajax(method, url) {
// zmienna ktora trzyma obiekt XML...
    let httpReq = new XMLHttpRequest();
// otwieram polaczenie do serwera
    httpReq.open(method, url);
// sprawdzam zmiane statusu polaczenia - readyState
    
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
            if(httpReq.status == 200) {
                let returnData = httpReq.responseText;
                
                httpReq.onsuccess(returnData);
// zerujemy polaczenie
                httpReq = null;
            }
        }
    }
    
    httpReq.onsuccess = function(response) {
        let jsonObject = JSON.parse(response);
        console.log(jsonObject);
    }
    
    httpReq.send();
}

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');