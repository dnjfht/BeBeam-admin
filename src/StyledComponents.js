import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer).attrs({})`
  @media (max-width: 768px) {
    width: 90% !important;
    max-width: none !important;
    transform: translateX(-50%) !important;
    left: 50% !important;
    bottom: 1em !important;
  }

  .Toastify__toast--default {
    background-color: #100e10 !important;
    color: white !important;
    font-size: 14px !important;
  }

  .Toastify__close-button {
    color: white !important;
    opacity: 0.8 !important;
  }

  .Toastify__progress-bar {
    background: #d93c30 !important;
  }
`;
