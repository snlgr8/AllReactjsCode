const googleSearch = require('./script');
dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

it('this is a test ', () => {
  expect('hello').toBe('hello');
  googleSearch('cat', dbMock);
});

it('seaching googledatabase', () => {
  expect(googleSearch('test', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});
it('to work with undefined and null', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});

it('not return more than 3 elemnts ', () => {
  expect(googleSearch('.com', dbMock).length).toEqual(3);
});
