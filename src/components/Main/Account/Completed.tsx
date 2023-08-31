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
import Loading from "../../../UI/Loading";

export const Completed: React.FC = () => {
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
        setTransactions(
          transactionsData.filter((data) => data.paid && data.attended)
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  if (transactions.length > 0) {
    return (
      <>
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
      </>
    );
  }
  else {
    return <div>No content available</div>
  }
};
