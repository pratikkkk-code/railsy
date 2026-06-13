package com.railsy.backend.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class TrainWebSocketController {

    @MessageMapping("/location")
    @SendTo("/topic/trains")
    public TrainLocation sendLocation(TrainLocation location) {
        return location;
    }
}