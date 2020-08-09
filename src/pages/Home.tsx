import React from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";
import "./Home.scss";
import Header from "../components/Header";
import {
  COMPLIMENT_ME_PATH,
  INSPIRE_ME_PATH,
  CUSTOMISE_COMPLIMENTS_PATH,
  CUSTOMISE_INSPIRATIONS_PATH,
  SCHEDULE_PATH,
} from "../App";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonButton expand="block" routerLink={COMPLIMENT_ME_PATH}>
          Compliment me
        </IonButton>
        <IonButton expand="block" routerLink={INSPIRE_ME_PATH}>
          Inspire me
        </IonButton>
        <IonButton expand="block" routerLink={CUSTOMISE_COMPLIMENTS_PATH}>
          Customise Compliments
        </IonButton>
        <IonButton expand="block" routerLink={CUSTOMISE_INSPIRATIONS_PATH}>
          Customise Inspirations
        </IonButton>
        <IonButton expand="block" routerLink={SCHEDULE_PATH}>
          Schedule
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
