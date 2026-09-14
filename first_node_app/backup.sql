-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: first_node_app
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `empId` int NOT NULL AUTO_INCREMENT,
  `empName` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `workEmail` varchar(150) NOT NULL,
  PRIMARY KEY (`empId`)
) ENGINE=InnoDB AUTO_INCREMENT=7702 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (7,'John Doe hh','Developer',NULL,'umeshrapolu13@gmail.com'),(18,'John Doe hh','Developer',NULL,'umeshrapolu377@gmail.com'),(71,'John Doe hh','Developer',NULL,'umeshrapolu88@gmail.com'),(87,'John Doe hh','Developer',NULL,'umeshrapolu33@gmail.com'),(101,'John Doe','Developer',NULL,'john@example.com'),(102,'John Doe hh','Developer',NULL,'john@example.com'),(103,'John Doe hh','Developer',NULL,'john@example.com'),(104,'John Doe hh','Developer',NULL,'john@example.com'),(109,'John Doe hh','Developer',NULL,'john@example.com'),(171,'John Doe hh','Developer',NULL,'umeshrapolu30@gmail.com'),(174,'John Doe hh','Developer',NULL,'umeshrapolu31@gmail.com'),(177,'John Doe hh','Developer',NULL,'john@example.com'),(179,'John Doe hh','Developer',NULL,'umeshrapolu29@gmail.com.com'),(187,'John Doe hh','Developer',NULL,'umeshrapolu317@gmail.com'),(190,'John Doe hh','Developer',NULL,'umeshrapolu32@gmail.com'),(191,'John Doe hh','Developer',NULL,'umeshrapolu312@gmail.com'),(194,'John Doe hh','Developer',NULL,'umeshrapolu352@gmail.com'),(198,'John Doe hh','Developer',NULL,'umeshrapolu382@gmail.com'),(711,'John Doe hh','Developer',NULL,'umeshrapolu868@gmail.com'),(713,'John Doe hh','Developer',NULL,'umeshrapolurr2577f9@gmail.com'),(7101,'John Doe hh','Developer',NULL,'umeshrapolurr2779@gmail.com'),(7701,'John Doe hh','Developer',NULL,'umeshrapolu29@gmail.com');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-14 19:27:55
