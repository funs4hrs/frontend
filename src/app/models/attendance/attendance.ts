import { User } from '../user';
import { Project } from '../project/project';

export class Attendance {
    id: number;
    start_time: Date;
    end_time: Date;
    user: User;
    project: Project;
}
