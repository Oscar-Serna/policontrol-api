-- SEGUNDA TABLA

CREATE TABLE `groups` (
  groupId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nameGroup TEXT,
  nameSection TEXT,
  nameExtraSection TEXT,
  createdBy INTEGER NOT NULL,
  groupToken TEXT,
  totalAssistants INTEGER,
  persons INTEGER NOT NULL DEFAULT 0
);

ALTER TABLE groups ADD FOREIGN KEY(createdBy) REFERENCES users(userId);