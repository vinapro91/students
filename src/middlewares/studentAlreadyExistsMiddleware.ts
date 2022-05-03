import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Students } from "../entities/Students";

const studentAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fullName } = req.body;

  const studentRepository = AppDataSource.getRepository(Students);

  const student = await studentRepository.findOneBy({ fullName });

  if (student) {
    res.statusCode = 422;
    return res.json({ error: "student already exists" });
  }

  next();
};

export default studentAlreadyExistsMiddleware;