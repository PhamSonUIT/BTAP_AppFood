import initModels from "../models/init-models.js";
import connect from "../models/connect.js";
// import connect from "../../db.js";
const models = initModels(connect);
const listOrders = async (req, res) => {
  try {
    // const orders = await models.orders.findAll();
    const queryString = "select * from orders";
    const orders = await models.orders.findAll({
      attributes: { exclude: ["id"] }, // Loại bỏ cột 'id'
    });

    // const orders = await connect.query(queryString);

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { listOrders };
