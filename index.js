'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RollCallForm = function (_React$Component) {
    _inherits(RollCallForm, _React$Component);

    function RollCallForm() {
        _classCallCheck(this, RollCallForm);

        return _possibleConstructorReturn(this, (RollCallForm.__proto__ || Object.getPrototypeOf(RollCallForm)).apply(this, arguments));
    }

    _createClass(RollCallForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "#" },
                    React.createElement(
                        "div",
                        { "class": "container" },
                        React.createElement(
                            "h1",
                            null,
                            "Roll Call"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u662F\u5426\u6709\u4FE1\u5F92\u7DE8\u865F: ",
                            React.createElement("input", { type: "checkbox", name: "check_member" })
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "label",
                                { "for": "member_id" },
                                React.createElement(
                                    "b",
                                    null,
                                    "\u7DE8\u865F"
                                )
                            ),
                            React.createElement("input", { type: "text", placeholder: "\u8ACB\u8F38\u5165", name: "member_id", required: true })
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "label",
                                { "for": "name" },
                                React.createElement(
                                    "b",
                                    null,
                                    "\u59D3\u540D"
                                )
                            ),
                            React.createElement("input", { type: "text", placeholder: "\u8ACB\u8F38\u5165", name: "name", required: true })
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "label",
                                { "for": "phone" },
                                React.createElement(
                                    "b",
                                    null,
                                    "\u96FB\u8A71\u865F\u78BC"
                                )
                            ),
                            React.createElement("input", { type: "text", placeholder: "\u8ACB\u8F38\u5165", name: "phone", required: true })
                        ),
                        React.createElement(
                            "div",
                            { "class": "clearfix" },
                            React.createElement(
                                "button",
                                { type: "submit", "class": "btn btn-primary", "data-toggle": "modal", "data-target": "#exampleModal" },
                                "\u5831\u5230"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RollCallForm;
}(React.Component);

var Message = function (_React$Component2) {
    _inherits(Message, _React$Component2);

    function Message() {
        _classCallCheck(this, Message);

        return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    _createClass(Message, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "modal fade", id: "exampleModal", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
                React.createElement(
                    "div",
                    { "class": "modal-dialog", role: "document" },
                    React.createElement(
                        "div",
                        { "class": "modal-content" },
                        React.createElement(
                            "div",
                            { "class": "modal-header" },
                            React.createElement(
                                "h5",
                                { "class": "modal-title", id: "exampleModalLabel" },
                                "\u5831\u5230\u6210\u529F"
                            ),
                            React.createElement(
                                "button",
                                { type: "button", "class": "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement(
                                    "span",
                                    { "aria-hidden": "true" },
                                    "\xD7"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "modal-body" },
                            "Jimmy \u5831\u5230\u6210\u529F"
                        ),
                        React.createElement(
                            "div",
                            { "class": "modal-footer" },
                            React.createElement(
                                "button",
                                { type: "button", "class": "btn btn-primary", "data-dismiss": "modal" },
                                "\u95DC\u9589"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Message;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(RollCallForm, null),
                React.createElement(Message, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));