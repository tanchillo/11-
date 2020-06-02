import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Card from './Components/Card/Card';

class App extends Component {
    state = {
        cards: [
            {
                id: 0,
                name: 'one',
                status: 1
            },
            {
                id: 1,
                name: 'two',
                status: 0
            },
            {
                id: 2,
                name: 'three',
                status: 1
            },
            {
                id: 3,
                name: 'four',
                status: 0
            },
            {
                id: 4,
                name: 'five',
                status: 1
            },
            {
                id: 5,
                name: 'six',
                status: 0
            },
            {
                id: 6,
                name: 'seven',
                status: 1
            },
            {
                id: 7,
                name: 'eight',
                status: 0
            },
            {
                id: 8,
                name: 'nine',
                status: 1
            },
            {
                id: 9,
                name: 'ten',
                status: 0
            }
        ],
        value: ''
    };

    handleInput = (event) => {
        const newName = event.target.value;

        this.setState({
            value: newName
        })
    };


    addCardHandler = (event) => {
      event.preventDefault();
      // const cards = [...this.state.cards];
      // const index = cards.length - 1;
      //
      // const random = Math.floor(Math.random() * 2);
      //
      // const newCard = {
      //     id: index + 1,
      //     name: this.state.value,
      //     status: random
      // };
      //
      //   console.log(`added id ${newCard.id}`);
      //
      // cards.push(newCard);
      //
      // this.setState({
      //   cards,
      //   value: ''
      // })
      //
        const random = Math.floor(Math.random() * 2);

        this.setState(prevState =>({
            // ...prevState,
            cards: [...prevState.cards, {id: prevState.cards[prevState.cards.length - 1].id + 1, name: prevState.value, status: random}]
            // Мы берем массив cards  из state. После чего делаем копию его предыдущего состояния и работаем с ней
            // В эту копию мы пушим новый обьект, с параметрами, заменяя state на prevstate и после чего пушим
            // Предыдущее состояние в исходны массив, чтобы не было ошибок (С удалением по id, например)
        }))
    };

    deleteCardHandler = (deleteIndex) => {
        const cards = this.state.cards.filter(card => card.id !== deleteIndex);
        // Мы передаем в эту переменную новый массив, ключ id которого не равен текущему в картончке
        // Например нажимаем на карточку с id 2, и у нас создается новый массив, уже без id=2 и мы его перезаписываем

        this.setState({
            cards
        })

    };

    render() {
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <h1>Hello</h1>
                    </Row>
                    <Row>
                            {  this.state.cards.map((card, index) => {
                                return(
                                    <Col key={index} lg={3} md={6} xs={12}>
                                        <Card
                                            id={card.id}
                                            name={card.name}
                                            status={card.status}
                                            deleteCard={() => this.deleteCardHandler(card.id)}
                                        />
                                    </Col>
                                )
                            }) }
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId="newCard">
                                <Form.Label>Add new Card</Form.Label>
                                <Form.Control type="text" placeholder="Enter card name" onChange={this.handleInput} value={this.state.value}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.addCardHandler}>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;