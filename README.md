# DeliveryServiceFrontend

build image:
sudo docker build -t lieferservice-deliveryservicefrontend .

run image:
sudo docker run --name LieferserviceFE -d -p 8081:80 lieferservice-deliveryservicefrontend

pull image from docker hub (may outdated verison):
sudo docker run --name LieferserviceFE -d -p 8081:80 hugelm/lieferservice-deliveryservicefrontend:0.1