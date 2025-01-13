import React ,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
       // console.log("Uppercase btn clickes" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase" , "success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase" , "success");
    }
    const handleOnChange =(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick =()=>{
        let newText=" ";
        setText(newText);
        props.showAlert("clear the text" , "success");
     }
     const handleCopy =()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied" , "success");
     }
    const handleExtraSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspace removed" , "success");
    }
    
    const [text, setText] = useState('Enter text here');
  return (
    
    <div className='container'style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <>
      <h1>{props.heding}</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      value={text}
      id="myBox"
      rows={8}
      onChange={handleOnChange}
      style={{backgroundColor: props.mode==='dark' ? 'gray' : 'white',color:props.mode==='dark' ? 'white' : 'black'}}
      defaultValue={""}
    
    />
  </div>
  <button className="btn.btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn.btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn.btn-primary mx-1" onClick={handleClearClick}>Clear</button>
  <button className="btn.btn-primary mx-1" onClick={handleCopy}>Copy</button>
  <button className="btn.btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    <div className='container my-3'style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}) .length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview Text</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
</>
</div>

  )
}
