import React, { useState, useEffect } from "react";
import {
  getDocs,
  doc,
  query,
  collection,
  DocumentData,
} from "firebase/firestore";
import { useAuth } from "../../../store/auth-context";
import { db } from "../../../config/firebase";
import ItemCard from "./ItemCard";

export const Upcoming: React.FC = () => {
  const [transactions, setTransactions] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const { currentUser } = useAuth();
  const email = currentUser?.email;

  const fetchData = async () => {
    if (email) {
      try {
        const userDocRef = doc(db, "users", email);
        const transactionsCollectionRef = collection(
          userDocRef,
          "transactions"
        );

        // Query all documents in the "transactions" subcollection
        const q = query(transactionsCollectionRef);

        // Get the documents
        const querySnapshot = await getDocs(q);

        // Map the document data and store it in the transactions state
        const transactionsData = querySnapshot.docs.map((doc) => doc.data());
        setTransactions(transactionsData.filter(data => data.paid && data.attended!=true ));
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    console.log(transactions)
  }, []);


  if (isLoading) {
    return <div>Loading...</div>; // Render a loading screen while data is being fetched
  }

  return (
    <>
    {transactions.map((transaction) => {
          const itemCards = [];

          for (let i = 0; i < transaction.weeklyFrequency; i++) {
            itemCards.push(
              <ItemCard
                item={transaction.item}
                date={transaction.date}
                category={transaction.category}
                time={transaction.time}
                name={transaction.studentName}
              />
            );
          }
        })
      }
    </>
  );
};
