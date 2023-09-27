import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import React from 'react'
import ChatSideBar from '@/components/ChatSideBar/ChatSideBar';
import PDFViewer from '@/components/PDFViewer/PDFViewer';
import ChatComponent from '@/components/ChatComponent/ChatComponent';

type Props = {
    params: {
        chatId: string;
    }
}

const page = async ({params: {chatId}}: Props) => {
    const {userId} = await auth()
    if(!userId){
        return redirect('/sign-in')
    }
    const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats) {
    return redirect("/");
  }
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/");
  }
  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
  return (
    <div className="flex h-full">
    <div className="flex w-full h-screen ">
      {/* chat sidebar */}
      <div className="flex-[1] max-w-lg">
        <ChatSideBar chats={_chats} chatId={parseInt(chatId)} />
      </div>
      {/* pdf viewer */}
      <div className="w-full p-4 oveflow-scroll flex-[5]">
        <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
      </div>
      {/* chat component */}
      <div className="flex-[3] border-l-4 border-l-slate-200">
        <ChatComponent chatId={parseInt(chatId)} />
      </div>
    </div>
  </div>
  )
}

export default page