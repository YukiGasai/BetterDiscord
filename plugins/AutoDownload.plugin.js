/**
 * @name AutoDownload Plugin
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Background.plugin.js
 */


module.exports = class AutoDownload {
	constructor() {
	}
	getSettingsPanel() {
		return `<div>
		<button>TEST</button>
		<h3>Click on the button \"set Img\" to CHANGE settings </h3>
		
		</div>`;
	};

	getName() { return "AutoDownload"; }

	getDescription() { return "AutoDownload"; }

	getVersion() { return "1.0.0"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
	load() {
	}
	start() {

        function update(){
            var images = $('.anchor-3Z-8Bb.da-anchor.anchorUnderlineOnHover-2ESHQB.da-anchorUnderlineOnHover.imageWrapper-2p5ogY.da-imageWrapper.imageZoom-1n-ADA.da-imageZoom.clickable-3Ya1ho.da-clickable.embedWrapper-lXpS3L.da-embedWrapper').children('img');
   
            images.each( (index)=>{
                $(this).off('click').on('click', (e)=>{
                    console.log(e);
                });
            });


        }



        setInterval(update,100);
    }

    onSwitch(){
        console.log("Switch")
    }

    initialize() { }
    stop() { }
    
}