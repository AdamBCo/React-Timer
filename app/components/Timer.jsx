var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  render : function () {
    return (
      <div>
        <h1>Timer</h1>
        <Clock />
        <Controls />
      </div>
    );
  }
});

module.exports = Timer;
