import React, {Component} from 'react';
import './Card.css'
import {Button} from "react-bootstrap";


class Card extends Component {
    render() {

        const inputClasses = ['Card'];
        this.props.status === 1 ? inputClasses.push('active') : inputClasses.push('disabled');

        return (
            <div className={inputClasses.join(' ')}>
                <h1>{this.props.id}</h1>
                <h3>{this.props.name}</h3>
                <Button variant="dark" onClick={this.props.deleteCard}>Удалить</Button>
            </div>
        );
    }
}

export default Card;