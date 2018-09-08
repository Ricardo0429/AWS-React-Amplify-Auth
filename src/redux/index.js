import { log } from '../services/Log';
import { auth } from './auth';
import { alert } from './alert';
import { loading } from './loading';
import { dispatch } from '../store';
import { products } from './products';

export const execEffect = async (action, onError) => {
      try {
            dispatch.loading.start();
            return await action();
      } catch (e) {
            log.error(e);
            if (onError) onError(e);
      } finally {
            dispatch.loading.stop();
      }
};

export default { auth, loading, alert, products };