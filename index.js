'use strict';

module.exports = {
  name: require('./package').name,

  treeForAddonTestSupport(tree) {
    // intentionally not calling _super here
    // so that can have our `import`'s be
    // import { ... } from 'ember-testing-library';

    const Funnel = require('broccoli-funnel');

    const scopedInputTree = new Funnel(tree, {
      destDir: 'ember-testing-library'
    });

    return this.preprocessJs(scopedInputTree, '/', this.name, {
      annotation: `ember-testing-library - treeForAddonTestSupport`,
      registry: this.registry,
      treeType: 'addon-test-support'
    });
  }
};
