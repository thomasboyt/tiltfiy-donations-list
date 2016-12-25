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
        <div className="title">
          go to <strong>mario3.pro</strong> to donate!
        </div>

        <div className="raised">
          Total raised: {formatUSD(campaign.total_raised)}
        </div>

        <div>
          {campaign.donations.map((donation) => (
            <DonationItem donation={donation} key={donation.id} />
          ))}
        </div>
      </div>
    )
  }
}
