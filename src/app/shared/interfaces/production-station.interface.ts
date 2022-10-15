import { IProductionStationStatus } from '../enums/production-station-status.enum';

export interface IProductionStationNode {
  title: string;
  icon: string;
  status: IProductionStationStatus;
}