import * as React from 'react';
import {Donation} from './resources';
import {formatUSD} from './utils';

interface Props {
  donation: Donation;
}

export default class DonationItem extends React.Component<Props, {}> {
  maybeRenderComment(donation: Donation) {
    if (!donation.comment) {
      return null;
    }

    return (
      <div className="donation-comment">
        {donation.comment}
      </div>
    );
  }

  render() {
    const {donation} = this.props;

    return (
      <div className="donation">
        <div className="donation-main">
          <div className="donation-name">{donation.name}</div>
          <div className="donation-amount">{formatUSD(donation.amount)}</div>
        </div>

        {this.maybeRenderComment(donation)}
      </div>
    );
  }
}