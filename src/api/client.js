class ApiClient {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  async request(endpoint, options = {}) {   
    const headers = {
      ...this.defaultHeaders,
      ...options.headers
    };

    const config = {
      ...options,
      headers
    };

    try {
      const response = await fetch(endpoint, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
  
      if (!contentType || !contentType.includes('application/json')) {
        return response;
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);

      throw error;
    }
  }

  async get(endpoint, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: 'GET'
    });
  }

  async post(endpoint, data, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(endpoint, data, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async patch(endpoint, data, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  async delete(endpoint, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: 'DELETE'
    });
  }
}

export const api = new ApiClient();