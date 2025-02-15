import initModels from "../models/init-models.js";
import connect from "../models/connect.js";

const models = initModels(connect);
const like = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    
    const restaurant = await models.like_res.create({
      user_id: user_id,
      res_id: res_id,
    });

    console.log({ restaurant });
    res.status(200).json({ restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unlike = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    
    const restaurant = await models.like_res.destroy({
      where: { user_id: user_id, res_id: res_id },
    });

    console.log({ restaurant });
    res.status(200).json({ restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLikeByResId = async (req, res) => {
  try {
    const { res_id } = req.params;
    
    const likeById = await models.like_res.findAll({
      where: { res_id: res_id },
    });
    const formattedLikes = likeById.map((like) => like.toJSON());
    console.log(formattedLikes);

    res.status(200).json({ likes: formattedLikes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLikeByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    
    const likeById = await models.like_res.findAll({
      where: { user_id: user_id },
    });
    const formattedLikes = likeById.map((like) => like.toJSON());
    console.log(formattedLikes);

    res.status(200).json({ likes: formattedLikes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { like, unlike, getLikeByResId, getLikeByUserId };
