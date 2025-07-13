import PortfolioClient from '@/components/PortfolioClient';
import raifData from '@/data/raif.json'

export const metadata = {
  title: `${raifData.name} | Portfolio`,
  description: `Portfolio of ${raifData.name} – ${raifData.title}`,
};

export default function Page() {
  return <PortfolioClient data={raifData} />;
}