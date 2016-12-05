var path = require('path'),
	fs = require('fs');
	
function malta_json_uglify(o, options) {

	var self = this,
		start = new Date(),
		msg = "",
		pluginName = path.basename(path.dirname(__filename));

	o.content = o.content
		.replace(/\"\s*(:|,)\s*\"/g, '"$1"')
		.replace(/,\n/g, ',')
		.replace(/\s{2,}/g, ' ')
		.replace(/[\n|\t]/g, '');
	
	return function (solve, reject){
		try {
			fs.writeFile(o.name, o.content, function(err) {
				err && self.doErr(err, o, pluginName);
				msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';
				solve(o);
				self.notifyAndUnlock(start, msg);
			});	
		} catch(err) {
			self.doErr(err, o, pluginName);
		}
	};
}
malta_json_uglify.ext = ['json'];
module.exports = malta_json_uglify;