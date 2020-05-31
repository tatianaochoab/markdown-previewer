import React from 'react';
import marked from 'marked';

let Preview = ({ textIni }) => {
    return (
        <section id='preview' className='card border-info mb-3 preview'>
            <label for='editor' className='p-3 mb-2 bg-info text-white font-weight-bold card-header'>Vista previa</label>
            <div className='card-body text-info' dangerouslySetInnerHTML={{ __html: marked(textIni) }}></div>
        </section>
    );
}

export default Preview;