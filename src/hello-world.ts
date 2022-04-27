import { FASTElement, customElement, attr, html, css } from '@microsoft/fast-element';

const template = html<HelloWorld>`
    <h2>Hello ${x => x.greeting}</h2>
    <div part="black">This is supposed to be black</div>
`;

const styles = css`
  :host {
    display: block;
    contain: content;
    color: blue;
  }
  ::part(black) {
    color: black;
  }
`;

@customElement({
    name: 'hello-world',
    template,
    styles
})
export class HelloWorld extends FASTElement {
    @attr greeting: string = 'World';
    @attr({ mode: 'boolean' }) disabled: boolean = false;
}