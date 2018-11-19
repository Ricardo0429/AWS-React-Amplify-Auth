import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import models from "./redux";

const store = init({
      models,
      plugins: [selectPlugin()]
});

export const { dispatch } = store;

export default store;
