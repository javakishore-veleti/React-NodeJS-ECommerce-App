import React from 'react'
import {Row, Col} from 'react-bootstrap';
import products from '../../products';
import Product from '../../shared/components/models/Product';

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
            {products.map((product, index) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product key={index} product={product} ></Product>
                    </Col>
            ))}
            </Row>                
        </>
    )
}

export default HomeScreen