//  CrossOriginJS
//  Copyright (C) 2017-2018  Zaoqi

//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as published
//  by the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.

//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
var _$CO$_=[];
var CrossOrigin=(function(){
var host="";
throw "請填寫CrossOrigin-host";

var uri=encodeURIComponent;

var scripts=[];
var free_cbs=[];
function uri_cb(callback){
	var i=free_cbs.pop();
	if(i===null){i=_$CO$_.length;}
	_$CO$_[i]=function(x){
		_$CO$_[i]=null;
		free_cbs.push(i);
		callback(x);};
	return uri("_$CO$_["+i+"]");}
function alloc_script(src){
	var script=scripts.pop();
	if(script===null){
		script=document.createElement('script');
		script.src=src;
		document.body.appendChild(script);
		return script;
	}else{
		script.src=src;
		return script;}}
function free_script(x){scripts.push(x);}

function http_get(file, callback, onerr) {
	var script;
	var cb=uri_cb(function(x){
		free_script(script);
		if(x===false) {
			onerr&&onerr();
		} else {
			callback(x);}});
	script=alloc_script(host+"/get.php?cb="+cb+"&x="+uri(file););}
return {get: http_get};})();
