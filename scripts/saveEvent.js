import { data } from 'syncano-server';

const { eventName, message } = ARGS;

data
  .event_history
  .create({
    eventName,
    message
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));
