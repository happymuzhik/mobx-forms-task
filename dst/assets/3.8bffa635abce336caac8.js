webpackJsonp([3],{

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayDataForm = (_dec = (0, _mobxReact.inject)('appStore'), _dec(_class = function (_Component) {
    _inherits(PayDataForm, _Component);

    function PayDataForm() {
        _classCallCheck(this, PayDataForm);

        return _possibleConstructorReturn(this, (PayDataForm.__proto__ || Object.getPrototypeOf(PayDataForm)).apply(this, arguments));
    }

    _createClass(PayDataForm, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var form = this.props.appStore.payDataForm;
            form.getField(e.target.name).onChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var form = this.props.appStore.payDataForm;
            var cardNumber = form.getField('card_number');
            return _react2.default.createElement(
                'form',
                { className: 'form' },
                _react2.default.createElement(
                    'h3',
                    null,
                    form.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-row' },
                    _react2.default.createElement('input', {
                        onChange: this.handleChange.bind(this),
                        name: cardNumber.name,
                        placeholder: cardNumber.placeholder,
                        defaultValue: cardNumber.defaultValue,
                        type: cardNumber.type })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-row' },
                    _react2.default.createElement(
                        'button',
                        null,
                        'Next'
                    )
                )
            );
        }
    }]);

    return PayDataForm;
}(_react.Component)) || _class);
exports.default = PayDataForm;
;

/***/ })

});