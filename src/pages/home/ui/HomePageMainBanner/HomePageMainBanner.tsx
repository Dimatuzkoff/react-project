// components
import { Banner } from '@/shared/ui/Banner/Banner';
// mock
import { slides } from '@/mockData/slides';
// assets
import arrowRightBanner from '@/shared/libs/assets/svg/icons/arrowRightBanner.svg';

export const HomePageMainBanner = () => {
  return (
    <Banner slides={slides} interval={4000} arrowIcon={arrowRightBanner} />
  );
};
