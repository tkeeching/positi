import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonText, IonButton, useIonViewWillEnter } from "@ionic/react";
import "./ComplimentMe.scss";
import Header from "../components/Header";
import { HOME_PATH } from "../App";
import { Plugins } from "@capacitor/core";
import styled from "styled-components";

const { Storage } = Plugins;
  
// Styled Components
const StyledIonText = styled(IonText)`
  display: block;
  padding: 100px 30px;
  font-size: 1.5rem;
`;

const ComplimentMe: React.FC = () => {
  const [compliments, setCompliments] = useState<string[]>([]);
  const [index, setIndex] = useState(Math.floor(Math.random() * 10));

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
        <StyledIonText>{compliments[index]}</StyledIonText>
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
