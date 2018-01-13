'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTicket = function (_React$Component) {
  _inherits(AddTicket, _React$Component);

  function AddTicket() {
    _classCallCheck(this, AddTicket);

    return _possibleConstructorReturn(this, (AddTicket.__proto__ || Object.getPrototypeOf(AddTicket)).apply(this, arguments));
  }

  _createClass(AddTicket, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Add New Ticket'
        ),
        React.createElement(InputField, null)
      );
    }
  }]);

  return AddTicket;
}(React.Component);

var InputField = function (_React$Component2) {
  _inherits(InputField, _React$Component2);

  function InputField() {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).apply(this, arguments));
  }

  _createClass(InputField, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            'Title'
          ),
          React.createElement('input', null)
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            'Description'
          ),
          React.createElement('input', null)
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            'Assignee'
          ),
          React.createElement('input', null)
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            'Criticality'
          ),
          React.createElement('input', null)
        ),
        React.createElement(
          'button',
          null,
          'Submit'
        ),
        React.createElement(
          'button',
          null,
          'Cancel'
        )
      );
    }
  }]);

  return InputField;
}(React.Component);

ReactDOM.render(React.createElement(AddTicket, null), document.getElementById('app'));
