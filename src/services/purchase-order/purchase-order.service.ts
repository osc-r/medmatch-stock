import Client from "../client";
import { BaseResponse } from "../type";

class PurchaseOrderService {
  getLocations() {
    return Client.instance.post<BaseResponse>("/v2/locations");
  }
}

const purchaseOrderService = new PurchaseOrderService();
Object.freeze(purchaseOrderService);

export default purchaseOrderService;
