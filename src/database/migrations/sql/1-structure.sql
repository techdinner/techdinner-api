SET time_zone = "America/Sao_Paulo"; -- "-03:00"; --Horario de Brasilia
START TRANSACTION;


DROP TABLE IF EXISTS `migrations`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `id` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) DEFAULT NULL,
    `active` tinyint(1) NOT NULL DEFAULT 0,
    `role` int(11) NOT NULL,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    `updated_at` datetime NOT NULL DEFAULT current_timestamp()

);

COMMIT;
