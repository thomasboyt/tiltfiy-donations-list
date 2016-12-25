import mockCampaign from './mockCampaign';
import {Campaign} from './resources';

const TIMEOUT_MS = 60 * 1000;

export default class Store {
  campaign?: Campaign;

  onChange: () => void;

  constructor() {
    this.refreshCampaign();

    setInterval(() => this.refreshCampaign(), TIMEOUT_MS);
  }

  async refreshCampaign() {
    const resp = await fetch('/api', {
      method: 'GET',
    });

    const body = await resp.json();

    this.campaign = body;
    // this.campaign = mockCampaign;

    if (this.onChange) {
      this.onChange();
    }
  }

  subscribe(cb: () => void) {
    this.onChange = cb;

    if (this.campaign) {
      this.onChange();
    }
  }
}
