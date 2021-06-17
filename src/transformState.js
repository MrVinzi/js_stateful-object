'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    switch (type) {
      case 'addProperties': Object.assign(state, extraData);
        break;

      case 'removeProperties': for (const key in keysToRemove) {
        delete state[keysToRemove[key]];
        continue;
      }
        break;

      case 'clear': for (const property in state) {
        delete state[property];
        continue;
      }
        break;
      default: break;
    }
  }

  return state;
}

module.exports = transformState;
