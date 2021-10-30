import React, { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  title: string;
  isLink?: boolean;
  url?: string;
  onOpen: () => void;
  onClose: () => void;
}

const AppModal: FC<IProps> = ({
  isOpen,
  onClose,
  children,
  title,
  isLink,
  url,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        {isLink ? (
          <Link href={url} isExternal>
            Chakra Design system
          </Link>
        ) : (
          title
        )}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default AppModal;
