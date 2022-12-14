const express = require('express');
const router = express.Router();

const controller = require('../controllers/orgControllers');

router.post('/criar', controller.cadastrarOrg);
router.get('/buscarOrg', controller.buscarOrg);
router.put('/atualizar/:id', controller.atualizarOrgPorId);
router.delete('/deletar/:id', controller.deletarOrgPorId)

module.exports = router;
