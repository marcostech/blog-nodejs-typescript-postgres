export interface IUserRepository {
    findAll(): Promise<any>
    findOne(id: number): Promise<any>
    create(data: any): Promise<any>
    update(data: any): Promise<any>
    delete(id: number): Promise<any>
}