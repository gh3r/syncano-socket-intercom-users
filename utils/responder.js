import { response } from 'syncano-server';

const responder = (message) => {
  return response(JSON.stringify(message), message.statusCode || 400, 'application/json');
};

export default responder;
