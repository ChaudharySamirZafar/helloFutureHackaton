import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

const TOKEN_ID = 1

describe("BondContract", function() {
  async function deployBondContractFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const BondContract = await hre.ethers.getContractFactory("BondContract");
    const bondContract = await BondContract.deploy(owner.address);

    return { bondContract, owner, otherAccount };
  }

  describe("Deployment", function() {
    it("Should set the right owner", async function() {
      const { bondContract, owner } = await loadFixture(deployBondContractFixture);
      expect(await bondContract.owner()).to.equal(owner.address);
    });

    it("Should have correct name and symbol", async function() {
      const { bondContract } = await loadFixture(deployBondContractFixture);
      expect(await bondContract.name()).to.equal("UK Bonds");
      expect(await bondContract.symbol()).to.equal("UKB");
    });
  });

  describe("Minting", function() {
    it("Should allow the owner to mint tokens", async function() {
      const { bondContract, owner } = await loadFixture(deployBondContractFixture);

      await expect(bondContract.safeMint(owner.address, TOKEN_ID))
        .to.emit(bondContract, "Transfer")
        .withArgs(hre.ethers.ZeroAddress, owner.address, TOKEN_ID);

      expect(await bondContract.balanceOf(owner.address)).to.equal(1);
    });

    it("Should not allow non-owners to mint tokens", async function() {
      const { bondContract, otherAccount } = await loadFixture(deployBondContractFixture);

      await expect(
        bondContract.connect(otherAccount).safeMint(otherAccount.address, TOKEN_ID + 1)
      ).to.be.revertedWithCustomError(bondContract, "OwnableUnauthorizedAccount");
    });
  });

  describe("Transfers", function() {
    it("Should allow token transfers between accounts", async function() {
      const { bondContract, owner, otherAccount } = await loadFixture(
        deployBondContractFixture
      );

      await bondContract.safeMint(owner.address, TOKEN_ID);
      await bondContract["safeTransferFrom(address,address,uint256)"](owner.address, otherAccount.address, TOKEN_ID);

      expect(await bondContract.balanceOf(owner.address)).to.equal(0);
      expect(await bondContract.balanceOf(otherAccount.address)).to.equal(
        1
      );
    });
  });
});
