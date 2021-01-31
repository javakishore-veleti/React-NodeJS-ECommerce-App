import React, {useState, useEffect} from 'react'
// import productsJson from '../../products';
import {Link} from 'react-router-dom';
import {Row, Col, Image, Card, Button} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Rating from '../../shared/components/models/Rating';
import axios from 'axios';

const ProductScreen = ( {match}) => {

    // const product = productsJson.find( (p) => p._id === match.params.id );

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {

        const fetchProductDetails = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProductDetails(data);
        }
        fetchProductDetails();
    }, [match.params.id]);

    return (
        <>
            <Link className="btn btn-light my-3 py-2" to='/'>Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={productDetails.image} alt={productDetails.name} fluid></Image>
                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{productDetails.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={productDetails.rating} text={`${productDetails.numReviews} Reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {productDetails.description}
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
                                        {productDetails.price}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {productDetails.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Button className="btn-block" type="button" disabled={productDetails.countInStock === 0}>
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
