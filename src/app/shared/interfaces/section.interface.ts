import { ISectionStatus } from '../enums/section-status.enum';

export interface ISection {
  title: string;
  section: string;
  icon: string;
  status: ISectionStatus;
}