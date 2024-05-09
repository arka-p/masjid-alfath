import { Header } from "@/component/header";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <div className="h-screen flex justify-center items-center"> {children}</div>
    </main>
  );
}
