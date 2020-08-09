import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./InspireMe.scss";
import Header from "../components/Header";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
