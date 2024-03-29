import { RootState } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ModalStateProps {
  open: boolean;
  content: string;
  btnText: {
    yes: string;
    no: string;
  };
}

const initialState: ModalStateProps = {
  open: false,
  content: "",
  btnText: {
    yes: "예",
    no: "아니오",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      const BtnText = action.payload;
      if (BtnText === "예") {
        state.btnText.no = "아니오";
        state.btnText.yes = "예";
      } else {
        state.btnText.no = "취소";
        state.btnText.yes = "확인";
      }
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const checkOpenModal = (state: RootState) => state.modal.open;
export const checkModalText = (state: RootState) => state.modal.btnText;

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
