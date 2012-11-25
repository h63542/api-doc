/**
 * angular UI Directive建议流程：jQuery组件->angular组件，保证jQuery组件的完整性
 */

define(function (require,exports,module) {
	exports.pagelet = {
		id:'',
		defaultState:"",
		model:{},
		states:{
		}
	};
	exports.init = function(){
		var $ = require('$');
		var artTemplate = require("template");

		var horizotalNavMenuDirective = ["",function () {
			return {
				name:"horizotalNavMenu",
				restrict:"E",
				scope:{
					menuList:'=',
					id:'@'
				},
				template:"<ul id='{{id}}' class='menu-nav f-fleft' ng-transclude>  </ul>",
				compile:function  (tElement, tAttrs, transclude) {
					return function  (scope, iElement, iAttrs) {
						$(iElement).horizotalNavMenuInit(scope.menuList);
					}
				},
				controller:function  ($scope,$element,$attrs) {
				}
			}
		}];
		console.log("222222");
		var angularModule = require("angularModule")
		//angularModule.mvcModule.directive("horizotalNavMenu",horizotalNavMenuDirective);
		angularModule.angular.module("ui",[]).directive("horizotalNavMenu",horizotalNavMenuDirective);
		console.log("333333333");
		exports.horizotalNavMenu = horizotalNavMenuDirective;
		console.log(require("angularModule").mvcModule);
	}	

	var $ = require("$");
	//jQuery Menu
	$.fn.horizotalNavMenuInit = function(options) {    
  	// Our plugin implementation code goes here.    
		var menuList = options.menuList || {};
		var template = "<% for (var i = 0, len = menuList.length; i < len; i++) { %> \
						<li class=\"selected\"> \
							<a href=\"/document/\"><%= menuList[i].name %></a><span class=\"f-ib w-horn\">&nbsp;</span> \
							<span class=\"selected-tag\"></span> \
						</li> \
						<% } %>";
		var render = template(tpl);

		var markup = render({
		    "menuList": menuList
		});				
		$this.html(markup)
	};   
})