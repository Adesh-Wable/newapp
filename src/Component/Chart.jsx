import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Component/Style/NewApp.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PieChart } from "@mui/x-charts/PieChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const data = [
    { value: 40, color: "blue", label: "35% Female" },
    { value: 25, color: "black", label: "25% Unknown" },
    { value: 50, color: "orange", label: "40% Male" },
  ];
  
  const size = {
    width: 500,
    height: 270,
  };

const Chart = () => {
  return (
    <div>
        
       <div className="chart">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <b>Ad Insigths</b>{" "}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <label className="click">
                      Clicks <ArrowDropDownIcon fontSize="small" />{" "}
                    </label>
                    <HelpOutlineIcon fontSize="small" className="qicon" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <PieChart
                    series={[{ data, innerRadius: 90 }]}
                    {...size}
                    className="piechart"
                  ></PieChart>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

    </div>
  )
}

export default Chart