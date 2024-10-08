export interface TimeEntry {
  registeredAt: Date;
  type: TimeType;
}

export type TimeType = 'login' | 'logout' | 'start-drive' | 'end-drive';
