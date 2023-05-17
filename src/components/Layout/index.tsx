import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
  isAuth: boolean;
}

export default function Layout({ isAuth = false, children }: Props) {
  return (
    <>
      <Header isAuth={isAuth} />
      {children}
      <Footer />
    </>
  );
}
