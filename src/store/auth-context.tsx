// auth-context.ts

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Unsubscribe,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  User as FirebaseAuthUser,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  currentUser: FirebaseAuthUser | null;
  signUp: (
    email: string,
    password: string,
    telephoneNumber: string,
    location: number[],
    street?: string,
    lane?: string,
    apartmentBlock?: string,
    apartmentNo?: string
  ) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  changeEmail: (email: string) => Promise<void>;
  changePassword: (password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return authContext;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthUser | null>(null);

  async function signUp(
    email: string,
    password: string,
    telephoneNumber: string,
    location: number[],
    street?: string,
    lane?: string,
    apartmentBlock?: string,
    apartmentNo?: string
  ): Promise<UserCredential> {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      const userDocRef = doc(db, "users", email);
      const infoCollectionRef = collection(userDocRef, "info");

      // Check and provide default values for optional fields
      const infoData = {
        telephoneNumber,
        location,
        street: street ?? "",
        lane: lane ?? "",
        apartmentBlock: apartmentBlock ?? "",
        apartmentNo: apartmentNo ?? "",
      };

      await addDoc(infoCollectionRef, infoData);
    }
    return userCredentials;
  }

  function createCustomError(message: string, errorCode: number): Error {
    return Object.assign(new Error(message), { errorCode });
  }
/*
  async function resendVerificationEmail() {
    if (auth.currentUser) return sendEmailVerification(auth.currentUser);
  }
  */
  async function logIn(
    email: string,
    password: string
  ): Promise<UserCredential> {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!userCredentials.user.emailVerified) {
      await signOut(auth);
      const errorCode = 500;
      const errorMessage = "An error occurred";
      throw createCustomError(errorMessage, errorCode);
    }
    return userCredentials;
  }
  async function signout() {
    return signOut(auth);
  }
  async function forgotPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }
  async function changeEmail(email: string) {
    if (currentUser) updateEmail(currentUser, email);
  }
  async function changePassword(password: string) {
    if (currentUser) updatePassword(currentUser, password);
  }
  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseAuthUser | null) => {
        if (user) {
          // Handle the case when the user is logged in
          setCurrentUser(user);
        } else {
          // Handle the case when the user is logged out
          setCurrentUser(null);
        }
      }
    );

    return unsubscribe;
  }, []);

  const value: AuthContextValue = {
    currentUser,
    signUp,
    logIn,
    signout,
    forgotPassword,
    changeEmail,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
