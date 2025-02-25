import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'


var interval;


class Timer extends React.Component{  //component
    constructor(){
      super();
      this.state = {
        time: 10
      }
    }

    componentDidMount(){  //یک بار اول کار میسازه
        interval = setInterval(()=>{ //interval برای تغییر state
            this.setState({
              time: this.state.time - 1
            })
          }, 1000)
    }

    componentDidUpdate(){
        if (this.state.time == 0){  //وقتی به این زمان رسید تایمر متوقف میشود
            clearInterval(interval)
        }
    }

    componentWillUnmount(){
        
    }
  
    render(){
      return(
        <>
          <h2 className='timer'>
            {this.state.time}
          </h2>
          <button onClick={this.props.handleSetTitle}>click</button>
        </>
      )
    }
  }

export default Timer;