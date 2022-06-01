//Begin
async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Register = await ethers.getContractFactory("Register");
    const deployedContract = await Register.deploy();
    console.log("Deployed Register contract address:", deployedContract.address);
  
    await deployedContract.setInfo("Chainlink Bootcamp Espanol")
  
    let result = await deployedContract.getInfo()
    console.log('Stored info in contract is: ', result)
  
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  //End
  