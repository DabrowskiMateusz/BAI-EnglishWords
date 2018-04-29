// Enter an API key from the Google API Console:
//   https://console.developers.google.com/apis/credentials



const apiKey = "AIzaSyC9ee_AO3hDFAFG5YpZgHe9L1VN_PTnRVM";



// c06156b9aac5343095817dff1826dadbe77141ca endpoints
const endpoints = {
  translate: "",
  languages: "languages"
};

// Abstract API request function
function makeApiRequest(endpoint, data, type, authNeeded) {
  url = "https://www.googleapis.com/language/translate/v2/" + endpoint;
  url += "?key=" + apiKey;

  // If not listing languages, send text to translate
  if (endpoint !== endpoints.languages) {
    url += "&q=" + encodeURI(data.textToTranslate);
  }

  // If translating, send target and source languages
  if (endpoint === endpoints.translate) {
    url += "&target=" + data.targetLang;
    url += "&source=" + data.sourceLang;
  }

  // Return response from API
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

// Translate
function translate(data) {
  makeApiRequest(endpoints.translate, data, "GET", false).success(function(
    resp
  ) {
    $(".target").text(resp.data.translations[0].translatedText);
    $("h2.translation-heading, p").show();
  });
}


// Convert country code to country name
function getLanguageNames() {
  return $.getJSON("https://api.myjson.com/bins/155kj1");
}

// On document ready
$(function() {
  window.makeApiRequest = makeApiRequest;
  var translationObj = {};

  $(document)
    // Bind translate function to translate button
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