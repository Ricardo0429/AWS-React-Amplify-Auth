import { API } from "aws-amplify";
import { execEffect } from './index';

export const products = {
      state: [],
      reducers: {
            add (state, payload) {
                  return state.concat(payload);
            }
      },
      effects: (dispatch) => ({
            async create({ body, onSuccess }) {
                  await execEffect(async () => {
                        await API.post('notes', '/notes', { body });
                        dispatch.alert.showSuccess(`${body.name} successfully saved`);
                  }, { onSuccess });
            }
      })
};