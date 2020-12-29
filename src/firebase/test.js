import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('XFxJtkWXFkMhlKIVKGeC').collection('cartItems').doc('x6ObqmpgD6aE49BponDX');

// another way to do this is 
// firestore.doc('/user/XFxJtkWXFkMhlKIVKGeC/cartItems/x6ObqmpgD6aE49BponDX'); 
// firestore.collection('/user/XFxJtkWXFkMhlKIVKGeC/cartItems');
