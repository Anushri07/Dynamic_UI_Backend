import { User } from "../../repositories/User/model.js";

class UserController {
  createUser = async (req, res) => {
    const userField = req.body;
    const newUser = new User({ user: userField });
    try {
      const userData = await newUser.save();
      console.log("User saved successfully::::::", userData);
      return res
        .status(200)
        .send({ message: "User saved successfully", Data: userData });
    } catch (err) {
      console.error("Error saving User:", err);
      res.status(500).send("Error saving User");
    }
  };

  getAllUser = async (req, res) => {
    try {
      const allUsers = await User.find();
      return res
        .status(200)
        .send({ message: "Users fetched successfully", Data: allUsers });
    } catch (err) {
      console.error("Error saving User:", err);
      res.status(500).send("Error saving User");
    }
  };

  editUser = async (req, res) => {
    const userField = req.body;
    const userId = req.params.id;
    try {
      const user = await User.findOne({ _id: userId });
      console.log("useruseruseruseruseruseruseruser", user);
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $set: { user: userField } }
      );
      console.log("User updated successfully::::::", updatedUser);
      return res
        .status(200)
        .send({ message: "User updated successfully", Data: updatedUser });
    } catch (err) {
      console.error("Error updating User:", err);
      res.status(500).send("Error updating User");
    }
  };

  deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      await User.deleteOne({ _id: userId });
      res
        .status(200)
        .send({ message: "User deleted successfully", Data: user });
    } catch (err) {
      console.error("Error saving User:", err);
      res.status(500).send("Error saving User");
    }
  };

  getUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      res
        .status(200)
        .send({ message: "User fetched successfully", Data: user });
    } catch (err) {
      console.error("Error saving User:", err);
      res.status(500).send("Error saving User");
    }
  };
}

export default new UserController();
