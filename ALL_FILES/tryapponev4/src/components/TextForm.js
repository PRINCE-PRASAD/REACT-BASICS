import React, {useState} from "react"


export default function TextForm(props) {

const handleUpClick = () =>{
//   console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
}

const handleLoClick = () =>{
  //   console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClrText = () =>{
    //   console.log("Lowercase was clicked" + text);
      let newText = "";
      setText(newText)
    }
  

const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
}


    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change state
    //setText("new text");  // Correct way to change the state

  return (

    <>
    <div className="container">
<h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClrText}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
