import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccount } from "../store/slicers/account";

const useSetAccount = () => {
  const dispatch = useDispatch();
  const connectAccount = async () => {
    if(!window.ethereum){
      console.log("Install Metamask");
      return;
    }
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        dispatch(setAccount(account));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Install Metamask");
    }
    //connect sepolia test
    if (window.ethereum.chainId != "0xaa36a7") {
      //switch network
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xaa36a7" }],
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("you connect sepolia test network");
    }
  };

  return connectAccount;
};

export default useSetAccount;
