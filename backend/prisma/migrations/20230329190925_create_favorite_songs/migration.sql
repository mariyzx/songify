/*
  Warnings:

  - You are about to drop the `FavoriteSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_Favorite_Songs` DROP FOREIGN KEY `_Favorite_Songs_A_fkey`;

-- DropTable
DROP TABLE `FavoriteSong`;

-- CreateTable
CREATE TABLE `Songs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NOT NULL,
    `album` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Favorite_Songs` ADD CONSTRAINT `_Favorite_Songs_A_fkey` FOREIGN KEY (`A`) REFERENCES `Songs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
