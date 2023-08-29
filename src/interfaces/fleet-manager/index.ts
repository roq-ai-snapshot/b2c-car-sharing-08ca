import { CarInterface } from 'interfaces/car';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FleetManagerInterface {
  id?: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  car?: CarInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    car?: number;
  };
}

export interface FleetManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
}
