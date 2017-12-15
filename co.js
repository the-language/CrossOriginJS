//  CrossOriginJS
//  Copyright (C) 2017  Zaoqi

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
var _$CB$z=[];
var http_get=(function(){
var host="http://zaoqi.byethost7.com"
function alloc_cb() {
	for(var i=0;i<_$CB$z.length;i++) {
		if(_$CB$z[i]===null) {
			return i;}}
	return _$CB$z.length;
}
function http_get(file, callback) {
	var cb=alloc_cb();
	var script=document.createElement('script');
	_$CB$z[cb]=function(x) {
		_$CB$z[cb]=null;
		document.body.removeChild(script);
		callback(x);};
	script.src=host+"/get.php?cb="+encodeURIComponent("_$CB$z["+cb+"]")+"&x="+encodeURIComponent(file);
	document.body.appendChild(script);
}
return http_get;
})();
