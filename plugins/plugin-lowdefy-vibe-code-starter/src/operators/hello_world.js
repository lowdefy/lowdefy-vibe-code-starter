import { type } from '@lowdefy/helpers';

function _hello_world({ params }) {
  if (!type.isString(params)) {
    throw new Error('_hello_world expects a string as param.');
  }

  return `Hello world,\n${params}`;
}

export default _hello_world;
