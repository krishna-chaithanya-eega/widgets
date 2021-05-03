import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];
const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <>
            <div>
                <div className="ui form">
                    <div className="ui field">
                        <label>Enter Text</label>
                        <input onChange={(e) => setText(e.target.value)} value={text} />
                    </div>
                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label="Select Language" />
            <hr/>
            
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>

        </>
    );

}

export default Translate;