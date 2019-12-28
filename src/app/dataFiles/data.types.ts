export interface Project {
  name: string;
  description: string;
  dev_req: Devs;
  skills: Array<string>;
  work_points: number;
  dev_bonus: Devs;
  special?: string;
  other_req?: string;
  dev_bonus_special?: string;
}

export interface ExpandedProject extends Project {
  work_points_completed?: number;
  isInWork?: boolean;
  isFinished?: boolean;
  isAvailable?: boolean;
}

export interface Devs {
  culture?: number;
  warfare?: number;
  technology?: number;
  food_supply?: number;
}

export interface StartedProject {
  [key: string]: number;
}
