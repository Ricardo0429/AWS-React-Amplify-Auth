import { init } from "@rematch/core";
import alert from "./alert";

const store = init({ models: { alert } });

describe("(Reducers) alert", () => {
      it("Silences the alert", () => {
            store.dispatch.alert.silence();
            const actual = store.getState().alert;
            expect(actual).toEqual({});
      });

      it("Sets an error message", () => {
            store.dispatch.alert.error("Some alert");
            const actual = store.getState().alert;
            expect(actual).toEqual({ message: "Some alert", type: "danger" });
      });

      it("Sets a success message", () => {
            store.dispatch.alert.success("Some alert");
            const actual = store.getState().alert;
            expect(actual).toEqual({ message: "Some alert", type: "success" });
      });
});
