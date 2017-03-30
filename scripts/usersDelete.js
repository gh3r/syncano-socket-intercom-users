import connector from '../utils/connector';
import responder from '../utils/responder';
import emitter from '../utils/emitter';

const { id } = ARGS;
const emitterName = 'intercom-user-deleted';
const payload = {
  id
};

connector
  .users
  .delete(payload)
  .then(res => {
    responder(res);
    emitter(emitterName, payload);
  })
  .catch(err => {
    responder(err);
    emitter(emitterName, err);
  });
