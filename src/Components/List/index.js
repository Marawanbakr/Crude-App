import React, { Component, Fragment } from "react";

export default class List extends Component {
  state = {
    Edite: false,
  };

  renderCoures = () => {
    return (
      <li>
        <span>{this.props.info.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edite Course
        </button>
        <button
          onClick={() => {
            this.props.Delete(this.props.id);
          }}
        >
          {" "}
          Delete Course
        </button>
      </li>
    );
  };
  focusMethod = function getFocus() {
    document.getElementById().focus();
  };

  // Toggle State
  toggleState = () => {
    let { Edite } = this.state;
    this.setState({
      Edite: !Edite,
    });
  };

  updateCouresItem = (e) => {
    e.preventDefault();
    this.props.editeCoures(this.props.id, this.input.value);
    this.toggleState();
  };
  //    handleFocus(){
  //     searchInput.current.focus()
  //   }

  //render Update Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCouresItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.info.name}
        />
        <button>Update Course</button>
      </form>
    );
  };
  render() {
    let { Edite } = this.state;
    return (
      <Fragment>
        {Edite ? this.renderUpdateForm() : this.renderCoures()}
      </Fragment>
    );
  }
}
