import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Component/Style/NewApp.css";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const TableShowHide = () => {
  return (
    <div>
        <div className="chart-tbl">
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
                    <b>Ad Insigths</b>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    {" "}
                    <HelpOutlineIcon fontSize="small" className="qicon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Campaigns <UnfoldMoreIcon fontSize="3px" />
                  </TableCell>
                  <TableCell align="right">
                    Clicks <UnfoldMoreIcon fontSize="3px" className="arrow" />
                  </TableCell>
                  <TableCell align="right">
                    Cost <UnfoldMoreIcon fontSize="3px" className="arrow" />
                  </TableCell>
                  <TableCell align="right">
                    Conversions{" "}
                    <UnfoldMoreIcon fontSize="3px" className="arrow" />
                  </TableCell>
                  <TableCell align="right">
                    Revenue <UnfoldMoreIcon fontSize="3px" className="arrow" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Male
                  </TableCell>
                  <TableCell align="right">348</TableCell>
                  <TableCell align="right">USD 12,528</TableCell>
                  <TableCell align="right">42</TableCell>
                  <TableCell align="right">USD 62,118</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Female
                  </TableCell>
                  <TableCell align="right">692</TableCell>
                  <TableCell align="right">USD 24,912</TableCell>
                  <TableCell align="right">35</TableCell>
                  <TableCell align="right">USD 5,175</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Unknown
                  </TableCell>
                  <TableCell align="right">105</TableCell>
                  <TableCell align="right">USD 3,943</TableCell>
                  <TableCell align="right">3</TableCell>
                  <TableCell align="right">USD 4,489</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Total
                  </TableCell>
                  <TableCell align="right">1,145</TableCell>
                  <TableCell align="right">USD 41,383</TableCell>
                  <TableCell align="right">80</TableCell>
                  <TableCell align="right">USD 71,782 </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default TableShowHide