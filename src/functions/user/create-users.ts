import { TypeUser } from './../../../node_modules/.prisma/client/index.d';
import { prisma } from "../../../database/script";

interface CreateUserRequest{
    name: string,
    email: string,
    typeUser:  TypeUser 
}

export async function createUser(
    {
        name,
        email,
        typeUser
    }: CreateUserRequest) {
     const result = await prisma.user.create({
        data: {
            name,
            email,
            typeUser
        }
     })
        
        
    return {result}
}