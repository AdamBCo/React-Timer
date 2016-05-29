var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = React.createClass({
  render : function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://adambcooper.com" target="_blank">Adam Cooper</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;


// <div>
//   <h2>Navigation Component</h2>
//   <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
//   <Link to="/about" activeClassName="active">About</Link>
//   <Link to="/examples" activeClassName="active">Examples</Link>
// </div>
