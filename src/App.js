import React, {Component} from 'react';
import App2 from "./Compoonents/Comp1"
// import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }
    render() { 
        return ( 
            <Slide top>
            <div className="App">
                <App2/>
            </div>
            </Slide>
         );
    }
}
 
export default App;