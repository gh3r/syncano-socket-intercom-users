import connector from '../utils/connector';
import responder from '../utils/responder';

connector
  .users
  .find(ARGS.searchParam)
  .then(res => responder(res))
  .catch(err => responder(err));
