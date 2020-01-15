import storageService from '@services'; // TODO storageService

class Token {
  constructor() {
    this.token = '';
  }

  getToken() {
    if (URLSearchParams.get('token')) {
      this.token = URLSearchParams.get('token');
    } else {
      this.token = storageService.getToken();
    }
  }

  set() {

  }

  get() {
    this.getToken();
    return this.token;
  }
}

export default Token;
