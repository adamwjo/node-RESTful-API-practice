import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

export default class ProductList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'name1', price: 10},
            { id: uuid(), name: 'name2', price: 11},
            { id: uuid(), name: 'name3', price: 12},
            { id: uuid(), name: 'name4', price: 13}
        ]
    }
    render(){
        const { items } = this.state
        return(
            <Container>
                <Button 
                    onClick={() => {
                        const name = prompt('Enter Item')
                        if (name) {
                            this.setState((state) => ({
                                items: [...state.items, {id: uuid(), name: name}]
                            }))
                        }
                    }}
                    color='dark' 
                    style={{marginBottom: '2rem'}}>
                    Add Item
                </Button>
            </Container>
        )
    }
}