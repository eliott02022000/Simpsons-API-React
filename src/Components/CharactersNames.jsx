import React from 'react';


const CharactersNames = (props) => {
    const personinfo = props.personinfo
    return (
        <div>
            <p>{personinfo.character}</p>
        </div>
    );
}

export default CharactersNames;