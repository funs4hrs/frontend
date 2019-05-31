import { Company } from '../company/company';
import { User } from '../user';

export class Project {
    id: number;
    owner: Company;
    description: string;
    name: string;
    payout: number;
    internal: boolean;
    users: User[];
}