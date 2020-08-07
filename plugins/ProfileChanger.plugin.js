//META{"name":"ProfileChanger"}*//

class ProfileChanger {
	constructor () {

	}

	getName () {return "ProfileChanger";}

	getDescription () {return "Random Avatar";}

	getVersion () {return "1.0.0";}

	getAuthor () {return "L7Yuki Gasai";}




	//legacy
	load () {}


	start () {
    var myBatFilePath = "C:\\Users\\Richard\\Documents\\Razer Programme\\Discord\\RandomProfile.bat";

    const spawn = require('child_process').spawn;
    const bat = spawn('cmd.exe', ['/c', myBatFilePath]);

    bat.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
  }

	initialize(){}

	stop(){}

}
