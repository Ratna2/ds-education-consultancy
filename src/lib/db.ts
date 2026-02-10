import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export async function getEnquiries() {
  const q = query(
    collection(db, "enquiries"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
