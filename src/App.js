import  React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { count: 0,
      name: "Mohammed"  };

    this.changeName = this.changeName.bind(this)
   }
   

   changeName(){
    this.setState({
      name : "Ali"
    })
   }

   changeCounter(op){
      if(op === "+"){
        this.setState({
          count: this.state.count + 1
        })
      }else if(op === "-"){
        this.setState({
          count: this.state.count - 1
        })
      }
   }

  render(){
    return (
      <div>   
        <Header />
        <div className="container">
          <div>
            <span className="m-2">Counter</span>
            <span className="badge badge-info">{this.state.count}</span>
          </div>

          <div>
            <span className="m-2">Name</span>
            <span className="badge badge-info">{this.state.name}</span>
          </div>
          <div>
            <button onClick={()=>this.changeCounter("+")} className="btn btn-outline-info m-2">Increase</button>
            <button onClick={()=>this.changeCounter("-")} className="btn btn-outline-info m-2">Decrease</button>
            <button onClick={this.changeName} className="btn btn-outline-info m-2">Change Name</button>
          </div>
        </div>

        <Footer />
      </div>
      );
  }

}

class Header extends React.Component {
  render(){
    return(
      <div>Header</div>
    );
  }
}

class Footer extends React.Component {
  render(){
    return(
      <div>Footer</div>
    );
  }
}

export default App;
