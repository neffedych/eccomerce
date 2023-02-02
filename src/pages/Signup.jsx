import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {storage} from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import {toast} from 'react-toastify';
import {auth} from '../firebase.config';
import { db } from '../firebase.config';

const Signup = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);

const signup = async(e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);

    const user = userCredential.user;
    const storageRef = ref(storage, `images/${Date.now() + username}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on((error) => {toast.error(error.message)}, () => {})

    console.log(user);
  } catch (error) {
      toast.error("Something went wrong")
  }
}

  return <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4'>Signup</h3>

              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
                </FormGroup>

                
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter your password' value={pass} onChange={e => setPass(e.target.value)}/>
                </FormGroup>

                
                <FormGroup className='form__group'>
                  <input type="file" onChange={e => setFile(e.target.files[0])}/>
                </FormGroup>

                <button type='submit' className="buy__btn">Create Account</button>
                <p>Already have an account? {''}<Link to='/login'>Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

  </Helmet>
}

export default Signup;