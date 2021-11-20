import React from 'react';
import { isBrowser } from 'react-device-detect';

function headbar() {

  return (
    <div className="headbar">
      <div className="headbarContents">
        <div className={isBrowser?"headbarTitle Browser":"headbarTitle Mobile"}> Recently Launched </div>
        <div className={isBrowser?"headbarBody Browser":"headbarBody Mobile"} align="top">
          Unique Amazing Products for everyone
        </div>
      </div>
    </div>
  );
}

export default headbar;
