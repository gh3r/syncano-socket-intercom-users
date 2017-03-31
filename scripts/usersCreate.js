import connector from '../utils/connector';
import responder from '../utils/responder';
import emitter from '../utils/emitter';

const { userInfo } = ARGS;
const emitterName = 'intercom-user-created';

connector
  .users
  .create(JSON.parse(userInfo))
  .then(res => {
    responder(res);
    emitter(emitterName, userInfo);
  })
  .catch(err => {
    responder(err);
    emitter(emitterName, err);
  });
