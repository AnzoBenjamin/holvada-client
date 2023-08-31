import React, { useEffect, useState, useRef } from "react";
import {
  getDocs,
  doc,
  collection,
  query,
  DocumentData,
} from "firebase/firestore";
import { useAuth } from "../../../store/auth-context";
import Button from "../../../UI/Button";
import { MapContainer } from "react-leaflet";
import Map from "../../Map/Map";
import classes from "./AccountDetails.module.scss";
import { db } from "../../../config/firebase";
import { TextField } from "@mui/material";

const AccountDetails: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const streetRef = useRef<HTMLInputElement | null>(null);

  const laneRef = useRef<HTMLInputElement | null>(null);
  const apartmentBlockRef = useRef<HTMLInputElement | null>(null);
  const apartmentNoRef = useRef<HTMLInputElement | null>(null);
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [location, setLocation] = useState<[number, number] | null>(null);

  const getUserInfo = async () => {
    const email = currentUser?.email || "";
    const userDocRef = doc(db, "users", email);
    const infoCollectionRef = collection(userDocRef, "info");
    setLoading(false);
    setError("");
    setMessage("");
    try {
      const q = query(infoCollectionRef);
      const querySnapshot = await getDocs(q);
      const transactionsData = querySnapshot.docs.map((doc) => doc.data());
      setUserInfo(transactionsData[0]);
      setLocation(transactionsData[0].location);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await getUserInfo();
      } catch (error) {}
    })();
  }, [currentUser]);

  const changeHandler = async () => {};

  const handleLocationChange = (lat: number, lng: number) => {
    setLocation([lat, lng]);
  };

  return (
    <div>
      {userInfo ? (
        <div className={classes.account}>
          <form className={classes["form-details"]} onSubmit={changeHandler}>
            {error && <p className={classes.error}>{error}</p>}
            {message && <p className={classes.message}>{message}</p>}
            <div className={classes["contact-info"]}>
              <TextField
                type="email"
                ref={emailRef}
                label={"Email"}
                placeholder={currentUser?.email || ""}
              />
              <TextField
                type="tel"
                ref={phoneRef}
                label={"Phone Number"}
                placeholder={userInfo.telephoneNumber}
              />
            </div>

            <div className={classes.map}>
              <p>Select your home location</p>
              <MapContainer>
                <Map
                  onLocationChange={handleLocationChange}
                  globalLocation={location}
                />
              </MapContainer>
            </div>
            <div className={classes["additional-content"]}>
              <TextField
                ref={streetRef}
                type="text"
                label="Street"
                placeholder={userInfo.street}
              />
              <TextField
                ref={laneRef}
                type="text"
                label="Lane"
                placeholder={userInfo.lan}
              />
              <TextField
                ref={apartmentBlockRef}
                type="text"
                label="Apartment Block"
                placeholder={userInfo.apartmentBlock}
              />
              <TextField
                ref={apartmentNoRef}
                type="text"
                label="Apartment No"
                placeholder={userInfo.apartmentNo}
              />
            </div>
            <Button
              text="Update"
              disabled={loading}
              type="submit"
              className={classes.btn}
            />
          </form>
        </div>
      ) : (
        <p>No user info available.</p>
      )}
    </div>
  );
};

export default AccountDetails;
