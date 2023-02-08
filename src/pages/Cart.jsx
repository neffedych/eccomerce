import React from 'react';
import "../styles/cart.css";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems); 
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return <Helmet title='Cart'>
    <CommonSection title='Shopping Cart' />
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? <h2 className='fs-4 text-center'>No items added to the cart</h2> : <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartItems.map((item, index) => (
                    <Tr item={item} key={index}/>
                  ))
                }
              </tbody>
            </table>
            }

          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Subtotal
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              </h6>
              <p className='fs-6 mt-3'>taxes and shipping will calculate in checkout</p>
            </div>
            <div>
              <div className='checkout__btn'>
                <Link to='/checkout'><button className='buy__btn w-100'>Checkout</button></Link>
                <Link to='/shop'><button className='buy__btn w-100 mt-3'>Continue Shopping</button></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

const Tr = ({item}) => {
const dispatch = useDispatch();
const deleteProduct = () => {
  dispatch(cartActions.deleteItem(item.id));
}

  return <tr >
  <td><img src={item.imgUrl} alt='product'></img></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i onClick={deleteProduct} whileTap={{scale:1.2}} class="ri-delete-bin-line"></motion.i></td>
</tr>
}
export default Cart;