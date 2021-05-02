import {fetchUtils} from "react-admin";
import {defaultHttpClientJoiner, HttpClient, httpClientProxies} from "peacetrue-httpclient";

export const debugRequestHttpClient = (httpClient: HttpClient) => {
  return (url: string, options: any = {}) => {
    console.info("url:", url, options);
    if (!options.headers) options.headers = new Headers();
    options.headers.set('X-Requested-With', 'XMLHttpRequest');
    return httpClient(url, options);
  };
};

const resultConverter = (httpClient: HttpClient) => {
  return (url: string, options: any) => {
    return httpClient(url, options)
      .then(response => response.json);
  };
};

export const DataProviderHttpClient: HttpClient = defaultHttpClientJoiner(fetchUtils.fetchJson, /*httpClientProxies.cors,*/ httpClientProxies.springRest, debugRequestHttpClient);
export const AuthProviderHttpClient: HttpClient = defaultHttpClientJoiner(DataProviderHttpClient, resultConverter);
