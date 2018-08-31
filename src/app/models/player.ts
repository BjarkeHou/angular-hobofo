import {Deserializable} from "./deserializable";

export class Player {
  id: number;
  name: string;
  phone: string;
  active_membership: boolean;
  last_paid_membership: Date;
  rating: number;
  elo: number;
  receive_sms: boolean;

  // deserialize(input: any) {
  //   Object.assign(this, input);
  //   return this;
  // }

}