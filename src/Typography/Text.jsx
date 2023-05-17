import { html } from 'htm/preact';

export default ({tag, text, style}, children) => html`<${tag} style=${style}>${text}</${tag}>`;
// export const Title = ({text, style}) => html`<h1 style=${style}>${text}</h1>`;
// export const Subheading = ({text, style}) => html`<h3 style=${style}>${text}</h3>`;
