/*
  Warnings:

  - You are about to drop the `Songs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Favorite_Songs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_Favorite_Songs` DROP FOREIGN KEY `_Favorite_Songs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_Favorite_Songs` DROP FOREIGN KEY `_Favorite_Songs_B_fkey`;

-- DropTable
DROP TABLE `Songs`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `_Favorite_Songs`;

-- CreateTable
CREATE TABLE `user` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `songs` (
    `id_song` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NOT NULL,
    `preview_url` VARCHAR(191) NOT NULL,
    `album` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_song`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite_songs` (
    `id_favorite_songs` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_song` INTEGER NOT NULL,

    UNIQUE INDEX `favorite_songs_id_user_id_song_key`(`id_user`, `id_song`),
    PRIMARY KEY (`id_favorite_songs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favorite_songs` ADD CONSTRAINT `favorite_songs_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite_songs` ADD CONSTRAINT `favorite_songs_id_song_fkey` FOREIGN KEY (`id_song`) REFERENCES `songs`(`id_song`) ON DELETE RESTRICT ON UPDATE CASCADE;
