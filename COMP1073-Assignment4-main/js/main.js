
//Required variables
var latitude;
var longitude;
var map;
    //get location using geolocation and print in the console log if there was an error
    function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        console.log("Geolocation error")
    }
    }
    //Pull the position and seperates the long and lat coordinates 
    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        // Establishing the location variable
        var myLocation ={ lat: latitude, lng: longitude};
        //displays a created map to the html Id 'map' and create a new map that gets the current location and centers it. The zooms into it by 20
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            zoom: 20
        });
        //Creates a new marker variable that gets the location, pulls the map and get titles found you
        var marker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "Found You!"
        });
    }
    //finally, creating and empty function for the callbak in the hmtl to use and display the map 
    async function initMap(){

    }



//references/sources
/*
Google Dev documents
https://developers.google.com/maps/documentation/javascript/overview#Inline
https://developers.google.com/maps/get-started#enable-api-sdk
https://developers.google.com/maps/documentation/geolocation/overview
https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript
https://developers.google.com/maps/documentation/javascript/adding-a-google-map#javascript
https://developers.google.com/maps/documentation/javascript/get-api-key
https://developers.google.com/maps/get-started#api-key 

Mozilla
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

W3
https://www.w3schools.com/js/js_api_intro.asp
https://www.w3schools.com/html/html5_geolocation.asp
https://www.w3schools.com/graphics/google_maps_intro.asp

https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
https://blog.logrocket.com/understanding-api-key-authentication-node-js/*/

//some failed bits

/*function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center:(lat: latitude , lng: 150.644),
        zoom: 8
    }
}


x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;*/



//(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  //  key: "AIzaSyB9hO7Ka9zxCLIkHLAWPUVnuFd88tn1u6U",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
 // });


//const x = document.getElementById("demo");
