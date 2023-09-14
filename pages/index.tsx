import React, { useState } from "react";
import { Table, Button } from "antd";
import Card from "@/components/Card";
import AddForm from "@/containers/Order/Form";

export interface OrderData {
  name: string;
  source: string;
  phone_number: string;
  email?: string;
  total_order: number;
  notes: string;
}


export default function Home() {

  const imageBaseUrl = "https://drive.google.com/uc";

  const [orderList, setOrderList] = useState<OrderData[]>([]);
  const [count, setCount] = useState([
    {
      title: "WhatsApp",
      image: `${imageBaseUrl}?id=152-Z29OOObAJKPwJze7Kct6uzwbu7AF1`,
      total: 0,
    },
    {
      title: "Call",
      image: `${imageBaseUrl}?id=1x81sEKLprpYEYtzl3Z0IPz1qFQ6F5hOp`,
      total: 0,
    },
    {
      title: "Email",
      image: `${imageBaseUrl}?id=1TV1t3AJvQLXQmX7kKDQJeyrtEjYMD5io`,
      total: 0,
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      title: "Nama",
      dataIndex: "name"
    },
    {
      title: "Sumber Pesanan",
      dataIndex: "source"
    },
    {
      title: "No. HP",
      dataIndex: "phone_number"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Jumlah Roti",
      dataIndex: "total_order"
    },
    {
      title: "Keterangan",
      dataIndex: "notes"
    },
  ];

  const handleShowAddModal = () => {
    setShowModal(true)
  }

  const handleAddOrder = (newOrder : OrderData) => {

    setOrderList(order => [newOrder, ...order]);

    const orderSource = newOrder.source;

    console.log("orderSource", orderSource);

    const index = count.findIndex(x => x.title === orderSource);

    console.log(index);

    let newCount = [...count];
    newCount[index].total = newCount[index].total + 1;

    setCount(newCount);
    setShowModal(false);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20`}
    >
      <div>
        <div className="flex justify-between items-center mb-10" >
          <div className="flex justify-between">
            {
              count.map((item, index) => {
                return (
                  <React.Fragment key={item.title}>
                    <Card image={item.image} total={item.total} title={item.title} />
                  </React.Fragment>
                )
              })
            }
          </div>
          <Button type="default" className="bg-[#68904D] text-white" onClick={() =>  handleShowAddModal()}>
            Tambah Pesanan
          </Button>
        </div>
        <Table columns={columns} dataSource={orderList} />
        <AddForm show={showModal} handleSubmit={(data) => handleAddOrder(data)} handleClose={() => setShowModal(false)}/>
      </div>
    </main>
  )
}
