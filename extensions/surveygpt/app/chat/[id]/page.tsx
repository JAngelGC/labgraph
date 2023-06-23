"use client";
import { useMemo, useState } from "react";

import React  from 'react'
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string
  };
};

function ChatPage({params: { id }}: Props){

  const [chat, setChat] = useState<string[]>([]);
  const [questionCounter, setQuestionCounter] = useState<number>(0)

  console.log("My chat is ", chat)


  // const questions: string[] = ["What is your goal?", "Which of the following best categorizes this goal?", "Why is this goal important to you?", "What is your age?", "What is your gender?"]
  const questions = useMemo(() => ["", "What is your goal?", "Which of the following best categorizes this goal?", "Why is this goal important to you?", "What is your age?", "What is your gender?"], []);

  return <div className="flex flex-col h-screen overflow-hidden">
    <Chat chatId = { id } chat={chat} setChatHandler={setChat} questions={questions} questionCounter={questionCounter} />
    <ChatInput chatId = { id } setChatHandler={setChat} setQuestionCounter={setQuestionCounter} />
  </div>
}

export default ChatPage;