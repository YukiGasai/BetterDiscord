/**
 * @name ImageDownloader
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/ImageDownloader.plugin.js
 */

module.exports = class ImageDownloader {

    getSettingsPanel () {
        return `
        <div>
            <h3>Full Path to SaveFolderLocation</h3>
            <input style="width:80%" placeholder="FULL PATH" id="PathInput"></input>
            <button onclick=' document.getElementById("PathInput").value  = BdApi.loadData("ImageDownloader", "Path");     '> LOAD </button>
            <button onclick=' BdApi.saveData("ImageDownloader", "Path", "" + document.getElementById("PathInput").value ); '> SAVE </button>
        </div>
        `;
    };
// UpdateSettings(CorrectPath(document.getElementById("PathInput").value));
	getName() { return "ImageDownloader"; }

	getDescription() { return "Double clicking an Image will download it in a set folder."; }

	getVersion() { return "1.8.7"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
	load() {
	}
	start() {
        var fs = require('fs');  
        var https = require('https');

        var DownloaderSettings = {
            Path: ""
        }
        
        //get Default Directory ..\BetterDiscord\ImageDownloads
        function GetFolderPath(){
            var Folder = BdApi.Plugins.folder;
            Folder = Folder.slice(0,Folder.lastIndexOf("\\"));
            Folder = Folder + "\\ImageDownloads\\";
            return Folder;
        }
        
       
        UpdateSettings(undefined);

         //Create and/or load config file
        function UpdateSettings(newPath)
        {
            DownloaderSettings.Path = BdApi.loadData("ImageDownloader", "Path");
            if(DownloaderSettings.Path == undefined)
            {
                BdApi.saveData("ImageDownloader", "Path", "" + GetFolderPath());
            }else if(newPath != undefined) 
            {
                 BdApi.saveData("ImageDownloader", "Path", "" + newPath);
            }
            DownloaderSettings.Path = BdApi.loadData("ImageDownloader", "Path");
        }

        //Make sure Path ends with \
        function CorrectPath(Path)
        {
            try{
                if(Path[Path.length - 1] != "\\" && Path != "")
                {
                    Path =  Path + "\\"
                }
                 // Create set Savedirectory if it doesn't exist
                if (!fs.existsSync(Path)) {
                    fs.mkdirSync(Path);
                }
                return Path
            }catch{
                return GetFolderPath();
            }
        }

        //Save Image from Link to Path source https://medium.com/@onlineinerview/simple-function-in-node-js-to-save-image-from-url-to-local-disk-server-fd627ae7f6a6
        function saveImageToDisk(url, localPath) 
        {
            var file = fs.createWriteStream(localPath);
            https.get(url, function(response) {
                response.pipe(file);
            });
        }

        function CheckForChangedSettings()
        {
            var ConfigPath = BdApi.loadData("ImageDownloader", "Path")
            if(DownloaderSettings.Path != ConfigPath)
            {
                DownloaderSettings.Path = ConfigPath;
                UpdateSettings(CorrectPath(ConfigPath));
             
            }
        }

        //Add Doubleclick listener to all Imges
        setInterval(AddEventsListeners, 1000)
    
        function AddEventsListeners()
        {

            CheckForChangedSettings();

            $('img, video').off('dblclick').on('dblclick', function (event) {
            
                var BaseImageURL = event.currentTarget.src;              // get Link to Image
                BaseImageURL = BaseImageURL.replace(/\?.*/,"");          // cut of extra Parameter
                var NameStart = BaseImageURL.lastIndexOf("/")+1;        
                var FullFileName  = BaseImageURL.substring(NameStart);   // get Name with Filetype
                var getFileTypeIndex = FullFileName.lastIndexOf(".");   
                var FileName  = FullFileName.slice(0,getFileTypeIndex);  // get Name without Filetype
                var FileType  = FullFileName.substring(getFileTypeIndex);// get Filetype to add Timestamp to Filename
                if( FileType[0] != ".") FileType = "." + FileType;
                saveImageToDisk(BaseImageURL, DownloaderSettings.Path + FileName + "-" + Math.round((new Date()).getTime() / 1000) + "-" + FileType);
                
                var option = {
                    type : "success",
                    timeout : 500 
                }
                BdApi.showToast("Saved Image to Folder",option);
                $( this ).off( event );
                 
            });
        }
    }
    stop(){}
}