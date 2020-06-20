const Rcon = require("modern-rcon");
const keys = require("../config/keys");
const rcon = new Rcon(keys.minecraftIP, keys.minecraftRconPassword);

const OrderModel = require("../models/Order");

const sounds = {
  creeper: "entity.creeper.primed",
  anvil: "block.anvil.land",
  end: "block.end_portal.spawn",
  ghast: "entity.ghast.hurt",
};

exports.initialize = () => {
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
  if (existingOrder && existingOrder.paid === true && existingOrder.finalised === false) {
    const { type, quantity, item, price, _user } = existingOrder;
    switch (type) {
      case "summon": {
        for (let step = 0; step < quantity; step++) {
          await rcon.send(`/execute as @p at @a run summon minecraft:${item}`);
        }
        break;
      }
      case "effect": {
        const timeDuration = quantity * 30;
        await rcon.send(`/execute as @p at @a run effect give @a ${item} ${timeDuration} 3`);
        break;
      }
      case "sound": {
        await rcon.send(`/execute as @p at @a run playsound ${sounds[item]} block @a ~ ~ ~ 100`);
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
