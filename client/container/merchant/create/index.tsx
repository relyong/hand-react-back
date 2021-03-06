import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MerchantFrom from '../component/form';

export default function CreateMerchant({
  history,
}: Pick<RouteComponentProps, 'history'>) {
  return <MerchantFrom history={history} />;
}
