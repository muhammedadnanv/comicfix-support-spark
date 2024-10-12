import React from 'react';

export const useDeviceStatus = () => {
  const [isLowBattery, setIsLowBattery] = React.useState(false);
  const [isLowNetwork, setIsLowNetwork] = React.useState(false);

  React.useEffect(() => {
    const checkBattery = async () => {
      if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        setIsLowBattery(battery.level <= 0.2);
        battery.addEventListener('levelchange', () => setIsLowBattery(battery.level <= 0.2));
      }
    };

    const checkNetwork = () => {
      setIsLowNetwork(navigator.connection && navigator.connection.downlink < 1);
    };

    checkBattery();
    checkNetwork();

    window.addEventListener('online', checkNetwork);
    window.addEventListener('offline', checkNetwork);

    return () => {
      window.removeEventListener('online', checkNetwork);
      window.removeEventListener('offline', checkNetwork);
    };
  }, []);

  return { isLowBattery, isLowNetwork };
};