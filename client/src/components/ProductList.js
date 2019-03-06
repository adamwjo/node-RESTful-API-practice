import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../redux/actions/productActions';
import propTypes from 'prop-types';


class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    deleteHandler = (id) => {
        this.props.deleteProduct(id)
    }
    
    render(){
        const { products } = this.props.productState
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='small'
                                    onClick={this.deleteHandler.bind(this, id)}
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



export default connect(
    mapStateToProps,
    {
        getProducts,
        deleteProduct
    }
)(ProductList)