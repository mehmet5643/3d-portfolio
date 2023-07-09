import React, { useEffect,useRef,useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { parseAddress } from "../utils/parseAddress";
import { slideIn } from "../utils/motion";
import { useSetAccount,useContractFunctions } from "../hooks";

const FeedbackCard = ({ index, name, message,address }) => (
  <motion.div
    
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
   
      <p className="text-white tracking-wider text-[18px]">{message}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {parseAddress(address,10)}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const BuyMeACoffee = () => {
  const [haveMetamask,setHaveMetamask]=useState(false)
  
  if(window.ethereum){
    setHaveMetamask(true)
    const connectAccount = useSetAccount();
    const {buyCoffee,getMemos}= useContractFunctions();
  }
  const memos = useSelector((state) => state.accounts.memos);
  const account = useSelector((state) => state.accounts.account);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: "",
  });
  const handleChange= (e)=>{
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    setLoading(true);
    if(haveMetamask){

      buyCoffee(form.name,form.message)
      .then((res) => {
        setLoading(false);
        setForm({
          name: "",
          message: "",
        });
        getMemos();
      })
    }
    
  }
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Buy Me A Coffee.</h2>
        </motion.div>
        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 mt-6 p-8 rounded-2xl'
      >
      {!account? <button
            onClick={() => connectAccount()}
            className='bg-tertiary py-3 mx-auto px-12 rounded-xl outline-none flex justify-center  text-white font-bold shadow-md shadow-primary'
          >
            {account ? parseAddress(account,5) : "Connect Wallet"}
          </button>:<div
          className='mt-2 flex flex-col mx-auto sm:flex-row gap-3'
        >
          <label className='flex mx-auto flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <label className='flex mx-auto flex-col'>
            <input
              type="text"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            onClick={handleSubmit}
            className='bg-tertiary py-3 mx-auto px-12 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Buying A Coffe for Us..." : "Buy Me A Coffee"}
          </button>
        </div>}
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-50 pb-14 flex flex-wrap gap-7`}
      >
        { memos ? 
          memos.map((memo, index) => (
            <FeedbackCard
              key={index}
              index={index}
              name={memo.tipper}
              message={memo.message}
              address={memo.tipperAddress}
            />
          ))
        :""}
      </div>
    </div>
  );
};

export default SectionWrapper(BuyMeACoffee, "");
