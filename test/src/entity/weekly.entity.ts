import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('weekly')
export class WeeklyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}