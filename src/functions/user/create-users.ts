import { prisma } from "../../../database/script";

interface CreateUserRequest{
    name: string,
    email: string,
    typeUser: string,
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