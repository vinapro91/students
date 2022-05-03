import { Request, Response } from "express";
import studentListService from "../services/studentListService";


const studentListController = async (req: Request, res: Response) => {
  const student = await studentListService();

  return res.status(200).json(student);
};

export default studentListController;