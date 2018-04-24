---
[![npm version](https://badge.fury.io/js/malta-json-minify.svg)](http://badge.fury.io/js/malta-json-minify)
[![Dependencies](https://david-dm.org/fedeghe/malta-json-minify.svg)](https://david-dm.org/fedeghe/malta-json-minify)
[![npm downloads](https://img.shields.io/npm/dt/malta-json-minify.svg)](https://npmjs.org/package/malta-json-minify)
[![npm downloads](https://img.shields.io/npm/dm/malta-json-minify.svg)](https://npmjs.org/package/malta-json-minify)  
---  

This plugin can be used on: **.json** files

Options : 
    - compress : default `false`

Sample usage:  
```
malta app/source/data/books.json public/data -plugins=malta-json-minify
```
or in the .json file :
```
"app/source/data/books.json" : "public/data -plugins=malta-json-minify"
```
or in a script : 
``` js
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
```