import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const SubCategoryTable = ({catego}) => {
        // console.log(catego.children)
    return (
        <div>
             {/* <TableRow
                  key={catego.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                      src={catego?.img}
                    />
                  {catego?.name}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    {catego?.parentName}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(catego?.createdAt).toDateString()}
                  </TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow> */}
        </div>
    );
};

export default SubCategoryTable;