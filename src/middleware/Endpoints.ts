export class Endpoints {
  public static baseUrl = import.meta.env.VITE_API_BASE_URL as string; //import nase url from .env

  test() {
    return 'test.json';
  }
}

const endpoints = new Endpoints();
export default endpoints;
