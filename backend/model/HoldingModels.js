const { model } = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema"); // import correctly

const HoldingsModel = model("holding", HoldingsSchema); // do NOT use new

module.exports = HoldingsModel; // export directly
