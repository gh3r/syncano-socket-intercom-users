import { response } from 'syncano-server';

import connector from '../utils/connector';
import emitter from '../utils/emitter';

const { email, customAttributes } = ARGS;
const emmiterName = 'intercom-user-updated';
const payload = {
  email,
  custom_attributes: customAttributes
};

connector
  .users
  .update(payload)
  .then(res => {
    response(JSON.stringify(res), res.statusCode || 200, 'application/json');
    emitter(emmiterName, payload);
  })
  .catch(err => {
    response(JSON.stringify(err), err.statusCode || 400, 'application/json');
    emitter(emmiterName, err);
  });
