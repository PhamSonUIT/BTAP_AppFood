import initModels from '../models/init-models.js';
import connect from '../models/connect.js';

const models = initModels(connect);
const listUsers = async (req, res) => {
    try {
        const users = await models.users.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { listUsers };