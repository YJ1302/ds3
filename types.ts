// Fix: Import React to make React.ReactNode available.
import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Specification {
  category: string;
  details: {
    name: string;
    value: string;
  }[];
}

export enum ChatRole {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
