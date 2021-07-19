'use strict';

module.exports = {
  name: require('./package').name,

  treeForAddonTestSupport(tree) {
    // intentionally not calling _super here
    // so that can have our `import`'s be
    // import { ... } from '@testing-library/ember';

    const Funnel = require('broccoli-funnel');

    const scopedInputTree = new Funnel(tree, {
      destDir: '@testing-library/ember'
    });

    return this.preprocessJs(scopedInputTree, '/', this.name, {
      annotation: `@testing-library/ember - treeForAddonTestSupport`,
      registry: this.registry,
      treeType: 'addon-test-support'
    });
  }
};
