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
      <span> - {donation.comment}</span>
    );
  }

  render() {
    const {donation} = this.props;

    return (
      <li>
        {donation.name} - {formatUSD(donation.amount)}
        {this.maybeRenderComment(donation)}
      </li>
    );
  }
}