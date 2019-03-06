import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import propTypes from 'prop-types'


class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }
    
    render(){
        const { products } = this.props.productState
        return(
            <Container>
                <Button 
                    onClick={() => {
                        const name = prompt('Enter Item')
                        if (name) {
                            this.setState((state) => ({
                                products: [...state.products, {id: uuid(), name: name}]
                            }))
                        }
                    }}
                    color='dark' 
                    style={{marginBottom: '2rem'}}>
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='small'
                                    onClick={() => {
                                        this.setState(state => ({
                                            products: state.products.filter(item => item.id !== id)
                                        }))
                                    }}
                                >&times;</Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ProductList.propTypes = {
    getProducts: propTypes.func.isRequired,
    productState: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    productState: state.productState
})

export default connect(mapStateToProps, { getProducts })(ProductList);