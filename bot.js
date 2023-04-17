const { Telegraf } = require("telegraf");
const TOKEN = "6218700178:AAEHb7mvAQNW3nZzRTev6_ee_xgWnT3kkuU";

const bot = new Telegraf(TOKEN);
bot.start((ctx) =>
  ctx.reply("Welcome tykeaboyloy")
  //   reply_markup: {
  //     inline_keyboard: [
  //       [
  //         {
  //           text: "web app",
  //           web_app: {
  //             url: "https://bc5d-116-212-142-30.ngrok-free.app/hello",
  //           },
  //         },
  //       ],
  //     ],
  //   },
  // })
);
bot.launch();
