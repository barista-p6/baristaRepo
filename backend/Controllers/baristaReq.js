const BaristaRequest = require("../model/baristasAuth");


// exports.getRequests = async (req, res) => {
//     try {
//       const baristasReq = await BaristaRequest.find().populate("baristaId", "username");
//       res.json(baristasReq);
//     } catch (error) {
//       console.error("Error fetching baristas:", error); 
//       res.status(500).json({ message: "Error fetching baristas" });
//     }
//   };


  exports.deleteRequest = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRequest = await BaristaRequest.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
      );
      if (!updatedRequest) {
        return res.status(404).json({ message: "Request not found" });
      }
      res.json({ message: "Request soft deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error soft deleting request" });
    }
  };
  

  exports.getRequests = async (req, res) => {
    try {
      const profile = await BaristaRequest.find()
        .populate("baristaId", "username email")
        .exec();
  
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
  
      res.status(200).json({ profile });
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ error: error.message });
    }
  };