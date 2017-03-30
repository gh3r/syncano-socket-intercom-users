import { response } from 'syncano-server';

import connector from '../utils/connector';

connector
  .users
  .listBy(ARGS.listParam)
  .then(res => {
    response(JSON.stringify(res), res.statusCode || 200, 'application/json');
  })
  .catch(err => {
    response(JSON.stringify(err), err.statusCode || 400, 'application/json');
  });
