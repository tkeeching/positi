import React, { useState } from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonDatetime, IonToast } from '@ionic/react';
import { Plugins } from "@capacitor/core";
import { getDates } from "../utils/getDates";
const { LocalNotifications, Storage } = Plugins;

const ScheduleSelection: React.FC = () => {
  const [category, setCategory] = useState<string>();
  const [time, setTime] = useState<string>('10:00');
  const [showToast1, setShowToast1] = useState<boolean>(false);

  const handleSubmit = (async () => {
    const storageData = await Storage.get({ key: "data" });
    const data =
      storageData.value === null
        ? []
        : JSON.parse(storageData.value);

    const pendingList = await LocalNotifications.getPending();

    if (pendingList.notifications.length > 0) {
      await LocalNotifications.cancel({
        notifications: pendingList.notifications,
      });
    }

    const dates = getDates(new Date(), time);
    const notifications = dates.map((date, index) => {
      const nextIndex = Math.floor(Math.random() * data[`${category}`].length);
      return {
        id: index + 1,
        title: `${category === 'quotes' ? 'Quote' : 'Compliment'} of the day`,
        body: data[`${category}`][nextIndex],
        schedule: {
          at: date
        },
      };
    });

    const notifs = await LocalNotifications.schedule({
      notifications,
    });

    // For development - uncomment to log scheduled notifications
    // console.log("scheduled notifications", notifs);

    setShowToast1(true);
  });

  return (
    <>
      <IonList>
        <IonListHeader>
          <IonLabel>
            Schedule Settings
          </IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Category</IonLabel>
          <IonSelect value={category} placeholder="Select One" onIonChange={e => setCategory(e.detail.value)}>
            <IonSelectOption value="quotes">Quotes</IonSelectOption>
            <IonSelectOption value="compliments">Compliments</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Daily at</IonLabel>
          <IonDatetime display-format="h:mm A" picker-format="h:mm A" value={time} onIonChange={e => setTime(e.detail.value!)}></IonDatetime>
        </IonItem>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message={`${category === 'quotes' ? 'Quotes' : 'Compliments'} have been scheduled daily at ${time ?? '(none)'}`}
          duration={500}
        />
      </IonList>
      <IonButton 
        expand="block" 
        onClick={() => handleSubmit()}
        disabled={category && time ? false : true}
      >
        Submit
      </IonButton>
    </>
  );
};

export default ScheduleSelection;
