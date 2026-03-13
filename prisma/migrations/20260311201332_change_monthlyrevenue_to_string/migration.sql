/*
  Warnings:

  - You are about to alter the column `monthlyRevenue` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - Made the column `gender` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ageRange` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessType` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sellsOnline` on table `Lead` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Lead` MODIFY `gender` VARCHAR(191) NOT NULL,
    MODIFY `ageRange` VARCHAR(191) NOT NULL,
    MODIFY `businessType` VARCHAR(191) NOT NULL,
    MODIFY `sellsOnline` VARCHAR(191) NOT NULL,
    MODIFY `monthlyRevenue` VARCHAR(191) NOT NULL;
