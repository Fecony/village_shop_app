import React, { useState } from 'react';
import { useAppDispatch } from './app/hooks';
import {
  hideNotification,
  NotificationType,
  setAge,
  showNotification,
} from './features/ui/uiSlice';
import './overlap.css';

function Overlap() {
  const [visitorAge, setVisitorAge] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (visitorAge && Number(visitorAge) >= 0) {
      dispatch(setAge(visitorAge));
    } else {
      dispatch(
        showNotification({
          type: NotificationType.WARNING,
          message: 'Wrong age provided',
        }),
      );

      setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);
    }
  };

  return (
    <section className="overlap">
      <h1 className="heading">
        Hey! <span>👋</span> <br />
        Welcome to our shop!
      </h1>

      <span className="notice">
        Let us know your age before proceeding to the website
      </span>

      <div className="container">
        <div className="age-field">
          <input
            type="number"
            className="field"
            name="age"
            min={0}
            step={1}
            value={visitorAge}
            onChange={(e) => setVisitorAge(e.target.value)}
            placeholder="Your age"></input>
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            onClick={handleClick}>
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overlap;
