import React from 'react';
import CharacterInfo from "./CharacterInfo"
import initialCharacterArray from './list.json'


export default class PersonList extends React.Component {
    state = {
        persons: [],
        Filterbyvision: false,
        Filterbyfamily: false,
    }

    componentDidMount() {
        this.setState({
            persons: initialCharacterArray,
        });
    }

    resetState () {
        this.setState({
            persons: initialCharacterArray,
            Filterbyvision: false,
            Filterbyfamily: false,
        })
    }

    directionFilter = () => {
        const {persons} = this.state;
        this.setState({ persons: initialCharacterArray }, () => {
            console.log('state directionFilter', this.state.persons)
            console.log('var directionFilter', persons)
            const fileterArray = this.state.persons.filter(item => item.characterDirection ==="Left");
            this.setState({
                persons : fileterArray,
                Filterbyvision: true,
                Filterbyfamily: false,
            });
        });

    }

    FamilyFilter = () => {
        const {persons} = this.state;
        this.setState({ persons: initialCharacterArray }, () => {
            console.log('state FamilyFilter', this.state.persons)
            console.log('var FamilyFilter', persons)
            const substring = "Simpson";


            const filterfamily = this.state.persons.filter(item => item.character.includes(substring))
            this.setState({
                persons : filterfamily,
                Filterbyfamily: true,
                Filterbyvision: false,
            })
        })
    };
    

    render() {
        const {persons} = this.state
        // console.log(persons)
        if (this.state.Filterbyfamily === true) {
            return (
                <div>
                    <button onClick={() => this.directionFilter()}>See Right look</button>
                    <button onClick={() => this.resetState()}>Reset</button>
                    {persons.map((person, index) => <CharacterInfo key = {index} personinfo={person}/>)}
                </div>
            )
        }

        if (this.state.Filterbyvision === true) {
            return (
                <div>
                    <button onClick={() => this.resetState()}>Reset</button>
                    <button onClick={() => this.FamilyFilter()}>Only Simpson Family</button> 
                    {persons.map((person, index) => <CharacterInfo key = {index} personinfo={person}/>)}
                </div>
            )
        }

        return (
            <div>
                <button onClick={() => this.directionFilter()} >See left look</button>
                <button onClick={() => this.FamilyFilter()} >Only Simpson Family</button>
                {persons.map((person, index) => <CharacterInfo key = {index} personinfo={person}/>)}
            </div>
        )
    }
}