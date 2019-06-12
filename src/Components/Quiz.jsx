import React from 'react'
import Select from 'react-select'
import initialCharacterArray from './list.json'
// import Myquote from './Myquote'


export default class Quiz extends React.Component {
    state = {
        persons: [],
        myquizquote: '',
        response:''
    }

    componentDidMount() {
        this.setState({
            persons: initialCharacterArray,
            myquizquote: initialCharacterArray[Math.floor(Math.random() * initialCharacterArray.length)]
        });

    }

    nameListInReactSelectFormat = persons => persons.map(item => ({
         "label": item.character, "value": item.character,
    }))
    


    handleChange = (selectedOption) => {
        this.setState({ response:  selectedOption.value});
        // console.log(`Option selected:`, selectedOption.value);
        // console.log(this.state.myquizquote.quote)

      };

    render() {
        const {persons, myquizquote} = this.state
        // console.log(myquizquote)
        if (myquizquote === undefined) {
            return null
        } else {
            return (
                <div>
                    {/* <Myquote/> */}
                    <p>{myquizquote.quote}</p>
                    <Select onChange={this.handleChange} options={this.nameListInReactSelectFormat(persons)}/>
                    {/* <button onClick = {()=> {this.checkifcharacterquote()}}>Valide</button> */}
                </div>
            )
        }
    }
}
