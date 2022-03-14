import * as React from 'react';

import { Directory } from '../../components/directory/directory.component';

import './homepage.styles.scss';

export function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
