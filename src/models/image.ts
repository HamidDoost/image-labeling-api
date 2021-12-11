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

// Creating image table in database for image data
@Entity()
export class Image {
  // Assigning primary ket to image table
  @PrimaryGeneratedColumn()
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

  //Defining relationship between image and user tables
  @ManyToOne((_type) => User, (user: User) => user.images)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
