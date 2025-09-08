import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [measurementId]);

  return null;
};

// Google Search Console verification
export const GoogleSearchConsole = ({ verificationCode }: { verificationCode: string }) => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = verificationCode;
    document.head.appendChild(meta);

    return () => {
      const existingMeta = document.querySelector('meta[name="google-site-verification"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, [verificationCode]);

  return null;
};

export default GoogleAnalytics;
