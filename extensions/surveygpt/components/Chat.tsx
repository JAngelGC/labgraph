'use client';

import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Message from './Message';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
  chatId: string;
  chat: string[];
  questions: string[];
  setChatHandler: React.Dispatch<React.SetStateAction<string[]>>;
  questionCounter: number;
};

function Chat({
  chatId,
  chat,
  questions,
  setChatHandler,
  questionCounter,
}: Props) {
  const questionsLength = questions.length;

  useEffect(() => {
    console.log('Siuu');

    if (questionsLength > 0 && questions) {
      const nextQuestion = questions.shift();
      console.log('ooooooooooooooooooooooooooo');
      console.log(nextQuestion);
      console.log('ooooooooooooooooooooooooooo');

      if (nextQuestion) {
        setTimeout(() => {
          setChatHandler((prevChat) => [...prevChat, nextQuestion]);
        }, 750);
      }
    }
  }, [questionCounter]);

  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          'users',
          session?.user?.email!,
          'chats',
          chatId,
          'messages'
        ),
        orderBy('createdAt', 'asc')
      )
  );
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-scroll-auto">
      {chat.length > 0 && (
        <>
          <p className="my-10 text-center text-custom-gray">
            Answer the prompt below to get started.
          </p>
        </>
      )}
      {chat.map((message) => {
        // return <p>{message}</p>
        return (
          <Message
            messageId={Math.random().toString()}
            chatId={chatId}
            message={message}
          />
        );
      })}
    </div>
  );
}

export default Chat;
