//

import { BasicHTMLEnvironment } from '../src/BasicHTMLEnvironment';

//

test('exported global classes', () => {
  const env = new BasicHTMLEnvironment({});

  expect(typeof env.global.CustomElementRegistry).toBe('function');
  expect(typeof env.global.CustomEvent).toBe('function');
  expect(typeof env.global.Document).toBe('function');
  expect(typeof env.global.Event).toBe('function');
  expect(typeof env.global.HTMLElement).toBe('function');
});

test('exported global instance', () => {
  const env = new BasicHTMLEnvironment({});

  expect(typeof env.global.document).toBe('object');
  expect(typeof env.global.window).toBe('object');
});

test('document instances', () => {
  const {
    global: { document }
  } = new BasicHTMLEnvironment({});

  expect(typeof document.customElements).toBe('object');
});

test('window instances', () => {
  const {
    global: { window }
  } = new BasicHTMLEnvironment({});

  expect(typeof window.customElements).toBe('object');
});

test('document element', () => {
  const {
    global: { document, HTMLElement }
  } = new BasicHTMLEnvironment({});
  const anyElement = document.createElement('any');
  expect(anyElement instanceof HTMLElement).toBeTruthy();
});
