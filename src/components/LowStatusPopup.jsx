import React from 'react';

const LowStatusPopup = ({ isLowBattery, isLowNetwork }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Warning</h3>
      {isLowBattery && <p>Your device's battery is low.</p>}
      {isLowNetwork && <p>Your network connection is weak.</p>}
      <p>The website's performance may be affected.</p>
    </div>
  );
};

export default LowStatusPopup;