// src/components/Chatbot.tsx

import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import {
    Button,
    IconButton,
    TextField,
    Box,
    Stack,
    Typography,
    Avatar,
    Paper,
    InputAdornment
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    color: '#733DF9',
    backgroundColor: 'white',
    borderRadius: '32px',
    borderColor: '#733DF9',
    width: 'fit-content',
    padding: '0 12px'
});

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
                maxWidth: 350,
                position: 'fixed',
                bottom: 20,
                right: 20,
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
                zIndex: 1000,
                borderRadius: '16px'
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
                <Stack
                    gap={1}
                    ml={6}
                >
                    <StyledButton variant="outlined" color="primary">
                        Create Report this month
                    </StyledButton>
                    <StyledButton variant="outlined" color="primary">
                        Call Lead
                    </StyledButton>
                </Stack>
            </Box>

            {/* Input Field and Buttons */}
            <Box mt={2}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Your Questions"
                    fullWidth
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="standard"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
            </Box>

            <Box mt={2}>
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Box>

                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <IconButton aria-label="delete" size="small">
                            <SettingsOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" onClick={handleSendMessage}>
                            <SendIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default Chatbot;
