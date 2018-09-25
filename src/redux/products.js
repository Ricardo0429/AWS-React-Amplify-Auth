import {execEffect} from './index';
import {API, Storage} from "aws-amplify";
import {s3Upload, s3Delete} from "../libs/awsLib";

export const products = {
      state: {all: [], selected: null},
      reducers: {
            add: (state, payload) => ({...state, all: state.all.concat(payload)}),
            select: (state, payload) => ({...state, selected: payload}),
            remove: (state, id) => ({...state, all: state.all.filter(e => e.noteId !== id)}),
            populate: (state, payload) => ({...state, all: payload}),
      },
      effects: (dispatch) => ({

            getAll() {
                  execEffect(async () => {
                        const list = await API.get("notes", "/notes");
                        dispatch.products.populate(list);
                  });
            },

            getOne(id, { products: { all }}) {
                  execEffect(async () => {
                        let filepath, data;
                        let item = all.find( e => e.noteId === id );
                        if (item && item.attachment) {
                              filepath = await Storage.vault.get(item.attachment);
                              const { attachment: filename, ...rest } = item;
                              data = {...rest, filename, filepath };
                        }
                        dispatch.products.select(data);
                  });
            },

            update ({ body, id, existingFile }) {
                  execEffect(async () => {
                        const { name, description, file } = body;
                        const attachment = file ? await s3Upload(file) : null;
                        await API.put('notes', `/notes/${id}`, { body: { name, description, attachment }});
                        if (existingFile) await s3Delete(existingFile);
                  }, () => {
                        dispatch.alert.error(`Product "${body.name}" could not be saved`);
                  });
            },

            create (body) {
                  execEffect(async () => {
                        const {name, description, file} = body;
                        const attachment = file ? await s3Upload(file) : null;
                        await API.post('notes', '/notes', { body: { name, description, attachment }});
                  }, e => {
                        dispatch.alert.error(`Product "${body.name}" could not be saved`);
                  });
            },

            delete ({ id, filename }) {
                  execEffect(async () => {
                        await API.del('notes', `/notes/${id}`);
                        if (filename) await s3Delete(filename);
                        dispatch.products.remove(id);
                  }, () => {
                        dispatch.alert.error(`Product could not be deleted`);
                  });
            }
      })
};