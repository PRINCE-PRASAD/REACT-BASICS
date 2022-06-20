import React, {useState} from "react"


export default function TextForm(props) {

const handleUpClick = () =>{
//   console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to Uppercase!", "success");
}

const handleLoClick = () =>{
  //   console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleClrText = () =>{
    //   console.log("Lowercase was clicked" + text);
      let newText = "";
      setText(newText)
      props.showAlert("Textbox cleared!", "danger");
    }
  

const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
}

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied from Textbox!", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extraspaces removed from Textbox!", "success");
}

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change state
    //setText("new text");  // Correct way to change the state

  return (

    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'#042743':'white',
          color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrText}>Clear Text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  );
}

//mx-1 and my-1 use for  responsiveness in btn