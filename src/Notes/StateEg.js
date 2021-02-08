//==========stateless vs stateful==========
//a stateful button will look like this: using a Button component
import React, { Component } from 'react';

class ButtonCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            clicks:0
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    render() {
        return(
            <ButtonCounter onClick={this.handleClick}
                text={`You've clicked me ${this.state.clicks} time!`}
            />
        )
    }
}

// https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82