import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const ShortenerForm = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', customCode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleAddField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', customCode: '' }]);
    }
  };

  const handleShorten = async () => {
    const newResults = [];
    for (const url of urls) {
      try {
        const response = await fetch('http://20.244.56.144/test/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(url)
        });
        const data = await response.json();
        newResults.push(data);
      } catch (error) {
        newResults.push({ error: 'Failed to shorten' });
      }
    }
    setResults(newResults);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">URL Shortener</Typography>
        {urls.map((url, index) => (
          <div key={index}>
            <TextField label="Long URL" value={url.longUrl} onChange={(e) => handleChange(index, 'longUrl', e.target.value)} fullWidth margin="normal" />
            <TextField label="Validity (minutes)" value={url.validity} onChange={(e) => handleChange(index, 'validity', e.target.value)} fullWidth margin="normal" />
            <TextField label="Custom Code (Optional)" value={url.customCode} onChange={(e) => handleChange(index, 'customCode', e.target.value)} fullWidth margin="normal" />
          </div>
        ))}
        <Button onClick={handleAddField}>Add URL</Button>
        <Button onClick={handleShorten}>Shorten URLs</Button>
        <div>
          {results.map((res, index) => (
            <div key={index}>
              {res.error ? (
                <Typography color="error">{res.error}</Typography>
              ) : (
                <Typography>Short URL: {res.shortUrl}</Typography>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortenerForm;

