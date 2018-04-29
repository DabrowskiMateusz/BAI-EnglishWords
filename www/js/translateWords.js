
const apiKey = "AIzaSyC9ee_AO3hDFAFG5YpZgHe9L1VN_PTnRVM";


const endpoints = {
  translate: "",
  languages: "languages"
};


function makeApiRequest(endpoint, data, type, authNeeded) {
  url = "https://www.googleapis.com/language/translate/v2/" + endpoint;
  url += "?key=" + apiKey;


  if (endpoint !== endpoints.languages) {
    url += "&q=" + encodeURI(data.textToTranslate);
  }

  
  if (endpoint === endpoints.translate) {
    url += "&target=" + data.targetLang;
    url += "&source=" + data.sourceLang;
  }

  
  return $.ajax({
    url: url,
    type: type || "GET",
    data: data ? JSON.stringify(data) : "",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
}


function translate(data) {
  makeApiRequest(endpoints.translate, data, "GET", false).success(function(
    resp
  ) {
    $(".target").text(resp.data.translations[0].translatedText);
    $("h2.translation-heading, p").show();
  });
}



function getLanguageNames() {
  return $.getJSON("https://api.myjson.com/bins/155kj1");
}


$(function() {
  window.makeApiRequest = makeApiRequest;
  var translationObj = {};

  $(document)
    .on("click", "button.translate", function() { 
  if ($(".text-to-translate").val()=="")
  {alert ($(".text-to-translate"));}
    
      translationObj = {
        sourceLang: $(".source-lang").find(":selected").attr('value'),
        targetLang: $(".target-lang").find(":selected").attr('value'),
        textToTranslate: $("textarea").val()
      };
translate(translationObj);
      
    })
    
});