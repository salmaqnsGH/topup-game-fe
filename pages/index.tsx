import { Inter } from "@next/font/google";
import Navbar from "@/components/organizms/Navbar";
import MainBanner from "@/components/organizms/MainBanner";
import TransactionStep from "@/components/organizms/TransactionStep";
import FeaturedGame from "@/components/organizms/FeaturedGame";
import Reached from "@/components/organizms/Reached";
import Story from "@/components/organizms/Story";
import Footer from "@/components/organizms/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeaturedGame />
			<Reached />
			<Story />
			<Footer />
		</>
	);
}
