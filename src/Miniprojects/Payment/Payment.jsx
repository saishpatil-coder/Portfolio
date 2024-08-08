import React, { useContext, useState, useEffect } from 'react';
import styles from '../Payment/Pay.module.css';
import { isdark } from '../../Components/context/dark';

const todoKey = 'paymenthistory';

export default function Payment() {
  const { isDark, setisdark } = useContext(isdark);
  const [click ,setClick] = useState(false);
  const [spent, setSpent] = useState(() => {

    const storedSpent = localStorage.getItem('spent');
    return storedSpent !== null ? parseFloat(storedSpent) : 0.00;
  });
  
  const [got, setGot] = useState(() => {
    const storedGot = localStorage.getItem('got');
    return storedGot !== null ? parseFloat(storedGot) : 0.00;
  });
  
  const [remaining, setRemaining] = useState(() => {
    const storedRemaining = localStorage.getItem('remaining');
    return storedRemaining !== null ? parseFloat(storedRemaining) : 0.00;
  });
  
  const [payHistory, setPayHistory] = useState(() => {
    const storedPayHistory = localStorage.getItem('todoKey');
    return storedPayHistory ? JSON.parse(storedPayHistory) : [];
  });
  

  useEffect(() => {
    localStorage.setItem('spent', spent);
  }, [spent]);
  
  useEffect(() => {
    localStorage.setItem('got', got);
  }, [got]);
  
  useEffect(() => {
    localStorage.setItem('remaining', remaining);
  }, [remaining]);
  
  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(payHistory));
  }, [payHistory]);


  const [set, setSet] = useState({
    value: "",
    desc: ""
  });
  const [paid, setPaid] = useState(true);

  let handleclick = () => {
    if (set.value === "") {
      setSet({ value: "", desc: "" });
      return;
    }

    let amount = Number(set.value);
    let p = paid;
    let info = set.desc;
    let d = new Date();
    let date = d.toDateString();

    if (paid) {
      setRemaining((prev) => prev - amount);
      setSpent((prev) => prev + amount);
    } else {
      setRemaining((prev) => prev + amount);
      setGot((prev) => prev + amount);
    }

    setSet({ value: "", desc: "" });

    setPayHistory((prev) => {
      return [...prev, { amount, date, paid: p, info }];
    });
  };

  return (
    <div className={styles["payment-container"]}>
      <h1>Expense Manager</h1>
      <div className={styles["inner-container"]}>
        <div className={styles.top}>
          <fieldset className={styles.spent}>
            <legend>Amount Spend</legend>
            ₹ {spent.toFixed(2)}
          </fieldset>
          <fieldset className={styles.got}>
            <legend>Amount Recieved</legend>
            ₹ {got.toFixed(2)}
          </fieldset>
          <fieldset className={styles.remaining}>
            <legend>Balance</legend>
            ₹ {remaining.toFixed(2)}
          </fieldset>
        </div>
        <div className={styles.histories}>
          <ul>
            {payHistory.map((his, idx) => (
              <li key={idx} className={`${styles.history}`}>
                <div className={styles["pay-info"]}>
                  <div className={styles.dnt}>{his.date}</div>
                  <div className={styles.desc}>{his.info}</div>
                </div>
                <div className={styles.spent}>{his.paid ? `₹ ${his.amount}` : ""}</div>
                <div className={styles.got}>{!his.paid ? `₹ ${his.amount}` : ""}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.add} style={{ bottom: click ? "61px" : "-100%" }}>
          <label htmlFor="amount">Amount: </label>
          <input type="number" id='amount' name='amount' value={set.value} onChange={(e) => {
            setSet((prev) => ({ ...prev, value: e.target.value }));
          }} />
          <label htmlFor="desc">Info: </label>
          <input type="text" id='desc' name='desc' value={set.desc} onChange={(e) => {
            setSet((prev) => ({ ...prev, desc: e.target.value }));
          }} />
          <button onClick={handleclick}>ADD</button>
        </div>
        <div className={styles.foot}>
          <button onClick={() => {
            setClick(!click);
            setPaid(false);
          }} className={styles.gotbtn}>You Got ₹</button>
          <button onClick={() => {
            setClick(!click);
            setPaid(true);
          }} className={styles.spentbtn}>You Spent ₹</button>
        </div>
      </div>
    </div>
  )  }