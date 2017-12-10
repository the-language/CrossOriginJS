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
var http_get=(function(){
var c=0;
function tmp(){
	c+=1;
	return "tmp"+c;
}
function http_get(file, callback) {
	var cbf=tmp();
	eval(cbf+"=("+callback.toString()+");");
	var script=document.createElement('script');
	var head=(document.getElementsByTagName('head'))[0];
	head.appendChild(script);
	script.src="http://zaoqi.byethost7.com/get.php?cb="+cbf+"&x="+file;
}
return http_get;
})();
