import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, PhoneCall, Send } from 'lucide-react';
import { useContactModal } from './ContactModalContext';

const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useContactModal();

  const phoneNo = '9322833495';
  const emailAddress = 'safalpal.work@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/safal-pal-494482347?utm_source=share_via&utm_content=profile&utm_medium=member_android';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="
              relative w-full max-w-md bg-[#0c0c0c] border border-[#D7E2EA]/20
              rounded-[30px] p-6 sm:p-8 overflow-hidden z-10
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold uppercase tracking-wider text-[#D7E2EA] text-lg">
                Connect With Me
              </h3>
              <button
                onClick={closeModal}
                className="text-[#D7E2EA]/60 hover:text-white transition-colors p-1 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Options List */}
            <div className="flex flex-col gap-4">
              {/* Phone option */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 hover:bg-[#D7E2EA]/10 transition-colors duration-200">
                <a
                  href={`tel:${phoneNo}`}
                  className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
                >
                  <div className="p-3 bg-[#D7E2EA]/10 rounded-full text-[#D7E2EA]">
                    <Phone size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest">Phone Number</p>
                    <p className="text-[#D7E2EA] font-medium text-sm sm:text-base">{phoneNo}</p>
                  </div>
                </a>
                <a
                  href={`tel:${phoneNo}`}
                  className="p-2 text-[#D7E2EA]/60 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  title="Open Dialer / Call"
                >
                  <PhoneCall size={18} />
                </a>
              </div>

              {/* Email option */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 hover:bg-[#D7E2EA]/10 transition-colors duration-200">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
                >
                  <div className="p-3 bg-[#D7E2EA]/10 rounded-full text-[#D7E2EA]">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest">Email Address</p>
                    <p className="text-[#D7E2EA] font-medium text-sm sm:text-base">{emailAddress}</p>
                  </div>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#D7E2EA]/60 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  title="Compose in Gmail"
                >
                  <Send size={18} />
                </a>
              </div>

              {/* LinkedIn option */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4 p-4 rounded-2xl bg-[#D7E2EA]/5 border border-[#D7E2EA]/10
                  hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-200 cursor-pointer
                "
              >
                <div className="p-3 bg-[#D7E2EA]/10 rounded-full text-[#D7E2EA] flex items-center justify-center">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest">LinkedIn Profile</p>
                  <p className="text-[#D7E2EA] font-medium text-sm sm:text-base">View Profile</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
