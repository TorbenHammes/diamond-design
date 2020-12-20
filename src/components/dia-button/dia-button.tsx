import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'dia-button',
  styleUrl: 'dia-button.scss',
  shadow: true,
})
export class DiaButton {

  /**
   * Color, BG, Hover,...
   */
  @Prop() variant: string;

  /**
   * Submit, Button,...
   */
  @Prop() type: string;

  /**
   * Path to anything
   */
  @Prop() path: string;

  /**
   * Button Text
   */
  @Prop() buttontext: string;

  render() {
    return (
      <Host>
        <button type={this.type}>
          {this.buttontext}
        </button>
      </Host>
    );
  }

}
