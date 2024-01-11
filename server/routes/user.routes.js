import { Router } from "express";
import {
  CreateNewUser,
  GetUserLogged,
} from "../controllers/loginUser.controllers.js";
import {
  GetUserGroups,
  CreateGroup,
  DeleteGroup
} from "../controllers/groups.controllers.js";

import { GetAllUser, GetUserImage } from "../controllers/user.controllers.js";

import { GetMembers, CreateMember, DeleteMember } from "../controllers/members.controllers.js";
import { CreateAd, DeleteAd, GetAds } from "../controllers/ads.controllers.js";
import { CreateActivity, DeleteActivity, GetActivites } from "../controllers/activities.controllers.js";
import { CreateNotification, DeleteNotification, GetNotifications } from "../controllers/notifications.controllers.js";
import { GetClassmateRegisted } from "../controllers/classmates.controllers.js";

const router = Router();

router.get("/api/users", GetUserLogged);
router.post("/api/users", CreateNewUser);

router.get("/api/users/getAll", GetAllUser);
router.get("/api/images", GetUserImage);

router.get("/api/group", GetUserGroups);
router.post("/api/group", CreateGroup);
router.delete("/api/group", DeleteGroup);

router.get("/api/members", GetMembers);
router.post("/api/members", CreateMember);
router.delete("/api/members", DeleteMember)

router.get("/api/ads", GetAds);
router.post("/api/ads", CreateAd);
router.delete("/api/ads", DeleteAd);

router.get("/api/activites", GetActivites);
router.post("/api/activites", CreateActivity);
router.delete("/api/activites", DeleteActivity);

router.get("/api/notifications", GetNotifications);
router.post("/api/notifications", CreateNotification);
router.delete("/api/notifications", DeleteNotification);

router.get("/api/classmates", GetClassmateRegisted);

export default router;