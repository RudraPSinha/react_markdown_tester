import React, {useState} from 'react';
import './App.css';
import { Remarkable } from 'remarkable';

function App() {
  const initial_state = {
    value: "Enter *Markdown* code..."
  }

  let [input_value, set_input_value] = useState(initial_state);

  const raw = () => {
    const markdown_render = new Remarkable();
    return {__html: markdown_render.render(input_value.value)}
  }

  const change_input = (e) => {
    set_input_value({value:e.target.value})
  }

  return (
    <div className="App">
     <div className="input_box">
      <h2>Input box</h2>
      <textarea onChange={change_input} defaultValue={input_value.value} className="input_box_text"/>
     </div>
     <div className="output_box">
      <h2>Output box</h2>
      <div 
      dangerouslySetInnerHTML={raw()}
      className="output_box_text"
      ></div>
     </div>
    </div>
  );
}

export default App;
