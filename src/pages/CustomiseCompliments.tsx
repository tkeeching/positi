import React from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "./CustomiseCompliments.scss";
import Header from "../components/Header";
import { HOME_PATH } from "../App";

const CustomiseCompliments: React.FC = () => {
  const compliments = ["You look great today.", "You feel fantastic today."];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          {compliments.map((compliment, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>{compliment}</IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={() => console.log("Delete")}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonButton expand="block" routerLink={HOME_PATH}>
          Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomiseCompliments;
