/*
  Warnings:

  - Added the required column `previewUrl` to the `Songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Songs` ADD COLUMN `previewUrl` VARCHAR(191) NOT NULL;
