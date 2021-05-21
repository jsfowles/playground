import React from 'react';
import BrandPanelWithAppScreenshot from './BrandPanelWithAppScreenshot ';
import GridWithOffsetIcons from './GridWithOffsetIcons';
import TeamWithLargeImages from './TeamWithLargeImages';
import ThreeTiersWithEmphasizedTier from './ThreeTiersWithEmphasizedTier';

import SmoothScroll from '@components/SmoothScroll';

const Demo = () => {
  return (
    <>
      <GridWithOffsetIcons />
      <BrandPanelWithAppScreenshot />
      <ThreeTiersWithEmphasizedTier />
      <TeamWithLargeImages />
    </>
  );
};

export default Demo;
