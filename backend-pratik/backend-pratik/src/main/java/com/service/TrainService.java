package com.railsy.backend.service;

import com.railsy.backend.model.Train;
import com.railsy.backend.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainService {

    @Autowired
    private TrainRepository trainRepository;

    public List<Train> getAllTrains() {
        return trainRepository.findAll();
    }

    public Train saveTrain(Train train) {
        return trainRepository.save(train);
    }
}