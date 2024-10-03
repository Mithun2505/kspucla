-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: teachers_db
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email_id` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'suryaD','suryamail@akasam.com','admin');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('c8fc159a442f');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teacher_id` int NOT NULL,
  `amount` float NOT NULL,
  `payment_date` datetime NOT NULL,
  `merchant_transaction_id` varchar(100) NOT NULL,
  `merchant_user_id` varchar(100) NOT NULL,
  `payment_page_link` varchar(800) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `payment_chk_1` CHECK ((`status` in (0,1)))
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,400,'2024-07-24 05:59:29','f54de822-7db7-4c94-814c-27cb81670969','USER_9','https://mercury-t2.phonepe.com/transact/pg?token=ODgxZjU1Mzg0ODU0ZjdlNzkxMWVhNzQwY2Y3MmVlMDM1OGM4YzRhNGVlNGNjY2M4M2VkMmNhNjJmOGU5N2NhZTUyZGE3ZDhjYmM4ZTUyM2MxYzVhMDM2YTA1NmJjN2JhNDVlY2I4YzcyODQ5NWQ0Y2FiNmI0NmJjNjU5ZTgxZDNlMjYyOjE1YWE1MzQ3N2Y2ZjA2YzBlZjg2ZjM4MTc3NzNiMzUy',1),(2,1,400,'2024-07-24 06:03:46','53e28bfc-a851-43b9-99c6-242b42dacf31','USER_10','https://mercury-t2.phonepe.com/transact/pg?token=MGM3MDM4ZGVjMTlhNjJhOGRlMTJkYThmZDk4MTBhMDAyZDBjOTNmNjVhY2E4ZmRlODhhMzM0YTdjMjMzZWFmZjVmNjg3ODBlNTRlY2UwYmIwNGQ5ZDhmMTc2ZmM3YzM3YjhiZmViNjVhYmM0YWY2OGRlMzNmOTUzMmY5OGE0NzIwYTFjOmM4NTQzYjY2MWU3MjJiYjNhNTI1OTQ2Mzg2ZTBjZjVi',1),(3,1,400,'2024-07-24 06:16:51','e7aeb552-22fb-4bfe-aa5e-8ee3f34f05ef','USER_11','https://mercury-t2.phonepe.com/transact/pg?token=OGU5MGZkNjQ4NjQ5YjVjMTVjZjliMzAxZjgwMjk3YjNmM2EzYzJiOGIyNjIzNTk0NDcwNzhjMzRhMjFkNmJmN2MzNzc2YjNmYjJhNjcwNjhiZGE4ZDYwZDI0Njg1NmQwMTg3YjBkN2MyMmIwNmI2ZWQxZDRmMWI2OTIyNmQ5NTZkNTlhOjRhNzYzZmMzM2IxYTEzYzc2NjZjZmFjZDllZTY1NjU2',0),(4,1,400,'2024-07-25 08:18:35','b813f89f-6df0-4f81-b837-168eee8d3740','USER_17','https://mercury-t2.phonepe.com/transact/pg?token=YWViM2Y2NmQ4NDg4MTFhNmMyMDNmZTI3NTdjYTQwNjZjZjU2Njg2NjkyZjZhNGU4ZmJhM2I3MTc0ZDEyNTgyZDU3MzgwYjNiMDQ4MWQyYWVjYzI1NGExNTUzODE3ZTMzNzA3Y2EwMWIxMzE3NGNiNTk0N2Y5NzRkZTU4MWRlMTdjYjMxOmFlM2I5YWQ2YzJhMzE0NzI3ZGQ2MDY0YjBmZTA4Nzc5',1),(5,1,400,'2024-07-25 08:41:26','fd2d6f94-5044-4f2d-8a5c-5c71d47b8108','USER_18','https://mercury-t2.phonepe.com/transact/pg?token=NWM5Nzc1ZDFkZTlhZmNkY2E3YzExZTRhYjllZTUzOGI1MWNlYTQ0OWRiYzNkZGUzYWY1Y2Q3MTRhOTlhNDMyNzA4MzQ3ZmEwNmRkMWFiM2EwYmM1YWZkZDgxYjdiNmM0ZDVmYjVlMzYyN2E2OTgyNjQ5ZmE3MjNhM2I1ZWQ1NzFjNTVlOmJjNDAxZDU3M2VlZWRmNTE4NDE0NTAyNzhjNDg1YTU4',0),(6,1,400,'2024-07-25 08:45:52','0573e4f2-d37d-4c1d-b85d-56b720632b9d','USER_19','https://mercury-t2.phonepe.com/transact/pg?token=YjZiNTM2NWQ4MmI2MDMzOWFiNDUzNGE4ZTk4MzhlMWNiMTQ5ZWM2ODFiMjYwYzY3NWIwN2JiMGMzYTk5OWRjNTc2NWJlYWJhMjBlNmQ2NTJhZWNlN2Y2OTkxZWYxNTczM2RlY2M0Njk0YmMxMjRjYjdlYTEyMGVlZDFmMzNjZmI5YTYwOmYzZGQ3NmJhOGIyMDU0YWRjZWQ0MWY5ZjdiYTZlMGYy',0),(7,1,400,'2024-07-25 09:03:24','7030ea1f-4ffe-4862-848e-c0ef91926dfc','USER_20','https://mercury-t2.phonepe.com/transact/pg?token=Y2M4YWUzOWE0MmJkNzMwMGUwNDg1YWQ3OWNkYzEyMGY5NTgxNWNlYTM4NjA0MmVmOGNhNmI3MGVhZGI3YjQ5ZjY2NjM3NjRjYzNmYjFkNzRiZmE5Y2NmMmI0ZDc2ODdjZmVlNDlkYjcyMzEwZmE2ODhkZTI4OGY2MzNlZTE5MTI3MTNlOjA0YzE0ZjU0ZGY1OTgyM2E4ODlkYWZiMjA2YjBiZmU5',0),(8,1,400,'2024-07-26 10:02:03','51d7a7a9-b355-4503-b49b-a7178116d15b','USER_21','https://mercury-uat.phonepe.com/transact/simulator?token=5R45vBsWI16Tattcq9geDVbfYaveC3HFjwTKHfPM5TswVdCUq3ygnH6ozP9XcbqKNVmOQ',0),(9,1,400,'2024-07-26 10:04:15','c2afdeb1-b759-4b05-9170-14a4ec07bdb6','USER_22','https://mercury-uat.phonepe.com/transact/simulator?token=5R45vBsWI16Tattcq9geCBLQuQGgWLsHDulvyBGQpJ8URofPU6gwVa95AVpvgzjEwWdXy',0),(10,1,400,'2024-07-26 10:05:09','b0ac9fa2-3a68-4935-aac1-d50376b998c6','USER_23','https://mercury-uat.phonepe.com/transact/simulator?token=5R45vBsWI16Tattcq9geCADy88STKOpU8i4jZkJsaNVzi2iKngyQyvoTGmQQKfx5aJMWM',0),(11,1,400,'2024-07-26 12:03:24','eff4cbae-71ea-48a0-a4e0-73daf6cf11','USER_24','https://mercury-uat.phonepe.com/transact/simulator?token=JllwZmLymkcppZU4WhcEMPIYmEbozExd0nAVaSase9hufzBXmTThN0J5cIvs6jVeLg',0),(12,1,400,'2024-07-26 12:06:59','101b9cd2-187a-4d5f-981d-c1e1069193','USER_25','https://mercury-uat.phonepe.com/transact/simulator?token=JllwZmLymkcppZU4WhcERtYNVlNZjTKYSkRg7pfdvDqxrKjXIUQLeeE8pqqKfKmxcw',0),(13,26,400,'2024-07-26 12:58:11','bbcea423-a4fd-4e0c-bf3c-ac00081e77','USER_26','https://mercury-uat.phonepe.com/transact/simulator?token=JllwZmLymkcppZU4WhcEMjRtpqOK7OcjpOuXwBHQeFK3yUbRE7wKfMYyFZU6YRMefm',0);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_status`
--

DROP TABLE IF EXISTS `payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `merchant_transaction_id` varchar(100) NOT NULL,
  `payment_id` int NOT NULL,
  `status_response_obj` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `payment_status_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
INSERT INTO `payment_status` VALUES (1,'MT7850590068188104',2,'\"response_data\"'),(2,'MT7850590068188104',3,'{\"code\": \"PAYMENT_SUCCESS\", \"data\": {\"state\": \"COMPLETED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"SUCCESS\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": {\"utr\": \"206378866112\", \"type\": \"UPI\"}, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Your request has been successfully completed.\", \"success\": true}'),(3,'MT7850590068188104',3,'{\"code\": \"PAYMENT_SUCCESS\", \"data\": {\"state\": \"COMPLETED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"SUCCESS\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": {\"utr\": \"206378866112\", \"type\": \"UPI\"}, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Your request has been successfully completed.\", \"success\": true}'),(4,'f54de822-7db7-4c94-814c-27cb81670969',1,'{\"code\": \"PAYMENT_SUCCESS\", \"data\": {\"state\": \"COMPLETED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"SUCCESS\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": {\"utr\": \"206378866112\", \"type\": \"UPI\"}, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Your request has been successfully completed.\", \"success\": true}'),(6,'b813f89f-6df0-4f81-b837-168eee8d3740',4,'{\"code\": \"PAYMENT_ERROR\", \"data\": {\"state\": \"FAILED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"ZU\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": null, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Payment Failed\", \"success\": true}'),(7,'e7aeb552-22fb-4bfe-aa5e-8ee3f34f05ef',3,'{\"code\": \"PAYMENT_ERROR\", \"data\": {\"state\": \"FAILED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"ZU\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": null, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Payment Failed\", \"success\": true}'),(8,'101b9cd2-187a-4d5f-981d-c1e1069193',12,'{\"code\": \"PAYMENT_ERROR\", \"data\": {\"state\": \"FAILED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"ZU\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": null, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Payment Failed\", \"success\": true}'),(9,'bbcea423-a4fd-4e0c-bf3c-ac00081e77',13,'{\"code\": \"PAYMENT_ERROR\", \"data\": {\"state\": \"FAILED\", \"amount\": 100, \"merchantId\": \"PGTESTPAYUAT\", \"responseCode\": \"ZU\", \"transactionId\": \"T2111221437456190170379\", \"paymentInstrument\": null, \"merchantTransactionId\": \"MT7850590068188104\"}, \"message\": \"Payment Failed\", \"success\": true}');
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `payment_order_id` varchar(100) DEFAULT NULL,
  `transaction_payment_id` varchar(100) DEFAULT NULL,
  `payment_signature` varchar(200) DEFAULT NULL,
  `full_name` varchar(100) NOT NULL,
  `college_type` varchar(20) NOT NULL,
  `kgid_hrms` varchar(50) NOT NULL,
  `mode_of_recuritment_or_aided_date` varchar(20) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `date_of_birth` varchar(20) NOT NULL,
  `clg_street_name` varchar(100) NOT NULL,
  `clg_state` varchar(20) NOT NULL,
  `clg_city` varchar(50) NOT NULL,
  `clg_country` varchar(10) NOT NULL,
  `clg_zip_code` varchar(10) NOT NULL,
  `clg_code` varchar(15) NOT NULL,
  `clg_taluk` varchar(50) NOT NULL,
  `emp_street_name` varchar(100) NOT NULL,
  `emp_state` varchar(20) NOT NULL,
  `emp_city` varchar(50) NOT NULL,
  `emp_country` varchar(15) NOT NULL,
  `emp_zip_code` varchar(10) NOT NULL,
  `emp_taluk` varchar(50) NOT NULL,
  `emp_contact` varchar(10) NOT NULL,
  `emp_alt_contact` varchar(10) NOT NULL,
  `issue_date` varchar(15) NOT NULL,
  `joining_date` varchar(10) NOT NULL,
  `fee` varchar(10) NOT NULL,
  `transact_date` varchar(10) NOT NULL,
  `reciept_num` varchar(50) NOT NULL,
  `blood_grp` varchar(10) NOT NULL,
  `img_name` varchar(200) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `clg_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `teachers_chk_1` CHECK ((`is_active` in (0,1)))
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089010','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724111729325169.jpg',0,1,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089011','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724111837508966.jpg',0,2,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089012','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724111947309285.jpg',0,3,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089013','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724112035404694.jpg',0,4,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089014','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724112928610349.jpg',0,9,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089015','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724113345525887.jpg',0,10,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','hwekjh','ejwoiji','2000-12-31','rjksnfi','Karnataka','Bagalkot','India ','123456','12345','jdnek','ejknfwul','Arunachal Pradesh',' Jairampur ','India','123654','jkhdnfsuh','9019089016','9018900987','2024-07-11','2020-12-31','400','2024-07-11','15115307212024','O-','20240724114650875940.jpg',0,11,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','kjhk','uhh','2009-09-09','khukhlh','Karnataka','Chamarajanagar','India ','345678','12345','jygujguk','gukhil','Haryana',' Hansi ','India','567890','uhwukdh','9010180097','9018900987','2024-07-25','2024-07-25','400','2024-07-25','09252007322024','O-','20240725092725777394.jpg',0,15,''),('sample1234samp',NULL,NULL,'suryaAdmin','government','','on','kjhk','uhh','2009-09-09','khukhlh','Karnataka','Chamarajanagar','India ','345678','12345','jygujguk','gukhil','Haryana',' Hansi ','India','567890','uhwukdh','9010180095','9018900987','2024-07-25','2024-07-25','400','2024-07-25','09252007322024','O-','20240725134835080793.jpg',0,17,''),('sample1234samp',NULL,NULL,'surya dasari','government','','on','python','phd','2000-09-09','standard','Karnataka','Bangalore Rural','India ','530066','12345','bengaluru','peenya','Karnataka',' Ankola ','India','530066','bengaluru','9886633545','9010180080','2024-07-25','2022-07-25','400','2024-07-25','13255207012024','O-','20240725141125525675.jpg',0,18,''),('sample1234samp',NULL,NULL,'teacher','government','','on','teach','teaching','2009-09-09','techers','Karnataka','Bangalore Urban','India ','566003','12345','taluk','address','Andhra Pradesh',' East Godavari ','India','534462','taluk','9731002582','9898786543','2024-07-25','2024-06-09','400','2024-07-25','14251407322024','A1B+','20240725141551998776.jpg',0,19,''),('sample1234samp',NULL,NULL,'teacher','government','','on','teacher','teacher','2000-09-09','teacher','Karnataka','Bidar','India ','567765','12332','teacher','teacher','Haryana',' Hansi ','India','543654','teacher','9398585829','7898657426','2024-07-25','2024-07-09','400','2024-07-25','14252907232024','AB+','20240725143324203735.jpg',0,20,''),('sample1234samp',NULL,NULL,'surya dasari','government','','on','physics','msc','1990-04-05','donbasco','Karnataka','Belgaum','India ','560010','99663','southzone','nelamangala bangalore rural','Karnataka',' Bangalore Rural ','India','562144','tcpalya','8871717234','9885544525','2024-07-26','2015-04-01','400','2024-07-26','11262507032024','A2B+','20240726153203005537.jpg',0,21,''),('sample1234samp',NULL,NULL,'govardhan','government','','','name','name','2024-07-06','name','Karnataka','Belgaum','India ','678987','434543','name','name','Jammu & Kashmir',' Kathua ','India','456787','name','8787876765','9876543567','2024-07-27','2024-07-06','400','2024-07-27','15261807102024','B+','20240726153414428852.jpg',0,22,''),('sample1234samp',NULL,NULL,'govardhan','government','','','govardhan','govardhan','2024-07-06','govardhan','Karnataka','Bangalore Urban','India ','543234','govard','govardhan','govardhan','Haryana',' Ellenabad ','India','345665','govardhan','7876543455','8898909893','2024-07-27','2024-07-06','400','2024-07-27','15260207172024','B+','20240726153509317236.jpg',0,23,''),('sample1234samp',NULL,NULL,'govardhan','government','','','govardhan','govardhan','2024-07-06','govardhan','Karnataka','Bangalore Urban','India ','543234','govard','govardhan','govardhan','Haryana',' Ellenabad ','India','345665','govardhan','7876543444','8898909893','2024-07-27','2024-07-06','400','2024-07-27','15260207172024','B+','20240726173323422269.jpg',0,24,''),('sample1234samp',NULL,NULL,'govardhan','government','','','govardhan','govardhan','2024-07-06','govardhan','Karnataka','Bangalore Urban','India ','543234','govard','govardhan','govardhan','Haryana',' Ellenabad ','India','345665','govardhan','7876543446','8898909893','2024-07-27','2024-07-06','400','2024-07-27','15260207172024','B+','20240726173658713705.jpg',0,25,''),('sample1234samp',NULL,NULL,'govardhan','government','','','govardhan','govardhan','2024-07-06','govardhan','Karnataka','Bangalore Urban','India ','543234','govard','govardhan','govardhan','Haryana',' Ellenabad ','India','345665','govardhan','7876543447','8898909893','2024-07-27','2024-07-06','400','2024-07-27','15260207172024','B+','20240725092245830927.jpg',0,26,'');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-26 22:13:51
