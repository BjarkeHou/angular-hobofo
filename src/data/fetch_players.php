<?php
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "hobofo", "test", "hobofo");

$result = $conn->query("SELECT id, name, phone, elo FROM Players");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["name"] . '",';
    $outp .= '"Phone":"'   . $rs["phone"]        . '",';
    $outp .= '"Elo":"'. $rs["elo"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>