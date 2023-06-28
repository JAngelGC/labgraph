'use client';
import { useMemo, useState } from 'react';

import React from 'react';
import Chat from '../../../components/Chat';
import ChatInput from '../../../components/ChatInput';

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  const [chat, setChat] = useState<string[]>([]);
  const [questionCounter, setQuestionCounter] = useState<number>(0);

  console.log('My chat is ', chat);

  // const questions: string[] = ["What is your goal?", "Which of the following best categorizes this goal?", "Why is this goal important to you?", "What is your age?", "What is your gender?"]
  const questions = useMemo(
    () => [
      '',
      'What is your goal?',
      'Which of the following best categorizes this goal? 1. Hobby or skill 2. Health and wellness 3. Cleaning and organization 4. Quitting bad habits 5. Educational goals 6. Career goals 7. Relationships 8. Other [Please describe]',
      'Why is this goal important to you?',
      'What is your age?',
      'What is your gender?',
      'Now think about an action that you did recently toward your long-term goal. A action is a single, clearly-defined action that contributes to achieving your long-term goal, and can usually be done from start to finish in anywhere from a few seconds to a few hours. What action did you do?',
    ],
    []
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat
        chatId={id}
        chat={chat}
        setChatHandler={setChat}
        questions={questions}
        questionCounter={questionCounter}
      />
      <ChatInput
        chatId={id}
        setChatHandler={setChat}
        setQuestionCounter={setQuestionCounter}
      />
    </div>
  );
}

export default ChatPage;
