//META{"name":"YouTubeLikeButton","version":"1.0.0"}*//

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

    $("<script",{
        "src":"https://apis.google.com/js/api.js"
    }).appendTo("head");

    setInterval(()=>createButtons(),1000);

    function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/youtube"})
            .then(function() { console.log("Sign-in successful"); },
                  function(err) { console.error("Error signing in", err); });
      }
      function loadClient() {
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }

      function execute(id,rating) {
        return gapi.client.youtube.videos.rate({
          "id": id,
          "rating": rating
        }).then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                  },
                  function(err) { console.error("Execute error", err); });
      }

      gapi.load("client:auth2", function() {
        gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
      });



      authenticate().then(loadClient)

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
            console.log(url[1]);
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
            console.log(url[1]);
            execute(url[1],"dislike");
        });

  
      
    
        });
        }
    }
  }

  stop(){}

}
