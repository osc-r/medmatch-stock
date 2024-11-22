import Client from "../client";
import { BaseResponse } from "../type";

class ReservationService {
  getLocations() {
    return Client.instance.post<BaseResponse>("/v2/locations");
  }
}

const reservationService = new ReservationService();
Object.freeze(reservationService);

export default reservationService;
