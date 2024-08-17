import { Router } from "express";
import ExcelController from './ExcelController.js';
const excelRouter = Router();

excelRouter.post('/upload-json', async (req, res) => {
  return ExcelController.uploadJosn(req, res);
});

excelRouter.get('/getFormFields', async (req, res) => {
  return ExcelController.getFormFields(req, res);
});


export default excelRouter;