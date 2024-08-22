-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2024 at 09:09 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `edtechexpress_porter`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookingticket`
--

CREATE TABLE IF NOT EXISTS `bookingticket` (
  `TicketID` varchar(13) NOT NULL DEFAULT '',
  `UserID` varchar(13) DEFAULT NULL,
  `TransactionID` varchar(13) DEFAULT NULL,
  `OfficeID` varchar(6) DEFAULT NULL,
  `BookingDate` datetime DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`TicketID`),
  KEY `UserID` (`UserID`),
  KEY `TransactionID` (`TransactionID`),
  KEY `OfficeID` (`OfficeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `DepartmentID` varchar(4) NOT NULL DEFAULT '',
  `DepartmentName` varchar(100) NOT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `DepartmentHead` varchar(12) DEFAULT NULL,
  `OfficeID` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`DepartmentID`),
  UNIQUE KEY `DepartmentID` (`DepartmentID`),
  KEY `DepartmentHead` (`DepartmentHead`),
  KEY `OfficeID` (`OfficeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE IF NOT EXISTS `office` (
  `OfficeID` varchar(6) NOT NULL DEFAULT '',
  `OfficeName` varchar(100) DEFAULT NULL,
  `Capacity` int(11) DEFAULT NULL,
  `PhoneNumber` varchar(13) DEFAULT NULL,
  `DepartmentID` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`OfficeID`),
  UNIQUE KEY `OfficeID` (`OfficeID`),
  KEY `DepartmentID` (`DepartmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `PersonID` varchar(12) NOT NULL DEFAULT '',
  `Username` varchar(50) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `PhoneNumber` varchar(13) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PersonID`),
  UNIQUE KEY `PersonID` (`PersonID`),
  KEY `PersonID_2` (`PersonID`),
  KEY `PersonID_3` (`PersonID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teller`
--

CREATE TABLE IF NOT EXISTS `teller` (
  `TellerID` varchar(12) NOT NULL DEFAULT '',
  `DepartmentID` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`TellerID`),
  UNIQUE KEY `TellerID` (`TellerID`),
  KEY `DepartmentID` (`DepartmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE IF NOT EXISTS `transaction` (
  `TransactionID` varchar(12) NOT NULL DEFAULT '',
  `TransactionType` varchar(50) DEFAULT NULL,
  `TransactionDate` datetime DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `Amount` decimal(10,0) DEFAULT NULL,
  `UserID` varchar(12) DEFAULT NULL,
  `TellerID` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`TransactionID`),
  KEY `UserID` (`UserID`),
  KEY `TellerID` (`TellerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserID` varchar(12) NOT NULL DEFAULT '',
  `Balance` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserID` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookingticket`
--
ALTER TABLE `bookingticket`
  ADD CONSTRAINT `bookingticket_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `bookingticket_ibfk_2` FOREIGN KEY (`TransactionID`) REFERENCES `transaction` (`TransactionID`),
  ADD CONSTRAINT `bookingticket_ibfk_3` FOREIGN KEY (`OfficeID`) REFERENCES `office` (`OfficeID`);

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_2` FOREIGN KEY (`OfficeID`) REFERENCES `office` (`OfficeID`),
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`DepartmentHead`) REFERENCES `person` (`PersonID`);

--
-- Constraints for table `office`
--
ALTER TABLE `office`
  ADD CONSTRAINT `office_ibfk_1` FOREIGN KEY (`DepartmentID`) REFERENCES `department` (`DepartmentID`);

--
-- Constraints for table `teller`
--
ALTER TABLE `teller`
  ADD CONSTRAINT `teller_ibfk_2` FOREIGN KEY (`DepartmentID`) REFERENCES `department` (`DepartmentID`),
  ADD CONSTRAINT `teller_ibfk_1` FOREIGN KEY (`TellerID`) REFERENCES `person` (`PersonID`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`TellerID`) REFERENCES `teller` (`TellerID`),
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `person` (`PersonID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
