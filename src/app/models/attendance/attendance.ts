import { User } from '../user';
import { Project } from '../project/project';

export class Attendance {
    id: number;
    start_time: string;
    end_time: string;
    user: User;
    project: Project;
}
