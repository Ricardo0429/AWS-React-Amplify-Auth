import { init } from '@rematch/core';
import models from './redux';

const store = init({ models });

export const dispatch = store.dispatch;

export default store;