import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TasksController{
    async createTask(req,res,next){
        try {
            const newTask = await prisma.task.create({
                data:{
                    name: req.body.name,
                    description: req.body.description
                }
            })

            return res.status(200).json({ message: "Task creation was succesful", newTask});
            
        } catch (error) {
            console.log(error)
        }
    }
    async getTasks(req,res,next){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}



export default new TasksController();