import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constants";
import { useDispatch } from "react-redux";
import { setMemos } from "../store/slicers/account";
const useContractFunctions = () => {
  const dispatch = useDispatch();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const buyCoffee = async (name, message) => {
    const buyCoffee = await contract.buyCoffee(name, message, {
      value: ethers.utils.parseUnits("0.01", "ether"),
    });
    await buyCoffee.wait();
  };
  

  const getMemos = async () => {
    const memos = await contract.getMemos();
    printMemos(memos)
  };
  const printMemos = async (_memos) => {
    const memos= []    
    for (const memo of _memos) {
      const tipper = memo.name;
      const tipperAddress = memo.from;
      const message = memo.message;
     
      memos.push({ tipper, tipperAddress, message }
      );
    }
    dispatch(setMemos(memos));
  };

  return { buyCoffee, getMemos };
};
export default useContractFunctions;
