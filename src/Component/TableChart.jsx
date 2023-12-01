import * as React from "react";
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
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Chart from "./Chart";
import TableShowHide from "./TableShowHide";

export default function TableChart() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <div className="main">
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{height:'50px'}}>
                <TableCell>
                  <b>Ad Insigths</b>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <HelpOutlineIcon fontSize="small" className="qicon" />
                </TableCell>
              </TableRow>
              <TableRow style={{height:'50px'}}>
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
              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Cosmetics
                </TableCell>
                <TableCell align="right">712</TableCell>
                <TableCell align="right">USD 4,272</TableCell>
                <TableCell align="right">8</TableCell>
                <TableCell align="right">USD 16,568</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Serums
                </TableCell>
                <TableCell align="right">3,961</TableCell>
                <TableCell align="right">USD 27,331</TableCell>
                <TableCell align="right">115</TableCell>
                <TableCell align="right">USD 362,526</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Facewash
                </TableCell>
                <TableCell align="right">9,462</TableCell>
                <TableCell align="right">USD 76,831</TableCell>
                <TableCell align="right">123</TableCell>
                <TableCell align="right">USD 266,800</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Shampoos
                </TableCell>
                <TableCell align="right">439</TableCell>
                <TableCell align="right">USD 2,151</TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">USD 11,029</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Conditioners
                </TableCell>
                <TableCell align="right">1,680</TableCell>
                <TableCell align="right">USD 3,864</TableCell>
                <TableCell align="right">49</TableCell>
                <TableCell align="right">USD 175,245</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Facewash 2
                </TableCell>
                <TableCell align="right">4,978</TableCell>
                <TableCell align="right">USD 29,370</TableCell>
                <TableCell align="right">189</TableCell>
                <TableCell align="right">USD 623,106</TableCell>
              </TableRow>

              <TableRow style={{height:'50px'}}>
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                <TableCell align="right">26,510</TableCell>
                <TableCell align="right">USD 1,43,819</TableCell>
                <TableCell align="right">489</TableCell>
                <TableCell align="right">USD 15,73,563</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="show-hide">
        {
          toggle ? <Chart/> : <TableShowHide/>
        }<span className="btn-showhide">
        <button onClick={() => setToggle(true)} className={toggle === true ? "chart-btn" : ""}>
          <DonutLargeIcon fontSize="small" />
        </button>
        <button onClick={() => setToggle(false)} className={toggle === false ? "chart-btn2" : ""}>
          <TableChartOutlinedIcon fontSize="small" />
        </button>
      </span>
      </div>
    </div>
  );
}
