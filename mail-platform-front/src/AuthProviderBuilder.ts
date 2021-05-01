import {HttpClient} from "peacetrue-httpclient";
import {AuthProvider} from "react-admin";

const globalAuthorities: Record<string, string[]> = {
  'peacetrue': ['SUPER_MANAGER'],
  'admin': ['MANAGER'],
};

export const AuthProviderBuilder = (url: string, httpClient: HttpClient): AuthProvider => {
  return {
    login: (params) => {
      return httpClient(`${url}/login`, {method: 'post', body: params})
        .then(user => {
          console.info("login user:", user);
          localStorage.setItem('token', JSON.stringify(user));
          let username = user.username;
          //let authorities = user.authorities.map(item => item.authority.replace('ROLE_', ''));
          let authorities = globalAuthorities[username] || ['USER'];
          let isSuperManager = authorities.indexOf('SUPER_MANAGER') !== -1;
          localStorage.setItem('permissions', JSON.stringify({
            isSuperManager: isSuperManager,
            isManager: isSuperManager || authorities.indexOf('MANAGER') !== -1,
            roles: authorities
          }));
        });
    },
    logout: (params) => {
      return httpClient(`${url}/logout`, {method: 'post', body: params})
        .then(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('permissions');
        });
    },
    getIdentity: () => {
      let token = localStorage.getItem('token');
      if (token) {
        let user = JSON.parse(token);
        return Promise.resolve({...user, fullName: user.username});
      }
      return Promise.reject();
    },
    checkAuth: (params) => {
      return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();
    },
    checkError: (error) => {
      console.error("error:", JSON.stringify(error));
      if (error.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.reject("unauthorized");
      }
      return Promise.resolve();
    },
    getPermissions: (params) => {
      console.info("getPermissions:", params);
      const permissions = localStorage.getItem('permissions');
      return permissions ? Promise.resolve(JSON.parse(permissions)) : Promise.reject();
    },
  };
};

export default AuthProviderBuilder;
