/* eslint-disable import/namespace */
import * as blocks from './blocks.js';
import * as actions from './actions.js';
import * as operators from './operators.js';
import * as connections from './connections.js';

const icons = {};
const styles = {};
Object.keys(blocks).forEach((block) => {
  icons[block] = blocks[block].meta.icons || [];
  styles[block] = blocks[block].meta.styles || [];
});
export default {
  actions: Object.keys(actions),
  blocks: Object.keys(blocks),
  icons,
  styles: { default: [], ...styles },
  operators: {
    client: Object.keys(operators),
    server: Object.keys(operators),
  },
  connections: Object.keys(connections),
  requests: Object.keys(connections)
    .map((connection) => Object.keys(connections[connection].requests))
    .flat(),
};
