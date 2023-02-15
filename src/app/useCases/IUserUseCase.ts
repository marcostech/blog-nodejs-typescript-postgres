export interface IUserUseCase {
    findAll(): Promise<any>
    findOne(id: number): Promise<any>
    create(data: any): Promise<any>
    update(data: number): Promise<any>
    delete(id: number): Promise<any>
}