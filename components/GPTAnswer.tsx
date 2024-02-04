// components/GPTAnswer.tsx
import React, { useState } from 'react';
import { Box, Button, TextareaAutosize, CircularProgress } from '@mui/material';
import SubmitButton from './SubmitButton';
import axios from 'axios';

interface IProps {
    promptText: string;
    isDataReceived: boolean;
}

const GPTAnswer = ({ promptText, isDataReceived }: IProps) => {
  const [gptResponse, setGptResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const prompt = promptText; // Replace with the actual prompt
      const response = await axios.get('https://z8tkllkjq3.execute-api.eu-north-1.amazonaws.com/prod/generate-suggestion', {
        params: { prompt }
      });
      setGptResponse(response.data.suggestion);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error response:', error.response.data);
      } else {
        console.error('There was an error!', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <SubmitButton 
        onClick={handleButtonClick} 
        text={loading ? 'Loading...' : 'Ask to GPT!'} 
        variant='contained' 
        disabled={!isDataReceived} 
        dimension='2D' 
        bgColor='success'
      />
      {loading && <CircularProgress />}
      <TextareaAutosize
        minRows={5}
        placeholder="GPT response will appear here..."
        style={{ 
          width: '100%', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          padding: '10px', 
          fontSize: '16px',
          resize: 'none'
        }}
        value={gptResponse}
        readOnly
      />
    </Box>
  );
};

export default GPTAnswer;
