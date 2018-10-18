import React from 'react';


class NewService extends React.Component {
  state = {
    name: '',
    description: '',
    price:'',
   
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.description.trim() && this.state.price.trim()) {
      this.props.onAddService(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
    description: '',
    price:'',
   
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="price"
              className="form-control"
              name="price"
              onChange={ this.handleInputChange }
              value={ this.state.price }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="description"
              onChange={ this.handleInputChange }
              value={ this.state.description}>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Service</button>
            <button  type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewService;