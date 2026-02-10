import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

/**
 * 🔐 ADMIN CONFIG
 * Add more admins here safely
 */
export const ADMIN_USERS: {
  email: string;
  role: "super" | "staff";
}[] = [
  { email: "consultancy708@gmail.com", role: "super" },
  // { email: "staff@dsedu.com", role: "staff" },
];

/**
 * Check if user is admin
 */
export function getAdminRole(user: User | null) {
  if (!user?.email) return null;
  const admin = ADMIN_USERS.find((a) => a.email === user.email);
  return admin ? admin.role : null;
}

/**
 * Admin login
 */
export const loginAdmin = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Admin logout
 */
export const logoutAdmin = async () => {
  return signOut(auth);
};

/**
 * Listen to auth state changes
 */
export const onAuthStateChange = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};
