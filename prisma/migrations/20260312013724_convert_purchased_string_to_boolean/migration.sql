/*
  Warnings:

  - You are about to alter the column `purchased` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Lead` MODIFY `purchased` BOOLEAN NOT NULL;
