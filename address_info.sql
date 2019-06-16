# Host: localhost  (Version: 5.5.53)
# Date: 2019-06-16 21:51:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "address_info"
#

DROP TABLE IF EXISTS `address_info`;
CREATE TABLE `address_info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `phone_num` varchar(255) NOT NULL DEFAULT '',
  `province` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `area` varchar(255) NOT NULL DEFAULT '',
  `detail_address` varchar(255) NOT NULL DEFAULT '',
  `address_type` varchar(255) DEFAULT NULL,
  `default_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

#
# Data for table "address_info"
#

/*!40000 ALTER TABLE `address_info` DISABLE KEYS */;
INSERT INTO `address_info` VALUES (15,'xuan','18437980288','河南省','郑州市','中原区','qq','公司','no'),(19,'黄','14576868976','河南省','郑州市','中原区','哎哎哎','公司','no'),(21,'啊','15678567866','河南省','郑州市','中原区','啊啊啊啊','公司','no'),(24,'qq','18665789789','河南省','郑州市','中原区','aaaa','家庭','Yes');
/*!40000 ALTER TABLE `address_info` ENABLE KEYS */;
