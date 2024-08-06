const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./firebase-admin-sdk.json');

// Inicialize o Firebase Admin SDK
initializeApp({
  credential: cert(serviceAccount)
});

// Obtenha a referência do Firestore
const db = getFirestore();

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
