webpackHotUpdate(0,{

/***/ 179:
/*!**************************************************!*\
  !*** ./src/component/router/Router.component.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import React from 'react';
	// import { Router,Route } from 'react-router';
	// import LoginComponent from '../login/Login.component';
	// import IndexComponent from '../index/Index.component';
	
	var IndexComponent = function (_React$component) {
	    _inherits(IndexComponent, _React$component);
	
	    function IndexComponent() {
	        _classCallCheck(this, IndexComponent);
	
	        return _possibleConstructorReturn(this, (IndexComponent.__proto__ || Object.getPrototypeOf(IndexComponent)).apply(this, arguments));
	    }
	
	    _createClass(IndexComponent, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                "index"
	            );
	        }
	    }]);
	
	    return IndexComponent;
	}(React.component);
	
	var LoginComponent = function (_React$component2) {
	    _inherits(LoginComponent, _React$component2);
	
	    function LoginComponent() {
	        _classCallCheck(this, LoginComponent);
	
	        return _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).apply(this, arguments));
	    }
	
	    _createClass(LoginComponent, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                "Login"
	            );
	        }
	    }]);
	
	    return LoginComponent;
	}(React.component);
	
	var RouterComponent = function (_React$component3) {
	    _inherits(RouterComponent, _React$component3);
	
	    function RouterComponent() {
	        _classCallCheck(this, RouterComponent);
	
	        return _possibleConstructorReturn(this, (RouterComponent.__proto__ || Object.getPrototypeOf(RouterComponent)).apply(this, arguments));
	    }
	
	    _createClass(RouterComponent, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                Router,
	                { history: hashHistory },
	                React.createElement(
	                    Route,
	                    { path: "/", component: LoginComponent },
	                    React.createElement(Route, { path: "/index", component: IndexComponent })
	                )
	            );
	        }
	    }]);
	
	    return RouterComponent;
	}(React.component);
	
	exports.default = RouterComponent;

/***/ }

})
//# sourceMappingURL=0.055adc310e730ca2eb82.hot-update.js.map