import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/productActions'

class AddProductModal extends Component {
    state = {
        modal: false,
        name: '',
        price: null
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: this.state.name,
            price: this.state.price
        }

        // Add Product with redux action
        this.props.addProduct(newProduct)

        //close modal
        this.toggle()
    }
    render(){
        return(
            <div>
                <Button
                    color='primary'
                    style={{marginBottom: '2rem', marginTop: '3rem'}}
                    onClick={this.toggle}
                >
                Add Product
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Product List</ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='product-name'>Product</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='product'
                                    placeholder='Name of Product'
                                    onChange={this.onChange}
                                />
                                <Label for='product-price'>Price</Label>
                                <Input
                                    type='number'
                                    name='price'
                                    placeholder='Price of Product'
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button color='dark' style={{ marginTop: '2rem'}}>
                                Submit
                            </Button>
                        </Form>
                
                    </ModalBody>              
                </Modal>
            </div>
        )
    };
};

const mapStateToProps = state => ({
    productState: state.productState
})

export default connect(mapStateToProps, { addProduct })(AddProductModal)