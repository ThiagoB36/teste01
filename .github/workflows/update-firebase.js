// update-firebase.js
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCaZlTO1nedyM_hDmbFHEkQ0N8bQ9JkWLw",
  authDomain: "flaxboll.firebaseapp.com",
  projectId: "flaxboll",
  storageBucket: "flaxboll.appspot.com",
  messagingSenderId: "707022923688",
  appId: "1:707022923688:web:62d8bd5e16f18da3d69f9d",
  measurementId: "G-FEXXR0BBNQ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const updateQrCode = async () => {
  const userId = process.env.USERID;
  const projectId = process.env.PROJECTID;
  const qrCodeUrl = process.env.QR_CODE_URL;

  console.log({ userId });
  console.log({ projectId });

  const docRef = db.collection('users').doc(userId).collection('projects').doc(projectId);
  await docRef.update({
    qrcodeUrl: qrCodeUrl
  });

  console.log('QR Code updated successfully.');
};

updateQrCode().catch(console.error);
