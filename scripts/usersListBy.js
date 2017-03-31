import connector from '../utils/connector';
import responder from '../utils/responder';

connector
  .users
  .listBy(ARGS.listParam)
  .then(res => responder(res))
  .catch(err => responder(err));
