import { Router } from "express";
import * as videoCtrl from "./videos.controller";
/**
 * Define que rutas o urls pueden consultarse en el servidor.
 */
const router = Router();

router.get("/videos", videoCtrl.getVideos);
router.post("/videos", videoCtrl.createVideo);
router.delete("/videos/:id", videoCtrl.deleteVideo);
router.get("/videos/:id", videoCtrl.getVideo);
router.put("/videos/:id", videoCtrl.updateVideo);

export default router;
