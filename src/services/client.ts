import axios, { AxiosError, AxiosInstance } from "axios";
import { useLoaderStore } from "../stores/loader.store";
import { useUserStore } from "../stores/user.store";

class Client {
  static #instance: AxiosInstance;
  static #pendingRequest = 0;

  private constructor() {
    Client.#instance = axios.create({
      baseURL: "https://dev.wms.jumpai.tech",
    });

    const { getState: getLoaderState } = useLoaderStore;
    const { getState: getUserState } = useUserStore;

    Client.#instance.interceptors.request.use((config) => {
      if (config.headers["SKIP_LOADING"] !== "true") {
        Client.#pendingRequest = Client.#pendingRequest + 1;
      }
      delete config.headers["SKIP_LOADING"];

      if (Client.#pendingRequest > 0) {
        getLoaderState().open();
      }

      const { getState } = useUserStore;
      config.headers.Authorization = getState().refreshToken;
      return config;
    });
    Client.#instance.interceptors.response.use(
      (config) => {
        if (Client.#pendingRequest > 0) {
          Client.#pendingRequest = Client.#pendingRequest - 1;
        }
        if (Client.#pendingRequest === 0) {
          getLoaderState().close();
        }

        return config;
      },
      (config: AxiosError) => {
        if (Client.#pendingRequest > 0) {
          Client.#pendingRequest = Client.#pendingRequest - 1;
        }

        if (config.status === 401 || config.status === 403) {
          Client.#pendingRequest = 0;
          getUserState().resetUser();
        }
        if (Client.#pendingRequest === 0) {
          getLoaderState().close();
        }
        throw config;
      }
    );
  }

  public static get instance() {
    if (!Client.#instance) {
      new Client();
    }
    return Client.#instance;
  }
}

export default Client;
