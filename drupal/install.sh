#!/bin/bash

echo "Instalando dependencias..."
echo 
echo
sudo apt install apache2 mysql-server libapache2-mod-php7.0 php7.0-mbstring php7.0-xml php7.0-mysql php7.0-gd php7.0-bcmath php-bcmath
sleep 2

clear
echo "Habilitando rewrite..."
echo
echo
sudo a2enmod rewrite
sudo service apache2 restart 
sleep 2

clear
echo "Creando la base de datos y usario, ingrese la contrasena del usuario 'root:'"
echo
echo
mysql -u root -p -e "DROP DATABASE drupal; CREATE DATABASE drupal; GRANT ALL PRIVILEGES ON drupal.* TO 'drupaluser'@'localhost' IDENTIFIED BY 'drupalpassword'; FLUSH PRIVILEGES;"

