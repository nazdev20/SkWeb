import { Timestamp } from 'firebase/firestore';
import { ReactNode } from 'react';
export const navItems = [

    { name: 'About Us', id: 'AboutUs' },
    { name: 'Service', id: 'service' },
    { name: 'Newsletter', id: 'newsletter' },
    { name: 'Events', id: 'events' }
];
export interface Application {
    data: unknown;
    id: string;
    serviceId?: string;
    name?: string;
    email?: string;
    organization?: string;
    details?: string;
    timestamp?: Timestamp;
}

export interface Newsletter {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    fullContent?: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}



export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    formFields: FormField[];

}
export interface FormField {
    label: string;
    type: 'text' | 'email' | 'date' | 'textarea' | 'file';
}

export interface FormData {
    [key: string]: Record<string, string>;
}

export type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string[];
    category: string;
};

export type FirestoreEvent = {
    id?: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;

    [key: string]: unknown;
};

export interface FormSubmission {
    id: string;
    serviceId: string;
    formData: Record<string, string>;
    status: 'Pending' | 'Qualified' | 'Not Qualified';
}

