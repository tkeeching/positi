import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonText, IonButton, useIonViewWillEnter } from "@ionic/react";
import "./ComplimentMe.scss";
import Header from "../components/Header";
import { HOME_PATH } from "../App";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const ComplimentMe: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [compliments, setCompliments] = useState<string[]>([]);

  const fetchData = async () => {
    const storageData = await Storage.get({ key: "data" });
    const compliments =
      storageData.value === null ? [] : JSON.parse(storageData.value).compliments;
    setCompliments(compliments);
  };
  
  useIonViewWillEnter( () => {
    fetchData();
  }, [compliments])

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonText>{compliments[index]}</IonText>
        <IonButton
          expand="block"
          onClick={() => {
            setIndex(Math.floor(Math.random() * compliments.length));
          }}
        >
          Give me more
        </IonButton>
        <IonButton expand="block" routerLink={HOME_PATH}>
          Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ComplimentMe;
