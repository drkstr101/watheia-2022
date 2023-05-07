import '@testing-library/jest-dom';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

var chai = require('chai');
chai.use(require('chai-string'));
