import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'

import Text from './Text'
import Timer from './Timer'


class App extends React.Component{  //component
    render(){
      return(
        // * class --> className
        // حتما باید یک تگ باز و بسته باشد. میتواند تگ بی نام باشد
        <div className='main'>  
          <Text/> 
          <Timer/>
        </div>
  
        // <>    با بالا برابر است
        //   <Text/>
        //   <Timer/>
        // </>
      )
    }
  }

export default App;