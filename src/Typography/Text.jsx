import { useState } from 'preact/hooks'
import { render, createElement } from 'preact';
import { html } from 'htm/preact';

const withEmphasis = (text) => html`<em>${text}</em>`;
const styling = {color: 'purple'};

export default ({tag, text, style}, children) => html`<${tag} style=${style}>${text}</${tag}>`;
// export const Title = ({text, style}) => html`<h1 style=${style}>${text}</h1>`;
// export const Subheading = ({text, style}) => html`<h3 style=${style}>${text}</h3>`;
