import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:'',
      list : []
    };
  }

addItem(nameValue){
  if(nameValue !== ''){
    const newItem ={
      id: Date.now(),
      value: nameValue,
      isDone: false
    }
    const list =[...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:''
    });
 }
}

updateInput(input){
  this.setState({newItem:input})
}
render(){
    return(
      <div className='app-title'>
      <h1 >  Name Add</h1>
        
        <div className='container1' >
       <input 
          type="text" 
          className='input-text'
          placeholder='Place Enter Name' 
          required
          value={this.state.newItem}
          onChange={e=> this.updateInput(e.target.value)}
            />
            <button 
            className='add-btn'
            onClick={()=> this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >enter
            </button>
            </div>
            <div className="list">
              <ul>
              {this.state.list.map(item=>{
                return(
                  <div>
                  <li key={item.id}>
               
                    {item.value}
                    
                  </li>
                  </div>
                )
              })}
               
              </ul>
            </div>
        
      </div>
    )
  }
}

export default App;
