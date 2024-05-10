import styles from "./Home.module.css";
import { MainMenu } from "./components/main-menu/MainMenu";
import 'animate.css';

export default function Home() {
  return (
    <main className={`${styles.homeBackground} flex flex-col items-center p-24 bg-slate-300`}>
      <span className={`text-6xl border-b-4 border-t-4 border-yellow-400 text-center text-gray-800	 block sm:text-center p-2 animate__pulse animate__animated animate__bounce animate__delay-1s`}>Handcrafted Haven</span>
      <p className="text-2xl mt-4 text-center">Artisans Virtual Marketplace</p>
      <MainMenu orientation="vertical" />
    </main>
  );
}
