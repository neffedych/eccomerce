import React from 'react';
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
          <div className="logo">
            <div>
              <h1 className='text-white'>EKIA</h1>
            </div>
          </div>
          <p className="footer-p mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nesciunt. Quibusdam quas maxime nulla totam.
            </p>
        </Col>
        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Top Categories
            </h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Smart Watches </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Useful Links
              </h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/signup'>Sign Up</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/checkout'>Checkout </Link>
                </ListGroupItem>
              </ListGroup>
          </div>
        </Col>
        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Contact
            </h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-start gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>228 Powell St, San Francisco</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-start gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>+123456789</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-start gap-2'>
                <span><i class="ri-mail-line"></i></span>
                <p>alexnefedovqa@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className='footer__copyright'>&copy;Copyright {year} developed by Artem Nefedov. All Rights are reserved. </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;