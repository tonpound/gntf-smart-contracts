import { ethers } from "hardhat";
const utils = require("./utils");

const impl_address = "0x409a4d1649D9dF34E2AC3C5D005aBff018B00E8d";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deployer address:", deployer.address);
    const networkName = hre.network.name;

    await utils.deployAndVerify("ERC1967Proxy", [impl_address, "0x"]);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
