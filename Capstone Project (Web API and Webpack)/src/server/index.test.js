import { getGeoData, getWeatherInfo, getPixaImage, getDetails } from './index';


describe("Test function 'getGeoData()'", () => {
    test('It should be defined', () => {
        expect(getGeoData).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof getGeoData).toBe("function");
        return;
    });

});

describe("Test function 'getWeatherInfo()'", () => {
    test('It should be defined', () => {
        expect(getWeatherInfo).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof getWeatherInfo).toBe("function");
    });
});

describe("Test function 'getPixaImage()'", () => {
    test('It should be defined', () => {
        expect(getPixaImage).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof getPixaImage).toBe("function");
    });
});

describe("Test function 'getDetails()'", () => {
    test('It should be defined', () => {
        expect(getDetails).toBeDefined();
    });

    test('It should be a function', () => {
        expect(typeof getDetailsl).toBe("function");
    });
});