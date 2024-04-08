import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBwVwNBcnV_v5ebPckbg3CpGm_RzS9o-w',
  authDomain: 'imtixon-12.firebaseapp.com',
  projectId: 'imtixon-12',
  storageBucket: 'imtixon-12.appspot.com',
  messagingSenderId: '734087317093',
  appId: '1:734087317093:web:8f22864bbefcc0d9fa688c',
  measurementId: 'G-K5RF69E9PP',
	databaseURL:'https://imtixon-12-default-rtdb.asia-southeast1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
