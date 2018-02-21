<?php
    include("mysqli.conn.php");
    $result=mysqli_query($conn,"insert into help (name,mobile,address,type,mark,sex,time,ddl,money) values('{$_POST["name"]}','{$_POST["mobile"]}','{$_POST["address"]}','{$_POST["type"]}','{$_POST["mark"]}','{$_POST["sex"]}','{$_POST["time"]}','{$_POST["ddl"]}','{$_POST["money"]}')");
    if(!$result)echo '<script>alert("提交失败");history.back();</script>';
    else echo "<script>alert('提交成功');history.back();</script>";
    mysqli_close($conn);
 ?>
