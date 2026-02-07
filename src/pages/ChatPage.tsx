import { useState } from "react";
import { Send, Phone, Video, MoreVertical } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { chatMessages, doctors } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ChatPage = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState("");
  const doctor = doctors[0];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: String(messages.length + 1),
        sender: "user",
        message: newMessage,
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setNewMessage("");
  };

  return (
    <MobileLayout showNav={false}>
      {/* Chat Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <a href="/" className="text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-card" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-foreground text-sm">{doctor.name}</h2>
            <p className="text-xs text-success">Online</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <Phone className="w-4 h-4 text-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <Video className="w-4 h-4 text-foreground" />
            </button>
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <MoreVertical className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="pt-20 pb-20 px-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3",
                  msg.sender === "user"
                    ? "gradient-primary text-primary-foreground rounded-br-md"
                    : "bg-card shadow-card rounded-bl-md"
                )}
              >
                <p className={cn(
                  "text-sm",
                  msg.sender === "user" ? "text-primary-foreground" : "text-foreground"
                )}>
                  {msg.message}
                </p>
                <p className={cn(
                  "text-xs mt-1",
                  msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 h-11 rounded-full bg-secondary border-0"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="w-11 h-11 gradient-primary rounded-full flex items-center justify-center shadow-primary"
          >
            <Send className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ChatPage;
