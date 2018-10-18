import React from 'react';

class NewEmployee extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    job: '',
    photo: '',
    description: ''
  };
  fileChangedHandler = e => {
    this.setState({photo :e.target.files[0]})
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.firstname.trim() && this.state.lastname.trim() &&  this.state.job.trim()) {
      this.props.onAddEmployee(this.state);
      console.log(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
        firstname: '',
        lastname: '',
        job: '',
        photo: '',
        description: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Firstname"
              className="form-control"
              name="firstname"
              onChange={ this.handleInputChange }
              value={ this.state.firstname }
            />
          </div>
          <div className="form-group">
          <input
          type="text"
          placeholder="Lastname"
          className="form-control"
          name="lastname"
          onChange={ this.handleInputChange }
          value={ this.state.lastname}
        />
      </div>
      <div className="form-group">
      <input
      type="text"
      placeholder="job"
      className="form-control"
      name="job"
      onChange={ this.handleInputChange }
      value={ this.state.job }
    />
  </div>
  <div className="form-group">
 
  <input
  type="file"
  placeholder="path"
  className="form-control"
  name="photo"
onChange={this.handleInputChange} 

/>
</div>

  
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Description"
              className="form-control"
              name="description"
              onChange={ this.handleInputChange }
              value={ this.state.description }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Employee</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewEmployee;