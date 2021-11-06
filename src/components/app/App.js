import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBondary from "../errorBondary/ErrorBondary";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                   <ErrorBondary>
                        <RandomChar/>
                   </ErrorBondary>
                    <div className="char__content">
                        <ErrorBondary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBondary>
                        <ErrorBondary>
                            <CharInfo charId={this.state.selectedChar}/>        
                        </ErrorBondary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;