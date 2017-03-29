import { response } from 'syncano-server';

import connector from '../utils/connector';

const { listParam } = ARGS;

connector
  .users
  .listBy(JSON.parse(listParam))
  .then(res => {
    response(JSON.stringify(res), res.statusCode || 200, 'application/json');
  })
  .catch(err => {
    response(JSON.stringify(err), err.statusCode || 400, 'application/json');
  });
