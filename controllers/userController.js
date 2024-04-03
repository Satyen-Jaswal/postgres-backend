import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUsers = async (req,res)=>{
    const users = await prisma.user.findMany();
    res.send(users);
}

const createUser = async(req,res)=>{
    const{email, name}= req.body;//destructuring
    await prisma.user.create({
        data:{email, name}
    })
    res.send("User Created");
}

export default {getUsers, createUser};