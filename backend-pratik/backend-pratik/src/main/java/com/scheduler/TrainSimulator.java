package com.railsy.backend.scheduler;

import com.railsy.backend.websocket.TrainLocation;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TrainSimulator {

    private final SimpMessagingTemplate messagingTemplate;

    public TrainSimulator(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 5000)
    public void simulateTrainMovement() {

        TrainLocation location = new TrainLocation();

        location.setTrainId("TR-4481");
        location.setLatitude(19.0760 + Math.random() / 100);
        location.setLongitude(72.8777 + Math.random() / 100);
        location.setSpeed(80 + Math.random() * 40);

        messagingTemplate.convertAndSend("/topic/trains", location);

       System.out.println(
           location.getTrainId()
           + " | "
           + location.getLatitude()
           + " | "
           + location.getLongitude()
           + " | "
           + location.getSpeed()
); 
    }
}