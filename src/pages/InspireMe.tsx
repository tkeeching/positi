import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonText,
  IonButton,
  useIonViewWillEnter,
} from "@ionic/react";
import Header from "../components/Header";
import { Plugins } from "@capacitor/core";
import { HOME_PATH } from "../App";
import styled from "styled-components";

const { Storage } = Plugins;

const InspireMe: React.FC = () => {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [index, setIndex] = useState<number>();

  
  useIonViewWillEnter(async () => {
    const storageData = await Storage.get({ key: "data" });
    const quotes =
    storageData.value === null ? [] : JSON.parse(storageData.value).quotes;
    setQuotes(quotes);
    
    const randomIndex = () => Math.floor(Math.random() * quotes.length);
    const nextIndex = randomIndex();
    setIndex(nextIndex === index ? randomIndex() : nextIndex);
  }, []);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <StyledIonText>{typeof index !== 'undefined' && quotes[index]}</StyledIonText>
      </IonContent>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() => {
            setIndex(Math.floor(Math.random() * quotes.length));
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

const StyledIonText = styled(IonText)`
  display: block;
  padding: 80px 30px;
  font-size: 1.5rem;
`;

export default InspireMe;
