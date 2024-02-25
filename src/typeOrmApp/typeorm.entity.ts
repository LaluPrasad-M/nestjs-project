import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class TestEntity {
  constructor(testEntity?: Partial<TestEntity>) {
    Object.assign(this, testEntity || {});
  }

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Index()
  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  description?: string;
}
