import {defaultHttpClientJoiner, HttpClient, httpClientProxies} from "@peace/httpclient";
import {fetchUtils, GET_ONE, LegacyDataProvider} from "react-admin";
import {PeaceSpringDataProviderBuilder} from "@peace/react-admin";
import AuthProviderBuilder from "./AuthProviderBuilder";

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

export const httpClient = defaultHttpClientJoiner(fetchUtils.fetchJson, httpClientProxies.cors, httpClientProxies.springRest, debugRequestHttpClient);
export const dataProvider = PeaceSpringDataProviderBuilder(process.env.REACT_APP_BASE_URL as string, httpClient);
export const dataProvider2: LegacyDataProvider = (type, resource, params) => {
  if (resource === 'profile' && type === GET_ONE) {
    let token = localStorage.getItem('token');
    if (token) {
      let user = JSON.parse(token);
      return Promise.resolve({data: {...user, id: 'profile'}});
    }
    return Promise.reject();
  }
  return dataProvider(type, resource, params);
}
export const authProvider = AuthProviderBuilder(process.env.REACT_APP_BASE_URL as string, defaultHttpClientJoiner(httpClient, resultConverter));
