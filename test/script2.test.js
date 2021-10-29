const fetch = require('node-fetch');
const swapi = require('./script2');

it('get people from swapi', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [1, 2, 3, 4, 5, 6],
        }),
    })
  );
  expect.assertions(2);
  return swapi.getPeople(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(data.count).toBe(87);
  });
});
