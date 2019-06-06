import { User } from '../user';
import { Project } from '../project/project';

export class Attendance {
    id: number;
    start_time: string;
    end_time: string;
    start_date: string;
    end_date: string;
    time_worked: number;
    user: User;
    project: Project;
}
