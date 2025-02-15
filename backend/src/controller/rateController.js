import initModels from "../models/init-models.js";
import connect from "../models/connect.js";

const models = initModels(connect);
const createRate = async (req, res) => {
    try {
      const { user_id, res_id, amount } = req.body;
      const rating = await models.rate_res.create({
        user_id: user_id,
        res_id: res_id,
        amount: amount,
      });
      res.status(200).json({ rating });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getRateByResId = async (req, res) => {
    try {
      const { res_id } = req.params;
      if(!res_id){
        res.status(400).json({ message: "Nhà hàng ko tồn tại trong db" });
        return;
      }
      const rateById = await models.rate_res.findAll({
        where: { res_id: res_id },
      });
      const formattedRates = rateById.map((rate) => rate.toJSON());
      console.log(formattedRates);
  
      res.status(200).json({ rates: formattedRates });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getRateByUserId = async (req, res) => {
    try {
      const { user_id } = req.params;
      
      const rateById = await models.rate_res.findAll({
        where: { user_id: user_id },
      });
      const formattedRates = rateById.map((rate) => rate.toJSON());
      console.log(formattedRates);
  
      res.status(200).json({ rates: formattedRates });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export {createRate, getRateByResId, getRateByUserId};