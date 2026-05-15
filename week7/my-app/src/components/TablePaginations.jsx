import react from 'react'
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css";

function TablePaginations(){
    const data=[
    { id :1, name:"Durga",age:19},
    { id: 2, name: "Jane", age: 30},
    { id: 3, name: "Sam", age: 22 },
    { id: 4, name: "Chris", age: 28 },
    { id: 5, name: "Alex", age: 35 },
    { id: 6, name: "Emma", age: 27 },
    { id: 7, name: "Olivia", age: 24 },
    { id: 8, name: "Liam", age: 29 },
    ];
    
    const columns=[
        {
        Header:'ID',
        accessor:'id'
        },
        {
        Header:'Name',
        accessor:'name'
        },
        {
        Header:'Age',
        accessor:'age'
        },
    ];

    return(
        <div>
            <h3>React Table Pagination</h3>
            <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={3}
            pageSizeOptions={[3,5,7]}
            showPagination={true}
            />
        </div>
    );
}

export default TablePaginations;


