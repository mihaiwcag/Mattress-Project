import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum PricingTier {
  TWIN = 'Twin / Single',
  FULL = 'Full / Double',
  QUEEN = 'Queen',
  KING = 'King / Cali King'
}