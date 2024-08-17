import { Form } from "../../repositories/Form/model.js";
import { User } from "../../repositories/User/model.js";

class ExcelController {
  uploadJosn = async (req, res) => {
    const formfields = req.body;
    const newForm = new Form({ formFields: formfields });
    try {
      const firstDocument = await Form.findOne().sort({ _id: 1 });
      if (firstDocument) {
        await Form.deleteOne();
        await User.deleteMany({});
        console.log("First document deleted");

      }
      const formData = await newForm.save();
      console.log("Form saved successfully::::::", formData);
      return res
        .status(200)
        .send({ message: "Form saved successfully", Data: formData });
    } catch (err) {
      console.error("Error saving form:", err);
      res.status(500).send("Error saving form");
    }
  };

  getFormFields = async (req, res) => {
    const lastUpdatedDoc = await Form.findOne();
    try {
      console.log("Form fetched successfully::::::", lastUpdatedDoc);
      return res
        .status(200)
        .send({
          message: "Form fetched successfully",
          Data: lastUpdatedDoc.formFields,
        });
    } catch (err) {
      console.error("Error saving form:", err);
      res.status(500).send("Error saving form");
    }
  };
}

export default new ExcelController();
