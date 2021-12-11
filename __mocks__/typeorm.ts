module.exports = {
  getRepository: jest.fn().mockReturnValue({
    find: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
    createQueryBuilder: jest.fn(() => ({
      offset: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockReturnValue([]),
    })),
  }),
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
  Entity: jest.fn(),
  ManyToOne: jest.fn(),
  OneToMany: jest.fn(),
  JoinColumn: jest.fn(),
  CreateDateColumn: jest.fn(),
  UpdateDateColumn: jest.fn(),
};
