/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Focus from 'components/Focus';

describe('FocusComponent', () => {
  let FocusComponent;

  beforeEach(() => {
    FocusComponent = createComponent(Focus);
  });

  it('should have its component name as default className', () => {
    expect(FocusComponent.props.className).to.equal('focus-block');
  });
});
