$("#button").click(function loadText() {

    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);
    xhr.onreadystatechange = function () {
        /*Functie die moet worden uitgevoerd bij het wijzigen van de staat tijdens de AJAX-procedure*/
        if (xhr.readyState == 4 && xhr.status == 200) {
            //Antwoord van de server

            let response = JSON.parse(xhr.responseText);
            /*let response respons text van die xhr.respnseText, met json.parse zet je die text om*/
           
            document.getElementById("quote").innerHTML = response.quote;
            document.getElementById("author").innerHTML = response.author;
            document.getElementById("image").src = response.photo;
            
        };
    };
    xhr.send();
});