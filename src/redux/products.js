import { API } from "aws-amplify";
import { s3Upload } from "../services/awsLib";
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
                  execEffect(async () => {
                        const {name, description, files} = body;
                        const file = files && files[0];
                        const attachment = file ? await s3Upload(file) : null;
                        await API.post('notes', '/notes', { body: { name, description, attachment }});
                        dispatch.alert.showSuccess(`Product "${body.name}" successfully saved`);
                        onSuccess();
                  }, e => {
                        dispatch.alert.showError(`Product "${body.name}" could not be saved`);
                  });
            }
      })
};