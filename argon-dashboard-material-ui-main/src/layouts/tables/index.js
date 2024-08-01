/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState, useContext, useEffect, useRef } from 'react';
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { CallGetApi } from "../../callapi/service";


function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [data, setData] = useState(null);

    

    useEffect(async () => {
        let _resp = await CallGetApi();
        if (_resp !== null && _resp.length > 0) { 
            setData(_resp);
            console.log(_resp);
        }
    }, []);

    const TableColumnsData = {

        columns: [

            { name: "ชื่อหน่วยงาน", align: "center" },
            { name: "รหัสหน่วยบริการ", align: "center" },
            { name: "วันที่ขึ้นทะเบียน", align: "center" },
            { name: "ชื่อผู้ตรวจสอบ", align: "center" },
            { name: "วันที่ตรวจสอบ", align: "center" },
            { name: "สถานะ", align: "center" },
        ],

    };

    const mappingData = () => {
        if (data !== undefined && data !== null) {
            const mappedData = data.map(function (d) {
                console.log(d)
                return ({
                    ชื่อหน่วยงาน: (
                        <ArgonTypography
                            component="a"
                            href="#"
                            variant="caption"
                            color="secondary"
                            fontWeight="medium"
                        >
                            {d.name}
                        </ArgonTypography>
                    ),
                    รหัสหน่วยบริการ: (
                        <ArgonTypography
                            component="a"
                            href="#"
                            variant="caption"
                            color="secondary"
                            fontWeight="medium"
                        >
                            {d.code}
                        </ArgonTypography>
                    ),
                    วันที่ขึ้นทะเบียน: (
                        <ArgonTypography
                            component="a"
                            href="#"
                            variant="caption"
                            color="secondary"
                            fontWeight="medium"
                        >
                            {d.createDate}
                        </ArgonTypography>
                    ),
                    ชื่อผู้ตรวจสอบ: (
                        <ArgonTypography
                            component="a"
                            href="#"
                            variant="caption"
                            color="secondary"
                            fontWeight="medium"
                        >
                            {d.verifyBy}
                        </ArgonTypography>
                    ),
                    วันที่ตรวจสอบ: (
                        <ArgonTypography
                            component="a"
                            href="#"
                            variant="caption"
                            color="secondary"
                            fontWeight="medium"
                        >
                            {d.verifyDate}
                        </ArgonTypography>
                    ),
                    สถานะ: (
                        <ArgonBox bgColor={d.status == "ขึ้นทะเบียน" ? "success" : d.status == "พิจารณาเอกสาร" ? "pink" : d.status == "ออกเอกสาร" ? "primary" : (d.status).startsWith("แก้ไข") ? "warning" : (d.status).startsWith("ตอบกลับ") ? "error"  : (d.status).startsWith("รอตรวจสอบ") ? "blue" : "" } p={0.5}>
                            <ArgonTypography
                                component="a"
                                href="#"
                                variant="caption"
                                color="white"
                                fontWeight="medium"
                            >
                                {d.status}
                                </ArgonTypography>
                        </ArgonBox>
                    ),
                })
            });

            return mappedData;
        }
    }
    





    const TableRowData = {

        rows: [mappingData()].flat()

    };
    

    return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">รายการขอขึ้นทะเบียน</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
            {data!== null && <Table columns={TableColumnsData.columns} rows={TableRowData.rows} />}
            </ArgonBox>
          </Card>
        </ArgonBox>
        {/*<Card>*/}
        {/*  <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>*/}
        {/*    <ArgonTypography variant="h6">Projects table</ArgonTypography>*/}
        {/*  </ArgonBox>*/}
        {/*  <ArgonBox*/}
        {/*    sx={{*/}
        {/*      "& .MuiTableRow-root:not(:last-child)": {*/}
        {/*        "& td": {*/}
        {/*          borderBottom: ({ borders: { borderWidth, borderColor } }) =>*/}
        {/*            `${borderWidth[1]} solid ${borderColor}`,*/}
        {/*        },*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Table columns={prCols} rows={prRows} />*/}
        {/*  </ArgonBox>*/}
        {/*</Card>*/}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
