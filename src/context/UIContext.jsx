import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState(null);

  const openQuoteModal = (productName = null) => {
    setPrefilledProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPrefilledProduct(null);
  };

  return (
    <UIContext.Provider
      value={{
        isQuoteModalOpen,
        prefilledProduct,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
