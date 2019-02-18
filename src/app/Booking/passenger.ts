import { LoginStatus } from '../login-status';

export class Passenger{
    constructor(public seatno?: number,
        public name?: string,
        public age?: number,
        public gender?: string,
        public id?:LoginStatus
        ) { }

}