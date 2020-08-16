package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.Association12Service;
import com.mycompany.myapp.domain.Association12;
import com.mycompany.myapp.repository.Association12Repository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Association12}.
 */
@Service
@Transactional
public class Association12ServiceImpl implements Association12Service {

    private final Logger log = LoggerFactory.getLogger(Association12ServiceImpl.class);

    private final Association12Repository association12Repository;

    public Association12ServiceImpl(Association12Repository association12Repository) {
        this.association12Repository = association12Repository;
    }

    @Override
    public Association12 save(Association12 association12) {
        log.debug("Request to save Association12 : {}", association12);
        return association12Repository.save(association12);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Association12> findAll(Pageable pageable) {
        log.debug("Request to get all Association12s");
        return association12Repository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Association12> findOne(Long id) {
        log.debug("Request to get Association12 : {}", id);
        return association12Repository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Association12 : {}", id);
        association12Repository.deleteById(id);
    }
}
