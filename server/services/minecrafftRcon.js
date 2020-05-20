const Rcon = require("modern-rcon");
const rcon = new Rcon("localhost", "jebacdisacipacz69");
const OrderModel = require("../models/Order");

exports.initialize = (ip, password) => {
  return rcon
    .connect()
    .then(() => {
      console.log("Connected to minecraft RCON");
      return rcon.send("execute as @s run say Payment server connected!");
    })
    .catch((err) => {
      console.log(err);
      return rcon.send("ERROR WITH PAYMENT SERVER");
    });
};

exports.execute = async (_id) => {
  const existingOrder = await OrderModel.findById(_id).populate("_user");
  console.log(existingOrder);
  if (existingOrder && existingOrder.paid === true && existingOrder.finalised === false) {
    const { type, quantity, item, price, _user } = existingOrder;

    switch (type) {
      case "summon": {
        for (let step = 0; step < quantity; step++) {
          await rcon.send(`/execute as @p at @a run summon minecraft:${item.toLowerCase()}`);
        }
        break;
      }
      default:
        console.error("Invalid type ACTION(execute)");
    }
    rcon.send(
      `/tellraw @p ["",{"text":"${_user.display_name} kupił coś za ${price}zł","color":"light_purple","insertion":"SIEMA"}]`
    );
  } else {
    console.error("Unauthorized execute ACTION(execute)");
    return;
  }
};
