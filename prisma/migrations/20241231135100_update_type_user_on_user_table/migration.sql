/*
  Warnings:

  - The `typeUser` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TypeUser" AS ENUM ('Aluno', 'Funcionario', 'Administrador', 'Visitante');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "typeUser",
ADD COLUMN     "typeUser" "TypeUser" NOT NULL DEFAULT 'Visitante';
