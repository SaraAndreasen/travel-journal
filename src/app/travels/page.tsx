"use client";
// components/TestFirestoreConnection.js
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "@/app/firebase/firebase";

export default function TestFirestoreConnection() {
  const [message, setMessage] = useState("");

  // const testConnection = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(firestoreDb, "test"));
  //     setMessage(
  //       `Success: Connection successful. Documents in 'test' collection: ${querySnapshot.size}`
  //     );
  //   } catch (e) {
  //     setMessage(`Error: ${e.message}`);
  //   }
  // };

  return (
    <div>
      {/* <button onClick={testConnection}>Test Firestore Connection</button>
      {message && <p>{message}</p>} */}
    </div>
  );
}
