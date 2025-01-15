import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      setClicks(JSON.parse(savedClicks));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const showResetButton = totalFeedback > 0;

  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showResetButton={showResetButton}
      />
      {totalFeedback > 0 ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;

// useEffect(() => {
//   try {
//     const savedClicks = window.localStorage.getItem('saved-clicks');
//     if (savedClicks) {
//       const parsedClicks = JSON.parse(savedClicks);
//       if (
//         typeof parsedClicks.good === 'number' &&
//         typeof parsedClicks.neutral === 'number' &&
//         typeof parsedClicks.bad === 'number'
//       ) {
//         setClicks(parsedClicks);
//       }
//     }
//   } catch (error) {
//     console.error('Error loading clicks from localStorage:', error);
//   }
// }, []);

// useEffect(() => {
//   try {
//     window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
//   } catch (error) {
//     console.error('Error saving clicks to localStorage:', error);
//   }
// }, [clicks]);
