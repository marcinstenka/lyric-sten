import React, { Component } from 'react'

const Context = React.createContext();
const reducer = (state, action) =>{
    switch(action.type){
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list: action.payload,
                text: 'Search Results'
            };
            default:
                return state;
    }
}
export class Provider extends Component {
    state={
        text: "Top 10 tracks",
        track_list: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    componentDidMount(){
        const API='https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get&page=1&page_size=10&country=en&f_has_lyrics=1&apikey=9709031de6e1b1d486ab097b08ab1783';
        fetch(API)
        .then(response => response.json())
        .then(response => {
            this.setState({
                track_list: response.message.body.track_list
            })
        })
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;