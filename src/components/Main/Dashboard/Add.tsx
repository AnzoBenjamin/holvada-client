import React, { useState, useEffect } from "react";
import classes from "./Add.module.scss";
import { doc, collection, addDoc } from "firebase/firestore";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../store/auth-context";
import { v4 } from "uuid";
import { DateTimePicker } from "@mui/x-date-pickers";
import Button from "../../../UI/Button";
import dayjs from "dayjs";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

export const Add: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<Option | null>(null);
  const [selectedChild, setSelectedChild] = useState<Option | null>(null);
  const [timeDateOne, setTimeDateOne] = useState(dayjs(new Date()));
  const [timeDateTwo, setTimeDateTwo] = useState(dayjs(new Date()));
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalLessons, setTotalLessons] = useState<number>(0);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([{ name: "", age: "" }]);

  const handleParentSelect = (option: Option | null) => {
    setSelectedParent(option);
    setSelectedChild(null);
  };

  const handleChildSelect = (option: Option | null) => {
    setSelectedChild(option);
  };

  const handleAddPerson = () => {
    setPeople([...people, { name: "", age: "" }]);
  };

  const handleRemovePerson = (index: any) => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  const handleInputChange = (index: number, field: string, value: string | number) => {
    const newPeople = [...people];
    (newPeople[index] as { [key: string]: string | number })[field] = value;
    setPeople(newPeople);
  };

  const options: Option[] = [
    {
      label: "Chess",
      value: "chess",
      children: [
        {
          label: "Chess for Children",
          value: "chess-for-children",
        },
        {
          label: "Beginner Chess",
          value: "beginner-chess",
        },
        {
          label: "Intermediate Chess",
          value: "intermediate-chess",
        },
        {
          label: "Advanced Chess",
          value: "advanced-chess",
        },
      ],
    },
    {
      label: "Music",
      value: "music",
      children: [
        {
          label: "Vocal Training",
          value: "vocal-training",
        },
        {
          label: "Music Theory",
          value: "music-theory",
        },
        {
          label: "Violin",
          value: "violin",
        },
        {
          label: "Piano",
          value: "piano",
        },
        {
          label: "Guitar",
          value: "guitar",
        },
        {
          label: "Saxophone",
          value: "saxophone",
        },
      ],
    },
    {
      label: "Art",
      value: "art",
      children: [
        {
          label: "Pencil Drawings",
          value: "pencil-drawings",
        },
        {
          label: "Oil Paintings",
          value: "oil-paintings",
        },
        {
          label: "Watercolors",
          value: "watercolors",
        },
        {
          label: "Acrylic Paintings",
          value: "acrylic-paintings",
        },
        {
          label: "Mixed Media",
          value: "mixed-media",
        },
      ],
    },
    {
      label: "Language",
      value: "language",
      children: [
        {
          label: "English",
          value: "english",
        },
        {
          label: "Kiswahili",
          value: "kiswahili",
        },
        {
          label: "French",
          value: "french",
        },
      ],
    },
    {
      label: "Tech",
      value: "tech",
      children: [
        {
          label: "Code",
          value: "code",
        },
        {
          label: "Scratch",
          value: "scratch",
        },
        {
          label: "Computer Skills",
          value: "computer-skills",
        },
      ],
    },
  ];
  const { currentUser } = useAuth();

  const buttonHandler = async () => {
    if (selectedChild && selectedParent) {
      const email = currentUser?.email || "";

      if (email) {
        try {
          setLoading(true);
          const userDocRef = doc(db, "users", email);
          const transactionsCollectionRef = collection(
            userDocRef,
            "transactions"
          ); // Reference the subcollection
          const transactionData = {
            id: v4(),
            group: selectedParent.value,
            type: selectedChild.value,
            timeDateOne: timeDateOne.toISOString(),
            timeDateTwo: timeDateTwo.toISOString(),
            studentInformation: people,
            amount: totalAmount,
            totalLessons: totalLessons,
            paid: false,
            attended: false,
          };

          await addDoc(transactionsCollectionRef, transactionData); // Create a new document in the subcollection
          setMessage("Successfully scheduled");
          setSelectedChild(null);
          setSelectedParent(null);
          setTotalLessons(0);
          setTotalAmount(0);
          setTimeDateOne(dayjs(new Date()))
          setTimeDateTwo(dayjs(new Date()))
          setPeople([{ name: "", age: "" }])
        } catch (error) {
          console.log("Error adding entry:", error);
        } finally {
          setMessage("");
          setLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    console.log(timeDateOne);
    people.map((value, index) => {
      if (value) {
        setTotalLessons((index + 1) * 8);
        setTotalAmount((index + 1) * 400000);
      }
    });
    if (!people) {
      setTotalLessons(0);
      setTotalAmount(0);
    }
    console.log(people);
  }, [timeDateOne, people]);
  return (
    <main className={classes.main}>
      <div className={classes.add}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Lesson Group</InputLabel>
          <Select
            id="parentSelect"
            value={selectedParent ? selectedParent.value : ""}
            label="Parent"
            onChange={(e) => {
              const selectedValue = e.target.value;
              const selectedOption = options.find(
                (option) => option.value === selectedValue
              );

              handleParentSelect(selectedOption || null);
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="childSelect">Lesson Type</InputLabel>
          <Select
            id="childSelect"
            value={selectedChild ? selectedChild.value : ""}
            label="Group"
            onChange={(e) => {
              const selectedValue = e.target.value;
              if (selectedParent) {
                const selectedOption = selectedParent.children?.find(
                  (option) => option.value === selectedValue
                );
                handleChildSelect(selectedOption || null);
              }
            }}
          >
            {selectedParent &&
              selectedParent.children?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Schedule"
            value={timeDateOne}
            className={classes.date}
            onChange={(newValue) => {
              if (newValue !== null && newValue !== undefined) {
                setTimeDateOne(newValue);
              }
            }}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Schedule"
            value={timeDateTwo}
            className={classes.date}
            onChange={(newValue) => {
              if (newValue !== null && newValue !== undefined) {
                setTimeDateTwo(newValue);
              }
            }}
          />
        </LocalizationProvider>
        {people.map((person, index) => (
          <div className={classes.people} key={index}>
            <TextField
              type="text"
              placeholder="Name"
              value={person.name}
              className={classes["input-field"]}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <TextField
              type="number"
              placeholder="Age"
              value={person.age}
              className={classes["input-field"]}
              onChange={(e) => handleInputChange(index, "age", e.target.value)}
            />
            {

              /*
              {index > 0 && (
                <button onClick={() => handleRemovePerson(index)}>-</button>
                )}
                */
          }
          </div>
        ))}
        <div className={classes.icons}>
          <img
            src="/plus.png"
            alt="Plus"
            className={classes.plus}
            onClick={handleAddPerson}
          />

          <img
            src="/minus.png"
            alt="Plus"
            className={classes.plus}
            onClick={handleRemovePerson}
          />
        </div>

        <button
          className={classes.btn}
          disabled={loading}
          onClick={buttonHandler}
        >
          Add
        </button>
      </div>
      <div className={classes["order-details"]}>
        <h3>Order details</h3>
        <div>
          <h4>Subscription</h4>
          <p>Monthly</p>
        </div>
        <div>
          <h4>Total lessons</h4>
          <p>{totalLessons}</p>
        </div>
        <div>
          <h4>Total Amount</h4>
          <p>{totalAmount}</p>
        </div>
        <Button
          className={classes.proceed}
          type="submit"
          text="Proceed to payment"
          disabled={false}
        />
      </div>
      {message && <p>{message}</p>}
    </main>
  );
};
