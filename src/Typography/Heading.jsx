import { useState } from 'preact/hooks'
import { render, createElement } from 'preact';
import { html } from 'htm/preact';

const emphasis = (text) => html`<em>${text}</em>`;
const styling = {color: 'purple'};

export const Heading = ({sizeTag}) => {
  return html`<${sizeTag} style=${styling}>${sizeTag}</${sizeTag}>`;
}

// render(<Heading sizeTag='h1'/>, document.getElementById("app"));