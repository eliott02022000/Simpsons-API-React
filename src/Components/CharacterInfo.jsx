import React from 'react';


const CharacterInfo = (props) => {
    const personinfo = props.personinfo
    return (
        <div>
            <h2>{personinfo.character}</h2>
            <img src={personinfo.image} alt="Simpson"/>
            <p>{personinfo.quote}</p>
        </div>
    );
}

export default CharacterInfo;