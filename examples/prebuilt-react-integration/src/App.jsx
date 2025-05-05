import { HMSPrebuilt, Diagnostics } from '@100mslive/roomkit-react';
import { getRoomCodeFromUrl } from './utils';
import { useRef, useState } from 'react';

export default function App() {
  const roomCode = getRoomCodeFromUrl();
  const isDiagnostics = location.pathname.startsWith('/diagnostics');
  const prebuiltRef = useRef(null);
  const [breakoutState, setBreakoutState] = useState(false);

  const onInvte = () => {
    console.log('Invite function called');
  };

  const onBreakout = () => {
    console.log('Breakout function called');
    setBreakoutState(prev => !prev);
  };

  if (isDiagnostics) {
    return <Diagnostics />;
  }

  return (
    <HMSPrebuilt
      roomCode={roomCode}
      ref={prebuiltRef}
      onInvite={onInvte}
      onBreakout={onBreakout}
      breakoutState={breakoutState}
    />
  );
}
