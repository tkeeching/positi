import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
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
import "./theme/fonts.scss";
import "./theme/variables.scss";
import "./theme/theme.scss";

import { initialise } from "./utils/initialise";

/* Routes */
export const HOME_PATH = "/";
export const COMPLIMENT_ME_PATH = "/compliment-me";
export const INSPIRE_ME_PATH = "/inspire-me";
export const CUSTOMISE_COMPLIMENTS_PATH = "/customise-compliments";
export const CUSTOMISE_INSPIRATIONS_PATH = "/customise-inspirations";
export const SCHEDULE_PATH = "/schedule";

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
        <IonRouterOutlet animated={false}>
          <Route path={HOME_PATH} component={Home} exact={true} />
          <Route
            path={COMPLIMENT_ME_PATH}
            component={ComplimentMe}
            exact={true}
          />
          <Route path={INSPIRE_ME_PATH} component={InspireMe} exact={true} />
          <Route
            path={CUSTOMISE_COMPLIMENTS_PATH}
            component={CustomiseCompliments}
            exact={true}
          />
          <Route
            path={CUSTOMISE_INSPIRATIONS_PATH}
            component={CustomiseInspirations}
            exact={true}
          />
          <Route path={SCHEDULE_PATH} component={Schedule} exact={true} />
          <Route render={() => <Redirect to={HOME_PATH} />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
