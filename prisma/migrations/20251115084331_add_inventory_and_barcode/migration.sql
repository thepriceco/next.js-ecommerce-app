/*
  Warnings:

  - A unique constraint covering the columns `[barcode]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `amazonPrice` DECIMAL(10, 2) NULL,
    ADD COLUMN `barcode` VARCHAR(191) NULL,
    ADD COLUMN `ourRetailPrice` DECIMAL(10, 2) NULL,
    ADD COLUMN `sourceAmazonUrl` VARCHAR(191) NULL,
    ADD COLUMN `sourceWalmartUrl` VARCHAR(191) NULL,
    ADD COLUMN `walmartPrice` DECIMAL(10, 2) NULL,
    ADD COLUMN `weightGrams` INTEGER NULL;

-- CreateTable
CREATE TABLE `InventoryItem` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InventoryItem_productId_location_key`(`productId`, `location`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventoryLog` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `delta` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `correlationId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `product_barcode_key` ON `product`(`barcode`);
