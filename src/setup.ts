import '@testing-library/jest-dom/vitest';
import { JSDOM } from 'jsdom'
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
const dom = new JSDOM("<!doctype html>")
global.document = dom.window.document
global.window = dom.window
