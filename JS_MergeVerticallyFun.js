function mergeCellsVert(table_id)
// function formats a table in such a way that all the empty cells in a particular column are merged 
// with the the most recent non-empty cell 
// input: id of the table for which cells should be merged vertically
// output: None
// Exception handling: None
{
var myTable = document.getElementById(table_id);
var column_num = myTable.rows[0].cells.length
var curTxt, curCell;
for (var i1 = column_num - 1; i1>-1; i1--)
{   
    curCell = myTable.rows[1].cells[i1]
    for (var r = 2, n = myTable.rows.length; r < n; r++) {
        curTxt = myTable.rows[r].cells[i1].innerHTML;
        if(curTxt){
            curCell = myTable.rows[r].cells[i1];
        }
        else{
            myTable.rows[r].deleteCell(i1);
            curCell.rowSpan = 2;
        }
    }
}
}
