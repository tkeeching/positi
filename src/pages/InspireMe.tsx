import React, { useState } from "react";
import { IonContent, IonPage, IonText, IonButton } from "@ionic/react";
import Header from "../components/Header";
import { HOME_PATH } from "../App";

const InspireMe: React.FC = () => {
  const inspirations = ["There is no spoon.", "There is no place like home."];
  const [index, setIndex] = useState(0);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonText>{inspirations[index]}</IonText>
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

export default InspireMe;
