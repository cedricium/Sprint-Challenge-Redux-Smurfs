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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
    this.props.addSmurf({
      ...this.state
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{` `}
            <input
              type="text"
              name="name"
              placeholder="Lambda Smurf"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:{` `}
            <input
              type="number"
              name="age"
              placeholder={142}
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Height:{` `}
            <input
              type="text"
              name="height"
              placeholder="14 cm"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add Smurf" />
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
