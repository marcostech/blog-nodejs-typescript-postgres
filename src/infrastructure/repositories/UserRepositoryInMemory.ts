import { IUserRepository } from "../../app/repositories/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository{
    db: any[] ;
    constructor(database: any){
        this.db = database
    }

    findAll(): Promise<any> {
        return Promise.resolve(this.db)
    }

    findOne(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    create(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    update(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}