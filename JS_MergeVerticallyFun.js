function mergeCellsVert(table_id)
//function deletes all the emppty cells and spans 
// non-empty ones correspondingly for each cell
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