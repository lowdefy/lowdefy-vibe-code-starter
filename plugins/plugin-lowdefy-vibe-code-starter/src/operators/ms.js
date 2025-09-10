import ms from 'ms';
import { type } from '@lowdefy/helpers';

function _ms({ params }) {
  if (type.isNone(params) || type.isEmptyObject(params)) {
    return params;
  }
  if (!type.isString(params)) {
    throw new Error('_ms expects a string as param.');
  }
  const converted = ms(params.trim(), { long: true });
  if (type.isNone(converted)) {
    return `Cannot not be converted.`;
  }
  return converted;
}

export default _ms;
