// pages/api/testConnection.js
import { firestoreDb } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "users"));
    res.status(200).json({
      message: "Connection successful",
      documents: querySnapshot.size,
    });
  } catch (e) {
    res
      .status(500)
      .json({ error: "Error testing connection", details: e.message });
  }
}
