import React, { FC } from "react";
import { Modal, Form, Row, Button } from "antd";
import InputComponent from "@/components/Input";

export interface IAddForm {
  show: boolean;
  handleClose(): void;
  handleSubmit(data: any): void;
}

const AddForm: FC<IAddForm> = (props) => {

  const [form] = Form.useForm();

  const sourceOption = [
    {
      key: "1-whatsapp",
      label: "WhatsApp",
      value: "WhatsApp",
    },
    {
      key: "2-call",
      label: "Call",
      value: "Call",
    },
    {
      key: "3-email",
      label: "Email",
      value: "Email",
    },
  ];

  const submit = (data:  any) => {
    props.handleSubmit(data);
    form.resetFields();
  }

  const close = () => {
    props.handleClose();
    form.resetFields();
  }

  return (
    <Modal open={props.show} footer={null} title="Tambah Pesanan" onCancel={close}>
      <div className="mt-10">
        <Form
          labelWrap
          form={form}
          labelCol={{ span: 5 }}
          labelAlign="left"
          name="add-order"
          onFinish={submit}
        >
          <InputComponent
            required
            type="input"
            name="name"
            label="Nama"
          />
          <InputComponent
            required
            type="select"
            childrenProps={{ options: sourceOption }}
            name="source"
            label="Sumber Pesanan"
          />
          <InputComponent
            required
            type="input-number"
            name="phone_number"
            label="Nomor HP"
          />
          <InputComponent
            required
            type="input-number"
            name="total_order"
            label="Jumlah Roti"
          />
          <InputComponent
            type="input"
            name="email"
            label="Email"
          />
          <InputComponent
            type="textarea"
            name="notes"
            label="Keterangan"
          />
           <Row justify="end">
          <Form.Item>
            <Button
              className="bg-[#68904D] text-white"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Row>
        </Form>
      </div>
    </Modal>
  )

}

export default AddForm;


