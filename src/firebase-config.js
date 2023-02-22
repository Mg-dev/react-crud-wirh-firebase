import { initializeApp  } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCL0fPbWkpACGoFQggxu4rbciCiiljE3ik",
  
    authDomain: "fir-tuto-9d0d9.firebaseapp.com",
  
    projectId: "fir-tuto-9d0d9",
  
    storageBucket: "fir-tuto-9d0d9.appspot.com",
  
    messagingSenderId: "295422505461",
  
    appId: "1:295422505461:web:fc542e490280b87237f0bc",
  
    measurementId: "G-LRKS5W5NX8"
  
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);