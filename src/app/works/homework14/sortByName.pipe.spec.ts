import { SortByNamePipe } from './sortByName.pipe';

describe('SortByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
