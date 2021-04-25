import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

//Não necessita de interface porque é passado apenas o email

class UsersService {

    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {

        const userExists = await this.usersRepository.findOne({
            email
        })

        // Se existir, rotornar usuário
        if( userExists ){
            return userExists;
        }
        
        const user = this.usersRepository.create({
            email
        })
        
        // Se não existir, salvar no db
        await this.usersRepository.save(user)

        return user;
    }

}

export { UsersService }