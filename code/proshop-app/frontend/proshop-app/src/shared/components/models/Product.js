import {Card} from 'react-bootstrap';
import Rating from '../../../shared/components/models/Rating';
import {Link} from 'react-router-dom';

const Product = ( {product} ) => {

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </Link>
            <Card.Body>
                <Card.Title as='div'>
                    <strong>
                        {product.name} 
                    </strong>
                </Card.Title>
            </Card.Body>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'red'}></Rating>
            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card>
    )
}

export default Product;