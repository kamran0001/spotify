-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 07, 2023 at 09:06 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spotify`
--

-- --------------------------------------------------------

--
-- Table structure for table `isrc_data`
--

CREATE TABLE `isrc_data` (
  `isrc_id` int(11) NOT NULL,
  `title` tinytext DEFAULT NULL,
  `isrc_code` varchar(256) NOT NULL,
  `image_url` tinytext DEFAULT NULL,
  `artist_name` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `isrc_data`
--

INSERT INTO `isrc_data` (`isrc_id`, `title`, `isrc_code`, `image_url`, `artist_name`) VALUES
(1, 'Jhumritalaiyya', 'INS181701137', 'https://i.scdn.co/image/ab67616d0000b273825ddcb304eec7ac781f4d4b', 'Pritam,Arijit Singh,Mohan Kannan'),
(2, 'Naa Peru Seesa (From \"Ramarao On Duty\")', 'INS182201785', 'https://i.scdn.co/image/ab67616d0000b27315fbdf59d29ecf9ab7fc69b2', 'Shreya Ghoshal,Sam C.S.'),
(3, 'KK (feat. Project Pat & Juicy J)', 'USAT21402404', 'https://i.scdn.co/image/ab67616d0000b27327ed4f26fa2bfbd714dba7dd', 'Wiz Khalifa,Project Pat,Juicy J'),
(4, 'HUMBLE.', 'USUM71703085', 'https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699', 'Kendrick Lamar'),
(5, 'Dile', 'USUL10401651', 'https://i.scdn.co/image/ab67616d0000b273b4070df60fced11f282548d0', 'Don Omar'),
(6, 'Cruel Summer', 'USUG11901472', 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647', 'Taylor Swift'),
(7, 'vampire', 'USUG12304091', 'https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d', 'Olivia Rodrigo'),
(8, 'Slime You Out (feat. SZA)', 'USUG12306064', 'https://i.scdn.co/image/ab67616d0000b2733b2df9103b8b1bad69ec4aa9', 'Drake,SZA'),
(9, 'Perfect', 'GBAHS1700024', 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96', 'Ed Sheeran'),
(10, 'Heartless', 'USUM70840511', 'https://i.scdn.co/image/ab67616d0000b273346d77e155d854735410ed18', 'Kanye West'),
(11, 'Wonderwall - Remastered', 'GBQCP1400109', 'https://i.scdn.co/image/ab67616d0000b2737a4c8c59851c88f6794c3cbf', 'Oasis'),
(12, 'Apna Bana Le Bulleya', 'FRX872377331', 'https://i.scdn.co/image/ab67616d0000b27305d8cfaea2fe9d84bd124c8a', 'Mohit Chauhan,Dev Sharma,Pragya Mishra'),
(13, 'Naseeb Se (From \"Satyaprem Ki Katha\")', 'INS182301549', 'https://i.scdn.co/image/ab67616d0000b2739b8fac721bb7d03925e3d73e', 'Payal Dev,Vishal Mishra,A.M. Turaz'),
(14, 'Tu Aake Dekhle - Slowed and Reverb', 'FR2X42296914', 'https://i.scdn.co/image/ab67616d0000b273cbb5bbfb329843d4cfd5c5e1', 'Aahil World'),
(15, 'Jhoome Jo Pathaan', 'INY092200127', 'https://i.scdn.co/image/ab67616d0000b2737d46ff19532fdba734bfd4e0', 'Vishal-Shekhar,Arijit Singh,Sukriti Kakar,Vishal Dadlani,Shekhar Ravjiani,Kumaar');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '7ece99e593ff5dd200e2b9233d9ba654');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `isrc_data`
--
ALTER TABLE `isrc_data`
  ADD PRIMARY KEY (`isrc_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `isrc_data`
--
ALTER TABLE `isrc_data`
  MODIFY `isrc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
