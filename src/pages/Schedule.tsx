import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  useIonViewWillEnter,
} from "@ionic/react";
import Header from "../components/Header";
import { HOME_PATH } from "../App";
import { Plugins } from "@capacitor/core";
import { getDates } from "../utils/getDates";
const { LocalNotifications, Storage } = Plugins;

const Tab1: React.FC = () => {
  useIonViewWillEnter(async () => {
    const storageData = await Storage.get({ key: "data" });
    const compliments =
      storageData.value === null
        ? []
        : JSON.parse(storageData.value).compliments;

    const pendingList = await LocalNotifications.getPending();
    await LocalNotifications.cancel({
      notifications: pendingList.notifications,
    });

    const dates = getDates(new Date());
    const notifications = dates.map((date, index) => {
      return {
        id: index + 1,
        title: "Positi",
        body: compliments[index],
        schedule: {
          at: date,
          every: "minute" as "minute",
          repeats: true,
        },
      };
    });

    const notifs = await LocalNotifications.schedule({
      notifications,
    });

    console.log("scheduled notifications", notifs);
  });

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
