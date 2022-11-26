-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 26, 2022 at 11:28 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_smkislamiyah`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `alumni_id` varchar(255) NOT NULL,
  `alumni_photo_dir` varchar(255) NOT NULL,
  `alumni_nama` varchar(255) NOT NULL,
  `alumni_profesi` varchar(255) NOT NULL,
  `alumni_testi` text NOT NULL,
  `isIndex` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`alumni_id`, `alumni_photo_dir`, `alumni_nama`, `alumni_profesi`, `alumni_testi`, `isIndex`, `createdAt`, `updatedAt`) VALUES
('ALMN10', 'images\\Alumni\\ALMN10getImage.png', 'test', 'tet', 'test', 'Yes', '2022-11-21 00:19:26', '2022-11-21 00:19:26'),
('ALMN6', 'images\\Alumni\\ALMN_index.png', 'tes', 'tes', 'testing', 'No', '2022-11-13 02:47:41', '2022-11-13 02:47:41'),
('ALMN8', 'images\\Alumni\\ALMN8png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png', 'Alumni 8 edited', 'Edited', 'Edited Test', 'Yes', '2022-11-13 02:52:22', '2022-11-13 02:52:22'),
('ALMN9', 'images\\Alumni\\ALMN9OpenDoodles-Groovy.png', 'Nurdin', 'Petani', 'mantap', 'Yes', '2022-11-13 07:53:24', '2022-11-13 07:53:24');

-- --------------------------------------------------------

--
-- Table structure for table `categorypost`
--

CREATE TABLE `categorypost` (
  `categorypost_id` int(11) NOT NULL,
  `categorypost_name` varchar(255) NOT NULL,
  `categorypost_for` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorypost`
--

INSERT INTO `categorypost` (`categorypost_id`, `categorypost_name`, `categorypost_for`, `createdAt`, `updatedAt`) VALUES
(1, 'Ujian', '1', NULL, NULL),
(2, 'Ujian', '2', NULL, NULL),
(3, 'Nasional', '1', NULL, NULL),
(4, 'Internal', '2', NULL, NULL),
(5, 'Ekstrakulikuler', '3', NULL, NULL),
(6, 'Ekstrakulikuler', '4', NULL, NULL),
(7, 'Baris berbaris', '3', NULL, NULL),
(8, 'Internal Ekskul', '4', NULL, NULL),
(9, 'Ekstrakulikuler', '6', NULL, NULL),
(10, 'PST254', '0', '2022-10-28 16:49:09', '2022-10-28 16:49:09'),
(11, 'PST254', '0', '2022-10-28 16:49:09', '2022-10-28 16:49:09'),
(12, 'Night1', '0', '2022-10-28 17:23:51', '2022-10-28 17:23:51'),
(13, ' Night2', '0', '2022-10-28 17:23:51', '2022-10-28 17:23:51'),
(14, 'Pramuka', '0', '2022-10-28 17:26:10', '2022-10-28 17:26:10'),
(15, ' Paskibra', '0', '2022-10-28 17:26:10', '2022-10-28 17:26:10'),
(24, 'basketball', 'PST261', '2022-10-29 01:39:38', '2022-10-29 01:39:38'),
(25, ' football', 'PST261', '2022-10-29 01:39:38', '2022-10-29 01:39:38'),
(26, 'Football', 'PST261', '2022-10-29 01:43:36', '2022-10-29 01:43:36'),
(27, ' Basketball', 'PST261', '2022-10-29 01:43:36', '2022-10-29 01:43:36'),
(28, 'Culture', 'PST262', '2022-10-29 01:48:44', '2022-10-29 01:48:44'),
(29, ' Food', 'PST262', '2022-10-29 01:48:44', '2022-10-29 01:48:44'),
(118, 'edit2', 'PST260', '2022-11-07 15:20:16', '2022-11-07 15:20:16'),
(119, 'edit1', 'PST260', '2022-11-07 15:20:16', '2022-11-07 15:20:16'),
(120, 'edit3', 'PST260', '2022-11-07 15:20:16', '2022-11-07 15:20:16'),
(123, '', 'PST259', '2022-11-07 15:21:37', '2022-11-07 15:21:37'),
(125, '', 'PST263', '2022-11-07 15:26:09', '2022-11-07 15:26:09'),
(127, '', 'PST256', '2022-11-07 15:45:09', '2022-11-07 15:45:09'),
(130, 'test1', 'PST264', '2022-11-08 15:07:15', '2022-11-08 15:07:15'),
(131, ' test2', 'PST264', '2022-11-08 15:07:15', '2022-11-08 15:07:15'),
(139, '', 'PST265', '2022-11-08 15:35:06', '2022-11-08 15:35:06'),
(143, 'posting', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49'),
(144, ' test new slug', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `header_content`
--

CREATE TABLE `header_content` (
  `header_id` varchar(255) NOT NULL,
  `header_title` varchar(255) NOT NULL,
  `header_desc` varchar(255) NOT NULL,
  `header_img_dir` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `header_content`
--

INSERT INTO `header_content` (`header_id`, `header_title`, `header_desc`, `header_img_dir`) VALUES
('HDR1', 'First slide label Test', 'this slide has been updated', 'images\\Header\\HDR_hero-img.jpg'),
('HDR2', 'Second slide label Test', 'Nulla vitae elit libero, a pharetra augue mollis interdum.', 'images\\Header\\Header-4.jpg'),
('HDR3', 'Third slide label Test', 'Nulla vitae elit libero, a pharetra augue mollis interdum.', 'images\\Header\\Header-3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `imgpost`
--

CREATE TABLE `imgpost` (
  `imgpost_id` int(50) NOT NULL,
  `imgpost_dir` varchar(255) NOT NULL,
  `imgpost_name` varchar(255) NOT NULL,
  `imgpost_for` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `imgpost`
--

INSERT INTO `imgpost` (`imgpost_id`, `imgpost_dir`, `imgpost_name`, `imgpost_for`, `createdAt`, `updatedAt`) VALUES
(1, 'images\\pfl.jpg', 'Praktek Komputer', 'PST239', '2022-10-14 01:49:57', '2022-10-14 01:49:57'),
(2, 'images\\kegiatan_2.jpg', 'Paskibraka', '3', '2022-10-14 01:49:57', '2022-10-14 01:49:57'),
(3, 'images\\pengumuman_1.jpg', 'Ujian', '1', '2022-10-14 01:51:15', '2022-10-14 01:51:15'),
(4, 'images\\pengumuman_1.jpg', 'Ujian', '2', '2022-10-14 01:51:15', '2022-10-14 01:51:15'),
(5, 'images\\kegiatan_3.jpg', 'Kegiatan 3', '4', '2022-10-15 04:41:18', '2022-10-15 04:41:18'),
(6, 'images\\kegiatan_2.jpg', 'Kegiatan 2', '6', '2022-10-18 16:06:48', '2022-10-18 16:06:48'),
(7, 'images\\kegiatan_2.jpg', 'Kegiatan 2', '5', '2022-10-18 16:06:48', '2022-10-18 16:06:48'),
(12, 'images\\vespa.jpg', 'vespa.jpg', 'PST250', '2022-10-21 22:37:55', '2022-10-21 22:37:55'),
(13, 'images\\pfl.jpg', 'pfl.jpg', 'PST251', '2022-10-22 00:04:06', '2022-10-22 00:04:06'),
(15, 'images\\sparta_HP.jpg', 'sparta_HP.jpg', 'PST253', '2022-10-22 03:03:30', '2022-10-22 03:03:30'),
(16, 'images\\phototest.jpg', 'phototest.jpg', '100', '2022-10-22 04:07:52', '2022-10-22 04:07:52'),
(18, 'images\\kegiatan_2.jpg', 'Kegiatan 2', '7', '2022-10-18 16:06:48', '2022-10-18 16:06:48'),
(19, 'images\\malpin.jpeg', 'malpin.jpeg', '4', '2022-10-23 06:41:42', '2022-10-23 06:41:42'),
(20, 'images\\fRepB.png', 'fRepB.png', '4', '2022-10-25 15:43:27', '2022-10-25 15:43:27'),
(22, 'images\\spiderman.jpg', 'spiderman.jpg', '0', '2022-10-27 22:45:57', '2022-10-27 22:45:57'),
(27, 'images\\phototest.jpg', 'phototest.jpg', 'PST244', '2022-10-27 23:15:23', '2022-10-27 23:15:23'),
(29, 'images\\spiderman.jpg', 'spiderman.jpg', 'PST244', '2022-10-27 23:28:37', '2022-10-27 23:28:37'),
(30, 'images\\attach_error_2.jpg', 'attach_error_2.jpg', 'PST244', '2022-10-27 23:28:37', '2022-10-27 23:28:37'),
(31, 'images\\17192.jpg', '17192.jpg', 'PST245', '2022-10-27 23:33:46', '2022-10-27 23:33:46'),
(32, 'images\\airasia-logo.jpg', 'airasia-logo.jpg', 'PST245', '2022-10-27 23:33:46', '2022-10-27 23:33:46'),
(33, 'images\\attach_error_2.jpg', 'attach_error_2.jpg', 'PST246', '2022-10-28 00:05:31', '2022-10-28 00:05:31'),
(34, 'images\\WhatsApp Image 2022-10-24 at 17.21.03.jpeg', 'WhatsApp Image 2022-10-24 at 17.21.03.jpeg', 'PST246', '2022-10-28 00:05:31', '2022-10-28 00:05:31'),
(35, 'images\\attach_error_2.jpg', 'attach_error_2.jpg', 'PST247', '2022-10-28 00:14:59', '2022-10-28 00:14:59'),
(36, 'images\\attach_error_2.jpg', 'attach_error_2.jpg', 'PST248', '2022-10-28 00:16:12', '2022-10-28 00:16:12'),
(37, 'images\\phototest.jpg', 'phototest.jpg', 'PST249', '2022-10-28 00:19:24', '2022-10-28 00:19:24'),
(48, 'images\\phototest.jpg', 'phototest.jpg', 'PST254', '2022-10-28 16:49:09', '2022-10-28 16:49:09'),
(49, 'images\\f4f908da19e2753f3ed679d7b37650ca.png', 'f4f908da19e2753f3ed679d7b37650ca.png', 'PST255', '2022-10-28 17:23:51', '2022-10-28 17:23:51'),
(51, 'images\\ss-wrong-password(2).jpg', 'ss-wrong-password(2).jpg', 'PST257', '2022-10-28 17:28:40', '2022-10-28 17:28:40'),
(52, 'images\\Hard Candy 2.png', 'Hard Candy 2.png', 'PST258', '2022-10-28 17:50:01', '2022-10-28 17:50:01'),
(53, 'images\\Ghost.png', 'Ghost.png', 'PST258', '2022-10-28 17:50:01', '2022-10-28 17:50:01'),
(58, 'images\\spcae.jpg', 'spcae.jpg', '', '2022-10-29 01:39:38', '2022-10-29 01:39:38'),
(59, 'images\\space2.jpg', 'space2.jpg', '', '2022-10-29 01:39:38', '2022-10-29 01:39:38'),
(60, 'images\\space2.jpg', 'space2.jpg', 'PST261', '2022-10-29 01:43:36', '2022-10-29 01:43:36'),
(61, 'images\\spcae.jpg', 'spcae.jpg', 'PST261', '2022-10-29 01:43:36', '2022-10-29 01:43:36'),
(62, 'images\\airasia-logo.jpg', 'airasia-logo.jpg', 'PST262', '2022-10-29 01:48:44', '2022-10-29 01:48:44'),
(63, 'images\\marsol-logo.png', 'marsol-logo.png', 'PST262', '2022-10-29 01:48:44', '2022-10-29 01:48:44'),
(68, 'images\\game-cube.png', 'game-cube.png', '', '2022-11-03 14:39:26', '2022-11-03 14:39:26'),
(69, 'images\\Grateful.png', 'Grateful.png', '', '2022-11-03 14:39:27', '2022-11-03 14:39:27'),
(83, 'images\\minimalist-astronaut-41-4k.jpg', 'minimalist-astronaut-41-4k.jpg', 'PST260', '2022-11-07 15:18:10', '2022-11-07 15:18:10'),
(84, 'images\\49873.jpg', '49873.jpg', 'PST260', '2022-11-07 15:19:24', '2022-11-07 15:19:24'),
(85, 'images\\wp2506535.jpg', 'wp2506535.jpg', 'PST259', '2022-11-07 15:20:29', '2022-11-07 15:20:29'),
(86, 'images\\papers.co-bf04-skull-flower-dark-painting-art-1366x768.jpg', 'papers.co-bf04-skull-flower-dark-painting-art-1366x768.jpg', 'PST259', '2022-11-07 15:21:37', '2022-11-07 15:21:37'),
(87, 'images\\cd1398b0c560125d12a366625b92fe43.jpg', 'cd1398b0c560125d12a366625b92fe43.jpg', 'PST259', '2022-11-07 15:21:37', '2022-11-07 15:21:37'),
(88, 'images\\3doors_poster_2.png', '3doors_poster_2.png', 'PST263', '2022-11-07 15:25:49', '2022-11-07 15:25:49'),
(89, 'images\\WhatsApp Image 2021-07-29 at 08.48.27.jpeg', 'WhatsApp Image 2021-07-29 at 08.48.27.jpeg', 'PST256', '2022-11-07 15:45:09', '2022-11-07 15:45:09'),
(91, 'images\\logo islamiyah.png', 'logo islamiyah.png', 'PST264', '2022-11-08 15:07:15', '2022-11-08 15:07:15'),
(92, 'images\\ss-survey-pszsib.png', 'ss-survey-pszsib.png', 'PST265', '2022-11-08 15:09:23', '2022-11-08 15:09:23'),
(95, 'images\\Post\\Star_Wars_Darth_Vader_1440x900.jpg', 'Star_Wars_Darth_Vader_1440x900.jpg', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49'),
(96, 'images\\Post\\star-wars-backgrounds-20-1.jpg', 'star-wars-backgrounds-20-1.jpg', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49'),
(97, 'images\\Post\\starwars-1580291233079-1732.jpg', 'starwars-1580291233079-1732.jpg', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49'),
(98, 'images\\Post\\219766.jpg', '219766.jpg', 'PST268', '2022-11-23 23:13:49', '2022-11-23 23:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `jobs_bkk`
--

CREATE TABLE `jobs_bkk` (
  `company_logo` varchar(255) NOT NULL,
  `company_id` varchar(255) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_address` varchar(255) NOT NULL,
  `company_city` varchar(200) NOT NULL,
  `job_title` varchar(200) NOT NULL,
  `job_status` varchar(50) NOT NULL,
  `job_short_desc` varchar(100) NOT NULL,
  `job_desc` varchar(255) NOT NULL,
  `job_requirement` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs_bkk`
--

INSERT INTO `jobs_bkk` (`company_logo`, `company_id`, `company_name`, `company_address`, `company_city`, `job_title`, `job_status`, `job_short_desc`, `job_desc`, `job_requirement`, `createdAt`, `updatedAt`) VALUES
('images\\airasia-logo.jpg', 'JOB5', 'Adam Air', 'Cengkareng', 'Surabaya', 'Co - Pilot', 'closed', 'Akan disuruh untuk menerbangkan pesawat sukhoi', 'Akan disuruh untuk menerbangkan pesawat sukhoi', 'Bisa menerbangkan pesawat', '2022-10-31 15:18:18', '2022-10-31 15:18:18'),
('images\\astronaut_spacesuit_reflection_144426_1600x1200.jpg', 'JOB9', 'Testing Last BKK', 'test', 'Bandung', 'Testing', 'open', 'test', 'test', 'test', '2022-11-01 11:46:57', '2022-11-01 11:46:57');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan`
--

CREATE TABLE `jurusan` (
  `jurusan_id` varchar(255) NOT NULL,
  `jurusan_slug` varchar(255) NOT NULL,
  `jurusan_name` varchar(255) NOT NULL,
  `jurusan_kaprog_id` varchar(255) NOT NULL,
  `jurusan_about` text NOT NULL,
  `jurusan_visi` text NOT NULL,
  `jurusan_misi` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jurusan`
--

INSERT INTO `jurusan` (`jurusan_id`, `jurusan_slug`, `jurusan_name`, `jurusan_kaprog_id`, `jurusan_about`, `jurusan_visi`, `jurusan_misi`, `createdAt`, `updatedAt`) VALUES
('JRS1', 'test', 'test', 'TCH1', '<p>Type description of this <strong>programstest</strong></p>', '1,3', '2,5', '2022-11-20 10:39:35', '2022-11-20 10:39:35'),
('JRS2', 'test-judul', 'test judul', 'TCH1', '<p>Type description of this <strong>programstest</strong></p>', '1,3', '2,5', '2022-11-20 10:40:58', '2022-11-20 10:40:58'),
('JRS3', 'test-program', 'test program', 'TCH1', '', '1,3', '2,5', '2022-11-20 10:50:03', '2022-11-20 10:50:03'),
('JRS4', 'testing-sukses', 'testing sukses', 'TCH2', '<p>Type description of this <strong>programs</strong></p>', '1,2', '3,6', '2022-11-20 23:19:29', '2022-11-20 23:19:29'),
('JRS5', 'tes', 'tes', 'TCH1', '<p>Type description of this <strong>programs</strong></p>', '1,3', '5,1', '2022-11-20 23:25:51', '2022-11-20 23:25:51'),
('JRS6', 'test-farhan-6', 'test farhan', 'TCH1', '<p>Type description of this <strong>programs ts</strong></p>', '1,edited', '5,add new', '2022-11-20 23:30:35', '2022-11-20 23:30:35'),
('JRS7', 'test-farhan', 'test farhan', 'TCH2', '<p>Type description of this <strong>programs </strong>Stasiun <strong>Balapan </strong>edited</p>', '1,edited', '5,new', '2022-11-22 23:21:36', '2022-11-22 23:21:36'),
('JRS8', 'test-oke-8', 'test oke', 'TCH1', '<p>this program is already <strong>ok</strong></p>', 'visi 2,added', 'edited,misi 2', '2022-11-23 00:23:27', '2022-11-23 00:23:27');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan_document`
--

CREATE TABLE `jurusan_document` (
  `jd_id` int(11) NOT NULL,
  `jd_name` text NOT NULL,
  `jd_document_dir` text NOT NULL,
  `jd_for` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jurusan_document`
--

INSERT INTO `jurusan_document` (`jd_id`, `jd_name`, `jd_document_dir`, `jd_for`, `createdAt`, `updatedAt`) VALUES
(1, 'siloam custom.xlsx', 'images\\Program\\Dokumen\\siloamcustom.xlsx', '', '2022-11-20 16:07:35', '2022-11-20 16:07:35'),
(2, 'PI2B Nota Dinas 108 - Undangan INOVTEK ITI 2022.pdf', 'images\\Program\\Dokumen\\PI2BNotaDinas108-UndanganINOVTEKITI2022.pdf', '', '2022-11-20 16:07:35', '2022-11-20 16:07:35'),
(3, 'Resume Bunga Dydr new.pdf', 'images\\Program\\Dokumen\\ResumeBungaDydrnew.pdf', '', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(4, 'PI2B Nota Dinas 108 - Undangan INOVTEK ITI 2022.pdf', 'images\\Program\\Dokumen\\PI2BNotaDinas108-UndanganINOVTEKITI2022.pdf', '', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(5, 'Test', 'images\\Program\\Dokumen\\ResumeBungaDydrnew.pdf', '', '2022-11-20 23:22:50', '2022-11-20 23:22:50'),
(6, 'PI2B Nota Dinas 108 - Undangan INOVTEK ITI 2022.pdf', 'images\\Program\\Dokumen\\PI2BNotaDinas108-UndanganINOVTEKITI2022.pdf', '', '2022-11-20 23:24:43', '2022-11-20 23:24:43'),
(7, 'Resume Bunga Dydr new.pdf', 'images\\Program\\Dokumen\\ResumeBungaDydrnew.pdf', '', '2022-11-20 23:24:43', '2022-11-20 23:24:43'),
(8, 'PI2B Nota Dinas 108 - Undangan INOVTEK ITI 2022.pdf', 'images\\Program\\Dokumen\\PI2BNotaDinas108-UndanganINOVTEKITI2022.pdf', 'JRS5', '2022-11-20 23:25:51', '2022-11-20 23:25:51'),
(9, 'Resume Bunga Dydr new.pdf', 'images\\Program\\Dokumen\\ResumeBungaDydrnew.pdf', 'JRS5', '2022-11-20 23:25:51', '2022-11-20 23:25:51'),
(10, 'KELOMPOK 2 PPT PEREKONOMIAN INDONESIA.pdf', 'images\\Program\\Dokumen\\KELOMPOK2PPTPEREKONOMIANINDONESIA.pdf', 'JRS6', '2022-11-20 23:30:35', '2022-11-20 23:30:35'),
(26, 'Resume Bunga Dydr new.pdf', 'images\\Program\\Dokumen\\ResumeBungaDydrnew.pdf', 'JRS6', '2022-11-22 23:03:23', '2022-11-22 23:03:23'),
(27, '2022 DataOn Company Outing.pdf', 'images\\Program\\Dokumen\\2022DataOnCompanyOuting.pdf', 'JRS6', '2022-11-22 23:08:31', '2022-11-22 23:08:31'),
(28, 'BSI E-Certificate PT Indodev Niaga Internet (DataOn).pdf', 'images\\Program\\Dokumen\\BSIE-CertificatePTIndodevNiagaInternet(DataOn).pdf', 'JRS7', '2022-11-22 23:21:36', '2022-11-22 23:21:36'),
(30, 'T1_672015214_Full text.pdf', 'images\\Program\\Dokumen\\T1_672015214_Fulltext.pdf', 'JRS7', '2022-11-22 23:23:36', '2022-11-22 23:23:36'),
(31, '2. PKS ShopeeFood.pdf', 'images\\Program\\Dokumen\\2.PKSShopeeFood.pdf', 'JRS7', '2022-11-22 23:32:21', '2022-11-22 23:32:21'),
(33, 'SOAL UAS.pdf', 'images\\Program\\Dokumen\\SOALUAS.pdf', 'JRS8', '2022-11-23 00:23:28', '2022-11-23 00:23:28'),
(34, 'tugas evolusi.pdf', 'images\\Program\\Dokumen\\tugasevolusi.pdf', 'JRS8', '2022-11-23 00:29:31', '2022-11-23 00:29:31'),
(35, 'PO BUNGA.xls', 'images\\Program\\Dokumen\\POBUNGA.xls', 'JRS8', '2022-11-25 00:15:50', '2022-11-25 00:15:50');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan_gallery`
--

CREATE TABLE `jurusan_gallery` (
  `jg_id` int(11) NOT NULL,
  `jg_img_dir` text NOT NULL,
  `jg_img_for` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jurusan_gallery`
--

INSERT INTO `jurusan_gallery` (`jg_id`, `jg_img_dir`, `jg_img_for`, `createdAt`, `updatedAt`) VALUES
(1, 'images\\Program\\windows-color.jpg', 'JRS4', '2022-11-20 23:07:30', '2022-11-20 23:07:30'),
(2, 'images\\Program\\Pantone_collab_dark-1600x1000.jpg', 'JRS4', '2022-11-20 23:07:30', '2022-11-20 23:07:30'),
(3, 'images\\Program\\Pantone_collab_dark-1600x1000.jpg', 'JRS4', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(4, 'images\\Program\\windows-color.jpg', 'JRS4', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(6, 'images\\Program\\windows-color.jpg', 'JRS6', '2022-11-20 23:30:35', '2022-11-20 23:30:35'),
(20, 'images\\Program\\calm-sea-ocean-blue-sky-background_95401-1376.jpg', 'JRS6', '2022-11-22 23:08:31', '2022-11-22 23:08:31'),
(22, 'images\\Program\\800px_COLOURBOX17789854.jpg', 'JRS7', '2022-11-22 23:21:36', '2022-11-22 23:21:36'),
(23, 'images\\Program\\WhatsAppImage2021-11-10at01.48.08.jpeg', 'JRS7', '2022-11-22 23:23:36', '2022-11-22 23:23:36'),
(24, 'images\\Program\\evokusimanusia.jpeg', 'JRS7', '2022-11-22 23:32:21', '2022-11-22 23:32:21'),
(25, 'images\\Program\\hilaris_junior_27.jpg', 'JRS8', '2022-11-23 00:23:28', '2022-11-23 00:23:28'),
(27, 'images\\Program\\UMKM-BENGKULU-EKSPRESS.jpg', 'JRS8', '2022-11-23 00:29:31', '2022-11-23 00:29:31');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan_prestasi`
--

CREATE TABLE `jurusan_prestasi` (
  `jp_id` int(11) NOT NULL,
  `jp_name` varchar(255) NOT NULL,
  `jp_year` varchar(255) NOT NULL,
  `jp_position` varchar(255) NOT NULL,
  `jp_for` varchar(255) NOT NULL,
  `jp_img_dir` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jurusan_prestasi`
--

INSERT INTO `jurusan_prestasi` (`jp_id`, `jp_name`, `jp_year`, `jp_position`, `jp_for`, `jp_img_dir`, `createdAt`, `updatedAt`) VALUES
(3, '1', '1', '1', 'JRS4', 'images\\Program\\Prestasi\\Pantone_collab_dark-1600x1000.jpg', '2022-11-20 15:33:01', '2022-11-20 15:33:01'),
(4, '2', '2', '2', 'JRS4', 'images\\Program\\Prestasi\\Pantone_collab_dark-1600x1000.jpg', '2022-11-20 15:33:01', '2022-11-20 15:33:01'),
(5, '1', '1', '1', 'JRS4', 'images\\Program\\Prestasi\\Pantone_collab_dark-1600x1000.jpg', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(6, '2', '2', '2', 'JRS4', 'images\\Program\\Prestasi\\windows-color.jpg', '2022-11-20 23:19:30', '2022-11-20 23:19:30'),
(7, '1', '1', '1', 'JRS6', 'images\\Program\\Prestasi\\Pantone_collab_dark-1600x1000.jpg', '2022-11-20 23:30:35', '2022-11-20 23:30:35'),
(24, '5', '5', '5', 'JRS6', 'images\\Program\\Prestasi\\siloam-error-letter-2.jpg', '2022-11-22 23:08:31', '2022-11-22 23:08:31'),
(26, '2', '2', '2', 'JRS7', 'images\\Program\\Prestasi\\umkm-kerajinan-tangan.jpg', '2022-11-22 23:21:36', '2022-11-22 23:21:36'),
(27, '5', '5', '5', 'JRS7', 'images\\Program\\Prestasi\\1A41C4D7-9A30-4467-84BF-09D09041C128(1).JPG', '2022-11-22 23:23:36', '2022-11-22 23:23:36'),
(28, '100', '100', '100', 'JRS7', 'images\\Program\\Prestasi\\Kampus-V-Web-1-400x352.jpg', '2022-11-22 23:32:21', '2022-11-22 23:32:21'),
(30, 'prestasi 1', 'prestasi 1', 'prestasi 1', 'JRS8', 'images\\Program\\Prestasi\\papers.co-ap47-starwars-illustration-green-art-film-1366x768.jpg', '2022-11-23 00:23:27', '2022-11-23 00:23:27'),
(31, 'prestasi 5', 'prestasi 5', 'prestasi 5', 'JRS8', 'images\\Program\\Prestasi\\papers.co-oe12-nature-sea-water-beach-island-1366x768.jpg', '2022-11-23 00:29:31', '2022-11-23 00:29:31');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan_teacher`
--

CREATE TABLE `jurusan_teacher` (
  `jurusan_id` varchar(255) NOT NULL,
  `jurusan_name` varchar(255) NOT NULL,
  `jurusan_teacher_for` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `org_person` varchar(255) NOT NULL,
  `org_title` varchar(255) NOT NULL,
  `parent_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id`, `org_person`, `org_title`, `parent_code`) VALUES
(1, 'Dian Rostikawati', 'Headmaster', 0),
(2, 'Arafi', 'Wakasek Kurikulum', 1),
(3, 'Hasan Basri', 'Wakasek Humas', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orgstruct`
--

CREATE TABLE `orgstruct` (
  `id` int(11) NOT NULL,
  `orgstruct_current` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` varchar(255) NOT NULL,
  `post_name` varchar(200) NOT NULL,
  `post_slug` varchar(255) NOT NULL,
  `post_status` varchar(200) NOT NULL,
  `post_type` varchar(150) NOT NULL,
  `post_shortdesc` text NOT NULL,
  `post_desc` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `post_name`, `post_slug`, `post_status`, `post_type`, `post_shortdesc`, `post_desc`, `createdAt`, `updatedAt`) VALUES
('1', 'Pengumuman Ujian Nasional', '', 'posted', 'Announcement', 'Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus ligula eros, ut auctor velit vulputate ut. Maecenas interdum, leo id viverra fermentum, erat arcu hendrerit ipsum, eget pretium nisi neque dignissim enim. Aliquam eu sem commodo, dictum orci vel, consequat neque. Aliquam vel mollis arcu, sed tincidunt diam. Etiam vulputate, nibh et convallis vehicula, eros velit euismod augue, et sagittis libero risus eget nunc. Quisque nec lectus vitae orci vehicula interdum sit amet sit amet libero. Integer ante leo, laoreet non bibendum eu, accumsan sit amet enim. Nullam ornare consequat metus ac lobortis. Nulla a elit eget odio blandit molestie. Nullam vel odio justo. Maecenas commodo pretium lobortis. Nunc eleifend vel lorem eget egestas. Etiam id dignissim metus, elementum lobortis ex. Etiam venenatis ultrices metus quis convallis.\r\n\r\nPraesent scelerisque ac est nec convallis. Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc tempus. Pellentesque viverra, est ut tempus viverra, felis augue vehicula lorem, et lacinia felis ante sit amet eros. Integer molestie nulla egestas porta maximus. Suspendisse neque ante, malesuada et sem eu, pulvinar lobortis arcu. Donec eget mi nec elit aliquam fringilla. Morbi hendrerit sit amet arcu posuere imperdiet.\r\n\r\nMauris aliquet consequat suscipit. Aliquam maximus rhoncus risus, eget finibus nunc molestie eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis neque felis, vel tristique lectus suscipit ut. Sed dictum metus eu massa semper tempor. Aliquam dolor odio, vehicula a pharetra non, convallis feugiat erat. Maecenas euismod, neque at varius mollis, libero risus volutpat neque, mollis vestibulum tortor odio non massa. Vestibulum semper diam ac felis imperdiet commodo. Curabitur aliquam sit amet odio ac gravida. Aliquam nibh nisi, semper eu tellus sed, tristique fermentum metus. Nunc eu tellus maximus mi pellentesque convallis. Ut mattis turpis ut augue interdum sollicitudin. Integer facilisis viverra venenatis. ', '2022-10-14 01:34:22', '2022-10-14 01:34:22'),
('2', 'Pengumuman Ujian Kenaikan Kelas', '', 'draft', 'Announcement', 'Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc', 'tum orci vel, consequat neque. Aliquam vel mollis arcu, sed tincidunt diam. Etiam vulputate, nibh et convallis vehicula, eros velit euismod augue, et sagittis libero risus eget nunc. Quisque nec lectus vitae orci vehicula interdum sit amet sit amet libero. Integer ante leo, laoreet non bibendum eu, accumsan sit amet enim. Nullam ornare consequat metus ac lobortis. Nulla a elit eget odio blandit molestie. Nullam vel odio justo. Maecenas commodo pretium lobortis. Nunc eleifend vel lorem eget egestas. Etiam id dignissim metus, elementum lobortis ex. Etiam venenatis ultrices metus quis convallis.\r\n\r\nPraesent scelerisque ac est nec convallis. Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc tempus. Pellentesque viverra, est ut tempus viverra, felis augue vehicula lorem, et lacinia felis ante sit amet eros. Integer molestie nulla egestas porta maximus. Suspendisse neque ante, malesuada et sem eu, pulvinar lobortis arcu. Donec eget mi nec elit aliquam fringilla. Morbi hendrerit sit amet arcu posuere imperdiet.\r\n\r\nMauris aliquet consequat suscipit. Aliquam maximus rhoncus risus, eget finibus nunc molestie eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis neque felis, vel tristique lectus suscipit ut. Sed dictum metus eu massa semper tempor. Aliquam dolor odio, vehicula a pharetra non, convallis feugiat erat. Maecenas euismod, neque at varius mollis, libero risus volutpat neque, mollis vestibulum tortor odio non massa. Vestibulum semper diam ac felis imperdiet commodo. Curabitur aliquam sit amet odio ac gravida. Aliquam nibh nisi, semper eu tellus sed, tristique fermentum metus. Nunc eu tellus maximus mi pellentesque convallis. Ut mattis turpis ut augue interdum sollicitudin. Integer facilisis viverra venenatis. ', '2022-10-14 01:34:22', '2022-10-14 01:34:22'),
('3', 'Kegiatan Paskibraka', '', 'posted', 'Activities', 'placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc tempus. Pellent', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus ligula eros, ut auctor velit vulputate ut. Maecenas interdum, leo id viverra fermentum, erat arcu hendrerit ipsum, eget pretium nisi neque dignissim enim. Aliquam eu sem commodo, dictum orci vel, consequat neque. Aliquam vel mollis arcu, sed tincidunt diam. Etiam vulputate, nibh et convallis vehicula, eros velit euismod augue, et sagittis libero risus eget nunc. Quisque nec lectus vitae orci vehicula interdum sit amet sit amet libero. Integer ante leo, laoreet non bibendum eu, accumsan sit amet enim. Nullam ornare consequat metus ac lobortis. Nulla a elit eget odio blandit molestie. Nullam vel odio justo. Maecenas commodo pretium lobortis. Nunc eleifend vel lorem eget egestas. Etiam id dignissim metus, elementum lobortis ex. Etiam venenatis ultrices metus quis convallis. \r\n Mauris aliquet consequat suscipit. Aliquam maximus rhoncus risus, eget finibus nunc molestie eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis neque felis, vel tristique lectus suscipit ut. Sed dictum metus eu massa semper tempor. Aliquam dolor odio, vehicula a pharetra non, convallis feugiat erat. Maecenas euismod, neque at varius mollis, libero risus volutpat neque, mollis vestibulum tortor odio non massa. Vestibulum semper diam ac felis imperdiet commodo. Curabitur aliquam sit amet odio ac gravida. Aliquam nibh nisi, semper eu tellus sed, tristique fermentum metus. Nunc eu tellus maximus mi pellentesque convallis. Ut mattis turpis ut augue interdum sollicitudin. Integer facilisis viverra venenatis.\r\n\r\nFusce eu cursus tellus. Sed vel convallis libero. Sed eget ullamcorper sapien. Maecenas faucibus, magna in varius interdum, orci lorem feugiat turpis, eget rutrum urna nibh ut nisl. Vestibulum vulputate lacus urna, vel vulputate nunc accumsan porta. In cursus mattis sem, quis finibus mauris lacinia ut. Duis ut mattis nibh, sed volutpat arcu. Aenean varius, risus non fringilla condimentum, tellus est bibendum quam, eget iaculis nisl arcu sed velit. Duis enim odio, fermentum non ultrices ac, viverra ut lorem. Nulla efficitur et neque interdum vestibulum. Sed ultricies fermentum libero, quis varius augue porta at. Nam condimentum, nisl pellentesque facilisis tempor, sapien eros feugiat lorem, non tempus felis nibh non libero. Nam condimentum turpis eget cursus tempus. Sed tempus nunc viverra, porttitor eros a, gravida nulla. Suspendisse dapibus molestie quam sed porta. ', '2022-10-14 01:47:01', '2022-10-14 01:47:01'),
('4', 'Kegiatan Praktek Komputer', '', 'posted', 'Activities', 'Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus ligula eros, ut auctor velit vulputate ut. Maecenas interdum, leo id viverra fermentum, erat arcu hendrerit ipsum, eget pretium nisi neque dignissim enim. Aliquam eu sem commodo, dictum orci vel, consequat neque. Aliquam vel mollis arcu, sed tincidunt diam. Etiam vulputate, nibh et convallis vehicula, eros velit euismod augue, et sagittis libero risus eget nunc. Quisque nec lectus vitae orci vehicula interdum sit amet sit amet libero. Integer ante leo, laoreet non bibendum eu, accumsan sit amet enim. Nullam ornare consequat metus ac lobortis. Nulla a elit eget odio blandit molestie. Nullam vel odio justo. Maecenas commodo pretium lobortis. Nunc eleifend vel lorem eget egestas. Etiam id dignissim metus, elementum lobortis ex. Etiam venenatis ultrices metus quis convallis.\r\n\r\nPraesent scelerisque ac est nec convallis. Nullam sit amet placerat lectus. Aliquam sollicitudin tortor aliquet diam gravida, quis iaculis nunc tempus. Pellentesque viverra, est ut tempus viverra, felis augue vehicula lorem, et lacinia felis ante sit amet eros. Integer molestie nulla egestas porta maximus. Suspendisse neque ante, malesuada et sem eu, pulvinar lobortis arcu. Donec eget mi nec elit aliquam fringilla. Morbi hendrerit sit amet arcu posuere imperdiet.\r\n\r\nMauris aliquet consequat suscipit. Aliquam maximus rhoncus risus, eget finibus nunc molestie eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis neque felis, vel tristique lectus suscipit ut. Sed dictum metus eu massa semper tempor. Aliquam dolor odio, vehicula a pharetra non, convallis feugiat erat. Maecenas euismod, neque at varius mollis, libero risus volutpat neque, mollis vestibulum tortor odio non massa. Vestibulum semper diam ac felis imperdiet commodo. Curabitur aliquam sit amet odio ac gravida. Aliquam nibh nisi, semper eu tellus sed, tristique fermentum metus. Nunc eu tellus maximus mi pellentesque convallis. Ut mattis turpis ut augue interdum sollicitudin. Integer facilisis viverra venenatis. ', '2022-10-14 01:47:01', '2022-10-14 01:47:01'),
('5', 'Pengumuman Pemenang LKS', '', 'posted', 'Announcement', 'Curabitur mauris sapien, posuere vel viverra eleifend, congue ac libero. Sed consequat metus ex. Int', '\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris luctus, pulvinar quam in, suscipit tortor. Donec efficitur turpis nec interdum mollis. Cras interdum lectus id felis imperdiet malesuada. In hac habitasse platea dictumst. Etiam facilisis at nisl sed tempor. Praesent laoreet justo vitae neque fringilla vestibulum. Duis dictum diam arcu, id rhoncus ex venenatis sed. Donec cursus eget nisl sit amet pellentesque. Sed accumsan hendrerit massa et tristique. Cras et felis posuere orci molestie dapibus. Quisque sit amet hendrerit libero. Donec iaculis dignissim lacinia. Ut porttitor risus in est egestas, a vehicula orci luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis a eros auctor venenatis sed eu turpis.\r\n\r\nIn elementum porta varius. Praesent vel enim ex. Aenean leo diam, tempor non ex id, mattis mattis enim. Donec bibendum vehicula dolor ac ultricies. Morbi euismod tortor sed enim imperdiet, ac bibendum libero convallis. Curabitur semper nisl ac consectetur rutrum. Duis ultrices lorem tellus, non finibus ligula commodo in. Cras ut dolor tortor. Sed laoreet iaculis erat id ornare. Sed a posuere ex. Donec bibendum quis diam non venenatis. Suspendisse id pellentesque tortor. Vivamus porta metus accumsan libero eleifend, vitae placerat mi posuere. In id scelerisque libero. Mauris consequat est commodo lacinia egestas.\r\n\r\nDonec maximus velit ac varius maximus. Ut dictum leo eget est dapibus cursus. Etiam a felis quis odio iaculis vestibulum id eget ex. Suspendisse iaculis nec sapien nec tincidunt. Pellentesque elit nisi, tempus nec nibh id, congue vulputate nisl. Suspendisse et lacus vitae mauris porttitor bibendum in eget eros. Morbi blandit dignissim erat eget tempus.\r\n\r\nEtiam non vulputate nisl, non semper metus. Duis suscipit vestibulum lacus, et lobortis nibh molestie ac. Etiam odio enim, luctus non lobortis consequat, rhoncus quis augue. Curabitur mauris sapien, posuere vel viverra eleifend, congue ac libero. Sed consequat metus ex. Integer gravida tincidunt mattis. Vivamus finibus et lorem non interdum. Maecenas eget magna accumsan, pulvinar odio at, finibus elit. Mauris sagittis elit felis, sit amet tempus augue suscipit eget. Morbi in mi at dolor porttitor molestie. Aenean iaculis mattis euismod. ', '2022-10-17 02:18:15', '2022-10-17 02:18:15'),
('6', 'Kegiatan Pramuka', '', 'posted', 'Activities', 'tempor non ex id, mattis mattis enim. Donec bibendum vehicula dolor ac ultricies. Morbi euismod tort', '\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris luctus, pulvinar quam in, suscipit tortor. Donec efficitur turpis nec interdum mollis. Cras interdum lectus id felis imperdiet malesuada. In hac habitasse platea dictumst. Etiam facilisis at nisl sed tempor. Praesent laoreet justo vitae neque fringilla vestibulum. Duis dictum diam arcu, id rhoncus ex venenatis sed. Donec cursus eget nisl sit amet pellentesque. Sed accumsan hendrerit massa et tristique. Cras et felis posuere orci molestie dapibus. Quisque sit amet hendrerit libero. Donec iaculis dignissim lacinia. Ut porttitor risus in est egestas, a vehicula orci luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis a eros auctor venenatis sed eu turpis.\r\n\r\nIn elementum porta varius. Praesent vel enim ex. Aenean leo diam, tempor non ex id, mattis mattis enim. Donec bibendum vehicula dolor ac ultricies. Morbi euismod tortor sed enim imperdiet, ac bibendum libero convallis. Curabitur semper nisl ac consectetur rutrum. Duis ultrices lorem tellus, non finibus ligula commodo in. Cras ut dolor tortor. Sed laoreet iaculis erat id ornare. Sed a posuere ex. Donec bibendum quis diam non venenatis. Suspendisse id pellentesque tortor. Vivamus porta metus accumsan libero eleifend, vitae placerat mi posuere. In id scelerisque libero. Mauris consequat est commodo lacinia egestas.\r\n\r\nDonec maximus velit ac varius maximus. Ut dictum leo eget est dapibus cursus. Etiam a felis quis odio iaculis vestibulum id eget ex. Suspendisse iaculis nec sapien nec tincidunt. Pellentesque elit nisi, tempus nec nibh id, congue vulputate nisl. Suspendisse et lacus vitae mauris porttitor bibendum in eget eros. Morbi blandit dignissim erat eget tempus. ', '2022-10-17 02:18:15', '2022-10-17 02:18:15'),
('PST239', 'Pengumuman Pemenang LKS 2022', '', 'posted', 'Announcement', 'Curabitur mauris sapien, posuere vel viverra eleifend, congue ac libero. Sed consequat metus ex. Int', '\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris luctus, pulvinar quam in, suscipit tortor. Donec efficitur turpis nec interdum mollis. Cras interdum lectus id felis imperdiet malesuada. In hac habitasse platea dictumst. Etiam facilisis at nisl sed tempor. Praesent laoreet justo vitae neque fringilla vestibulum. Duis dictum diam arcu, id rhoncus ex venenatis sed. Donec cursus eget nisl sit amet pellentesque. Sed accumsan hendrerit massa et tristique. Cras et felis posuere orci molestie dapibus. Quisque sit amet hendrerit libero. Donec iaculis dignissim lacinia. Ut porttitor risus in est egestas, a vehicula orci luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis a eros auctor venenatis sed eu turpis.\r\n\r\nIn elementum porta varius. Praesent vel enim ex. Aenean leo diam, tempor non ex id, mattis mattis enim. Donec bibendum vehicula dolor ac ultricies. Morbi euismod tortor sed enim imperdiet, ac bibendum libero convallis. Curabitur semper nisl ac consectetur rutrum. Duis ultrices lorem tellus, non finibus ligula commodo in. Cras ut dolor tortor. Sed laoreet iaculis erat id ornare. Sed a posuere ex. Donec bibendum quis diam non venenatis. Suspendisse id pellentesque tortor. Vivamus porta metus accumsan libero eleifend, vitae placerat mi posuere. In id scelerisque libero. Mauris consequat est commodo lacinia egestas.\r\n\r\nDonec maximus velit ac varius maximus. Ut dictum leo eget est dapibus cursus. Etiam a felis quis odio iaculis vestibulum id eget ex. Suspendisse iaculis nec sapien nec tincidunt. Pellentesque elit nisi, tempus nec nibh id, congue vulputate nisl. Suspendisse et lacus vitae mauris porttitor bibendum in eget eros. Morbi blandit dignissim erat eget tempus.\r\n\r\nEtiam non vulputate nisl, non semper metus. Duis suscipit vestibulum lacus, et lobortis nibh molestie ac. Etiam odio enim, luctus non lobortis consequat, rhoncus quis augue. Curabitur mauris sapien, posuere vel viverra eleifend, congue ac libero. Sed consequat metus ex. Integer gravida tincidunt mattis. Vivamus finibus et lorem non interdum. Maecenas eget magna accumsan, pulvinar odio at, finibus elit. Mauris sagittis elit felis, sit amet tempus augue suscipit eget. Morbi in mi at dolor porttitor molestie. Aenean iaculis mattis euismod. ', '2022-10-17 02:18:15', '2022-10-17 02:18:15'),
('PST256', 'Night Post 2', '', 'posted', 'Activity', '', '<p><strong>Post Body</strong></p>', '2022-10-28 17:26:10', '2022-10-29 00:00:00'),
('PST259', 'Malem Posting 2', '', 'posted', 'Announcement', '', '<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Sed id mi nec quam gravida blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultricies ex malesuada dolor ullamcorper gravida. Mauris lobortis vitae risus ut tempor. Morbi auctor mauris erat. Morbi aliquet iaculis eros suscipit aliquam. Donec et lacus eleifend est fringilla imperdiet in eu libero. Ut in cursus tortor. Aenean consectetur ante nec lacus iaculis posuere. Donec sollicitudin nibh id dui vestibulum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam iaculis, massa et faucibus sagittis, risus ipsum placerat ex, vitae auctor sem purus vitae erat. Nunc quis convallis mauris, vel pulvinar velit. Pellentesque malesuada ex neque, nec hendrerit nisi rhoncus eget. Phasellus sem nibh, euismod at mattis maximus, vulputate sed sapien.</p><p>Donec vitae finibus justo. Pellentesque blandit, enim vel condimentum auctor, ipsum metus luctus purus, eu pellentesque sapien felis vel tortor. Phasellus tincidunt scelerisque sapien pulvinar luctus. Vestibulum tortor nibh, ultrices lacinia vulputate a, mattis a tellus. Integer quis augue non dui auctor semper quis et turpis. Nulla condimentum sapien ac justo porttitor, at vulputate tellus mollis. Aliquam rutrum eu orci eu fringilla. Pellentesque sagittis, lectus sit amet vulputate tempor, sapien mi facilisis dui, vel rhoncus ipsum lorem eu dui. Vestibulum in ultricies mauris, id sodales nisl. Nullam ullamcorper porttitor felis, vel dignissim purus placerat at. Maecenas ut ex sapien. Mauris placerat, quam ut pulvinar placerat, nunc nisi egestas erat, sit amet lobortis urna erat quis tortor. Nulla volutpat eros vitae dui tempus, ut bibendum diam luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pulvinar lorem quis libero dapibus, ut porta est gravida.</p><p>Cras vel tristique odio. Nam in ligula vel sem lobortis fringilla nec vel tortor. Maecenas mauris eros, gravida congue dui et, tempor scelerisque nulla. In sed elit placerat, malesuada magna ut, pretium neque. Suspendisse nec consequat lorem. Vivamus faucibus pharetra mauris id ornare. Quisque in pulvinar eros. Vivamus semper quam et nibh bibendum pulvinar. In aliquam efficitur blandit. Vestibulum ac finibus tellus. Curabitur dignissim scelerisque massa, vehicula tincidunt magna consequat vel.</p><p>&nbsp;</p><p><strong>Sed laoreet luctus laoreet.</strong> Nullam metus ipsum, consequat sed risus ut, pretium rhoncus augue. Quisque erat nisl, commodo sed tortor tempus, ultrices mattis est. Quisque malesuada, orci vitae volutpat tempus, dui nisi pharetra orci, ac posuere nisl elit lacinia odio. Sed a feugiat ante, quis vulputate dui. Cras sodales dapibus elit eu pretium. Duis id pretium elit, vel convallis neque. Vestibulum eu enim leo. Cras dolor diam, porta sed erat at, molestie cursus eros. Vivamus rutrum molestie magna ac dapibus.</p><p>Nulla fringilla tortor at ipsum tincidunt, ac viverra magna tristique. Quisque interdum commodo felis, a sollicitudin nisi venenatis eget. Cras hendrerit dolor eget egestas maximus. Maecenas fermentum sed diam a dignissim. Fusce sit amet sem massa. In tristique, massa et accumsan bibendum, sem purus venenatis risus, et bibendum eros turpis in massa. Donec imperdiet magna eu ornare vulputate. Quisque lectus est, laoreet vel auctor ac, tincidunt ut massa. Aliquam accumsan congue enim, vel commodo diam blandit at. Fusce vitae tortor non massa dapibus iaculis. Aenean vitae ante sapien. Maecenas eu mauris ut justo volutpat gravida. Aenean sit amet pretium mauris.</p><p>&nbsp;</p><p>Nam scelerisque faucibus velit, non aliquam augue imperdiet in. Proin ac molestie neque. Aenean dapibus porta felis, ut auctor ante varius a. Nam diam orci, laoreet vitae aliquam nec, tempor ac orci. Sed lacinia efficitur tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam maximus libero sed sem suscipit scelerisque et id erat. Integer elementum lectus lorem, ac mattis lorem malesuada quis. Duis nisl turpis, mattis ac massa ac, vehicula semper ex. Sed feugiat sed metus et cursus. Praesent nulla metus, ultrices ut libero ac, pellentesque suscipit risus. Donec dapibus orci ac ultricies porttitor. Morbi porttitor augue erat, non commodo justo blandit in. In eleifend tempus venenatis. Fusce semper pellentesque aliquet. In vel sapien at elit vulputate mollis.</p><p>Proin sit amet lacus ante. Nulla ornare, est sed fringilla volutpat, felis leo tempus enim, at aliquet augue tellus vitae urna. Donec a tempor justo. Cras faucibus sagittis ante, ut faucibus lorem faucibus a. Nullam molestie varius feugiat. Donec sit amet massa a ex placerat vehicula. Vivamus enim urna, tempus et varius eget, lobortis quis sapien. Suspendisse semper elit et felis consequat efficitur.</p><p>&nbsp;</p><p>Nulla facilisi. Nam mattis eu elit nec interdum. In efficitur lobortis pulvinar. Duis quis maximus lacus. Curabitur eget dui sit amet ex semper maximus at in leo. Cras porta felis sem, sit amet pellentesque purus facilisis quis. Donec malesuada augue risus, nec tempus neque pulvinar id. Proin accumsan velit in cursus porttitor.&nbsp;</p>', '2022-10-28 17:54:12', '2022-10-29 00:00:00'),
('PST260', 'Last Post Edited', '', 'posted', 'Activities', '', '<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi nec quam gravida blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultricies </strong>ex malesuada dolor ullamcorper gravida. Mauris lobortis vitae risus ut tempor. Morbi aucto auris erat. Morbi aliquet iaculis eros suscipit aliquam. Donec et lacus eleifend est fringilla imperdiet in eu libero. Ut in cursus tortor. Aenean consectetur ante nec lacus iaculis posuere. Donec sollicitudin nibh id dui vestibulum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam iaculis, massa et faucibus sagittis, risus ipsum placerat ex, vitae auctor sem purus vitae erat. Nunc quis convallis mauris, vel pulvinar velit. Pellentesque malesuada ex neque, nec hendrerit nisi rhoncus eget. Phasellus sem nibh, euismod at mattis maximus, vulputate sed sapien.</p><p><strong>Donec vitae finibus justo.</strong> Pellentesque blandit, enim vel condimentum auctor, ipsusm metus luctus purus, eu pellentesque sapien felis vel tortor. Phasellus tincidunt scelerisque sapien pulvinar luctus. Vestibulum tortor nibh, ultrices lacinia vulputate a, mattis a tellus. Integer quis augue non dui auctor semper quis et turpis. Nulla condimentum sapien ac justo porttitor, at vulputate tellus mollis. Aliquam rutrum eu orci eu fringilla. Pellentesque sagittis, lectus sit amet vulputate tempor, sapien mi facilisis dui, vel rhoncus ipsum lorem eu dui. Vestibulum in ultricies mauris, id sodales nisl. Nullam ullamcorper porttitor felis, vel dignissim purus placerat at. Maecenas ut ex sapien. Mauris placerat, quam ut pulvinar placerat, nunc nisi egestas erat, sit amet lobortis urna erat quis tortor. Nulla volutpat eros vitae dui tempus, ut bibendum diam luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pulvinar lorem quis libero dapibus, ut porta est gravida.</p><p>Cras vel tristique odio. Nam in ligula vel sem lobortis fringilla nec vel tortor. Maecenas mauris eros, gravida congue dui et, tempor scelerisque nulla. In sed elit placerat, malesuada magna ut, pretium neque. Suspendisse nec consequat lorem. Vivamus faucibus pharetra mauris id ornare. Quisque in pulvinar eros. Vivamus semper quam et nibh bibendum pulvinar. In aliquam efficitur blandit. Vestibulum ac finibus tellus. Curabitur dignissim scelerisque massa, vehicula tincidunt magna consequat vel.</p><p>Sed laoreet luctus laoreet. Nullam metus ipsum, consequat sed risus ut, pretium rhoncus augue. Quisque erat nisl, commodo sed tortor tempus, ultrices mattis est. Quisque malesuada, orci vitae volutpat tempus, dui nisi pharetra orci, ac posuere nisl elit lacinia odio. Sed a feugiat ante, quis vulputate dui. Cras sodales dapibus elit eu pretium. Duis id pretium elit, vel convallis neque. Vestibulum eu enim leo. Cras dolor diam, porta sed erat at, molestie cursus eros. Vivamus rutrum molestie magna ac dapibus.</p><p>Nulla fringilla tortor at ipsum tincidunt, ac viverra magna tristique. Quisque interdum commodo felis, a sollicitudin nisi venenatis eget. Cras hendrerit dolor eget egestas maximus. Maecenas fermentum sed diam a dignissim. Fusce sit amet sem massa. In tristique, massa et accumsan bibendum, sem purus venenatis risus, et bibendum eros turpis in massa. Donec imperdiet magna eu ornare vulputate. Quisque lectus est, laoreet vel auctor ac, tincidunt ut massa. Aliquam accumsan congue enim, vel commodo diam blandit at. Fusce vitae tortor non massa dapibus iaculis. Aenean vitae ante sapien. Maecenas eu mauris ut justo volutpat gravida. Aenean sit amet pretium mauris.</p><p>Nam scelerisque faucibus velit, non aliquam augue imperdiet in. Proin ac molestie neque. Aenean dapibus porta felis, ut auctor ante varius a. Nam diam orci, laoreet vitae aliquam nec, tempor ac orci. Sed lacinia efficitur tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam maximus libero sed sem suscipit scelerisque et id erat. Integer elementum lectus lorem, ac mattis lorem malesuada quis. Duis nisl turpis, mattis ac massa ac, vehicula semper ex. Sed feugiat sed metus et cursus. Praesent nulla metus, ultrices ut libero ac, pellentesque suscipit risus. Donec dapibus orci ac ultricies porttitor. Morbi porttitor augue erat, non commodo justo blandit in. In eleifend tempus venenatis. Fusce semper pellentesque aliquet. In vel sapien at elit vulputate mollis.</p><p>Proin sit amet lacus ante. Nulla ornare, est sed fringilla volutpat, felis leo tempus enim, at aliquet augue tellus vitae urna. Donec a tempor justo. Cras faucibus sagittis ante, ut faucibus lorem faucibus a. Nullam molestie varius feugiat. Donec sit amet massa a ex placerat vehicula. Vivamus enim urna, tempus et varius eget, lobortis quis sapien. Suspendisse semper elit et felis consequat efficitur.</p><p>&nbsp;</p><p><strong>Nulla facilisi. </strong>Nam mattis eu elit nec interdum. In efficitur lobortis pulvinar. Duis quis maximus lacus. Curabitur eget dui sit amet ex semper maximus at in leo. Cras porta felis sem, sit amet pellentesque purus facilisis quis. Donec malesuada augue risus, nec tempus neque pulvinar id. Proin accumsan velit in cursus porttitor.</p>', '2022-10-28 18:30:24', '2022-10-05 00:00:00'),
('PST261', 'Posting 29 Oktober 2022', '', 'posted', 'Announcement', 'Lorem ipsum dolor sit amet, consectetur Farhan test post.adipiscing elit. Quisque faucibus in libero at porta. In dui ipsum, bibendum ut odio et, egestas consectetur erat. Quisque vitae tortor in risus malesuada luctus. Sed accumsan massa non quam fa', '<p><strong>Lorem ipsum dolor sit amet, consectetur Farhan test post. </strong>adipiscing elit. Quisque faucibus in libero at porta. In dui ipsum, bibendum ut odio et, egestas consectetur erat. Quisque vitae tortor in risus malesuada luctus. Sed accumsan massa non quam faucibus malesuada. Curabitur auctor viverra magna, hendrerit vestibulum enim luctus sit amet. Donec feugiat ullamcorper massa id dapibus. Donec posuere faucibus leo sit amet suscipit. Curabitur sollicitudin est ut odio elementum, id accumsan est placerat. Maecenas pharetra velit eu cursus posuere. Vivamus venenatis rutrum pharetra. Integer elementum posuere nisl sit amet accumsan. Quisque mattis neque id nisl elementum tempus. In luctus ornare est. Praesent fermentum, felis eget auctor posuere, velit quam vestibulum eros, vel dapibus sapien erat vel dui.</p><p>Curabitur ac sollicitudin nibh, eu dictum nulla. Pellentesque semper nunc ut accumsan elementum. Aenean efficitur lobortis dolor, ac ornare neque consequat et. Maecenas in nisi sit amet mi tincidunt laoreet pharetra luctus metus. Maecenas purus orci, ultrices vel elit nec, gravida interdum orci. Mauris egestas purus erat, et luctus nunc porttitor eget. Nulla id dolor placerat, faucibus orci varius, porttitor nunc. Phasellus pellentesque gravida urna sed vestibulum. Mauris tristique eros in augue laoreet, at aliquam sem efficitur. Curabitur mollis justo felis, at commodo quam tempus quis.</p><p>Sed ultricies eget ante sed hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ipsum nec semper lacinia. In laoreet venenatis porttitor. Aenean ac egestas nisi. Nullam placerat, sapien et accumsan rutrum, sem dui accumsan lorem, sed congue nulla turpis nec libero. In orci sem, cursus sit amet dapibus cursus, rhoncus vel mi. Sed nulla massa, venenatis sed quam eget, venenatis ultrices metus.</p><p>Sed sed quam ante. Morbi eget vehicula neque. Quisque ut erat non nulla facilisis convallis in eget turpis. Nunc nulla enim, mattis eu tincidunt sed, semper ut nibh. Morbi nulla urna, venenatis eu augue ac, cursus facilisis massa. Vestibulum ornare efficitur ante quis fermentum. Integer ac rhoncus metus, sit amet porta sapien. Nam fringilla, dui eget convallis vestibulum, libero augue eleifend odio, eu convallis nisl turpis non est.</p><p>Fusce lacinia mi eget sem vestibulum, faucibus pulvinar augue mattis. Duis sed iaculis mauris. Integer odio nunc, lacinia vel varius eget, tristique id ipsum. Integer venenatis risus sed leo posuere bibendum. Fusce ac faucibus tellus. Aliquam erat volutpat. Nam fermentum turpis augue, eleifend condimentum lorem facilisis sed. Etiam lobortis auctor dui a posuere. Duis ut varius nunc, gravida interdum eros.</p><p>Praesent semper turpis in tortor blandit fringilla. Sed nec tortor gravida, viverra arcu dignissim, aliquet ipsum. Proin dignissim dignissim ipsum, at cursus elit dignissim eu. Quisque ultricies velit sapien, sit amet rhoncus nunc interdum at. Nulla iaculis erat nec libero ullamcorper laoreet. Praesent erat nibh, bibendum sit amet pretium in, imperdiet non odio. Nullam condimentum feugiat ipsum, vel pharetra mi interdum sit amet. Nunc at tincidunt sapien, et bibendum quam. Duis vitae urna eu sem dignissim imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar, orci in tempor efficitur, felis dolor vestibulum libero, eleifend commodo odio dolor vel libero. Integer in ipsum nulla.</p><p>Quisque ac metus ut magna semper cursus eleifend vel ligula. Nunc eu tincidunt ante. Integer in purus id diam convallis posuere eget non nisl. Cras pellentesque quis erat a dignissim. Donec ultricies posuere purus, ac placerat nunc commodo a. Donec iaculis viverra feugiat. Cras in tincidunt ex. Donec eleifend nisl nec libero sodales, sed vestibulum orci bibendum. Mauris pellentesque nisi vel lacus gravida laoreet. Curabitur rutrum sapien ac nisl pharetra, eget accumsan neque tempor.</p><p>Aenean consequat, dolor nec tempus porta, tortor quam luctus felis, ut auctor lectus leo scelerisque nulla. Pellentesque lobortis cursus eros. Nunc vel consequat nulla. Sed in convallis dui. Suspendisse massa purus, luctus non finibus in, aliquet id ligula. Donec sodales efficitur tortor, ac tincidunt ex tincidunt sed. In est nisl, malesuada vel urna a, elementum bibendum ante. Donec ultricies erat fringilla nulla vulputate feugiat. Phasellus sit amet placerat ante, eu iaculis sapien.</p><p>Morbi tempus commodo mauris, non congue nisi gravida sed. Etiam condimentum semper mi, semper consectetur elit elementum a. Nunc mollis, velit bibendum consectetur gravida, enim metus vestibulum est, eget lacinia arcu libero eget mi. Phasellus ornare, magna sed egestas aliquam, orci purus consectetur augue, nec congue metus ex et enim. Donec lacinia tellus eget libero fringilla sollicitudin. Donec varius dui a mi rhoncus, in mollis urna posuere. Ut tincidunt erat in sapien mattis tempor et ac mi. Nam nec tellus orci. Quisque in mollis metus. Cras lorem libero, condimentum sed scelerisque quis, vestibulum quis diam. Quisque rutrum, risus vel sodales auctor, ante dui efficitur quam, eget aliquet arcu ex sed dolor. Etiam auctor, erat eu posuere commodo, diam turpis auctor lorem, id tempus ipsum nibh non libero. Aliquam vehicula dolor in nulla rhoncus elementum. Sed malesuada posuere erat nec tristique.</p><p>Sed pharetra cursus orci, at fermentum lectus malesuada dictum. Maecenas pellentesque id tellus eu blandit. Etiam euismod blandit nunc quis porttitor. Nullam hendrerit dictum ante, in posuere odio tincidunt sed. In laoreet elementum luctus. Morbi gravida, quam at efficitur ornare, est turpis iaculis sem, aliquam dictum lorem ipsum ac sapien. Nunc vehicula, arcu at porta aliquet, turpis lectus scelerisque lectus, sit amet rutrum nisl orci vitae dolor. In hac habitasse platea dictumst.</p>', '2022-10-29 01:43:36', '2022-10-29 01:43:36'),
('PST262', 'Draft Post Testing', '', 'draft', 'Activity', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus in libero at porta. In dui ipsum, bibendum ut odio et, egestas consectetur erat. Quisque vitae tortor in risus malesuada luctus. Sed accumsan massa non quam faucibus malesuada.', '<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus in libero at porta. In dui ipsum, bibendum ut odio et, egestas consectetur erat. Quisque vitae tortor in risus malesuada luctus. Sed accumsan massa non quam faucibus malesuada. Curabitur auctor viverra magna, hendrerit vestibulum enim luc</strong>tus sit amet. Donec feugiat ullamcorper massa id dapibus. Donec posuere faucibus leo sit amet suscipit. Curabitur sollicitudin est ut odio elementum, id accumsan est placerat. Maecenas pharetra velit eu cursus posuere. Vivamus venenatis rutrum pharetra. Integer elementum posuere nisl sit amet accumsan. Quisque mattis neque id nisl elementum tempus. In luctus ornare est. Praesent fermentum, felis eget auctor posuere, velit quam vestibulum eros, vel dapibus sapien erat vel dui.</p><p>Curabitur ac sollicitudin nibh, eu dictum nulla. Pellentesque semper nunc ut accumsan elementum. Aenean efficitur lobortis dolor, ac ornare neque consequat et. Maecenas in nisi sit amet mi tincidunt laoreet pharetra luctus metus. Maecenas purus orci, ultrices vel elit nec, gravida interdum orci. Mauris egestas purus erat, et luctus nunc porttitor eget. Nulla id dolor placerat, faucibus orci varius, porttitor nunc. Phasellus pellentesque gravida urna sed vestibulum. Mauris tristique eros in augue laoreet, at aliquam sem efficitur. Curabitur mollis justo felis, at commodo quam tempus quis.</p><p>Sed ultricies eget ante sed hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ipsum nec semper lacinia. In laoreet venenatis porttitor. Aenean ac egestas nisi. Nullam placerat, sapien et accumsan rutrum, sem dui accumsan lorem, sed congue nulla turpis nec libero. In orci sem, cursus sit amet dapibus cursus, rhoncus vel mi. Sed nulla massa, venenatis sed quam eget, venenatis ultrices metus.</p><p>Sed sed quam ante. Morbi eget vehicula neque. Quisque ut erat non nulla facilisis convallis in eget turpis. Nunc nulla enim, mattis eu tincidunt sed, semper ut nibh. Morbi nulla urna, venenatis eu augue ac, cursus facilisis massa. Vestibulum ornare efficitur ante quis fermentum. Integer ac rhoncus metus, sit amet porta sapien. Nam fringilla, dui eget convallis vestibulum, libero augue eleifend odio, eu convallis nisl turpis non est.</p><p>Fusce lacinia mi eget sem vestibulum, faucibus pulvinar augue mattis. Duis sed iaculis mauris. Integer odio nunc, lacinia vel varius eget, tristique id ipsum. Integer venenatis risus sed leo posuere bibendum. Fusce ac faucibus tellus. Aliquam erat volutpat. Nam fermentum turpis augue, eleifend condimentum lorem facilisis sed. Etiam lobortis auctor dui a posuere. Duis ut varius nunc, gravida interdum eros.</p><p>Praesent semper turpis in tortor blandit fringilla. Sed nec tortor gravida, viverra arcu dignissim, aliquet ipsum. Proin dignissim dignissim ipsum, at cursus elit dignissim eu. Quisque ultricies velit sapien, sit amet rhoncus nunc interdum at. Nulla iaculis erat nec libero ullamcorper laoreet. Praesent erat nibh, bibendum sit amet pretium in, imperdiet non odio. Nullam condimentum feugiat ipsum, vel pharetra mi interdum sit amet. Nunc at tincidunt sapien, et bibendum quam. Duis vitae urna eu sem dignissim imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar, orci in tempor efficitur, felis dolor vestibulum libero, eleifend commodo odio dolor vel libero. Integer in ipsum nulla.</p><p>Quisque ac metus ut magna semper cursus eleifend vel ligula. Nunc eu tincidunt ante. Integer in purus id diam convallis posuere eget non nisl. Cras pellentesque quis erat a dignissim. Donec ultricies posuere purus, ac placerat nunc commodo a. Donec iaculis viverra feugiat. Cras in tincidunt ex. Donec eleifend nisl nec libero sodales, sed vestibulum orci bibendum. Mauris pellentesque nisi vel lacus gravida laoreet. Curabitur rutrum sapien ac nisl pharetra, eget accumsan neque tempor.</p><p>Aenean consequat, dolor nec tempus porta, tortor quam luctus felis, ut auctor lectus leo scelerisque nulla. Pellentesque lobortis cursus eros. Nunc vel consequat nulla. Sed in convallis dui. Suspendisse massa purus, luctus non finibus in, aliquet id ligula. Donec sodales efficitur tortor, ac tincidunt ex tincidunt sed. In est nisl, malesuada vel urna a, elementum bibendum ante. Donec ultricies erat fringilla nulla vulputate feugiat. Phasellus sit amet placerat ante, eu iaculis sapien.</p><p>Morbi tempus commodo mauris, non congue nisi gravida sed. Etiam condimentum semper mi, semper consectetur elit elementum a. Nunc mollis, velit bibendum consectetur gravida, enim metus vestibulum est, eget lacinia arcu libero eget mi. Phasellus ornare, magna sed egestas aliquam, orci purus consectetur augue, nec congue metus ex et enim. Donec lacinia tellus eget libero fringilla sollicitudin. Donec varius dui a mi rhoncus, in mollis urna posuere. Ut tincidunt erat in sapien mattis tempor et ac mi. Nam nec tellus orci. Quisque in mollis metus. Cras lorem libero, condimentum sed scelerisque quis, vestibulum quis diam. Quisque rutrum, risus vel sodales auctor, ante dui efficitur quam, eget aliquet arcu ex sed dolor. Etiam auctor, erat eu posuere commodo, diam turpis auctor lorem, id tempus ipsum nibh non libero. Aliquam vehicula dolor in nulla rhoncus elementum. Sed malesuada posuere erat nec tristique.</p><p>Sed pharetra cursus orci, at fermentum lectus malesuada dictum. Maecenas pellentesque id tellus eu blandit. Etiam euismod blandit nunc quis porttitor. Nullam hendrerit dictum ante, in posuere odio tincidunt sed. In laoreet elementum luctus. Morbi gravida, quam at efficitur ornare, est turpis iaculis sem, aliquam dictum lorem ipsum ac sapien. Nunc vehicula, arcu at porta aliquet, turpis lectus scelerisque lectus, sit amet rutrum nisl orci vitae dolor. In hac habitasse platea dictumst.</p>', '2022-10-29 01:48:44', '2022-10-29 01:48:44'),
('PST263', 'delete', '', 'posted', 'Announcement', '', '<p>&nbsp;delete</p>', '2022-11-03 14:39:26', '2022-11-03 00:00:00'),
('PST264', 'test', '', 'posted', 'Activities', 'Post Body\n\n\n\nthis text should be bold', '<p>Post Body</p><p>&nbsp;</p><p><strong>this text should be bold</strong></p>', '2022-11-04 00:00:00', '2022-11-08 15:07:15'),
('PST265', 'test double category', '', 'draft', 'Announcement', '', '<p><strong>Post Body</strong></p>', '2022-11-08 00:00:00', '2022-11-08 00:00:00'),
('PST266', 'posting baru', '', 'posted', 'Activities', '', '<p>test posting lorem ipsum with a little custom</p><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non facilisis lectus. Nulla facilisi. Sed vestibulum libero et mauris molestie maximus. Suspendisse id dictum velit, nec ornare metus. Sed quam eros, placerat in sodales non, tristique nec ante. Nam condimentum, odio vitae fringilla finibus, enim mauris hendrerit metus, quis viverra mauris ex in mauris. Aenean non mi ac nibh tincidunt commodo ut sit amet lacus. Ut rutrum turpis vel facilisis facilisis. Praesent augue dui, eleifend in tristique id, consectetur id est. Duis pulvinar arcu eget purus pellentesque, vel dictum mi varius.</p><p>Suspendisse potenti. Quisque id congue tellus, et tristique urna. In eu dui eu mauris semper consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In nec co<strong>ngue sem. Vestibulum condimentum sodales elit at luctus. Praesent eget quam ac ipsum sollicitudin blandit. Praesent non interdum nibh. In hac habitasse platea dictumst.</strong></p><p><strong>Suspendisse sit amet massa nec nulla venenatis facilisis ut vitae purus. Maecenas leo enim, venenatis sit amet suscipit pretium, varius luctus tellus. Curabitur nunc sapien, convallis id libero tempor, accumsan scelerisque urna. Praesent tristique ipsum ac enim mollis laoreet. Nam mollis sollicitudin suscipit. Nunc rhoncus nisi at eros bibendum cursus. Phasellus leo odio, bibendum quis malesuada ac, sagittis vitae augue. Vivamus feugiat vulputate porttitor. Maecenas ac neque quis lacus mattis pulvinar sed sed nibh. Vestibulum vehicula, felis a posuere placerat, sem arcu pharetra lacus, sed congue lacus diam quis augue.</strong></p><p>Vivamus vulputate diam eu fermentum faucibus. Donec vitae tortor dui. Vestibulum sed vulputate elit, sed cursus turpis. Proin in libero sapien. Donec vitae venenatis ante. Praesent vulputate lectus non consectetur pulvinar. Mauris condimentum nisl vitae neque aliquam, vel pharetra purus bibendum. Ut sagittis gravida viverra. Nam facilisis tincidunt lacus, accumsan dictum felis. Sed id volutpat urna. Vivamus diam lectus, maximus pharetra libero quis, tempor bibendum nunc. Aenean et est quis arcu ultrices mattis a non sem.</p>', '2022-11-18 00:00:00', '2022-11-18 00:00:00'),
('PST267', 'test posting', '', 'posted', 'Activities', 'Post Body', '<p>Post <strong>Body</strong></p>', '2022-11-21 00:00:00', '2022-11-21 00:08:49'),
('PST268', 'test posting 24 november', 'test-posting-24-november-268', 'posted', 'Announcement', 'Post Body bbbbb this text should be italic. this text should be bbold', '<p>Post Body bbbbb this text should be <i>italic. </i>this text should be <strong>bbold</strong></p>', '2022-11-23 00:00:00', '2022-11-23 23:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` varchar(255) NOT NULL,
  `staff_name` varchar(200) NOT NULL,
  `staff_department` varchar(200) NOT NULL,
  `staff_status` varchar(200) NOT NULL,
  `staff_photo_dir` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_name`, `staff_department`, `staff_status`, `staff_photo_dir`, `createdAt`, `updatedAt`) VALUES
('STF1', 'Malpin', 'BPM', 'Active', 'images\\malpin.jpeg', '2022-11-05 00:48:15', '2022-11-05 00:48:15'),
('STF2', 'Topan', 'BPM', 'Pension', 'images\\topan_themessenger.jpg', '2022-11-05 01:21:33', '2022-11-05 01:21:33'),
('STF4', 'test update', 'testing123', 'Active', 'images\\spring-desktop-calendar-variant.png', '2022-11-05 02:15:17', '2022-11-05 02:15:17'),
('STF5', 'Farhan', 'Tata Usaha', 'Active', '', '2022-11-05 03:25:19', '2022-11-05 03:25:19'),
('STF6', 'tes', 'tes', 'Active', 'images\\woman-eating-ice-cream-vector.jpg', '2022-11-05 03:34:34', '2022-11-05 03:34:34'),
('STF7', 'test update', 'testing123', 'Active', 'images\\blog4_img2.jpg', '2022-11-05 04:51:20', '2022-11-05 04:51:20'),
('testfarhan', 'test farhan', 'test123', 'test', 'images\\Staff\\testfarhanwindows-color.jpg', '2022-11-19 13:47:15', '2022-11-19 13:47:15');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` varchar(255) NOT NULL,
  `teacher_name` varchar(200) NOT NULL,
  `teacher_matpel` varchar(200) NOT NULL,
  `teacher_status` varchar(200) NOT NULL,
  `teacher_photo_dir` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `teacher_name`, `teacher_matpel`, `teacher_status`, `teacher_photo_dir`, `createdAt`, `updatedAt`) VALUES
('TCH1', 'Rudi', 'Matematika', 'Pension', 'images\\skeleton.jpg', '2022-11-05 05:08:27', '2022-11-05 05:08:27'),
('TCH2', 'Somat', 'Matematika', 'Active', 'images\\Teacher\\TCH2getImage.png', '2022-11-19 04:25:50', '2022-11-19 04:25:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@mail.com', '$2b$10$vzcGD.4dhvYHNp4oJ9xFDe7WJ1.0WbqMMBRQtwE9Po0xB9vgLL8Ju', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJpYXQiOjE2NjkzODg0MTYsImV4cCI6MTY2OTQ3NDgxNn0.a7wicVJkp_s3wttG1ocPj8h00leIx6Omip1h_CW5zkg', '2022-10-08 04:42:55', '2022-11-25 15:00:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`alumni_id`);

--
-- Indexes for table `categorypost`
--
ALTER TABLE `categorypost`
  ADD PRIMARY KEY (`categorypost_id`);

--
-- Indexes for table `header_content`
--
ALTER TABLE `header_content`
  ADD PRIMARY KEY (`header_id`);

--
-- Indexes for table `imgpost`
--
ALTER TABLE `imgpost`
  ADD PRIMARY KEY (`imgpost_id`);

--
-- Indexes for table `jobs_bkk`
--
ALTER TABLE `jobs_bkk`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`jurusan_id`);

--
-- Indexes for table `jurusan_document`
--
ALTER TABLE `jurusan_document`
  ADD PRIMARY KEY (`jd_id`);

--
-- Indexes for table `jurusan_gallery`
--
ALTER TABLE `jurusan_gallery`
  ADD PRIMARY KEY (`jg_id`);

--
-- Indexes for table `jurusan_prestasi`
--
ALTER TABLE `jurusan_prestasi`
  ADD PRIMARY KEY (`jp_id`);

--
-- Indexes for table `jurusan_teacher`
--
ALTER TABLE `jurusan_teacher`
  ADD PRIMARY KEY (`jurusan_id`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orgstruct`
--
ALTER TABLE `orgstruct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorypost`
--
ALTER TABLE `categorypost`
  MODIFY `categorypost_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `imgpost`
--
ALTER TABLE `imgpost`
  MODIFY `imgpost_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `jurusan_document`
--
ALTER TABLE `jurusan_document`
  MODIFY `jd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `jurusan_gallery`
--
ALTER TABLE `jurusan_gallery`
  MODIFY `jg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `jurusan_prestasi`
--
ALTER TABLE `jurusan_prestasi`
  MODIFY `jp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orgstruct`
--
ALTER TABLE `orgstruct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
