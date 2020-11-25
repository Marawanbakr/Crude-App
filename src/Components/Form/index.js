import React ,{Component} from 'react';

class Form extends Component{
    componentDidMount() {
        console.log('hhhhhhhhhh')
        this.searchInput.focus();
      }
    render(){
    return(
            <form onSubmit={this.props.addCourse}>
                <input input ref={inputEl => (this.searchInput = inputEl)}  type="text" onChange={this.props.Update} value={this.props.NullInput}/>
                <button type="submit">Add Course</button>
            </form>
    )
    }
}
export default Form



// import React from 'react';

// const Form = (props) =>{
    
 
//     return(
//             <form onSubmit={props.addCourse}>
//                 <input type="text" onChange={props.Update} value={props.NullInput}/>
//                 <button type="submit">Add Course</button>
//             </form>
//     )
// }
// export default Form