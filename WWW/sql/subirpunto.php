<?php
$dbhost = 'localhost:3306';
$dbuser = 'root';
$dbpass = 'mysql';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);

$con=mysqli_connect("localhost:3306","root","mysql","Trabajo");
$sql="INSERT INTO puntos (`nombrelocal`,`dirreccion`,`lat`,`lng`,`rubro`,`telefono`,`experiencia`,`descripcion`) VALUES ($_GET["nombre"], $_GET["dirrecion"], $_GET["lat"],$_GET["lng"],$_GET["rubro"],$_GET["telefono"],$_GET["experencia"],$_GET["descripcion"])";
if (mysqli_query($con,$sql))
{
   echo "Suceso";
}


?>