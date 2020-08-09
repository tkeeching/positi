import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import Logo from "./Logo";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <span className="header__title">
            <Logo size={45} />
            <span style={{ fontSize: 32 }}>OSITI</span>
          </span>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
