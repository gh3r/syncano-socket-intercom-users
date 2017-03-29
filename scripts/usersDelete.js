import { response } from 'syncano-server';

import connector from '../utils/connector';
import emitter from '../utils/emitter';

const { id } = ARGS;
const emmiterName = 'intercom-user-deleted';
const payload = {
  id
};

connector
  .users
  .delete(payload)
  .then(res => {
    response(JSON.stringify(res), res.statusCode || 200, 'application/json');
    emitter(emmiterName, payload);
  })
  .catch(err => {
    response(JSON.stringify(err), err.statusCode || 400, 'application/json');
    emitter(emmiterName, err);
  });
