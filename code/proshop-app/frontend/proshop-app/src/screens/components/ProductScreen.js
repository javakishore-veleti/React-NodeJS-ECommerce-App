import React from 'react'
import productsJson from '../../products';
import {Link} from 'react-router-dom';
import {Row, Col, Image, Card, Button} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Rating from '../../shared/components/models/Rating';

const ProductScreen = ( {match}) => {

    const product = productsJson.find( (p) => p._id === match.params.id );

    return (
        <>
            <Link className="btn btn-light my-3 py-2" to='/'>Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        {product.price}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ProductScreen
