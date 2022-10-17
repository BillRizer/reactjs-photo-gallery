import React from "react";

import {
  Actions,
  Background,
  Content,
  Footer,
  Header,
  Modal,
  Screen,
  Disclaimer,
  Close,
} from "./styles";

import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { IFooterProps, IPayloadProps } from "../../types/modal-payload";
import { useModal } from "../../hooks/modal";
import { FcCloseUpMode } from "react-icons/fc";
import { FiX, FiXCircle } from "react-icons/fi";
import { IconComponent } from "../Icon";

interface IProps {
  isActive: Boolean | undefined;
  payload: IPayloadProps | undefined;
}
const ModalComponent: React.FC<IProps> = ({ isActive, payload }) => {
  const { t } = useTranslation();
  const { hideModal } = useModal();

  return isActive ? (
    <Screen>
      <Modal>
        <Close
          onClick={() => {
            hideModal();
          }}
        >
          <IconComponent Icon={FiX} size="medium" />
        </Close>

        {payload?.header && (
          <Header>
            <div className="force-big-icon">
            <IconComponent Icon={payload.header.icon} size="large" />
            </div>
            <div>
            <h2>{payload.header.title}</h2>
            <p>{payload.header.description}</p>

            </div>
          </Header>
        )}
        <Content>{payload?.body}</Content>
        <Disclaimer>{payload?.disclaimer}</Disclaimer>
        <Footer>
          {payload?.actionsFooter && payload.actionsFooter.length > 0 && (
            <>
              {payload?.actionsFooter.map((element: IFooterProps) => (
                <>
                  {element.type == "button" && (
                    <Button
                      label={element.label || ""}
                      onClick={element.callBackOnClick}
                    ></Button>
                  )}
                </>
              ))}
            </>
          )}
        </Footer>
      </Modal>
      <Background
        onClick={() => {
          hideModal();
        }}
      ></Background>
    </Screen>
  ) : (
    <></>
  );
};
export default ModalComponent;
