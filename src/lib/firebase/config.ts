// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { Invoice } from "../../util/interfaces";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnhrGU2NC8IpYcNhbtslxMtj-D6oAjdT0",
  authDomain: "washandgo-329ab.firebaseapp.com",
  projectId: "washandgo-329ab",
  storageBucket: "washandgo-329ab.appspot.com",
  messagingSenderId: "398697535528",
  appId: "1:398697535528:web:5e2ea97e85c47744587d1d",
  measurementId: "G-XPCNK4145Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
const auth = getAuth(app);
auth.useDeviceLanguage();
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
const db = getFirestore(app);
const addInvoice = async (timeId: string, invoice: Invoice, callback: () => void) => {
  await setDoc(doc(db, "users", auth.currentUser.uid, "invoices", timeId), invoice);
  callback();
};

const getInvoiceDoc = async (id: string, userId: string) => {
  const invoice = await getDoc(doc(db, "users", userId, "invoices", id));
  const data = invoice.data();
  console.log(data);
  return data;
};

export { auth, db, addInvoice, getInvoiceDoc };
