import { BookingInterface } from 'interfaces/booking';
import { FleetManagerInterface } from 'interfaces/fleet-manager';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  location: string;
  status: string;
  fleet_manager_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  fleet_manager?: FleetManagerInterface;
  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  location?: string;
  status?: string;
  fleet_manager_id?: string;
}
