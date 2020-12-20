import { newSpecPage } from '@stencil/core/testing';
import { DiamondButton } from '../dia-button';

describe('dia-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DiamondButton],
      html: `<dia-button></dia-button>`,
    });
    expect(page.root).toEqualHtml(`
      <dia-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dia-button>
    `);
  });
});
