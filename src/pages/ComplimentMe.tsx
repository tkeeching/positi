import React, { useState } from "react";
import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";
import "./ComplimentMe.scss";
import Header from "../components/Header";
import { HOME_PATH } from "../App";

const ComplimentMe: React.FC = () => {
  const compliments = ["You look great today.", "You feel fantastic today."];
  const [index, setIndex] = useState(0);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonText>{compliments[index]}</IonText>
        <IonButton
          expand="block"
          onClick={() => {
            setIndex(index === 0 ? 1 : 0);
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
