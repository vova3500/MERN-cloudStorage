const Router = require("express")
const router = new Router()
const authMiddleware = require("../midedleware/auth.middeleware")
const fileController = require('../controllers/fileControler')

router.post('', authMiddleware, fileController.createDir);
router.get('', authMiddleware, fileController.getFiles);

module.exports = router