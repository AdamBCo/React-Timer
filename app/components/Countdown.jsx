var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Countdown = React.createClass({
  render : function () {
    return (
      <div>
        <h1>Countdown</h1>
        <Clock totalSeconds={129}/>
        <Controls />
      </div>
    );
  }
});

module.exports = Countdown;
