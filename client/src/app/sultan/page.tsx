import PortfolioClient from '@/components/PortfolioClient';
import sultanData from '@/data/sultan.json'

export const metadata = {
  title: `${sultanData.name} | Portfolio`,
  description: `Portfolio of ${sultanData.name} – ${sultanData.title}`,
};

export default function Page() {
  return <PortfolioClient data={sultanData} />;
}