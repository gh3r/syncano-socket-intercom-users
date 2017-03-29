import { response } from 'syncano-server';

import connector from '../utils/connector';
import emitter from '../utils/emitter';

const { userInfo } = ARGS;
const emmiterName = 'intercom-user-created';

connector
  .users
  .create(JSON.parse(userInfo))
  .then(res => {
    response(JSON.stringify(res), res.statusCode || 200, 'application/json');
    emitter(emmiterName, userInfo);
  })
  .catch(err => {
    response(JSON.stringify(err), err.statusCode || 400, 'application/json');
    emitter(emmiterName, err);
  });
