import * as React from 'react';

import Store from './Store';
import DonationItem from './DonationItem';
import {formatUSD} from './utils';

interface Props {
  store: Store;
}

export default class App extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    if (!this.props.store.campaign) {
      return (
        <div>Loading...</div>
      );
    }

    const campaign = this.props.store.campaign;

    return (
      <div>
        Total raised: {formatUSD(campaign.total_raised)} of {formatUSD(campaign.goal)}
        <ul>
          {campaign.donations.map((donation) => (
            <DonationItem donation={donation} key={donation.id} />
          ))}
        </ul>
      </div>
    )
  }
}
