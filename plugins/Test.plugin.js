/**
 * @name Test Plugin
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Background.plugin.js
 */

module.exports = class Test {

	getSettingsPanel() {
		return `<div>
		<button>TEST</button>
		<h3>Click on the button \"set Img\" to CHANGE settings </h3>
		
		</div>`;
	};

	getName() { return "Test"; }

	getDescription() { return "Test"; }

	getVersion() { return "1.0.0"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
	load() {
	}
	start() {


    if(BdApi.Themes.get("BackgroundChanger Theme") == null)
    {
        fetch("https://raw.githubusercontent.com/YukiGasai/BetterDiscord/master/themes/BackgroundChanger.theme.css")
        .then(response=>response.text())
        .then(text=>
            {		
                (async () => await require('fs').promises.writeFile(BdApi.Themes.folder + "/BackgroundChanger.theme.css", text))();	
            })
        .catch(err=> console.log(err));
    }	


        function WaitForFullLoad()
        {
            return new Promise((resolve, reject) => {
                let run = 0;
                let WaitIntervall = setInterval(()=>{
                    run++;

                    if(BdApi.Themes.get("BackgroundChanger Theme") != null)
                    {
                        clearInterval(WaitIntervall);
                        resolve();
                    }else{
                       if(run > 100)
                       {
                        clearInterval(WaitIntervall);
                        reject();
                       }
                       console.log("WAIT");
                    }
                }, 100);
        
            })
        }

        function SwitchThemeOn()
        {
            if(!BdApi.Themes.isEnabled("BackgroundChanger Theme"))
            {
                BdApi.Themes.enable("BackgroundChanger Theme");
            }  
        }


      WaitForFullLoad()
        .then(()=>SwitchThemeOn())
        .catch((err)=>console.log(err))
    
    }

    stop(){}
}

// if(BdApi.Themes.get("BackgroundChanger Theme") == null)