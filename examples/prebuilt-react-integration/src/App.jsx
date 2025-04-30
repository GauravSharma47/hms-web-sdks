import { HMSPrebuilt, Diagnostics } from '@100mslive/roomkit-react';
import { getRoomCodeFromUrl } from './utils';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { selectSessionStore } from '@100mslive/hms-video-store';

export default function App() {
  const roomCode = getRoomCodeFromUrl();
  const isDiagnostics = location.pathname.startsWith('/diagnostics');
  const prebuiltRef = useRef(null);
  const [breakoutState, setBreakoutState] = useState(false);

  useEffect(() => {
    if (prebuiltRef.current) {
      prebuiltRef.current.hmsStore.subscribe(state => {
        setBreakoutState(state);
      }, selectSessionStore('breakout_rooms'));
    }
  }, []);

  useEffect(() => {
    console.log('Breakout state changed:', breakoutState);
  }, [breakoutState]);

  if (isDiagnostics) {
    return <Diagnostics />;
  }

  return <HMSPrebuilt roomCode={roomCode} ref={prebuiltRef} />;
}
