"use client";
import React, { useCallback, useState } from 'react';
import { Box, Typography, IconButton, styled, useTheme } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

interface CSVUploadProps {
  onFileUpload: (file: File) => void;
}

const DropZone = styled(Box)(({ theme }) => ({
  border: '2px dashed',
  borderColor: theme.palette.divider,
  borderRadius: '8px',
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  background: 'linear-gradient(145deg, #4caf50, #81c784)', // Excel-like green gradient
  '&:hover': {
    backgroundColor: 'rgba(76, 175, 80, 0.8)', // Slightly lighter green on hover
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '200px',
}));

const CSVUpload: React.FC<CSVUploadProps> = ({ onFileUpload }) => {
const [file, setFile] = useState<File | null>(null);
const theme = useTheme();
const colorStyle =
  { color: 'white', fontWeight: 'bold', fontSize:24 };

const handleFileChange = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
      onFileUpload(file);
    }
  },
  [onFileUpload],
);

const handleDrop = useCallback(
  (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFile(file);
      onFileUpload(file);
    }
  },
  [onFileUpload],
);

const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
}, []);

  const content = file ? (
    <Typography variant="body1" sx={colorStyle}>
      {file.name}
    </Typography>
  ) : (
    <Box>
      <CloudUpload sx={colorStyle} fontSize="large" />
      <Typography variant="body1" gutterBottom sx={colorStyle}>
        Drag & drop a CSV file or
      </Typography>
      <label htmlFor="csv-upload">
       
      <IconButton color="primary" component="span">
      <CloudUpload sx={colorStyle} />
    </IconButton>
    <Typography variant="body1" sx={colorStyle}>
      Select a file
    </Typography>
  </label>
</Box>
);

return (
<DropZone
   onDrop={handleDrop}
   onDragOver={handleDragOver}
 >
<input
     type="file"
     id="csv-upload"
     accept=".csv"
     onChange={handleFileChange}
     hidden
   />
{content}
</DropZone>
);
};

export default CSVUpload;