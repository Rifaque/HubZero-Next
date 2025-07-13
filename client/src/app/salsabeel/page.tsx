import PortfolioClient from '@/components/PortfolioClient';
import salsabeelData from '@/data/salsabeel.json'

export const metadata = {
  title: `${salsabeelData.name} | Portfolio`,
  description: `Portfolio of ${salsabeelData.name} – ${salsabeelData.title}`,
};

export default function Page() {
  return <PortfolioClient data={salsabeelData} />;
}