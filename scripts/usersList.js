import connector from '../utils/connector';
import responder from '../utils/responder';

connector
  .users
  .list()
  .then(res => responder(res))
  .catch(err => responder(err));
