const gridRef = document.querySelector(".grid-content");
const gridData = [
    // Data cannot be empty, so we have used empty strings
    [" ", "", "", "", "", "", "", ""],
    ["  ", "", "", "", "", "", "", ""],
    ["   ", "", "", "", "", "", "", ""],
    ["    ", "", "", "", "", "", "", ""],
];
new gridjs.Grid({
    columns: [
        {
            id: "my-checkbox",
            name: "Select",
            plugin: {
                // install the RowSelection plugin
                component: gridjs.plugins.selection.RowSelection,
                // RowSelection config
                props: {
                    // use the *any column as the row identifier
                    // for Eg: use contract -- row.cell(1).data
                    // Or you can use two cell,
                    // Eg: contract + issuance date -- row.cell(1).data + row.cell(3).data
                    id: (row) => row.cell(1).data,
                },
                // ***Note: selection feature requires an unique identifier for every row
                // ***Eg: ID, email, SSN, etc.,
                // ****** In our case, empty strings are not unique that's why
                // ****** we have numbered the contacts, you can remove that numbering
                // ****** when you confidential data

                // *Grid will properly work when it contains data, so I have added some fake data*
            },
        },
        "Contract",
        "Issuance No.",
        "Issue Date",
        "Gross Proceeds",
        "Bank Deposit",
        "Upfront Fees",
        "Maturity Date",
        "PAR Maturity",
    ],
    data: gridData,
    pagination: {
        limit: 10,
    },
    resizable: true,
    sort: true,
    style: {
        th: {
            "background-color": "rgb(170, 170, 170)",
            color: "#000",
            "text-align": "center",
            "min-width": "120px",
            padding: "6px 12px",
        },
        td: {
            "text-align": "center",
            "min-width": "120px",
            padding: "6px 12px",
        },
    },
}).render(gridRef);
