var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.location.value = "";
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },
  render : function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search Weather By City"/>
                </li>
              <li>
                <button type="submit" className="button" value="Get Weather">Search</button>
              </li>
            </ul>
          </form>
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
