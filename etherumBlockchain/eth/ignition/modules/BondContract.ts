import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const deployer = "0x3070c7FC4045603B7F7F9D7533F7aFd5A67C7335";

const BondContractModule = buildModule("MyTokenModule", (m) => {
  const initialOwner = m.getParameter("initialOwner", deployer);

  const myToken = m.contract("BondContract", [initialOwner]);

  return { myToken };
});

export default BondContractModule;
