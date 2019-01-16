import React, {Component} from 'react'

class SearchBar extends Component {
  state = {term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              placeholder = "clothing amazon uber"
              onChange={ e => this.setState({term: e.target.value})}
              />
          </div>
          <div>
            {this.state.term}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
