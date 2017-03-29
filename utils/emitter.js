import { event } from 'syncano-server';

const emitter = (name, content) => {
  return event.emit(name, {
    eventName: name,
    message: content
  });
};

export default emitter;
