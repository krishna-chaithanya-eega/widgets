import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = (props) => {

    const [translated, setTranslated] = useState('')
    useEffect(() => {

        const doTranslation = async () => {
            const res =await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: props.text,
                    target: props.language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
            }
            );
            setTranslated(res.data.data.translations[0].translatedText)
        };

        doTranslation();

    }, [props.language, props.text])

    return (
        <div className="ui header">
        <h1>{translated}</h1>

        </div>
    )


}
export default Convert;


