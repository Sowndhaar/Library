import express from "express";
import {
  BookCreate,
  BookDelete,
  BookId,
  BookIndex,
  BookName,
  BookUpdate,
} from "../controllers/controllbook.js";
const router = express.Router();
router.get("/", BookIndex);
router.get("/:id", BookId);
router.get("/search/name", BookName);
router.post("/", BookCreate);
router.put("/:id", BookUpdate);
router.delete("/:id", BookDelete);
export default router;
