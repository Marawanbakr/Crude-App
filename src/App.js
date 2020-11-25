import React, { Component ,  } from 'react'
import Form from './Components/Form/index';
import List from './Components/List/index';
import Color from './Components/colors/index'
import './App.css'


export default class App extends Component {
  
  componentDidMount() {
    console.log('bhbbbbvbb')
    this.addCourse()
  }
  state = {
    courses : [
      { name : "html"},
      { name : "css"},
      { name : "js"},
      { name : "php"},
      
    ],
    NewCourse : ''
  }

  

  //UbdateCourse 
  updateCourse =(e) => {
    this.setState({
      NewCourse:e.target.value
    })
  }
  
  //Add Course
  addCourse = () =>{
    // e.preventDefault();
    let {NewCourse} = this.state;
    let {courses} = this.state
    courses.push({name:NewCourse})
    if("" === ""){
      return<p> you should enter information</p>
    }else{
      // this.props.addCourse()
      this.setState({
        NewCourse:''
    })
    }
    }
  
  //DelteCourse
  deleteCourse = (id) =>{
    console.log(id)
     let {courses} = this.state;
     courses.splice(id , 1);
     this.setState({
       courses
      })
    }
    //  EditeCoures
    EditeCoures = (id , value) => {
    let {courses} = this.state;
    let course = courses[id];
    course['name'] = value;
    this.setState ({
      courses
    })
}

  render() {
    const {courses} = this.state;
    let {length} = courses;
    const courseList = length ?(
      courses.map((course , id) => {

        return <List componentDidMount={this.componentDidMount} info={course}key={id} update={this.handleChange} id={id} Delete={this.deleteCourse} editeCoures={this.EditeCoures}addCourse={this.addCourse} />
    })
    ):(
      <p>there is not course to show </p>
    )
   
    return (
      <div className="App">
        <div className="title"> Welcome To My Page</div>
        <Color />
        <h1>Add course</h1>
        <Form NullInput={this.state.NewCourse} Update={this.updateCourse} addCourse={this.addCourse} componentDidMount={this.componentDidMount} />
        <ul>{courseList}</ul>
      </div>
    )
  }
}
