import Client from "../client";
import { BaseResponse } from "../type";

class MedicineService {
  getLocations() {
    return Client.instance.post<BaseResponse>("/v2/locations");
  }
}

const medicineService = new MedicineService();
Object.freeze(medicineService);

export default medicineService;
