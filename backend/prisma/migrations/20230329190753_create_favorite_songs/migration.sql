/*
  Warnings:

  - You are about to drop the `_user_favorite_songs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_user_favorite_songs` DROP FOREIGN KEY `_user_favorite_songs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_user_favorite_songs` DROP FOREIGN KEY `_user_favorite_songs_B_fkey`;

-- DropTable
DROP TABLE `_user_favorite_songs`;

-- CreateTable
CREATE TABLE `_Favorite_Songs` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Favorite_Songs_AB_unique`(`A`, `B`),
    INDEX `_Favorite_Songs_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Favorite_Songs` ADD CONSTRAINT `_Favorite_Songs_A_fkey` FOREIGN KEY (`A`) REFERENCES `FavoriteSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Favorite_Songs` ADD CONSTRAINT `_Favorite_Songs_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
