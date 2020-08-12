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
import Header from "../components/Header";
import { HOME_PATH } from "../App";

const CustomiseInspirations: React.FC = () => {
  const inspirations = ["There is no spoon.", "There is no place like home."];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          {inspirations.map((inspiration, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>{inspiration}</IonLabel>
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

export default CustomiseInspirations;
