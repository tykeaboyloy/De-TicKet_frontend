import Head from "next/head"
import "../style.css"
// import { Telegraf } from "telegraf"

// const bot = new Telegraf(process.env.NEXT_TELEGRAM_TOKEN)

function MyApp({ Component, pageProps }) {
  // bot.launch()
  return (
    <div className="container">
      <Head>
        <title>De-Ticket</title>
        <script src={"https://telegram.org/js/telegram-web-app.js"}></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp