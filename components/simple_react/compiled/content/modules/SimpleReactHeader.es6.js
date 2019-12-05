// 0d3ed249c7b00dec3a17221c05148d40
// Compiled from components/simple_react/content/modules/SimpleReactHeader.es6.js
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SimpleReactHeader = function (_React$Component) {
	_inherits(SimpleReactHeader, _React$Component);

	function SimpleReactHeader() {
		_classCallCheck(this, SimpleReactHeader);

		return _possibleConstructorReturn(this, (SimpleReactHeader.__proto__ || Object.getPrototypeOf(SimpleReactHeader)).apply(this, arguments));
	}

	_createClass(SimpleReactHeader, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var myButtonLabel = this.props.shouldToggleDetails ? "toggle is now on" : "toggle is off";

			return React.createElement(
				"div",
				{ className: "simple-react-header" },
				React.createElement(
					"div",
					{ className: "simple-react-header-left" },
					"HEADER"
				),
				React.createElement(
					"div",
					{ className: "simple-react-header-right" },
					React.createElement(
						"button",
						{ "class": "btn btn-default" + (this.props.shouldToggleDetails ? " btn-active" : ""), onClick: function onClick(evt) {
								_this2.props.stateUpdateFunction(evt);
							} },
						myButtonLabel
					)
				)
			);
		}
	}]);

	return SimpleReactHeader;
}(React.Component);

module.exports = SimpleReactHeader;
