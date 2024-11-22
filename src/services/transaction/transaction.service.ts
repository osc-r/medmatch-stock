import Client from "../client";
import { BaseResponse } from "../type";

class TransactionService {
  getLocations() {
    return Client.instance.post<BaseResponse>("/v2/locations");
  }
}

const transactionService = new TransactionService();
Object.freeze(transactionService);

export default transactionService;
