import { ONE_THING } from "./action-types";

export const oneFunction = (payload) => {
  return {
    type: ONE_THING,
    oneFunction: payload,
  };
};
