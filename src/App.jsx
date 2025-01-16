import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));
    return savedClicks &&
      typeof savedClicks === 'object' &&
      !Array.isArray(savedClicks)
      ? savedClicks
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setClicks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(clicks).reduce(
    (sum, value) => sum + value,
    0,
  );

  const showResetButton = totalFeedback > 0;

  const resetFeedback = () => {
    setClicks(
      Object.keys(clicks).reduce((acc, key) => ({ ...acc, [key]: 0 }), {}),
    );
  };

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((clicks.good / totalFeedback) * 100) : 0;

  const btnOptions = Object.keys(clicks);

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showResetButton={showResetButton}
        btnOptions={btnOptions}
      />
      {totalFeedback > 0 ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          btnOptions={btnOptions}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
