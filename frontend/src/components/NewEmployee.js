import React from 'react';
import axios from 'axios';
const apiUrl = 'http://localhost:5000/employees';
class NewEmployee extends React.Component {

  constructor(){
    super(); 
    this.state= {
      firstname: '',
      lastname: '',
      job: '',
      description: '',
      img:''
    }
  }
  
  handleInputChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value  
    })
  }
  handleSubmit = (e)=>{ 
    e.preventDefault();
 
    axios.post( `${apiUrl}/add`,this.state)
     .then((result) => {
      console.log('success' , result) 
     })
     .catch((err)=>{  
      console.log("err", err ); 
          }); 
  } 
  fileChangedHandler = (e)=>{

    var file  =   e.target.files[0]; 
    let data = new FormData()
    data.set('file', file);  
    this.setState({
      img: data
    })
     axios.post( `${apiUrl}/file`, data )
      .then((result) => {
       console.log('succeess' , result) 
      })
      .catch((err)=>{ 
        console.log('errr', err )
      });
  } 
  handleReset = () => {
    this.setState({
        firstname: '',
        lastname: '',
        job: '',
        img: '',
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
 
  <input
  type="file"
  placeholder="path"
  className="form-control"
  name="file"
onChange={this.fileChangedHandler } 

/>
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
