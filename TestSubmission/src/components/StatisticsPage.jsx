import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatisticsPage = () => {
  // Example static data. In real app, fetch from backend.
  const stats = [
    {
      shortcode: 'abc123',
      originalUrl: 'https://example.com',
      clicks: 12,
      created: '2025-08-01T10:00:00Z',
      expiry: '2025-08-01T10:30:00Z',
      clickDetails: [
        { timestamp: '2025-08-01T10:01:00Z', source: 'browser', location: 'India' }
      ]
    }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">URL Statistics</Typography>
        {stats.map((stat, idx) => (
          <div key={idx}>
            <Typography>Shortcode: {stat.shortcode}</Typography>
            <Typography>Original URL: {stat.originalUrl}</Typography>
            <Typography>Clicks: {stat.clicks}</Typography>
            <Typography>Created: {stat.created}</Typography>
            <Typography>Expires: {stat.expiry}</Typography>
            {stat.clickDetails.map((click, i) => (
              <Typography key={i}>Clicked at {click.timestamp} from {click.source} ({click.location})</Typography>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StatisticsPage;
