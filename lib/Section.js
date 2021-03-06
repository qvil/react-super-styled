var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { basePropTypes, containerPropTypes, justifyPropTypes, spacingPropTypes, mediaStylesPropTypes } from './utils';

import Block from './Block';

var propTypes = _extends({}, basePropTypes, containerPropTypes, justifyPropTypes, spacingPropTypes, mediaStylesPropTypes);

/**
 * Section block wrapper
 * Duplicates Block, renders <section> tag
 */
var Section = Block.withComponent('section');
Section.propTypes = propTypes;
var _default = Section;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/Section.js');

  __REACT_HOT_LOADER__.register(Section, 'Section', 'src/lib/Section.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/Section.js');
}();

;