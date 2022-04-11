import firebase from 'firebase/app';
import 'firebase/firestore';
import { auth } from './firebase.utils';

const firestore = auth.firestore();

firestore.collection('users')

// firestore.collection('users').doc('R80QAfaFoBsKUcxEI7tA').collection('cartItems').doc('OGwqukNlkXsU1CqkvioO')
// firestore.doc('/users/R80QAfaFoBsKUcxEI7tA/cartItems/OGwqukNlkXsU1CqkvioO');
// firestore.collection('/users/R80QAfaFoBsKUcxEI7tA/cartItems');