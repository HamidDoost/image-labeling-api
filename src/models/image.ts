import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./user";

// Creating Table Image
@Entity()
export class Image {
  @PrimaryGeneratedColumn() // Assigning Primary Key to table
  id!: number;
  // Defining properties, "text"
  @Column({
    type: "text",
  })
  content!: string;

  @Column({ nullable: true })
  imageLabel!: string;

  @Column()
  imageName!: string;

  @Column({ nullable: true })
  imagePath!: string;

  @Column({ nullable: true })
  userId!: number;

  @ManyToOne((_type) => User, (user: User) => user.images)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
