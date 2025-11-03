import React, { useState } from 'react';
import { askGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { BotIcon, SendIcon, UserIcon } from './Icons';

export const SmartAssistant: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const thinkingMessage: ChatMessage = { role: ChatRole.ASSISTANT, text: '...' };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: ChatRole.USER, text: query };
        setMessages(prev => [...prev, userMessage, thinkingMessage]);
        setIsLoading(true);
        setQuery('');

        const responseText = await askGemini(userMessage.text);
        const assistantMessage: ChatMessage = { role: ChatRole.ASSISTANT, text: responseText };
        
        setMessages(prev => [...prev.slice(0, -1), assistantMessage]);
        setIsLoading(false);
    };

    const renderMessage = (text: string) => {
        return <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />;
    };

    return (
        <section id="assistant" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Asistente Inteligente</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes alguna pregunta sobre el Switch Aruba 1960? Pregúntale a nuestro asistente de IA.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6">
                    <div className="h-96 overflow-y-auto mb-4 p-4 space-y-4 bg-gray-100 rounded-lg">
                        {messages.length === 0 ? (
                             <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <BotIcon className="w-16 h-16 mb-4" />
                                <p className="text-center">Pregúntame cualquier cosa sobre este switch, como "¿Cuántos puertos tiene?" o "¿Cómo restauro los valores de fábrica?".</p>
                            </div>
                        ) : (
                            messages.map((msg, index) => (
                                <div key={index} className={`flex items-start gap-3 ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === ChatRole.ASSISTANT && <BotIcon className="w-8 h-8 flex-shrink-0 text-orange-500" />}
                                    <div className={`max-w-md p-3 rounded-lg ${msg.role === ChatRole.USER ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                        {renderMessage(msg.text)}
                                    </div>
                                    {msg.role === ChatRole.USER && <UserIcon className="w-8 h-8 flex-shrink-0 text-gray-600" />}
                                </div>
                            ))
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={isLoading ? "Pensando..." : "Haz una pregunta..."}
                            disabled={isLoading}
                            className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                        />
                        <button type="submit" disabled={isLoading} className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-110">
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};