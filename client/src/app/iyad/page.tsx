import PortfolioClient from '@/components/PortfolioClient';
import iyadData from '@/data/iyad.json'

export const metadata = {
  title: `${iyadData.name} | Portfolio`,
  description: `Portfolio of ${iyadData.name} – ${iyadData.title}`,
};

export default function Page() {
  return <PortfolioClient data={iyadData} />;
}
