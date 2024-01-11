-- NO INSERTAR!!!!
CREATE TABLE `name_table`(
  memberId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nameMember TEXT NOT NULL,
  surnameMember TEXT NOT NULL,
  ageMember INTEGER NOT NULL,
  ticketMember TEXT NOT NULL DEFAULT "SIN TICKET",
  groupMember INTEGER NOT NULL,
  assistants INTEGER,
  isChecked BOOLEAN DEFAULT NOT NULL DEFAULT 0,
  totalActivities TEXT NOT NULL DEFAULT "[]",
  dataQrCode TEXT
);

ALTER TABLE name_table ADD FOREIGN KEY (groupMember) REFERENCES groups(groupId);