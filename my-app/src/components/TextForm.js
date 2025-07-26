import React,{useState} from 'react'

export default function TextForm(props) {
  const clickUpperButton=()=>{
    let textupdated=oldtext.toUpperCase();
     newText(textupdated);
  }
  const handleOnChange=(event)=>{
    newText(event.target.value);
  }
  const clearText=()=>{
    newText("");
  }
  const replaceText=()=>{
    let findValue=prompt("Enter word whom you want to replace");
    let find=oldtext.includes(findValue);
    if(find)
    {
      let newValue=prompt("Enter the new word");
      let updatedValue=oldtext.replaceAll(findValue,newValue);
      newText(updatedValue);
    }
    else
    {
      alert("Word not found");
    }
  }
  const clickLowerButton=()=>{
    let textupdated=oldtext.toLowerCase();
    newText(textupdated);
  }
  const[oldtext,newText]=useState('');
  return (
    
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control"  value={oldtext} id="mybox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="buttontext mx-1" onClick={clickUpperButton} >Convert To Upper Case</button>
        <button className="buttontext mx-1" onClick={clickLowerButton}>Convert To Lower Case</button>
        <button className="buttontext mx-1" onClick={clearText}>Clear Text</button>
        <button className="buttontext mx-1" onClick={replaceText}>Find and Replace Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{oldtext.split(" ").length} words and {oldtext.length} characters</p>
            <p>{0.008*oldtext.split(" ").length} minutes</p>
    </div>
        <div className="container my-3">
      <h2>Bold Preview</h2>
      <p><strong>{oldtext}</strong></p>
    </div>

    </>
  )
}
