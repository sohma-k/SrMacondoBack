import { Sequelize } from "sequelize";

const sequelize = new Sequelize('BD_Mr_macondo', 'root', '12345678', {
    host: 'localhost',
    dialect: "mysql"
  });
  
  
export  default sequelize