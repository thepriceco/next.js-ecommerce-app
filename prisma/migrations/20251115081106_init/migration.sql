/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carrier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryAttributeRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Coupon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderStore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductAttribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShippingRate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreCarrier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwoFactorConfirmation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwoFactorToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_parent_id_fkey`;

-- DropForeignKey
ALTER TABLE `CategoryAttributeRelation` DROP FOREIGN KEY `CategoryAttributeRelation_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `Favorite` DROP FOREIGN KEY `Favorite_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_coupon_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_order_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderStore` DROP FOREIGN KEY `OrderStore_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderStore` DROP FOREIGN KEY `OrderStore_shipping_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProductAttribute` DROP FOREIGN KEY `ProductAttribute_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProductCategory` DROP FOREIGN KEY `ProductCategory_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProductCategory` DROP FOREIGN KEY `ProductCategory_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_carrier_id_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `Shipment_order_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `ShippingRate` DROP FOREIGN KEY `ShippingRate_carrier_id_fkey`;

-- DropForeignKey
ALTER TABLE `StoreCarrier` DROP FOREIGN KEY `StoreCarrier_carrier_id_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToCoupon` DROP FOREIGN KEY `_CategoryToCoupon_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToCoupon` DROP FOREIGN KEY `_CategoryToCoupon_B_fkey`;

-- DropForeignKey
ALTER TABLE `_CouponToProduct` DROP FOREIGN KEY `_CouponToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CouponToProduct` DROP FOREIGN KEY `_CouponToProduct_B_fkey`;

-- DropForeignKey
ALTER TABLE `cartitem` DROP FOREIGN KEY `CartItem_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `productimage` DROP FOREIGN KEY `ProductImage_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_product_id_fkey`;

-- AlterTable
ALTER TABLE `productimage` MODIFY `url` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `comment` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `isVerified` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `Account`;

-- DropTable
DROP TABLE `Address`;

-- DropTable
DROP TABLE `Carrier`;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `CategoryAttributeRelation`;

-- DropTable
DROP TABLE `Coupon`;

-- DropTable
DROP TABLE `Favorite`;

-- DropTable
DROP TABLE `Order`;

-- DropTable
DROP TABLE `OrderItem`;

-- DropTable
DROP TABLE `OrderStore`;

-- DropTable
DROP TABLE `PasswordResetToken`;

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `ProductAttribute`;

-- DropTable
DROP TABLE `ProductCategory`;

-- DropTable
DROP TABLE `Shipment`;

-- DropTable
DROP TABLE `ShippingRate`;

-- DropTable
DROP TABLE `StoreCarrier`;

-- DropTable
DROP TABLE `TwoFactorConfirmation`;

-- DropTable
DROP TABLE `TwoFactorToken`;

-- DropTable
DROP TABLE `VerificationToken`;

-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,
    `refresh_token_expires_in` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `account_userId_key`(`userId`),
    INDEX `account_userId_idx`(`userId`),
    UNIQUE INDEX `account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verificationtoken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `verificationtoken_token_key`(`token`),
    UNIQUE INDEX `verificationtoken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passwordresettoken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `passwordresettoken_token_key`(`token`),
    UNIQUE INDEX `passwordresettoken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `twofactortoken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `twofactortoken_token_key`(`token`),
    UNIQUE INDEX `twofactortoken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `twofactorconfirmation` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `twofactorconfirmation_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` VARCHAR(191) NOT NULL,
    `store_id` VARCHAR(191) NOT NULL,
    `discount_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `brand` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `product_discount_id_key`(`discount_id`),
    UNIQUE INDEX `product_slug_key`(`slug`),
    UNIQUE INDEX `product_store_id_name_key`(`store_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productattribute` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `category_attribute_id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `productattribute_product_id_idx`(`product_id`),
    INDEX `productattribute_category_attribute_id_idx`(`category_attribute_id`),
    UNIQUE INDEX `productattribute_product_id_category_attribute_id_key`(`product_id`, `category_attribute_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productcategory` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `productcategory_category_id_idx`(`category_id`),
    INDEX `productcategory_product_id_idx`(`product_id`),
    UNIQUE INDEX `productcategory_product_id_category_id_key`(`product_id`, `category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `discount_id` VARCHAR(191) NULL,
    `parent_id` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `image` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `category_discount_id_key`(`discount_id`),
    UNIQUE INDEX `category_slug_key`(`slug`),
    INDEX `category_parent_id_idx`(`parent_id`),
    INDEX `category_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoryattributerelation` (
    `category_id` VARCHAR(191) NOT NULL,
    `category_attribute_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `categoryattributerelation_category_attribute_id_idx`(`category_attribute_id`),
    UNIQUE INDEX `categoryattributerelation_category_id_category_attribute_id_key`(`category_id`, `category_attribute_id`),
    PRIMARY KEY (`category_id`, `category_attribute_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `coupon_id` VARCHAR(191) NULL,
    `order_no` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `total_price` DOUBLE NOT NULL,
    `order_status` ENUM('PENDING', 'INPROGRESS', 'SHIPPED', 'COMPLETED', 'CANCELLED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',

    UNIQUE INDEX `order_order_no_key`(`order_no`),
    INDEX `order_user_id_idx`(`user_id`),
    INDEX `order_coupon_id_idx`(`coupon_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderstore` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `store_id` VARCHAR(191) NOT NULL,
    `shipping_address_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `orderstore_store_id_idx`(`store_id`),
    INDEX `orderstore_shipping_address_id_idx`(`shipping_address_id`),
    UNIQUE INDEX `orderstore_order_id_store_id_key`(`order_id`, `store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderitem` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `order_store_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `selected_attributes` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `orderitem_order_id_idx`(`order_id`),
    INDEX `orderitem_product_id_idx`(`product_id`),
    INDEX `orderitem_order_store_id_idx`(`order_store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shipment` (
    `id` VARCHAR(191) NOT NULL,
    `order_store_id` VARCHAR(191) NOT NULL,
    `carrier_id` VARCHAR(191) NULL,
    `tracking_number` VARCHAR(191) NULL,
    `shipping_method` VARCHAR(191) NULL,
    `estimated_delivery` DATETIME(3) NULL,
    `actual_delivery` DATETIME(3) NULL,
    `shipping_cost` DOUBLE NULL,
    `status` ENUM('PENDING', 'PROCESSING', 'SHIPPED', 'IN_TRANSIT', 'DELIVERED', 'RETURNED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `shipment_order_store_id_key`(`order_store_id`),
    INDEX `shipment_carrier_id_idx`(`carrier_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shippingrate` (
    `id` VARCHAR(191) NOT NULL,
    `carrier_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `base_rate` DOUBLE NOT NULL,
    `per_kg_rate` DOUBLE NOT NULL,
    `min_weight` DOUBLE NOT NULL,
    `max_weight` DOUBLE NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `shippingrate_carrier_id_name_key`(`carrier_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carrier` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `tracking_url` VARCHAR(191) NULL,
    `logo_url` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `carrier_name_key`(`name`),
    UNIQUE INDEX `carrier_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `storecarrier` (
    `store_id` VARCHAR(191) NOT NULL,
    `carrier_id` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `storecarrier_carrier_id_idx`(`carrier_id`),
    PRIMARY KEY (`store_id`, `carrier_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `address_line_1` VARCHAR(191) NOT NULL,
    `address_line_2` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `landmark` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `address_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `favorite_product_id_idx`(`product_id`),
    UNIQUE INDEX `favorite_user_id_product_id_key`(`user_id`, `product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coupon` (
    `id` VARCHAR(191) NOT NULL,
    `store_id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `discount_amount` DOUBLE NOT NULL,
    `uses_count` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `coupon_code_key`(`code`),
    INDEX `coupon_store_id_idx`(`store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `searchhistory` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `query` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `searchhistory_user_id_created_at_idx`(`user_id`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `store_slug_key` ON `store`(`slug`);

-- RenameIndex
ALTER TABLE `cart` RENAME INDEX `Cart_user_id_fkey` TO `cart_user_id_idx`;

-- RenameIndex
ALTER TABLE `cartitem` RENAME INDEX `CartItem_cart_id_fkey` TO `cartitem_cart_id_idx`;

-- RenameIndex
ALTER TABLE `cartitem` RENAME INDEX `CartItem_product_id_fkey` TO `cartitem_product_id_idx`;

-- RenameIndex
ALTER TABLE `discount` RENAME INDEX `Discount_store_id_fkey` TO `discount_store_id_idx`;

-- RenameIndex
ALTER TABLE `productimage` RENAME INDEX `ProductImage_product_id_fkey` TO `productimage_product_id_idx`;

-- RenameIndex
ALTER TABLE `review` RENAME INDEX `Review_product_id_fkey` TO `review_product_id_idx`;

-- RenameIndex
ALTER TABLE `review` RENAME INDEX `Review_user_id_product_id_key` TO `review_user_id_product_id_key`;

-- RenameIndex
ALTER TABLE `store` RENAME INDEX `Store_user_id_key` TO `store_user_id_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_username_key` TO `user_username_key`;
