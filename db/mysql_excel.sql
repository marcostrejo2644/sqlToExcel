/*
 Navicat Premium Data Transfer

 Source Server         : marcos_trejo
 Source Server Type    : MySQL
 Source Server Version : 100418
 Source Host           : localhost:3306
 Source Schema         : mysql_excel

 Target Server Type    : MySQL
 Target Server Version : 100418
 File Encoding         : 65001

 Date: 03/05/2021 04:01:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for persons
-- ----------------------------
DROP TABLE IF EXISTS `persons`;
CREATE TABLE `persons`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `location` varchar(155) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email_UNIQUE`(`email`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of persons
-- ----------------------------
INSERT INTO `persons` VALUES (2, 'esto es un test', 'asdasd@gmai.com', 'este');

-- ----------------------------
-- Table structure for user_admin
-- ----------------------------
DROP TABLE IF EXISTS `user_admin`;
CREATE TABLE `user_admin`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(155) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `_id_UNIQUE`(`id`) USING BTREE,
  UNIQUE INDEX `useradmin_UNIQUE`(`username`) USING BTREE,
  UNIQUE INDEX `email_UNIQUE`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_admin
-- ----------------------------
INSERT INTO `user_admin` VALUES (2, 'marcosAdmin', NULL, '$2a$10$BOg9AxcQn0EkNAhwpi07huWBTPiV7Oilne9kZ9rV9jOgWuO3BzKGe');
INSERT INTO `user_admin` VALUES (3, 'loloAdmin', NULL, '$2a$10$U6hv55d9MhWAG.fp/zM92.j8j3Q7Lx.30qy2a9lEhh/x/amjfjtbu');
INSERT INTO `user_admin` VALUES (4, 'adminTest', NULL, '$2a$10$C7JLr8qrUEkfksgV8zhVH.DB4p0Et.a9mikWHLLF.vw5E8srgvq2i');

SET FOREIGN_KEY_CHECKS = 1;
