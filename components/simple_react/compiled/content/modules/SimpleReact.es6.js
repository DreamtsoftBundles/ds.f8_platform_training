// c258be70c09fe37e667f1c76fac89975
// Compiled from components/simple_react/content/modules/SimpleReact.es6.js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var F8ReactComponent = require('react-core/F8ReactComponent');
var SimpleReactBody = require("simple_react/SimpleReactBody");
var SimpleReactHeader = require("simple_react/SimpleReactHeader");

var SimpleReact = function (_F8ReactComponent) {
	_inherits(SimpleReact, _F8ReactComponent);

	function SimpleReact(props) {
		_classCallCheck(this, SimpleReact);

		return _possibleConstructorReturn(this, (SimpleReact.__proto__ || Object.getPrototypeOf(SimpleReact)).call(this, props));
	}

	_createClass(SimpleReact, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'simple-react-container' },
				React.createElement(SimpleReactHeader, { shouldToggleDetails: this.state.toggleDetails, stateUpdateFunction: this.stateUpdater.bind(this) }),
				React.createElement(SimpleReactBody, { shouldToggleDetails: this.state.toggleDetails })
			);
		}
	}, {
		key: 'stateUpdater',
		value: function stateUpdater() {
			this.setState({ toggleDetails: !this.state.toggleDetails });
		}
	}]);

	return SimpleReact;
}(F8ReactComponent);

module.exports = SimpleReact;
