cordova.define("cordova/plugin/printPluginVar", function(require, exports, module) {
    printPluginVar = function(){
        var _file = 'base64';
        var _context = null;
    };
    printPluginVar.initialize = function(obj) {
        var _this = this;
    };

    printPluginVar.print = function(message, successCallback, errorCallback)
	{  
       cordova.exec(successCallback, errorCallback, "Print", "print", [message]);
	};
   	module.exports = printPluginVar;
});