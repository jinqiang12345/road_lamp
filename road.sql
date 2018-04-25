-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-04-25 07:06:28
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `road`
--

-- --------------------------------------------------------

--
-- 表的结构 `countrecord`
--

CREATE TABLE `countrecord` (
  `id` int(11) NOT NULL,
  `error` int(50) NOT NULL,
  `fix` int(50) NOT NULL,
  `ok` int(50) NOT NULL,
  `time` varchar(20) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `countrecord`
--

INSERT INTO `countrecord` (`id`, `error`, `fix`, `ok`, `time`) VALUES
(1, 15, 20, 6000, '2018-4-18'),
(2, 25, 10, 6000, '2018-4-19'),
(3, 9, 26, 6000, '2018-4-20'),
(4, 7, 28, 6000, '2018-4-21'),
(5, 15, 32, 5648, '2018-4-22'),
(6, 4, 41, 5689, '2018-4-23');

-- --------------------------------------------------------

--
-- 表的结构 `lamp`
--

CREATE TABLE `lamp` (
  `id` int(11) NOT NULL,
  `lampid` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `addr` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `state` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `procode` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `errortime` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `fixcode` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `lamp`
--

INSERT INTO `lamp` (`id`, `lampid`, `addr`, `state`, `procode`, `errortime`, `fixcode`, `longitude`, `latitude`) VALUES
(1, '11001', '测试地址', '维修', '1001', '2018-4-23 11:20:56', '001', 105.84136962890625, 44.991477966308594),
(2, '11002', '测试地址2', '维修', '1001', '2018-4-12 10:56:45', '001', 106.94587303017639, 39.59108159840336),
(3, '11003', 'lalala', '故障', '1001', '2018-4-24', '001', 112.54649879746457, 43.465464646448496);

-- --------------------------------------------------------

--
-- 表的结构 `loginwork`
--

CREATE TABLE `loginwork` (
  `id` int(11) NOT NULL,
  `logname` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `pwd` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `loginwork`
--

INSERT INTO `loginwork` (`id`, `logname`, `pwd`, `code`) VALUES
(1, 'jin', '12345678', '001');

-- --------------------------------------------------------

--
-- 表的结构 `loguser`
--

CREATE TABLE `loguser` (
  `id` int(100) NOT NULL,
  `logname` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pwd` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `code` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `loguser`
--

INSERT INTO `loguser` (`id`, `logname`, `pwd`, `code`) VALUES
(1, 'jin', '123456', '001'),
(3, 'zhangsan', '123456', '002');

-- --------------------------------------------------------

--
-- 表的结构 `proserver`
--

CREATE TABLE `proserver` (
  `id` int(11) NOT NULL,
  `procode` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `addr` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `proserver`
--

INSERT INTO `proserver` (`id`, `procode`, `name`, `addr`, `phone`) VALUES
(1, '1001', '远光软件股份有限公司', '珠海市远光软件园', '0101010101');

-- --------------------------------------------------------

--
-- 表的结构 `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `lampid` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `opercode` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `errortime` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `opertime` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `work` varchar(50) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `record`
--

INSERT INTO `record` (`id`, `lampid`, `opercode`, `errortime`, `opertime`, `work`) VALUES
(1, '11001', '001', '2018-4-19 10:20:56', '2018-4-29 10:20:56', '处理'),
(2, '11001', '001', '2018-4-23 11:20:56', '2018-04-24 15:16:48', '处理'),
(3, '11001', '001', '2018-4-23 11:20:56', '2018-04-24 15:22:17', '处理'),
(4, '11001', '002', '2018-4-23 11:20:56', '2018-04-24 15:24:37', '处理'),
(5, '11003', '002', '2018-4-24', '2018-04-25 11:47:27', '处理'),
(6, '11001', '002', '2018-4-23 11:20:56', '2018-04-25 11:48:53', '处理'),
(7, '11002', '002', '2018-4-12 10:56:45', '2018-04-25 12:32:26', '提醒'),
(8, '11002', '002', '2018-4-12 10:56:45', '2018-04-25 12:33:02', '提醒'),
(9, '11001', '002', '2018-4-23 11:20:56', '2018-04-25 12:43:27', '提醒');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `code` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `state` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `position` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `remark` varchar(100) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `code`, `name`, `phone`, `state`, `position`, `remark`) VALUES
(1, '001', '靳强', '18602690652', '在职', '维修工', 'test'),
(2, '002', '张三', '15632026092', '在职', '管理人员', '6666'),
(3, '003', '李四', '12345678978', '休假', '维修工', '');

-- --------------------------------------------------------

--
-- 表的结构 `workmission`
--

CREATE TABLE `workmission` (
  `id` int(11) NOT NULL,
  `lampid` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `fixcode` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `type` int(5) NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `workmission`
--

INSERT INTO `workmission` (`id`, `lampid`, `fixcode`, `type`, `time`) VALUES
(1, '11001', '001', 1, '2018-4-25 10:20:50'),
(2, '11001', '001', 2, '2018-4-25 10:45:60'),
(3, '11001', '001', 1, '2018-04-25 11:48:53'),
(4, '11002', '001', 2, '2018-04-25 12:32:26'),
(5, '11002', '001', 2, '2018-04-25 12:33:02'),
(6, '11001', '001', 2, '2018-04-25 12:43:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countrecord`
--
ALTER TABLE `countrecord`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lamp`
--
ALTER TABLE `lamp`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lampid` (`lampid`);

--
-- Indexes for table `loginwork`
--
ALTER TABLE `loginwork`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loguser`
--
ALTER TABLE `loguser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `logname` (`logname`);

--
-- Indexes for table `proserver`
--
ALTER TABLE `proserver`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `procode` (`procode`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `workmission`
--
ALTER TABLE `workmission`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `countrecord`
--
ALTER TABLE `countrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `lamp`
--
ALTER TABLE `lamp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `loginwork`
--
ALTER TABLE `loginwork`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `loguser`
--
ALTER TABLE `loguser`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `proserver`
--
ALTER TABLE `proserver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `workmission`
--
ALTER TABLE `workmission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
