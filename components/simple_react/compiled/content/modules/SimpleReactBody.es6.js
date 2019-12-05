// ecd03ec4aa1841e8003e9dc0afe71555
// Compiled from components/simple_react/content/modules/SimpleReactBody.es6.js
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SimpleReactBody = function (_React$Component) {
	_inherits(SimpleReactBody, _React$Component);

	function SimpleReactBody() {
		_classCallCheck(this, SimpleReactBody);

		return _possibleConstructorReturn(this, (SimpleReactBody.__proto__ || Object.getPrototypeOf(SimpleReactBody)).apply(this, arguments));
	}

	_createClass(SimpleReactBody, [{
		key: "render",
		value: function render() {
			var details = void 0;

			if (this.props.shouldToggleDetails) {
				details = React.createElement(
					"div",
					{ className: "simple-react-body-details-on" },
					React.createElement(
						"p",
						null,
						"My details 1"
					),
					React.createElement(
						"p",
						null,
						"My details 2"
					),
					React.createElement(
						"p",
						null,
						"My details 3"
					),
					React.createElement(
						"p",
						null,
						"My details 4"
					),
					React.createElement(
						"p",
						null,
						"My details 5"
					)
				);
			} else {
				details = React.createElement(
					"div",
					null,
					"Details turned off"
				);
			}

			return React.createElement(
				"div",
				{ className: "simple-react-body" },
				details
			);
		}
	}]);

	return SimpleReactBody;
}(React.Component);

module.exports = SimpleReactBody;
