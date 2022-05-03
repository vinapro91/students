
import { AppDataSource } from "../data-source";
import { Students } from "../entities/Students";


const studentListService = async () => {
  const studentRepository = AppDataSource.getRepository(Students);

  const student = await studentRepository.find();

  return student;
};

export default studentListService;