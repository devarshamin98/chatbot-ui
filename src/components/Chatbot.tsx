// src/components/Chatbot.tsx

import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Avatar, Paper } from '@mui/material';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi Jane, Amazing how Mosey is simplifying state compliance for businesses across the board!' },
    ]);
    const [userMessage, setUserMessage] = useState('');

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            setMessages([...messages, { from: 'user', text: userMessage }]);
            setUserMessage('');
            setTimeout(() => {
                setMessages([
                    ...messages,
                    { from: 'user', text: userMessage },
                    { from: 'bot', text: 'Hi Jane, Amazing how Mosey is simplifying state compliance for businesses across the board!' },
                ]);
            }, 1000);
        }
    };

    return (
        <Paper
            elevation={3}
            style={{
                padding: 20,
                maxWidth: 400,
                position: 'fixed',
                bottom: 20,
                right: 20,
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
                zIndex: 1000
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar alt="Ava" src="https://i.pravatar.cc/300" />
                <Typography variant="h6" gutterBottom>
                    Hey👋, I'm Ava
                </Typography>
                <Typography variant="body2">Ask me anything or pick a place to start</Typography>
            </Box>

            {/* Chat Messages Section */}
            <Box my={2} flexGrow={1} overflow="auto">
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        mb={2}
                        display="flex"
                        flexDirection={msg.from === 'bot' ? 'row' : 'row-reverse'}
                        alignItems="start"
                    >
                        <Avatar
                            alt={msg.from}
                            src={msg.from === 'bot' ? 'https://i.pravatar.cc/300' : 'https://i.pravatar.cc/150?u=user'}
                        />
                        <Box
                            mx={1}
                            p={2}
                            sx={{ borderRadius: msg.from === 'bot' ? '0 32px 32px 32px' : '32px 0 32px 32px' }}
                            bgcolor={msg.from === 'bot' ? '#F9FAFB' : '#733DF9'}
                            color={msg.from === 'bot' ? '#000' : '#fff'}
                            maxWidth="70%"
                        >
                            {msg.text}
                        </Box>
                    </Box>
                ))}
                <Box>
                    <Button variant="outlined" color="primary">
                        Create Report
                    </Button>
                    <Button variant="outlined" color="primary">
                        Call Lead
                    </Button>
                </Box>
            </Box>

            {/* Input Field and Buttons */}
            <Box mt={2}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    label="Your message"
                    InputProps={{
                        endAdornment:
                            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                                Send
                            </Button>
                    }}
                />
                <Box mt={2} display="flex" justifyContent="space-between">
                    
                </Box>
            </Box>
        </Paper>
    );
};

export default Chatbot;
