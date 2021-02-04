import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    // console.log('render input !!!!!!!!',  this.props.success, this.props);
    const contents = this.props.success ? null : (
      
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          // id="word-guess"
          // value={this.state.currentGuess}
          // onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
        />
        <button
          data-test="submit-button"
          // onClick={(evt) => this.submitGuessedWord(evt)}
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    // console.log('xxxxxx - before component-input');
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);


 