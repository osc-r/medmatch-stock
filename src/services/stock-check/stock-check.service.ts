import Client from "../client";
import { BaseResponse } from "../type";

class StockCheckService {
  getLocations() {
    return Client.instance.post<BaseResponse>("/v2/locations");
  }
}

const stockCheckService = new StockCheckService();
Object.freeze(stockCheckService);

export default stockCheckService;
