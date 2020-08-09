import { Plugins } from "@capacitor/core";
import { compliments } from "../content/compliments";
import { quotes } from "../content/quotes";

const { Storage } = Plugins;

const setData = () => {
  Storage.set({
    key: "data",
    value: JSON.stringify({ compliments, quotes }),
  });
};

export const initialise = () => {
  setData();
};
