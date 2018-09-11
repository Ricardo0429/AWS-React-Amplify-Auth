import { init } from '@rematch/core';
import models from './redux';
import selectPlugin from '@rematch/select'

const store = init({
      models,
      plugins: [selectPlugin()]
});

export const dispatch = store.dispatch;

export default store;