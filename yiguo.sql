# Host: localhost  (Version: 5.5.53)
# Date: 2019-06-12 23:37:26
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "buyer_info"
#

DROP TABLE IF EXISTS `buyer_info`;
CREATE TABLE `buyer_info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `phoneNum` varchar(255) NOT NULL DEFAULT '',
  `province` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `area` varchar(255) NOT NULL DEFAULT '',
  `detail_address` varchar(255) NOT NULL DEFAULT '',
  `address_type` varchar(255) NOT NULL DEFAULT '',
  `default` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "buyer_info"
#

/*!40000 ALTER TABLE `buyer_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `buyer_info` ENABLE KEYS */;

#
# Structure for table "shopcart"
#

DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) NOT NULL DEFAULT '',
  `goodsName` varchar(255) NOT NULL DEFAULT '',
  `price` varchar(255) NOT NULL DEFAULT '',
  `count` int(10) NOT NULL DEFAULT '1',
  `user` varchar(255) DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "shopcart"
#

/*!40000 ALTER TABLE `shopcart` DISABLE KEYS */;
INSERT INTO `shopcart` VALUES (5,'https://img13.yiguoimg.com/d/items/2017/171009/9288713737184073_300.jpg','心中甜每日坚果750g(25g*30)','138.00',1,''),(9,'https://img14.yiguoimg.com/d/items/2018/180104/9288717501932580_300.jpg','法国拉杜蓝乔核桃油(家用)250ml','138.00',1,''),(10,'https://img12.yiguoimg.com/d/items/2018/180110/9288717755294762_300.jpg','瀛奇迹日本产米2kg','199.00',1,''),(11,'https://img10.yiguoimg.com/d/items/2019/190109/9288736590669353_300.jpg','心中甜幸福礼赞礼盒1.296kg','158.00',1,''),(12,'https://img10.yiguoimg.com/d/items/2019/190109/9288736591324713_300.jpg','心中甜欢聚时刻礼盒864g','99.00',1,'');
/*!40000 ALTER TABLE `shopcart` ENABLE KEYS */;
