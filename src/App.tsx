import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import ComplimentMe from "./pages/ComplimentMe";
import InspireMe from "./pages/InspireMe";
import CustomiseCompliments from "./pages/CustomiseCompliments";
import CustomiseInspirations from "./pages/CustomiseInspirations";
import Schedule from "./pages/Schedule";
import { useStorage } from "@capacitor-community/react-hooks/storage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/fonts.css";
import "./theme/variables.css";
import "./theme/theme.css";

import { initialise } from "./utils/initialise";

const App: React.FC = () => {
  const { get, set } = useStorage();

  useEffect(
    () => {
      get("positi.initialised").then((value) => {
        console.log("value: ", value);
        if (value === null) {
          set("positi.initialised", "true");
          initialise();
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/" component={Home} exact={true} />
        <Route path="/compliment-me" component={ComplimentMe} exact={true} />
        <Route path="/inspire-me" component={InspireMe} exact={true} />
        <Route
          path="/customise-compliments"
          component={CustomiseCompliments}
          exact={true}
        />
        <Route
          path="/customise-inspirations"
          component={CustomiseInspirations}
          exact={true}
        />
        <Route path="/schedule" component={Schedule} exact={true} />
        <Route render={() => <Redirect to="/" />} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
