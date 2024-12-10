import { useState } from "react";


const ContentBody = ({mode,toggle,alertmsg}) =>{
    function toUpper() {
        textNext(text.toUpperCase());
    }
    function toLower(){
        textNext(text.toLowerCase());
    }
    function capitalizeWord(){
        let newWord = text
        .split(' ')
        .map(word=>word !=''? word.charAt(0).toUpperCase()+word.slice(1).toLowerCase():word)
        .join(' ');
        textNext(newWord);
        alertmsg("Capitalized","success")
    }
    function captializeSentence(){
        let splitSentence = text
        .split('.')
        .map(sentence=>{
            return sentence.trim().charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        })
        .join('. ')
        .trim();
        setappendWordCount(splitSentence);
    }
    function changeVal(event) {
        textNext(event.target.value);
    }
    function reset(){
        setappendWordCount('');
        textNext('Enter the Text Here')
    }
    const [text,textNext] = useState("Enter the Text Here");
    const [appendWordCount,setappendWordCount] = useState('');
    return(
        <>
        <div className="container my-3" style={{color: mode === 'primary'? 'black':'white'}}>
            <div className="mb-3" >

                <textarea style={{backgroundColor: mode === 'primary'? 'white':'#131313',color: mode === 'primary'? 'black':'white'}} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changeVal}></textarea>
                </div>
                <p><b>Word:</b> {text.trim().split(/\s+/).filter(word => word !== '').length} <b>Character: </b>{text.length}</p>
                <p>{appendWordCount}</p>
                <button className="btn btn-primary mx-2 my-2" onClick={toUpper}>UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={toLower}>LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={capitalizeWord}>Capitalize Word</button>
                <button className="btn btn-primary mx-2 my-2" onClick={captializeSentence}>Capitalize Sentence</button>
                <button className="btn btn-primary mx-2 my-2" onClick={reset}>Reset</button>
</div>
<div className="container my-5" style={{color: mode === 'primary'? 'black':'white'}}>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
        </>
    )
}

export default ContentBody;