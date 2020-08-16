package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.FormulationentityService;
import com.mycompany.myapp.domain.Formulationentity;
import com.mycompany.myapp.repository.FormulationentityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Formulationentity}.
 */
@Service
@Transactional
public class FormulationentityServiceImpl implements FormulationentityService {

    private final Logger log = LoggerFactory.getLogger(FormulationentityServiceImpl.class);

    private final FormulationentityRepository formulationentityRepository;

    public FormulationentityServiceImpl(FormulationentityRepository formulationentityRepository) {
        this.formulationentityRepository = formulationentityRepository;
    }

    @Override
    public Formulationentity save(Formulationentity formulationentity) {
        log.debug("Request to save Formulationentity : {}", formulationentity);
        return formulationentityRepository.save(formulationentity);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Formulationentity> findAll(Pageable pageable) {
        log.debug("Request to get all Formulationentities");
        return formulationentityRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Formulationentity> findOne(Long id) {
        log.debug("Request to get Formulationentity : {}", id);
        return formulationentityRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Formulationentity : {}", id);
        formulationentityRepository.deleteById(id);
    }
}
