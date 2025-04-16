import { BootstrapCalcultor } from "../src/calculators/BootstrapCalculator.js";

// Start processing

const bc = new BootstrapCalcultor();
bc.processFiles("participant_data/large/", "large_results", 5000);
bc.processFiles("participant_data/small/", "small_results", 5000);
