/*
  Warnings:

  - You are about to alter the column `purchased` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Lead` MODIFY `purchased` VARCHAR(191) NOT NULL;
