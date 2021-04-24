const axios = require('axios');
const fetchDataPage = require('../../../src/components/fetch-data-page');
const MOCK_PAGE_REQUEST = require('./__mocks__/axios-result.mock');

jest.mock('axios');

describe('# fetchDataPage lib', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(MOCK_PAGE_REQUEST);
  });

  test('## should throw error because url parameter is required', async () => {
    try {
      await fetchDataPage();
    } catch (error) {
      expect(error.message).toBe('url parameter is required');
    }
    try {
      await fetchDataPage('');
    } catch (error) {
      expect(error.message).toBe('url parameter is required');
    }
  });

  test('## should fetch the page and return a cheeiro loaded function', async () => {
    const result = await fetchDataPage(
      'https://www.pciconcursos.com.br/vagas/geologia'
    );
    expect(result).not.toBe(null);
  });

  test('## should try to fetch the page and throw a error', async () => {
    axios.get.mockRejectedValueOnce(new Error('Async error'));
    try {
      await fetchDataPage('https://www.pciconcursos.com.br/vagas/geologia');
    } catch (error) {
      expect(error.message).toBe('Async error');
    }
  });
});
