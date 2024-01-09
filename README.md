# Socket App Frontend

This repository is the frontend for [this project](https://github.com/guneyural/node-socket-app)

This application shows the data that sent from server via socket connection.

### Docker Setup

To build docker Image navigate to the folder where dockerfile is located and run the command:.

```bash
docker build -t [USERNAME]/[IMAGE_NAME] .
```

### Make It Accessible On Your Side

To run the application and make it accessible run the command:

```bash
docker run -p [PORT_TO_BE_ACCESSIBLE]:4000 [USERNAME]/[IMAGE_NAME]
```

Replace [USERNAME], [IMAGE_NAME], [PORT_TO_BE_ACCESSIBLE] and [IMAGE_ID] with your values.
