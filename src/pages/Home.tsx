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
import Logo from "../components/Logo";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <span className="home__header-title">
              <Logo size={30} />
              OSITI
            </span>
          </IonTitle>
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
