-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 43.204.134.14    Database: mxplayer
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_watched` tinyint(1) DEFAULT NULL,
  `is_liked` tinyint(1) DEFAULT NULL,
  `addtolist` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int DEFAULT NULL,
  `videoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `videoId` (`videoId`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `activities_ibfk_2` FOREIGN KEY (`videoId`) REFERENCES `videos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (2,NULL,NULL,1,'2022-09-07 11:13:22','2022-09-07 11:13:22',2,19),(4,NULL,NULL,1,'2022-09-07 11:20:30','2022-09-07 11:20:30',3,19),(5,NULL,NULL,1,'2022-09-07 11:20:39','2022-09-07 11:20:39',3,13);
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `artistid` int NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(50) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`artistid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (7,'Action test','2022-08-04 12:39:45','2022-08-18 05:57:38'),(8,'drama','2022-08-04 12:39:50','2022-08-04 12:39:50'),(9,'horror','2022-08-04 12:39:57','2022-08-04 12:39:57'),(11,'animation','2022-08-17 07:58:33','2022-08-17 07:58:33'),(12,'Reality','2022-08-17 09:16:48','2022-08-17 09:16:48'),(13,'Reality','2022-08-17 09:17:04','2022-08-17 09:17:04'),(14,'horror review','2022-08-18 05:59:18','2022-08-18 05:59:18'),(15,'dramaaa','2022-08-19 12:06:29','2022-08-19 12:06:39');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Drama','2022-07-13 14:25:43','2022-07-13 19:55:43'),(2,'Thriller','2022-07-13 14:25:43','2022-07-13 19:55:43'),(3,'Comedy','2022-07-13 14:25:43','2022-07-15 10:30:30'),(4,'Romance','2022-07-15 05:01:06','2022-07-25 10:53:23'),(6,'Reality','2022-07-15 05:14:13','2022-07-15 10:44:13'),(7,'Crime','2022-07-21 06:28:03','2022-07-21 11:58:03'),(9,'Mystery','2022-07-25 05:23:23','2022-07-25 10:53:23'),(10,'Family','2022-07-25 05:23:23','2022-07-25 10:53:23'),(11,'Action','2022-07-25 05:43:36','2022-07-25 11:13:36'),(12,'Fantasy','2022-07-25 05:46:07','2022-07-25 11:16:07'),(14,'efdg','2022-08-01 10:02:54','2022-08-01 15:32:54'),(15,'animation','2022-08-01 10:51:06','2022-08-01 16:21:06'),(16,'dtgfghhj','2022-08-01 11:17:17','2022-08-01 16:47:17');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `episode`
--

DROP TABLE IF EXISTS `episode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `episode` (
  `episodeid` int NOT NULL AUTO_INCREMENT,
  `episode_no` int DEFAULT NULL,
  `videoid` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `seasonid` int DEFAULT NULL,
  PRIMARY KEY (`episodeid`),
  KEY `fk_episodeid_videoid` (`videoid`),
  KEY `fk_episodeid_seasonid` (`seasonid`),
  CONSTRAINT `fk_episodeid_seasonid` FOREIGN KEY (`seasonid`) REFERENCES `season` (`seasonid`),
  CONSTRAINT `fk_episodeid_videoid` FOREIGN KEY (`videoid`) REFERENCES `video` (`videoid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `episode`
--

LOCK TABLES `episode` WRITE;
/*!40000 ALTER TABLE `episode` DISABLE KEYS */;
INSERT INTO `episode` VALUES (1,1,10,'2022-07-25 05:18:44','2022-07-25 10:49:59',1),(2,2,11,'2022-07-25 05:19:36','2022-07-25 10:49:36',1),(3,3,12,'2022-07-25 05:19:43','2022-07-25 10:49:43',1);
/*!40000 ALTER TABLE `episode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language` (
  `languageid` int NOT NULL AUTO_INCREMENT,
  `language_name` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`languageid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,'Hindi','2022-07-15 05:19:32','2022-07-15 10:49:32'),(2,'English','2022-07-15 05:19:45','2022-07-15 10:49:45'),(3,'Telugu','2022-07-15 05:20:21','2022-07-15 10:50:21'),(4,'Tamil','2022-07-15 05:20:30','2022-07-15 10:50:30'),(5,'Gujarati','2022-07-15 05:20:58','2022-07-15 10:50:58'),(6,'Marathi','2022-07-15 05:21:05','2022-07-15 10:51:05'),(7,'Bhojpuri','2022-07-15 05:21:17','2022-07-15 10:51:17'),(8,'Malayalam','2022-07-15 05:21:40','2022-07-15 10:51:40'),(9,'Punjabi','2022-07-15 05:21:47','2022-07-21 15:16:44');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (4,'English','2022-08-04 12:31:37','2022-08-04 12:31:37'),(5,'Hindi','2022-08-04 12:31:40','2022-08-04 12:31:40'),(6,'Gujarati','2022-08-05 08:33:20','2022-08-05 08:33:20'),(7,'English','2022-08-09 09:18:45','2022-08-09 09:18:45'),(8,'Tamil','2022-08-10 04:56:05','2022-08-10 04:56:05'),(9,'South','2022-08-16 11:10:10','2022-08-16 11:20:04'),(12,'Hindi','2022-08-17 09:19:54','2022-08-17 09:19:54');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `movieid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `languageid` int DEFAULT NULL,
  `videoid` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`movieid`),
  KEY `fk_movieid_categoryid` (`categoryid`),
  KEY `fk_movieid_languageid` (`languageid`),
  KEY `fk_movieid_videoid` (`videoid`),
  CONSTRAINT `fk_movieid_categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`),
  CONSTRAINT `fk_movieid_languageid` FOREIGN KEY (`languageid`) REFERENCES `language` (`languageid`),
  CONSTRAINT `fk_movieid_videoid` FOREIGN KEY (`videoid`) REFERENCES `video` (`videoid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (2,4,1,1,'2022-07-22 12:08:55','2022-07-22 17:38:55'),(3,11,1,8,'2022-07-25 05:44:06','2022-07-25 11:14:06'),(4,11,1,5,'2022-07-25 05:45:42','2022-07-25 11:15:42'),(5,12,1,6,'2022-07-25 05:46:27','2022-07-25 11:16:27'),(6,1,5,7,'2022-07-25 05:47:52','2022-07-25 11:17:52'),(7,11,1,9,'2022-07-25 05:49:42','2022-07-25 11:19:42');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_artist`
--

DROP TABLE IF EXISTS `movie_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_artist` (
  `movie_artist_id` int NOT NULL AUTO_INCREMENT,
  `movieid` int NOT NULL,
  `artistid` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`movie_artist_id`),
  KEY `fk_movie_artist_id_movieid` (`movieid`),
  KEY `fk_movie_artist_id_artistid` (`artistid`),
  CONSTRAINT `fk_movie_artist_id_artistid` FOREIGN KEY (`artistid`) REFERENCES `artist` (`artistid`),
  CONSTRAINT `fk_movie_artist_id_movieid` FOREIGN KEY (`movieid`) REFERENCES `movie` (`movieid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_artist`
--

LOCK TABLES `movie_artist` WRITE;
/*!40000 ALTER TABLE `movie_artist` DISABLE KEYS */;
/*!40000 ALTER TABLE `movie_artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categoryId` int DEFAULT NULL,
  `languageId` int DEFAULT NULL,
  `videoId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `languageId` (`languageId`),
  KEY `videoId` (`videoId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`languageId`) REFERENCES `languages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `movies_ibfk_3` FOREIGN KEY (`videoId`) REFERENCES `videos` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (2,'2022-08-04 13:17:03','2022-08-04 13:17:03',7,4,13),(3,'2022-08-05 05:25:40','2022-08-05 05:25:40',7,4,14),(4,'2022-08-08 07:00:33','2022-08-08 07:00:33',7,5,16),(5,'2022-08-12 09:38:02','2022-08-12 09:38:02',8,6,15),(8,'2022-08-19 12:11:20','2022-08-19 12:11:20',15,5,19),(9,'2022-08-29 06:15:44','2022-08-29 06:15:44',8,5,20),(10,'2022-08-29 06:59:37','2022-08-29 06:59:37',7,4,21);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posters`
--

DROP TABLE IF EXISTS `posters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posters`
--

LOCK TABLES `posters` WRITE;
/*!40000 ALTER TABLE `posters` DISABLE KEYS */;
INSERT INTO `posters` VALUES (1,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932297/MXPlayer/data/image1_yae8xe.webp','2022-08-19 12:43:33','2022-08-19 12:43:33'),(2,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932298/MXPlayer/data/image3_sflxng.jpg','2022-08-19 12:43:33','2022-08-19 12:43:33'),(3,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932406/MXPlayer/data/1_yibby0.webp','2022-08-19 12:43:33','2022-08-19 12:43:33');
/*!40000 ALTER TABLE `posters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `season`
--

DROP TABLE IF EXISTS `season`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `season` (
  `seasonid` int NOT NULL AUTO_INCREMENT,
  `season_name` varchar(50) DEFAULT NULL,
  `season_no` int DEFAULT NULL,
  `showid` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`seasonid`),
  KEY `fk_seasonid_showid` (`showid`),
  CONSTRAINT `fk_seasonid_showid` FOREIGN KEY (`showid`) REFERENCES `webshow` (`showid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `season`
--

LOCK TABLES `season` WRITE;
/*!40000 ALTER TABLE `season` DISABLE KEYS */;
INSERT INTO `season` VALUES (1,'Roohaniyat',1,1,'2022-07-25 05:14:31','2022-07-25 10:44:31'),(2,'Roohaniyat 2',2,1,'2022-07-25 05:15:40','2022-07-25 10:45:40');
/*!40000 ALTER TABLE `season` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show_artist`
--

DROP TABLE IF EXISTS `show_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_artist` (
  `show_artist_id` int NOT NULL AUTO_INCREMENT,
  `showid` int NOT NULL,
  `artistid` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`show_artist_id`),
  KEY `fk_show_artist_id_showid` (`showid`),
  KEY `fk_show_artist_id_artistid` (`artistid`),
  CONSTRAINT `fk_show_artist_id_artistid` FOREIGN KEY (`artistid`) REFERENCES `artist` (`artistid`),
  CONSTRAINT `fk_show_artist_id_showid` FOREIGN KEY (`showid`) REFERENCES `webshow` (`showid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_artist`
--

LOCK TABLES `show_artist` WRITE;
/*!40000 ALTER TABLE `show_artist` DISABLE KEYS */;
/*!40000 ALTER TABLE `show_artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show_category`
--

DROP TABLE IF EXISTS `show_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_category` (
  `show_category_id` int NOT NULL AUTO_INCREMENT,
  `showid` int NOT NULL,
  `categoryid` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`show_category_id`),
  KEY `fk_show_category_id_showid` (`showid`),
  KEY `fk_show_category_id_categoryid` (`categoryid`),
  CONSTRAINT `fk_show_category_id_categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`),
  CONSTRAINT `fk_show_category_id_showid` FOREIGN KEY (`showid`) REFERENCES `webshow` (`showid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_category`
--

LOCK TABLES `show_category` WRITE;
/*!40000 ALTER TABLE `show_category` DISABLE KEYS */;
INSERT INTO `show_category` VALUES (1,1,1,'2022-07-25 05:23:42','2022-07-25 10:53:42'),(2,1,4,'2022-07-25 05:23:46','2022-07-25 10:53:46'),(3,1,9,'2022-07-25 05:23:51','2022-07-25 10:53:51'),(4,1,10,'2022-07-25 05:23:57','2022-07-25 10:53:57');
/*!40000 ALTER TABLE `show_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `contact` bigint NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin',1234560001,'admin@gmail.com','$2b$10$a20NcgMyaZL/k3JN2W0Hs.0V.ZLnucl5/YI9i50W2.ss0BgzukHXm','2022-07-15 10:24:07','2022-07-25 13:32:01'),(2,'mansi',1234560002,'mansi@gmail.com','$2b$10$iyNLGGPmUyUD3MuhPKHLquzX0u4CJ.Z1dqGokwR1m2I3CDQ5ZVRf6','2022-07-15 11:01:28','2022-07-25 13:32:01'),(16,'Disha',1234560016,'disha@gmail.com','$2b$10$dHlvZZ7/wiS4eNo./DOM/.ZBjYK0tIjoIfOzLdP9PQHlTsVs.6ty2','2022-07-25 08:00:24','2022-07-25 13:32:01'),(17,'Khushboo',1234560017,'khushboo@gmail.com','$2b$10$iqJp5sN2Gs.H5PIO4LhXMepCc0I2av6Gzs9VXodDffq.LMwS6CTX2','2022-07-25 08:55:51','2022-07-25 14:25:51'),(18,'Admin',12345600018,'admin@gmail.com','$2b$10$fJpPPAATMxdEwV0os1rq8.ypzv0eA6Kihi0x0Tcpau6OMrlAhphLu','2022-07-26 10:30:15','2022-07-26 16:00:51');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_activity`
--

DROP TABLE IF EXISTS `user_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_activity` (
  `activityid` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `videoid` int NOT NULL,
  `is_watched` tinyint(1) DEFAULT '0',
  `is_liked` tinyint(1) DEFAULT '0',
  `add_to_playlist` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`activityid`),
  KEY `fk_activityid_userid` (`userid`),
  KEY `fk_activityid_videoid` (`videoid`),
  CONSTRAINT `fk_activityid_userid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`),
  CONSTRAINT `fk_activityid_videoid` FOREIGN KEY (`videoid`) REFERENCES `video` (`videoid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_activity`
--

LOCK TABLES `user_activity` WRITE;
/*!40000 ALTER TABLE `user_activity` DISABLE KEYS */;
INSERT INTO `user_activity` VALUES (1,2,10,1,1,NULL),(2,2,11,1,NULL,NULL),(3,2,12,NULL,NULL,1);
/*!40000 ALTER TABLE `user_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','1234567890','$2b$10$Gi5IHWMQi/cv9WXm6wNNce8GGplhLginyJ77KRs.y5A5j6wuYASZO',1,'2022-08-16 06:34:53','2022-08-16 06:34:53'),(2,'Mansi','1234567891','$2a$08$e.cqawEYghXm4CWNB7VequFuUzWiU.sR4zhcy5Jbg8aHHCmtp2dFS',0,'2022-08-16 08:43:33','2022-08-16 08:43:33'),(3,'Disha','1234567892','$2a$08$hk4yohP8K8UchqhADZ9Uv.vMlY739U2.kroyWEnA0qbAmcKzoAeOq',0,'2022-08-16 09:19:58','2022-08-16 09:19:58'),(4,'Kavya','1234567893','$2a$08$.49kT0BGmWrQXhqagKVHaevUHMN5wwk9LkKqDz4XbNWqEuYDhdDWS',0,'2022-08-16 09:20:15','2022-08-16 09:20:15'),(5,'Sanvi','1234567894','$2a$08$RT4NxU4YYIQkQAVF6McvoeiyiIyQvahPElLSNxfneiv4cUUTW.z3G',0,'2022-08-18 11:51:52','2022-08-18 11:51:52'),(6,'Mansi Shah','1234567895','$2a$08$X0ZTCXWcJZC2de28fj8MBueHQesDEQiBeqFpYSCQXnsG9q7uH3yLi',0,'2022-08-18 12:31:15','2022-08-18 12:31:15'),(7,'RahulSir','1234567899','$2a$08$vqY6oocwpz.VH1gRaGxWD.j/lV5izUnCHaTff7hvJrTgXTUqv3uha',0,'2022-08-19 12:05:09','2022-08-19 12:05:09'),(8,'rahul','1234567888','$2a$08$LoghWVN0oY1gikLdzgdneuaIDR/XSND6TzzV7hcjYGlfEBSUCYr2m',0,'2022-08-22 13:36:25','2022-08-22 13:36:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `videoid` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(50) DEFAULT NULL,
  `description` text,
  `type` enum('movie','episode','music') DEFAULT NULL,
  `rating` tinyint unsigned DEFAULT NULL,
  `reales_year` year DEFAULT NULL,
  `watch_count` int DEFAULT NULL,
  `thumbnail_path` varchar(255) DEFAULT NULL,
  `video_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`videoid`),
  CONSTRAINT `video_chk_2` CHECK (((`rating` > 0) and (`rating` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'Dear Comrade','Dear Comrade is the dubbed Hindi version of Telugu romantic action movie of the same name. Directed by Bharat Kamma, the movie features Vijay Devarakonda, Rashmika Mandanna and Shruti','movie',8,2019,24000000,'','','2022-07-22 11:59:36','2022-07-22 17:29:58'),(5,'The Expendables 3 (Hindi Dubbed)','Watch The Expendables 3 full movie dubbed in Hindi online on MX Player for Free! Barney Ross and Conrad Stonebanks co-founded the Expendables years ago. Ross was compelled to kill Stonebanks or so he thought after he became an arms dealer. To Ross\'s surprise, Stonebanks returns, and he\'s on a quest to bring the Expendables to an end. Ross determines that fighting old blood with new blood is the best way to go, so he sets up a team of younger, stronger, and more tech-savvy recruits. The fight to depose Stonebanks becomes a contest between old-school techniques and cutting-edge technology. What will happen next? Who will win this battle? Watch The Expendables 3 Hindi dubbed movie, The Expendables 3 movie cast, The Expendables 3 movie story, and The Expendables 3 full movie in Hindi online on MX Player.','movie',8,2014,30000000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F5.webp?alt=media&token=7af5151c-5383-46fb-8163-6329f98990e9','','2022-07-22 12:23:39','2022-07-22 18:12:30'),(6,'The Monkey King 2 (Hindi Dubbed)','Watch The Monkey King 2 Movie and Hindi Dubbed Movie The Monkey King 2 Online On MX Player. A young Buddhist monk Tang Sanzang (Feng Shaofeng) sets out on a journey to the Thunder','movie',9,2016,33000000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F6.webp?alt=media&token=baeb22a9-8232-4cae-9afb-8a853cb2e341','','2022-07-22 12:25:05','2022-07-22 18:13:52'),(7,'Hellaro','A group of suppressed women from a village in Gujarat find someone in the desert and their lives are changed forever.','movie',9,2019,300000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F7.webp?alt=media&token=3384319d-7623-4a9e-af6d-2fa94820f8a5','','2022-07-22 12:35:38','2022-07-22 18:13:52'),(8,'Maari 2','Packed with action and comedy, Tamil movie dubbed in Hindi, Maari 2 is the sequel to Maari, with a storyline revolving around Maari, the charming gangster with a good heart with enemies on the loose to','movie',8,2018,14000000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F8.webp?alt=media&token=40439a42-72bd-4d7d-aff5-0918b5c765c2','','2022-07-22 13:10:17','2022-07-22 18:48:04'),(9,'VIP 2 Lalkar (Hindi Dubbed)','PVIP 2 Lalkar (Hindi Dubbed) is the dubbed version of action-comedy movie Velaiilla Pattadhari 2 directed by Soundarya Rajnikanth. The movie was shot in Tamil as well as Telugu at the same time and was later also dubbed in Hindi. The movie is the sequel of the 2014 film Velaiilla Pattadhari and features Dhanush, Amala Paul, Vivek, Hrishikesh, Saranya Ponvannan, and Samuthirakani reprising their roles and Kajol joining the cast as the lead antagonist. This is the second time Kajol becomes a part of Tamil movie after her 1997 movie Minsaru Kanavu. Watch VIP 2 Lalkar (Hindi Dubbed) online on MX Player to enjoy this combination of comedy, thrill, and a lot of drama.','movie',7,2017,2300000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F9.webp?alt=media&token=fbbadb92-abea-45ed-ac94-1ba74c46fd11','','2022-07-22 13:12:42','2022-07-22 18:49:47'),(10,'Forever Is A Lie','Stream the MX Player Serial Roohaniyat All Episodes Online for Free. The story is about Saveer Rathod, who is head over heels in love with Ishanvi. On the day of his birthday, Saveer asks Ishanvi not to give him any surprises. However, fate has other plans and Saveer receives the shock of his life when he finds out that Ishanvi has been killed. Ishanvi’s mysterious death raises many questions and most of them point at Saveer. Will Saveer be able to get the clean chit? Did he really have something to do with the killing of the love of his life? Catch the Roohaniyat MX Player serial cast, Roohaniyat full episodes, Roohaniyat story and the Roohaniyat serial trailer online, right here.','episode',8,2022,500000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F10.webp?alt=media&token=51b2fd4d-643c-4cd2-9943-a202ca97b5c6','','2022-07-22 13:15:48','2022-07-22 18:55:00'),(11,'Middle Finger','Catch the Roohaniyat Serial Episodes, Cast Names and Promos Online on MX Player. Prisha is upset after her conversation with Rishi. She packs her bags with all the gifts and decides to change her college course. Her mother supports her in the decision. Will Prisha take a new path now? Catch the Roohaniyat serial full episodes, Roohaniyat serial videos and the Roohaniyat promos online on MX Player.','episode',8,2022,400000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F11.webp?alt=media&token=f045f972-33cf-4ac5-b873-5f1234c83c4d','','2022-07-22 13:26:42','2022-07-22 18:56:42'),(12,'Blind Date','Stream the Roohaniyat MX Player Serial Episodes, Story and Cast Names Online. Saveer is worried about the footage in the pen drive. On the other hand, the group of friends return from Mahabaleshwar and Prisha is in a bad mood. She tells everyone about the entry of a new villain in her life. Gouri and Diggy decide to leave a frustrated Prisha alone. Who is the villain Prisha is worried about? Find out in the Roohaniyat serial episodes, Roohaniyat cast names and the','episode',8,2022,420000,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fvideo_thumbnail%2F12.webp?alt=media&token=7cf7f70c-2d36-4b9e-890a-944d0dc47e70','','2022-07-22 13:28:08','2022-07-22 18:58:08'),(13,'','','episode',8,2022,234565,'','','2022-07-26 09:12:01','2022-07-26 14:42:01');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) DEFAULT NULL,
  `description` text,
  `type` enum('movie','episode','music') DEFAULT NULL,
  `rating` tinyint DEFAULT NULL,
  `reales_year` smallint DEFAULT NULL,
  `watch_count` int DEFAULT NULL,
  `thumbnail_path` varchar(255) DEFAULT NULL,
  `video_path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (13,'test','','movie',7,2012,122000,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932386/MXPlayer/data/5_xjbzov.webp','https://res.cloudinary.com/dn9lngvwk/video/upload/v1659932344/MXPlayer/data/SampleVideo_720x480_20mb_jort7h.mp4','2022-08-04 13:17:03','2022-08-04 13:17:03'),(14,'Uncaged (Hindi Dubbed)','Catch the Uncaged movie dubbed in Hindi only on MX Player and have a gala time with your friends and family! The city is in great danger when sudden murders start occurring out of nowhere. In a place that has barely seen a crime, this becomes a huge deal for people. When a team of detectives get on the case, they find out that the murders are happening in a brutal manner, almost as if an animal is doing them. When the forensic reports come forward, they find out that it is in fact an animal that has been committing these murders, that too a lion. Will they be able to catch this lion? Are they even right about the predator? Watch Uncaged Hindi dubbed movies online on MX Player to find out what happens next. Stream Uncaged full movie in Hindi, Uncaged 2016 movie, Uncaged movie cast and Uncaged movie story here. \n','movie',8,2019,3400000,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659933854/MXPlayer/data/movie2_njs3ep.webp','https://res.cloudinary.com/dn9lngvwk/video/upload/v1659932335/MXPlayer/data/SampleVideo_1280x720_5mb_djsmdh.mp4','2022-08-05 05:25:40','2022-08-05 05:25:40'),(15,'Hellaro','Stream award-winning Hellaro Gujarati movie online here for free with your friends and family! The year is 1975 when little Manjhri is married off to a man who lives in a village in the Kutch area of Gujarat. His village has not seen rainfall for a long time and the villagers are eager to do anything it takes to get the rain back in their village. It is believed that a woman, who lost her husband should have ideally stayed inside her home, honoured the life of a widow, and decided to get out of the house and earn money. Moreover, she also ran away with a man from their village and that is what ended up cursing the whole village. How will they ever be able to reverse this curse? To find out, watch the Hellaro movie online on MX Player. Catch Hellaro full movie, Hellaro Gujarati movie, Hellaro 2019 movie and Hellaro movie story and movie cast here. \n','movie',9,2020,300000,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932386/MXPlayer/data/9_xw6uqz.webp','https://res.cloudinary.com/dn9lngvwk/video/upload/v1659932335/MXPlayer/data/SampleVideo_1280x720_5mb_djsmdh.mp4','2022-08-05 08:34:00','2022-08-05 08:34:00'),(16,'Policewala Gunda 2','Released in the year 2014, the Hindi dubbed movie Policewala Gunda 2 follows the life of Sakthi, who lost his father at a very young age by a police officer. Sakthi was then adopted by Sivan, a gangster of Madurai, for whom his father worked as a driver and became his right hand man. Grown up into a man hating all police officers, Sakthi one day has a change of heart and joins a police force. With his right hand man in the police force to cover all his tracks, Sivan unleashes terror in the city of Madurai. However, Sakthi decides to stop Sivan and his evil ways, but his another adopted son Aadhi comes in his way, with his own evil plan to execute. \n','movie',8,2014,23000000,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659933854/MXPlayer/data/movie3_aicuey.webp','https://res.cloudinary.com/dn9lngvwk/video/upload/v1659932337/MXPlayer/data/SampleVideo_1280x720_10mb_rxp0qa.mp4','2022-08-08 07:00:33','2022-08-08 07:00:33'),(19,'review','dgfdghh','movie',8,2020,230000,'https://res.cloudinary.com/dn9lngvwk/image/upload/v1660813257/MXPlayer/data/13_e5ra3g.webp','https://res.cloudinary.com/dn9lngvwk/video/upload/v1659932335/MXPlayer/data/SampleVideo_1280x720_5mb_djsmdh.mp4','2022-08-19 12:11:20','2022-08-19 12:11:20'),(20,'The Wolf Of Wall Street (Hindi Dubbed)','Once upon a time, young men from all over the city of New York wanted nothing more than to become the epitome of success and earn a name on Wall Street. One such young man was Jordan','movie',8,2014,40000,'https://firebasestorage.googleapis.com/v0/b/mx-player-8feb3.appspot.com/o/data%2Fmovie2.webp?alt=media&token=054c874a-d155-4db6-b748-88dd092806a1',NULL,'2022-08-29 06:15:44','2022-08-29 06:42:28'),(21,'test','test','movie',9,2014,1,NULL,NULL,'2022-08-29 06:59:37','2022-08-29 06:59:37');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `webshow`
--

DROP TABLE IF EXISTS `webshow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `webshow` (
  `showid` int NOT NULL AUTO_INCREMENT,
  `show_name` varchar(50) DEFAULT NULL,
  `description` text,
  `languageid` int DEFAULT NULL,
  `rating` tinyint unsigned DEFAULT NULL,
  `reales_year` year DEFAULT NULL,
  `no_of_episode` int DEFAULT NULL,
  `thumbnail_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`showid`),
  KEY `fk_showid_languageid` (`languageid`),
  CONSTRAINT `fk_showid_languageid` FOREIGN KEY (`languageid`) REFERENCES `language` (`languageid`),
  CONSTRAINT `webshow_chk_2` CHECK (((`rating` > 0) and (`rating` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `webshow`
--

LOCK TABLES `webshow` WRITE;
/*!40000 ALTER TABLE `webshow` DISABLE KEYS */;
INSERT INTO `webshow` VALUES (1,'Roohaniyat','We have all been told at least once in our lives that once you meet your soulmate, love knows no bounds. Something similar happens with 19-year-old Prisha when she finds herself falling in love with a 35-year-old man, Saveer. One might assume the age difference between the two to be the only inconvenience but once you get close, the dark pasts start to reveal themselves. As it turns out, Saveer lost the love of his life, Ishanvi, on his birthday when he asked her to not give him any surprises. Instead, he got this shocker in return. Now when Prisha’s love knows no bounds, Saveer explains to her that ‘forever’ is a lie. Will this stop young Prisha from falling in love with him even further? Or will she have to accept her destiny too and leave Saveer alone? Find out by watching the Roohaniyat MX serial online on MX Player. Catch Roohaniyat all episodes, Roohaniyat full episodes, Roohaniyat new show, Roohaniyat cast and story here.',1,7,2022,27,'https://firebasestorage.googleapis.com/v0/b/mx-player-6580a.appspot.com/o/assets%2Fshow_thumbnail%2F1.webp?alt=media&token=8fa589cd-eab3-4b93-bf1d-ee066f06942c','2022-07-22 11:46:18','2022-07-25 11:06:17');
/*!40000 ALTER TABLE `webshow` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-22 15:28:45
