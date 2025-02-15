import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
// import connect from "../../db.js";
const models = initModels(connect);
const orders = async (req, res) => {
  try {
    const { user_id, res_id, amount, _code, arr_sub_id } = req.body;
    const orders = await models.orders.create({
      user_id: user_id,
      res_id: res_id,
      amount: amount,
      _code: _code,
      arr_sub_id: arr_sub_id,
  });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { orders };
