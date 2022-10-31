import _ from 'lodash';
import { GLOBAL_REQUEST_ERROR_MESSAGE } from '../../../constants';

const errorResponseManager = ({ response }) => {
  const { data = {}, status = 0 } = response || {};

  let msg = GLOBAL_REQUEST_ERROR_MESSAGE;

  return { msg, data, status };
};

export { errorResponseManager };
