import React, { useContext } from "react";
import { IonHeader, IonToolbar, IonTitle, NavContext } from "@ionic/react";
import Logo from "./Logo";
import "./Header.scss";
import { HOME_PATH } from "../App";

const Header: React.FC = () => {
  const { navigate } = useContext(NavContext);
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <span
            className="header__title"
            onClick={() => {
              navigate(HOME_PATH);
            }}
          >
            <Logo size={45} />
            <span style={{ fontSize: 32 }}>OSITI</span>
          </span>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
