import React, { createContext, useContext, useState } from 'react';

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
