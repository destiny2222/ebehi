const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const Menu = electron.Menu;
let win;
function createWindow(){

	win = new BrowserWindow();
	win.setIcon(path.join(__dirname, 'icon.png'));
	win.maximize();
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'Login/index.html'), 
		protocol: 'file',
		slashes: true

	}));
	win.webContents.openDevTools();
	win.on('closed', ()=>{
		win=null;
	})
}

ipc.on('test', function(event){
	dialog.showErrorBox('test title', 'an error encountered');
})


app.on('ready', function(){
	createWindow();
	const template = [
	// {
	// 	'label':'file',

	// 	submenu:[
	// 	{
	// 		'label':'submenu1',
	// 		click: function(){
	// 			console.log('click');
	// 		},
	// 		accelerator: 'CmdOrCtrl + shift + A'
	// 	},



	// 	{
	// 		'label':'submenu2',
	// 		click: function(){
	// 			console.log('clicked again');
	// 		},
	// 		accelerator: 'CtrlOrCmd + shift + B'
	// 	},

	// 	]
		

	// }


	]
	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu)


});

app.on('window-all-closed', ()=>{
	if (process.platform!=='darwin'){
		app.quit();
	}
});

app.on('activate', ()=>{
	if (win===null){
		createWindow();

	}
});