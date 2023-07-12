import { db, doc, getDoc, updateDoc } from "../firebase";

const get_userDetails = async ({ uid, setUserDetails }) => {
  try {
    const docRef = doc(db, uid, "user_details");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error fetching user details:", error);
  }
};
const get_basicInformation = async ({ uid, setBasicInformation }) => {
  try {
    const docRef = doc(db, uid, "sensitive_informations");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBasicInformation(docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error fetching user details:", error);
  }
};
const get_bankDetails = async ({ uid, setBankDetails }) => {
  try {
    const docRef = doc(db, uid, "bank_details");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBankDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error fetching user details:", error);
  }
};
export { get_userDetails, get_basicInformation, get_bankDetails };
