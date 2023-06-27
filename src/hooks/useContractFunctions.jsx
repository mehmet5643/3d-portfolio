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
    dispatch(setMemos(memos))
  };
  const printMemos = async (memos) => {
    for (const memo of memos) {
      const tipper = memo.name;
      const tipperAddress = memo.from;
      const message = memo.message;
      dispatch(
        setMemos({
          tipper,
          tipperAddress,
          message,
        })
      );
    }
  };

  return { buyCoffee, getMemos };
};
export default useContractFunctions;
