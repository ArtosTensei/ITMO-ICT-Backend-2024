import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import User from "../users/User";
import OrderItem from "./OrderItem";

export type OrderAttributes = {
  id: number;
  userId: number;
  totalPrice: number;
  createdAt: Date;
};

export type OrderCreationAttributes = Optional<OrderAttributes, "id">;

@Table
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  declare userId: number;

  @AllowNull(false)
  @Column
  declare totalPrice: number;

  @AllowNull(false)
  @Column
  declare createdAt: Date;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => OrderItem)
  items: OrderItem[];
}

export default Order;
