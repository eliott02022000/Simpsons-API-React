import React from 'react';
import initialCharacterArray from './list.json'


export default class Myquote extends React.Component {

    state = {
        persons: [],
    }

    componentDidMount() {
        this.setState({
            persons: initialCharacterArray,
        });
    }

    render() {
        const {persons} = this.state
        var myquizquote = persons[Math.floor(Math.random() * persons.length)];
        console.log(myquizquote)
        if (myquizquote === undefined) {
            return null
        } else { 
            return (
                <div>
                    <p>{myquizquote.quote}</p>
                </div>
            );
        }
    }
}