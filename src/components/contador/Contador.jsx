import './Contador.css'
import React from 'react'

import Display from './Display'
import Buttons from './Buttons'
import Step from './Step'

export default class Contador extends React.Component {
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                
                <Step passo={this.state.passo} onStepChange={newStep => this.setState({ passo: newStep })} />

                <Display valor={this.state.valor} />
                
                <Buttons onInc={this.inc} onDec={this.dec} />
            </div>
        )
    }
}