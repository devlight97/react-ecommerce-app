import react from 'react';

import { SHOP_DATA } from './shop.data';

import { CollectionPreview } from '../../components/collection-preview/collection-preview';

interface IState {
  collections: any[];
}

export class ShopPage extends react.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  public render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
