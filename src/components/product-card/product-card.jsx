import './product-card.styles.scss'
import Button from '../button/button'

const ProductCard = ({ product }) => {
    const {id, name, price, imageUrl} = product;
    return (
     <div key={id} className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted'>Add to cart</Button>

         
     </div> 
    )
};


export default ProductCard;
