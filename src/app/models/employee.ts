import { User } from "./user";
import { Position } from "./position";

export class Employee{
    user:User = new User();
    position:Position = new Position();
    phone_number:string;
    email: string;
    birth_date:string;
    gender: string;
    race: string;
    years_worked: number;
    age:number;
    days_to_birthday:number;
}