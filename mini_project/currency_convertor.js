import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apikey = "1eeccfb59edc61c8c944107e";
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`; // ✅ use backticks

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    try {
      const rates = JSON.parse(data).conversion_rates;

      rl.question("Enter the amount in USD: ", (amount) => {
        rl.question(
          "Enter the target currency (e.g., INR, EUR, NPR): ",
          (currency) => {
            if (rates[currency]) {
              const converted = (parseFloat(amount) * rates[currency]).toFixed(
                2
              );
              console.log(
                chalk.green(
                  `${amount} USD = ${converted} ${currency}`
                )
              );
            } else {
              console.log(chalk.red("Invalid currency code!"));
            }
            rl.close();
          }
        );
      });
    } catch (err) {
      console.error(chalk.red("Error parsing JSON:", err.message));
    }
  });
});
