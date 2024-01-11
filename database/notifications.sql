-- CUARTA TABLA

CREATE TABLE `notifications` (
    notificationId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    subtitle TEXT,
    message TEXT,
    forUser INTEGER NOT NULL,
    hour TEXT NOT NULL
);

ALTER TABLE notifications ADD FOREIGN KEY (forUser) REFERENCES users(userId);