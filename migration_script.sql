-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: travel
-- Source Schemata: travelapp
-- Created: Wed Dec 21 22:48:09 2022
-- Workbench Version: 8.0.30
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema travel
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `travel` ;
CREATE SCHEMA IF NOT EXISTS `travel` ;

-- ----------------------------------------------------------------------------
-- Table travel.accounts
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`accounts` (
  `idAccount` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `email` VARCHAR(100) CHARACTER SET 'utf8mb3' NOT NULL,
  `phone` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `role` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'user',
  `username` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `password` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `avatar` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT '/img/avatarDefault.jpg',
  `address` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `gender` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'none',
  `birthdate` DATETIME NULL DEFAULT NULL,
  `verify` TINYINT(1) NOT NULL DEFAULT '0',
  `type` VARCHAR(100) NULL DEFAULT NULL,
  `verifyToken` VARCHAR(100) NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idAccount`))
ENGINE = InnoDB
AUTO_INCREMENT = 67
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.addresses
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`addresses` (
  `idAddress` INT NOT NULL AUTO_INCREMENT,
  `provinceOrCity` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `districtOrTown` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `communeOrWard` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `idTour` INT NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idAddress`),
  INDEX `FK_Addresses_Tours` (`idTour` ASC) VISIBLE,
  CONSTRAINT `FK_Addresses_Tours`
    FOREIGN KEY (`idTour`)
    REFERENCES `travel`.`tours` (`idTour`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.configs
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`configs` (
  `idConfig` INT NOT NULL AUTO_INCREMENT,
  `infoType` VARCHAR(100) NULL DEFAULT 'general',
  `configs` VARCHAR(1000) NULL DEFAULT '[]',
  `image` VARCHAR(100) NULL DEFAULT NULL,
  `url` VARCHAR(100) NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idConfig`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.evaluates
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`evaluates` (
  `idEvaluate` INT NOT NULL AUTO_INCREMENT,
  `numberStarHotel` INT NULL DEFAULT NULL,
  `numberStarFood` INT NULL DEFAULT NULL,
  `numberStarVehicle` INT NULL DEFAULT NULL,
  `numberStarTourGuide` INT NULL DEFAULT NULL,
  `numberStarSchedule` INT NULL DEFAULT NULL,
  `title` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `contentEvaluate` VARCHAR(2000) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `idTour` INT NULL DEFAULT NULL,
  `idAccount` INT NULL DEFAULT NULL,
  `rateAverage` INT NULL DEFAULT '0',
  `rateTitle` VARCHAR(45) NULL DEFAULT NULL,
  `typeEvaluate` VARCHAR(45) NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  `evaluateToService` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`idEvaluate`),
  INDEX `FK_Evaulates_Accounts` (`idAccount` ASC) VISIBLE,
  INDEX `FK_Evaulates_Tours` (`idTour` ASC) VISIBLE,
  CONSTRAINT `FK_Evaulates_Accounts`
    FOREIGN KEY (`idAccount`)
    REFERENCES `travel`.`accounts` (`idAccount`),
  CONSTRAINT `FK_Evaulates_Tours`
    FOREIGN KEY (`idTour`)
    REFERENCES `travel`.`tours` (`idTour`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.favorites
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`favorites` (
  `idFavorite` INT NOT NULL AUTO_INCREMENT,
  `idAccount` INT NULL DEFAULT NULL,
  `idTour` INT NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idFavorite`),
  INDEX `FK_Favorites_Tours` (`idTour` ASC) VISIBLE,
  INDEX `FK_Favorites_Accounts` (`idAccount` ASC) VISIBLE,
  CONSTRAINT `FK_Favorites_Accounts`
    FOREIGN KEY (`idAccount`)
    REFERENCES `travel`.`accounts` (`idAccount`),
  CONSTRAINT `FK_Favorites_Tours`
    FOREIGN KEY (`idTour`)
    REFERENCES `travel`.`tours` (`idTour`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.images
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`images` (
  `idImage` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT '/img/error.jpg',
  `status` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT 'done',
  `name` VARCHAR(200) CHARACTER SET 'utf8mb3' NULL DEFAULT 'error',
  `idTour` INT NULL DEFAULT NULL,
  `idPost` INT NULL DEFAULT NULL,
  `idConfig` INT NULL DEFAULT NULL,
  `statusAction` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT 'new',
  `dateAdded` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  `dateEdited` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  INDEX `FK_Images_Tours` (`idTour` ASC) VISIBLE,
  INDEX `FK_Images_Configs_idx` (`idConfig` ASC) VISIBLE,
  CONSTRAINT `FK_Images_Configs`
    FOREIGN KEY (`idConfig`)
    REFERENCES `travel`.`configs` (`idConfig`),
  CONSTRAINT `FK_Images_Tours`
    FOREIGN KEY (`idTour`)
    REFERENCES `travel`.`tours` (`idTour`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 44
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------
-- Table travel.noticeto
-- ----------------------------------------------------------------------------
