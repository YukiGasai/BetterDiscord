//META{"name":"YouTubeLikeButton","version":"1.0.0"}*//

const APIKEY = "AIzaSyCQo1-NqfwJnEsjqkYvENI4TQEAeNlMcQk";
const clientSec = "884240701519-pjk494jmuac2vodtf8jhivm8p658tgrh.apps.googleusercontent.com";

class YouTubeLikeButton {
  constructor() {}

  getName() {
    return "YouTubeLikeButton";
  }

  getDescription() {
    return "YouTubeLikeButton";
  }

  getVersion() {
    return "1.0.0";
  }

  getAuthor() {
    return "L7Yuki Gasai";
  }

  //legacy
  load() {}

  

  start() {


    $("<script>",{
      "src":"https://apis.google.com/js/api.js"
    }).appendTo("Head");


    $("<iframe>",{
      "aria-hidden":true,
      "id":"ssIFrame_google",
      "sandbox":"allow-scripts allow-same-origin",
      "src":"https://accounts.google.com/o/oauth2/iframe#origin=http%3A%2F%2Flocalhost%3A4200&amp;rpcToken=902946799.4541115&amp;clearCache=1",
      css:{
        "position":"absolute",
        "width":"1px",
        "height":"1px",
        "left":"-9999px",
        "display":"none"
      }
    }).appendTo($("body"));
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(APIKEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute(id,rating) {
    console.log("JETZT");
    return gapi.client.youtube.videos.rate({
      "id": id,
      "rating": rating
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: clientSec});
  });


  authenticate().then(loadClient);























    setInterval(()=>createButtons(),1000);

    function createButtons() {
      if ($("a[title*='you']").length && !$("a[title*='you']").hasClass("added")) {

        $("a[title*='you']").each(function(index){

        var url = $(this).prop("title").match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        $(this).addClass("added");
        var likediv = $("<div>", {
          id: "LIKE",
          href: "",
          css: {
            "height": "20px",
            "width": "20px",
            "border-radius": "50%",
            "background": "red",
            "margin":"0px",
            "padding":"0px"
          }
        }).insertAfter($(this));

        $(likediv).click(()=>{
       
          window.open("http://like + " +url[1]);
          execute(url[1],"like");
        });
        
        var dislikediv = $("<div>", {
          id: "Dislike",
          href: "",
          css: {
            "height": "20px",
            "width": "20px",
            "border-radius": "50%",
            "background": "blue",
            "margin":"0px",
            "padding":"0px"
          }
        }).insertAfter($(this));

        $(dislikediv).click(()=>{
          window.open("http://dislike + " +url[1]);
          execute(url[1],"dislike");
        });

  
      
    
        });
        }
    }
  }

  stop(){}

}
