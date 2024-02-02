import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category = "event category") => {
  const eventTracker = (action = "event action", label = "event label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;
