import { Request, Response } from "express";
import studentCreateService from "../services/studentCreateService";

const studentCreateController = async (req: Request, res: Response) => {
  const { classRoom, fullName, age } = req.body;

  const newStudent = await studentCreateService({ classRoom, fullName, age });

  return res.status(201).json(newStudent);
};

export default studentCreateController;