import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
          <RegisterModal/>
          <LoginModal/>
          <Layout>
              <Component {...pageProps} />;
          </Layout>
      </>

  )
}
