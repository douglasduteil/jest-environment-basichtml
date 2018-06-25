//

import BasicHTML from 'basichtml';
import NodeEnvironment from 'jest-environment-node';

//

export class BasicHTMLEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);

    const { CustomElementRegistry, Document } = BasicHTML;
    const window = this.global;

    Object.assign(window, BasicHTML);

    window.customElements = new CustomElementRegistry();
    window.document = new Document(window.customElements);
    window.document = new Document(window.customElements);
    window.window = window;
  }

  async teardown() {
    await super.teardown();

    this.global.document = null;
    this.global.window = null;
  }
}
