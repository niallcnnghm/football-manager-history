import React from 'react';
import SearchBar from './SearchBar';
import manager from '../apis/managers';
import ManagerList from './ManagerList';

class App extends React.Component {
  state = { managers: [] };

  onTermSubmit = async (term) => {
    const response = await manager.get(term)
    
    this.setState({ managers: response.data.api.coachs })
  };

  render() {
    return (
      <>
        <div className="ui container">
        <div className="ui header">
          <i class="futbol icon"></i>
          <div class="content">
            Football manager history
          </div>
        </div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <ManagerList managers={this.state.managers} />
        </div>
      </>
    )
  };
}

export default App;