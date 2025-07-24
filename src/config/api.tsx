import { baseUrl } from './base_url';

export const api = {
  header: (): Record<string, string> => {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  },

  // ✅ GET Method
  getMethod: (url: string): Promise<any> => {
    const headers = { ...api.header() };
    return fetch(baseUrl + url, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .catch(err => Promise.reject(err));
  },

  // ✅ POST Method
  postMethod: (url: string, data: any): Promise<any> => {
    const headers = { ...api.header() };
    return fetch(baseUrl + url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => Promise.reject(err));
  },

  // ✅ PUT Method (handles FormData correctly)
  putMethod: (url: string, data: any): Promise<any> => {
    const headers: Record<string, string> = { ...api.header() };

    if (data instanceof FormData) {
      // Content-Type must NOT be set manually for FormData
      delete headers['Content-Type'];
    }

    return fetch(baseUrl + url, {
      method: 'PUT',
      headers,
      body: data instanceof FormData ? data : JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => Promise.reject(err));
  },

  // ✅ PUT Method for Notifications
  putMethodNotification: (url: string): Promise<any> => {
    const headers = { ...api.header() };
    return fetch(baseUrl + url, {
      method: 'PUT',
      headers,
    })
      .then(res => res.json())
      .catch(err => Promise.reject(err));
  },

  // ✅ DELETE Method
  deleteMethod: (url: string): Promise<any> => {
    const headers = { ...api.header() };
    return fetch(baseUrl + url, {
      method: 'DELETE',
      headers,
    })
      .then(res => res.json())
      .catch(err => Promise.reject(err));
  },
};
