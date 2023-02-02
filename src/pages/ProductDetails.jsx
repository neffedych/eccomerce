import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {motion} from 'framer-motion';
import '../styles/product-details.css';
import ProductList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import {toast} from 'react-toastify';
// import { set } from 'immer/dist/internal';

const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const  {id} = useParams();
  const product = products.find(item => item.id === id);
  const {imgUrl, productName, price, avgRating, reviews, shortDesc, description, category} = product;
  const dispatch = useDispatch();

  const relatedProducts = products.filter(item => item.category === category);
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
    }));

    toast.success("Product is added successfully")
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product]);

  return (
  <Helmet title={productName}>
    <CommonSection title={productName}/>

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img className='product__img' alt='product img' src={imgUrl} />
          </Col>

          <Col lg='6'>
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-center gap-4 mb-3">
                <div>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-half-fill"></i></span>
                </div>
                <p>(<span>{avgRating}</span> ratings)</p>
              </div>

              <span className='product__price'>${price}</span>
              <p className='product__desc'>{shortDesc}</p>

              <motion.button whileTap={{scale:1.1}} className='buy__btn' onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
            </div>

            {
              tab === 'desc' ? <div className="tab__content mt-4">
              <p>{description}</p></div> : <div className='product__review'>
                <div className="review__wrapper mt-4">
                  <ul className='review__list'>
                    {
                      reviews.map((item, index) => (
                        <li key={index}>
                          <p>Jhon Doe</p>
                          <span>{item.rating} average rating</span>
                          <p>{item.text}</p>
                          </li>
                      ))
                    }
                  </ul>

                </div>
              </div>
            }

          </Col>

          <Col lg='12'>
            <h2 className="related__title mt-5">You might also like</h2>
          </Col>

          <ProductList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
)} 

export default ProductDetails