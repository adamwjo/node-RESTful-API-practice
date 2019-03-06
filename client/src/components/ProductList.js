import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../redux/actions/productActions';
import PropTypes from 'prop-types';


class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    deleteHandler = (id) => {
        this.props.deleteProduct(id)
    }
    
    render(){
        const { products } = this.props.item 
        return(
            <Container>
                <ListGroup>
                    < TransitionGroup className='shopping-list'>
                        {products.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                <Button
                                    className='remove-btn'
                                    color='danger'
                                    size='small'
                                    onClick={this.deleteHandler.bind(this, _id)}
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
    getProducts: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})



export default connect(
    mapStateToProps,
    {
        getProducts,
        deleteProduct
    }
)(ProductList)