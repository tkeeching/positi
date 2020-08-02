import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./Home.scss";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Positi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink="/compliment-me">Compliment me</IonButton>
        <IonButton routerLink="/inspire-me">Inspire me</IonButton>
        <IonButton routerLink="/customise-compliments">
          Customise Compliments
        </IonButton>
        <IonButton routerLink="/customise-inspirations">
          Customise Inspirations
        </IonButton>
        <IonButton routerLink="/schedul">Schedule</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
