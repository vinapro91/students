import { AppDataSource } from "../data-source";
import { Students } from "../entities/Students";
import { IStudent } from "../interfaces/IStudent";

const studentCreateService = async ({ classRoom, fullName, age }: IStudent) => {
  const studentRepository = AppDataSource.getRepository(Students);

  const newStudent = studentRepository.create({
    fullName: fullName,
    age: age,
    classRoom: classRoom,
  });

  await studentRepository.save(newStudent);

  return newStudent;
};

export default studentCreateService;