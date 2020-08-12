import React from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";
import Header from "../components/Header";
import { HOME_PATH } from "../App";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonButton expand="block" routerLink={HOME_PATH}>
          Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
