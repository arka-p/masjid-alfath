import { Header } from "@/component/header";
import { Footer } from "@/component/footer";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <div className="h-screen flex justify-center items-center"> {children}</div>
      <Footer />
    </main>
  );
}
