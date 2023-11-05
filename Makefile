run:
	sudo docker build -t keyurbilgi/talentprotocol
	sudo docker run -d -p 80:80 keyurbilgi/talentprotocol