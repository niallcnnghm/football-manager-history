import React from 'react';

class SearchBar extends React.Component {
  
  state = { term: ''};
  
  onInputChange = (event) => {
    const value = event.target.value
    this.setState({ term: value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Manager search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}>
            </input>
          </div>
        </form>
      </div>
    )
  }
}
  
  export default SearchBar;