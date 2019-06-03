function redirect() {

	var appid = "Alexande-RandomOr-PRD-8ea94fa4c-cec0f5ed";

	var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=Alexande-RandomOr-PRD-8ea94fa4c-cec0f5ed";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=jsonpcallback";
    url += "&REST-PAYLOAD";
    url += "&keywords=fun";
    url += "&paginationInput.entriesPerPage=30";


	var testurl = "http://open.api.ebay.com/Shopping?callname=GetCategoryInfo&appid=" + appid 
   + "&siteid=1&CategoryID=293&version=981&responseencoding=JSON&callbackname=jsonpcallback" ;
	
	var testurl2 = "http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=" + appid
	+ "&siteid=0&QueryKeywords=fun&version=1063&callbackname=jsonpcallback" ;
 	
 $.ajax({
   dataType: "jsonp",
   method: "GET",
   url: url, 
 });
 
console.log(url);

}

 function jsonpcallback(jsdata) {
   
   console.log(jsdata);
   var items = jsdata.findItemsByKeywordsResponse[0].searchResult[0].item || [];
   var itemURL = items[getRandomInt(0,29)].viewItemURL;
   console.log(itemURL);
   window.location.href = itemURL;
   //window.open(itemURL, '_blank');

   $("#output").html();
 }

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}