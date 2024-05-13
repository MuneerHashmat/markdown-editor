import {Title, FormatBold, FormatItalic, AddLink, Code, AddPhotoAlternate, FormatListBulleted, SimCardDownload} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import { saveAs } from 'file-saver';

import "./MarkDown.css"

const MarkDownEditor=()=>{

    const [markDownText, setMarkDownText]=useState("");

    const addElement=(element)=>{
        setMarkDownText(currText=>currText+element)
    }

    const saveReadme = () => {
        const blob = new Blob([markDownText], { type: 'text/markdown;charset=utf-8' });
        saveAs(blob, 'README.md');
    };

     return(
        <div className='main-container'>
            <div className='left-container'>
                <div className='navbar'>
                    <div className='left-links'>
                        <button onClick={()=>addElement("### ")}><Title /></button>
                        <button onClick={()=>addElement("** **")}><FormatBold /></button>
                        <button onClick={()=>addElement("* *")}><FormatItalic /></button>
                    </div>
                    
                    <div className='right-links'>
                        <button onClick={()=>addElement("[](url)")}><AddLink /></button>
                        <button onClick={()=>addElement("` `")}><Code /></button>
                        <button onClick={()=>addElement("![](image url)")}><AddPhotoAlternate /></button>
                        <button onClick={()=>addElement("\n- ")}><FormatListBulleted /></button>
                        <button onClick={saveReadme}><SimCardDownload sx={{color: "red", backgroundColor:"#91fc8b", padding: "8px", borderRadius: "50%"}}/></button>
                    </div>
                </div>

                <textarea placeholder='Markdown goes here...' value={markDownText} onChange={(e)=>setMarkDownText(e.target.value)}>

                </textarea>
            </div>

            <div className='right-container'>
                <div className='preview'>
                    <span>Preview</span>
                </div>

                <div className='markdown'>
                   <ReactMarkdown>{markDownText}</ReactMarkdown> 
                </div>
            </div>
        </div>
     )
}

export default MarkDownEditor;