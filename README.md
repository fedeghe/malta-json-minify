This plugin can be used on: **.json** files

Options : 
    - compress : default `false`

Sample usage:  

    malta app/source/data/books.json public/data -plugins=malta-json-minify

or in the .json file :

    "app/source/data/books.json" : "public/data -plugins=malta-json-minify"

or in a script : 

    var Malta = require('malta');
    Malta.get().check([
        'app/source/data/books.json',
        'public/data',
        '-plugins=malta-json-minify',
        '-options=showPath:false,watchInterval:500,verbose:0'
        ]).start(function (o) {
            var s = this;
            console.log('name : ' + o.name)
            console.log("content : \n" + o.content);
            'plugin' in o && console.log("plugin : " + o.plugin);
            console.log('=========');
        });
