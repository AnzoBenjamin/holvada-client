import React, { useState, useEffect } from "react";
import {
  getDocs,
  doc,
  query,
  collection,
  DocumentData,
} from "firebase/firestore";
import ItemCard from "./ItemCard";
import { useAuth } from "../../../store/auth-context";
import { db } from "../../../config/firebase";
import classes from "./Pending.module.scss";
import axios from "axios";

export const Pending: React.FC = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [transactions, setTransactions] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { currentUser } = useAuth();
  const email = currentUser?.email;

  const handlePayment = async (event: MouseEvent) => {
    event.preventDefault();

    // Get the total amount of the transactions
    const totalAmount = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    console.log(totalAmount);

    // Prepare the data to be sent to the backend server
    const paymentData = {
      email: currentUser?.email,
      credentials: {
        /* Add bank credentials here */
      },
      amount: totalAmount,
    };

    try {
      setIsProcessingPayment(true);
      // Make an HTTP request to the backend server to process the payment
      const response = await axios.post("/process-payment", paymentData);
      // Update the 'paid' status of the transactions to true
      if (response.data.success) {
        const updatedTransactions = transactions.map((transaction) => ({
          ...transaction,
          paid: true,
        }));
        setTransactions(updatedTransactions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const fetchData = async () => {
    if (email) {
      try {
        const userDocRef = doc(db, "users", email);
        const transactionsCollectionRef = collection(
          userDocRef,
          "transactions"
        );

        const q = query(transactionsCollectionRef);

        const querySnapshot = await getDocs(q);

        const transactionsData = querySnapshot.docs.map((doc) => doc.data());
        setTransactions(
          transactionsData.filter(
            (data) => data.paid != true && data.attended != true
          )
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error, isProcessingPayment);
      }
    }
  };

  useEffect(() => {
    fetchData();
    handlePayment;
    console.log(transactions);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading screen while data is being fetched
  }

  return (
    <>
      <div className={classes.pending}>
        {transactions.map((transaction) => {
          const itemCards = [];

          for (let i = 0; i < transaction.studentInformation.length; i++) {
            itemCards.push(
              <ItemCard
                item={transaction.group}
                timeDateOne={transaction.timeDateOne}
                category={transaction.type}
                timeDateTwo={transaction.timeDateTwo}
                name={transaction.studentInformation[i].name}
                key={i}
              />
            );
          }

          return itemCards;
        })}
      </div>
    </>
  );
};
