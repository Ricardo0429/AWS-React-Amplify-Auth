import { log } from '../services/Log';
import { auth } from './auth';
import { alert } from './alert';
import { loading } from './loading';
import { dispatch } from '../store';

export const execEffect = async (action, onError) => {
      try {
            dispatch.loading.start();
            await action();
      } catch (e) {
            if (onError) onError(e);
            log.error(e);
      } finally {
            dispatch.loading.stop();
      }
};

export default { auth, loading, alert };