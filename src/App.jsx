import { useState, useEffect, useMemo } from 'react';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const defaultClicks = useMemo(
    () => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }),
    [],
  );

  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));

    if (
      savedClicks &&
      typeof savedClicks === 'object' &&
      !Array.isArray(savedClicks)
    ) {
      return Object.keys(defaultClicks).reduce((acc, key) => {
        acc[key] = savedClicks[key] ?? defaultClicks[key];
        return acc;
      }, {});
    }

    return { ...defaultClicks };
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
    if (
      typeof clicks !== 'object' ||
      Array.isArray(clicks) ||
      clicks === null
    ) {
      return;
    }

    const allowedKeys = Object.keys(defaultClicks);
    const isValidKeys = Object.keys(clicks).every((key) =>
      allowedKeys.includes(key),
    );
    if (!isValidKeys) {
      return;
    }

    const areValuesValid = Object.values(clicks).every(
      (value) => typeof value === 'number' && value >= 0,
    );
    if (!areValuesValid) {
      return;
    }

    try {
      const previousClicks = JSON.parse(
        window.localStorage.getItem('saved-clicks'),
      );
      if (JSON.stringify(previousClicks) !== JSON.stringify(clicks)) {
        window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
      }
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [clicks, defaultClicks]);

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
