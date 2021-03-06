/**
 * 
 */
var host_url = "http://localhost:8080/springwebapp/";

// doGet function
//function doGetUserDeviceRegistration(username) {
//	var requestURL = host_url + ""
//	var xmlhttp = InitXmlHttp();
//	sendPOSTRequest( xmlhttp, requestURL, function(){doGetUserDeviceRegistrationHandler(xmlhttp)} );
//}

// TO-DO: handler
//function doGetUserDeviceRegistrationHandler(){
//	// TO-DO
//}

function doGetLatestObservation(sta_url, datastream_id){
	var requestURL = sta_url + "/Datastreams(" + datastream_id + ")/Observations?$orderby=phenomenonTime desc&$top=1";
	var xmlhttp = InitXmlHttp();
	sendGETRequest( xmlhttp, requestURL, function(){doGetUserDeviceRegistrationHandler(xmlhttp)} );
}

function doGetLatestObservationHandler(xmlhttp){
	
}

// a function for AJAX (return "xmlhttp")
function InitXmlHttp(){
	var xmlhttp;
	if (window.XMLHttpRequest){ // for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{ // for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}

function sendGETRequest(xmlhttp, requestURL, handler){
    xmlhttp.onreadystatechange = handler; // assign the function to parse the response    
    xmlhttp.open("GET", requestURL, true);
    xmlhttp.send();
}

function sendPOSTRequest(xmlhttp, requestURL, requestBody, handler){
    xmlhttp.onreadystatechange = handler; // assign the function to parse the response    
    xmlhttp.open("POST", requestURL, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(requestBody);
}

function sendPOSTGETRequest(xmlhttp, requestURL, handler){
    xmlhttp.onreadystatechange = handler; // assign the function to parse the response    
    xmlhttp.open("GET", requestURL, true);
    xmlhttp.send();
}