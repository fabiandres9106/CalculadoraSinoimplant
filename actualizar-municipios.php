<?php

// Establecer la conexión a la base de datos
$servername = "localhost";
$username = "usuario";
$password = "contraseña";
$dbname = "nombre_base_de_datos";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Habilitar el modo de errores de PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}

// Ruta al archivo CSV
$csvFile = 'archivo.csv';

// Abrir el archivo CSV
$file = fopen($csvFile, 'r');

if ($file) {
    // Iterar sobre las filas del archivo CSV
    while (($row = fgetcsv($file, 1000, ',')) !== false) {
        // Procesar los datos de la fila
        $id = $row[0]; // Supongamos que la primera columna es el ID
        $nombre = $row[1]; // Supongamos que la segunda columna es el nombre
        $apellido = $row[2]; // Supongamos que la tercera columna es el apellido
        
        // Actualizar la base de datos
        $stmt = $conn->prepare("UPDATE tabla SET nombre = :nombre, apellido = :apellido WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->execute();
    }
    
    // Cerrar el archivo CSV
    fclose($file);
} else {
    die("Error al abrir el archivo CSV");
}

echo "Base de datos actualizada exitosamente";

?>
