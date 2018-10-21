import configureStore, { middlewares } from './configure-store';
import getHistory from '../../history';

describe('configureStore', () => {
  test('is not null', () => {
    const store = configureStore({}, getHistory());
    expect(store).toBeTruthy();
  });
});

describe('middlewares', () => {
  test('is an array', () => {
    expect(middlewares()).toEqual(expect.any(Array));
  });
});
