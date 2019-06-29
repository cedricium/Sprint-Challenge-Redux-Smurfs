import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import { getSmurfs, addSmurf } from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: 0,
    height: '',
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <form>

        </form>
        <ul>
          {this.props.smurfs.map(smurf => (
            <li key={smurf.id}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingData: state.fetchingData,
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App)
