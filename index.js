var path = require('path'),
	fs = require('fs');
	
function malta_json_uglify(o, options) {

	var self = this,
		start = new Date(),
		msg = "",
        pluginName = path.basename(path.dirname(__filename)),
        obj;

	o.content = o.content
		.replace(/(^[\s|\t]*\/\*.*\*\/)\n/m, '')// multi-line comments
        .replace(/(^[\s|\t]*\/\/.*)\n/m, '')	// single-line comments
    
    eval('obj = ' + o.content + ';');
    o.content = JSON.stringify(obj);
	
	return function (solve, reject){
		try {
			fs.writeFile(o.name, o.content, function(err) {
				err && self.doErr(err, o, pluginName);
				msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';
				err
                    ? reject(`Plugin ${pluginName} write error:\n${err}`)
                    : solve(o);
				self.notifyAndUnlock(start, msg);
			});	
		} catch(err) {
            reject(`Plugin ${pluginName} minification error:\n${err}`)
			self.doErr(err, o, pluginName);
		}
	};
}
malta_json_uglify.ext = ['json'];
module.exports = malta_json_uglify;