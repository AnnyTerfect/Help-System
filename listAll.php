<?php
    include("mysqli.conn.php");
    $result=mysqli_query($conn,"select * from help where 1");
    if(!$result)die("数据库查询出错");
    while($row=mysqli_fetch_array($result))
    {
        for($i=0;$i<9;$i++)
        {
            echo $row[$i];
            echo ",,,,,";
        }
        echo "###";
    }
    mysqli_close($conn);
 ?>
