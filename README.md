# DeliveryServiceFrontend

build image:\
sudo docker build -t lieferservice-deliveryservicefrontend .

run image:\
sudo docker run --name LieferserviceFE -d -p 80:80 lieferservice-deliveryservicefrontend

pull image from docker hub:\
sudo docker run --name LieferserviceFE -d -p 80:80 hugelm/lieferservice-deliveryservicefrontend:latest
