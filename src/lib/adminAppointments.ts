import { collection, getDocs, orderBy, query, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getAppointments() {
  const q = query(
    collection(db, "appointments"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateAppointmentStatus(id: string, status: string) {
  const ref = doc(db, "appointments", id);
  await updateDoc(ref, { status });
}
