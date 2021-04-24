import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

//Não necessita de interface porque é passado apenas o email

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository)

        const userExists = await usersRepository.findOne({
            email
        })

        // Se existir, rotornar usuário
        if( userExists ){
            return userExists;
        }
        
        const user = usersRepository.create({
            email
        })
        
        // Se não existir, salvar no db
        await usersRepository.save(user)

        return user;
    }

}

export { UsersService }