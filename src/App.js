import React, {Component} from 'react'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import './App.css';
import AddTodo from './components/AddTodo';
import  {v4 as uuid} from "uuid"; 
import axios from 'axios'


class App extends Component {
  state = {
    Todos:[]
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res=>this.setState({Todos: res.data}))

  }

  markComplete=(id)=>{
    this.setState({Todos:this.state.Todos.map((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  //Delete todo
  delTodo = (id)=>{
    this.setState({Todos:[...this.state.Todos.filter(todo=>todo.id!==id)]})
  }
  // Add todo
  addTodo = (title)=>{
    const newTodo = {
      id:uuid(),
      title,
      completed:false
    }
    this.setState({ Todos: [...this.state.Todos, newTodo]});
   
  }
  render(){
    //console.log(this.state.Todos)
    return (
      <div className="App">
        <div className='container'>
        <Header/>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos = {this.state.Todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </div>
        
        
  
      </div>
    );

  }
  
}

export default App;
