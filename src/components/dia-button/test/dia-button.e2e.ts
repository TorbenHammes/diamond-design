import { newE2EPage } from '@stencil/core/testing';

describe('dia-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dia-button></dia-button>');

    const element = await page.find('dia-button');
    expect(element).toHaveClass('hydrated');
  });
});
