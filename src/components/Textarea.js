import React from 'react';

let Editor = ({ textIni, changeText }) => {
    return (
        <section className='card border-info mb-3 editor'>
            <label for='editor' className='p-3 mb-2 bg-info text-white font-weight-bold card-header'>Editor</label>
            <textarea id='editor' className='card-body text-info' value={textIni} onChange={changeText}>
            </textarea>
        </section>
    );
}

export default Editor;