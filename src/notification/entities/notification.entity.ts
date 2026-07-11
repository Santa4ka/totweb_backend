import { Company } from 'src/company/entities/company.entity';
import { Student } from 'src/student/entities/student.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', default: null })
  coverLetter: string;

  @ManyToOne(() => Company)
  company: Company;

  @ManyToOne(() => Student)
  student: Student;

  @ManyToOne(() => Vacancy)
  vacancy: Vacancy;
}
