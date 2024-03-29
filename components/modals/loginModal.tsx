import useLoginModal from "@/hooks/useLoginModal";
import {useCallback, useState} from "react";
import Input from "../input";
import Modal from "@/components/Modal";
import registerModal from "./registerModal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isLoading, setIsLoading]=useState(false);

    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        loginModal.onClose()
        registerModal.onOpen()
    },[isLoading,loginModal,registerModal])

    const onSubmit = useCallback(async ()=>{
        try{
            setIsLoading(true);
            //TO DO ADD LOGIN
            loginModal.onClose();
        }catch(error){
            console.log(error)
        }finally {
            setIsLoading(false);
        }
    },[loginModal]);

    const bodyContent=(
        <div className={'flex flex-col gap-4'}>
            <Input placeholder={'Email'}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            disabled={isLoading}/>
            <Input placeholder={'Password'}
                   onChange={(e)=>setPassword(e.target.value)}
                   value={password}
                   disabled={isLoading}/>
        </div>
    )

    const footerContent = (
        <div className={'text-neutral-400 text-center mt-4'}>
            <p>Don't have an account?</p>
            <span onClick={onToggle} className={'text-white cursor-pointer hover:underline'}>Create an account</span>
        </div>
    )

  return(
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title={'Login'}
        actionLabel={'Sign In'}
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
      footer={footerContent}/>


  )
}

export default LoginModal;