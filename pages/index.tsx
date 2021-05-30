import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import react, { useEffect, useState } from "react";
import Axios from "axios";

import { Table, Row, Col, Layout , Card } from "antd";
import React from "react";
const { Column, ColumnGroup } = Table;
function Home() {
  const [dataCo, setdataCo] = useState([]);
  const [dataUpdate, setdataUpdate] = useState("");

  const fatch = async () => {
    const { data } = await Axios.get(
      "https://covid19.th-stat.com/api/open/timeline"
    );

    const res = { data };
    setdataUpdate(res.data.UpdateDate);
    setdataCo(res.data.Data.reverse());
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <Layout>
      <Row gutter={[48, 2]}>
        <Col offset={17}>
          <h1>Update : {dataUpdate}</h1>
        </Col>
      </Row>
      {/* <Row gutter={[48, 4]}> */}
      <Card >
        <Col>
          <Table dataSource={dataCo} size="middle" bordered >
            <Column title="Date" dataIndex="Date" key="Date" />
            <Column title="Confirmed" dataIndex="Confirmed" key="Confirmed" />
            <Column title="Deaths" dataIndex="Deaths" key="Deaths" />
            <Column
              title="Hospitalized"
              dataIndex="Hospitalized"
              key="Hospitalized"
            />
            <Column
              title="NewConfirmed"
              dataIndex="NewConfirmed"
              key="NewConfirmed"
            />
            <Column title="NewDeaths" dataIndex="NewDeaths" key="NewDeaths" />
            <Column
              title="NewHospitalized"
              dataIndex="NewHospitalized"
              key="NewHospitalized"
            />
            <Column
              title="NewRecovered"
              dataIndex="NewRecovered"
              key="NewRecovered"
            />
            <Column title="Recovered" dataIndex="Recovered" key="Recovered" />
          </Table>
        </Col></Card>
      {/* </Row> */}
    </Layout>
  );
}
export default Home;
