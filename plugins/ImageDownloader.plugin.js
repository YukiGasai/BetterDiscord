/**
 * @name ImageDownloader
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/ImageDownloader.plugin.js
 */

module.exports = class ImageDownloader {

    getSettingsPanel () {
        const fs = require('fs'); 
        const path = require('path');
		let html = fs.readFileSync( path.join(BdApi.Plugins.folder,'ImageDownloader.settings.html'),'utf8');
        return html;
    };
// UpdateSettings(CorrectPath(document.getElementById("PathInput0").value));
	getName() { return "ImageDownloader"; }

	getDescription() { return "Double clicking an Image will download it in a set folder."; }

	getVersion() { return "1.8.7"; }

	getAuthor() { return "L7Yuki Gasai"; }

	//legacy
	load() {
	}
	start() {
        const fs = require('fs');  
        const os = require('os');
        const path = require('path');
        const util = require("util");
        const https = require('https');

        var DownloaderSettings = {
            Path: []
        }
        
        function GetFolderPath(index){
            let Folder = BdApi.Plugins.folder;
            Folder = path.join(Folder, '../');
            Folder = path.join(Folder,'ImageDownloadegr'+index);
            return Folder;
        }
        
        function CretaeDirIfNotExists(Path) 
        {
            try{
                if (!fs.existsSync(Path)) {
                    fs.mkdirSync(Path, { recursive: true });
                }
                return true;
            }catch{
                return false;
            }
        }

        //Create and/or load config file
        function UpdateSettings(newPath, index)
        {
            DownloaderSettings.Path[index] = BdApi.loadData("ImageDownloader", "Path[" + index + "]");
            if(DownloaderSettings.Path[index] == undefined)
            {
                BdApi.saveData("ImageDownloader", "Path[" + index + "]", "" + GetFolderPath(index));
            }else if(newPath != undefined) 
            {
                 BdApi.saveData("ImageDownloader", "Path[" + index + "]", "" + newPath);
            }
            DownloaderSettings.Path[index] = BdApi.loadData("ImageDownloader", "Path[" + index + "]");
        }

        //Make sure Path ends with \
        function CorrectPath(Path , index)
        {
             // Create set Savedirectory if it doesn't exist
            let validPath = CretaeDirIfNotExists(Path);
            if(validPath != true)
            {
                BdApi.showToast("Path is not valid reset to standard Path" , {timeout:3000, type:"danger"});
                return GetFolderPath(index);
            }
            return Path;
        }

        //Save Image from Link to Path source https://medium.com/@onlineinerview/simple-function-in-node-js-to-save-image-from-url-to-local-disk-server-fd627ae7f6a6
        function saveImageToDisk(url, localPath) 
        {
            var file = fs.createWriteStream(localPath);
            https.get(url, function(response) {
                response.pipe(file);
            });
        }

        function CheckForChangedSettings(index)
        {
            var ConfigPath = BdApi.loadData("ImageDownloader", "Path[" + index + "]")
            if(DownloaderSettings.Path[index] != ConfigPath)
            {
                DownloaderSettings.Path[index] = ConfigPath;
                UpdateSettings(CorrectPath(ConfigPath, index) , index);
             
            }
        }

        function GetUrlFromTarget (event) {
            
            var BaseImageURL = event.currentTarget.src;              // get Link to Image
            if(BaseImageURL === undefined)return null;
            BaseImageURL = BaseImageURL.replace(/\?.*/,"");          // cut of extra Parameter
            var NameStart = BaseImageURL.lastIndexOf("/")+1;        
            var FullFileName  = BaseImageURL.substring(NameStart);   // get Name with Filetype
            var getFileTypeIndex = FullFileName.lastIndexOf(".");   
            var FileName  = FullFileName.slice(0,getFileTypeIndex);  // get Name without Filetype
            var FileType  = FullFileName.substring(getFileTypeIndex);// get Filetype to add Timestamp to Filename
            if( FileType[0] != ".") FileType = "." + FileType;
            return {
                    Url  : BaseImageURL,
                    Name : FileName + "-" + Math.round((new Date()).getTime() / 1000) + "-" + FileType
            }
        }

        function ShowSuccessToast()
        {
            var option = {
                type : "success",
                timeout : 500 
            }
            BdApi.showToast("Saved Image to Folder",option);
            $( this ).off( event );
        }

        function CopyToClipboard(ImgUrl)
        {
            
            var str = util.inspect(ImgUrl); 
            str =str.slice(1,str.length-1);
            if (platform.os.family == 'Windows')
            {
                require('child_process').spawn('clip').stdin.end(str);
            }else if (platform.os.family == 'Linux')
            {
                require('child_process').exec("echo " + str + " | xclip -selection clipboard");
            }
        }

        function AddEventsListeners()
        {

            CheckForChangedSettings(0);
            CheckForChangedSettings(1);

            $('img, video, svg').off('dblclick').on('dblclick', function(event) {
                event.preventDefault();
                event.stopPropagation();
                let info = GetUrlFromTarget(event);
                if(info !== null)
                {
                    saveImageToDisk(info.Url, path.join(DownloaderSettings.Path[0], info.Name));
                    CopyToClipboard(info.Url);
                    ShowSuccessToast();
                }
            });

            $('img, video, svg').off('mousedown').on('mousedown', function(event) {
                if (event.button == 1) {
                    event.preventDefault();
                    event.stopPropagation();
                    let info = GetUrlFromTarget(event);
                    if(info !== null)
                    {
                        saveImageToDisk(info.Url, path.join(DownloaderSettings.Path[1], info.Name));
                        CopyToClipboard(info.Url);
                        ShowSuccessToast();
                    }
                }
            });
                             
        }


        UpdateSettings(undefined, 0);
        UpdateSettings(undefined, 1);

        CretaeDirIfNotExists(DownloaderSettings.Path[0]);
        CretaeDirIfNotExists(DownloaderSettings.Path[1]);


        setInterval(AddEventsListeners, 1000)
    
        
    }
    stop(){}
}
