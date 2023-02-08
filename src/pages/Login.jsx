import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {

const [email, setEmail] = useState('');
const [pass, setPass] = useState('');

  return <Helmet title='Order'>
      <section>
      <CommonSection title='Your order has been placed!'/>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='mt-5'>Check your email out for more information!</h3>
            </Col>
          </Row>
        </Container>
      </section>

  </Helmet>
}

export default Login