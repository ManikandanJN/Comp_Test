import React, { useState } from "react";
import { Button, Modal, Row } from "antd";
import Content from "./Content";
import contentDetails from "./FetchData";

const ModalComp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Click
      </Button>
      <Modal
        title="8513 - B Statistics"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="first_rows">
          {contentDetails.map((contentDisp: any) => {
            return (
              <Content
                id={contentDisp.id}
                title={contentDisp.title}
                subtitle={contentDisp.subtitle}
                description={contentDisp.description}
              />
            );
          })}
        </Row>
      </Modal>
    </div>
  );
};

export default ModalComp;
