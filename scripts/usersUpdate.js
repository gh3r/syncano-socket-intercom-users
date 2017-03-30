import connector from '../utils/connector';
import emitter from '../utils/emitter';
import responder from '../utils/responder';

const { email, customAttributes } = ARGS;
const emitterName = 'intercom-user-updated';
const payload = {
  email,
  custom_attributes: customAttributes
};

connector
  .users
  .update(payload)
  .then(res => {
    responder(res);
    emitter(emitterName, payload);
  })
  .catch(err => {
    responder(err);
    emitter(emitterName, err);
  });
