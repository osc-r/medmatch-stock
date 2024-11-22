import Client from "../client";
import { BaseResponse } from "../type";

class LocationService {
//   getLocations() {
//     //limit, page, search
//     return Client.instance.post<BaseResponse<LoginResponse>>("/v2/locations");
//   }
//   getActiveLocationsByProductId(productId: string) {
//     //productId
//     return Client.instance.post<BaseResponse<LoginResponse>>(
//       "/v2/locations/active"
//     );
//   }
//   getLocationsByProductId(productId: string) {
//     return Client.instance.post<BaseResponse<LoginResponse>>(
//       "/v1/packaging/location/$medicineId"
//     );
//   }
}

const locationService = new LocationService();
Object.freeze(locationService);

export default locationService;
