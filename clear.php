<?php
    include("mysqli.conn.php");
    $result=mysqli_query($conn,"delete from help where 1");
    echo "<script>alert('清除成功');</script>";
    mysqli_close($conn);
 ?>
