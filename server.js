//prisma uses ORM:Object Relational Mapper
import express from 'express'
import { PrismaClient } from '@prisma/client'
import userRouter from "./routers/userRouter.js";
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

const prisma = new PrismaClient()

app.listen(3000, ()=>console.log("Server is running"))