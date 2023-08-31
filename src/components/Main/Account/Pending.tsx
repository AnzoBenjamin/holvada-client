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
import Loading from "../../../UI/Loading";
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
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  if(transactions.length>0){

    return (
      <>
      <div className={classes.pending}>
        {transactions.map((transaction) => {
          const itemCards = [];

          for (let i = 0; i < transaction.studentInformation.length; i++) {
            const dateStringOne = new Date(transaction.timeDateOne)
            const dateStringTwo = new Date(transaction.timeDateTwo) 

            const yearOne = dateStringOne.getFullYear().toLocaleString()
            const yearTwo = dateStringTwo.getFullYear().toLocaleString()

            const monthOne = dateStringOne.getMonth().toLocaleString()
            const monthTwo = dateStringTwo.getMonth().toLocaleString()


            const dateOne = dateStringOne.getDate().toLocaleString()
            const dateTwo = dateStringTwo.getDate().toLocaleString()

            const fullDateOne = `${yearOne} ${monthOne} ${dateOne}`
            const fullDateTwo = `${yearTwo} ${monthTwo} ${dateTwo}`



            itemCards.push(
              <ItemCard
              item={transaction.group}
              timeDateOne={fullDateOne}
              category={transaction.type}
              timeDateTwo={fullDateTwo}
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
}
else{
  return <div>No content available</div>
}
};
