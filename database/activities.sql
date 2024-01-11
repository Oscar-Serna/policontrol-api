-- QUINTA TABLA
CREATE TABLE activities(
    activityId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titleActivity TEXT,
    subtitleActivity TEXT,
    descriptionActivity TEXT,
    forMembers TEXT NOT NULL DEFAULT "[]",
    tokenGroup TEXT NOT NULL,
    limitDate TEXT
);