import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import ModalToast from "../toast/ModalToast";
import ModalHeader from "./ModalHeader";

// Props
interface ScreenModalProps {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  showHeader?: boolean;
  showBgColor?: boolean;
  modalBgColor? : string,
  withoutFeedbackOnClick?: () => void;
}

const ScreenModal: React.FC<ScreenModalProps> = ({
  closeModal,
  isVisible,
  children,
  showHeader = true,
  showBgColor = true,
  modalBgColor = "#000000ae",
  withoutFeedbackOnClick = () => Keyboard.dismiss(),
}) => {
  return (
    <Modal
      statusBarTranslucent
      presentationStyle="overFullScreen"
      transparent
      animationType="fade"
      visible={isVisible}
      //   onDismiss={closeModal}
    >
      <TouchableWithoutFeedback onPress={withoutFeedbackOnClick}>
        <View className="flex-1 justify-center" style={{backgroundColor : modalBgColor}}>
          <ModalToast />

          <KeyboardAvoidingView
            className={`${
              showBgColor && "bg-primaryBg"
            } w-[95%] rounded-md mx-auto p-4 `}
            behavior="padding"
          >
            {showHeader && <ModalHeader closeModal={closeModal} />}

            {children}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ScreenModal;

const styles = StyleSheet.create({});
